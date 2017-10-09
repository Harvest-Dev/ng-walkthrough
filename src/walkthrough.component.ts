import {
    Type,
    TemplateRef,
    Input,
    Component,
    ComponentFactoryResolver,
    EmbeddedViewRef,
    ComponentRef,
    ApplicationRef,
    Injector,
    HostListener,
    OnInit,
    AfterViewInit
} from '@angular/core';

import { ComponentPortal, ComponentType, PortalInjector, TemplatePortal } from '@angular/cdk/portal';
import { WalkthroughContainerComponent, WalkthroughText } from './walkthrough-container.component';

export interface WalkthroughElementCoordinate {
    top: number;
    left: number;
    height: number;
    width: number
}

const booleanValue = (value: string | boolean) => {
    return value === 'true' || value === true;
};

@Component({
    selector: 'ng-walkthrough',
    template: ''
})
export class WalkthroughComponent implements OnInit, AfterViewInit {

    private static _walkthroughContainer: ComponentRef<WalkthroughContainerComponent>;
    private static _walkthroughContainerCreating = false;

    @Input() id: string;
    @Input() focusElementSelector: string;

    @Input() previousStep: WalkthroughComponent;
    @Input() nextStep: WalkthroughComponent;
    @Input() texts: WalkthroughText;

    @Input()
    get closeButton() {
        return this._hasCloseButton;
    }
    set closeButton(value: string | boolean) {
        this._hasCloseButton = booleanValue(value);
    }


    @Input()
    get finishStep() {
        return this._hasFinish;
    }
    set finishStep(value: string | boolean) {
        this._hasFinish = booleanValue(value);
    }

    @Input()
    get hasBackdrop() {
        return this._hasBackdrop;
    }
    set hasBackdrop(value: string | boolean) {
        this._hasBackdrop = booleanValue(value);
    }

    @Input()
    get hasGlow() {
        return this._hasGlow;
    }
    set hasGlow(value: string | boolean) {
        this._hasGlow = booleanValue(value);
    }

    @Input()
    contentTemplate: TemplateRef<any>;

    private _show = false;
    private _hasBackdrop: boolean;
    private _hasGlow: boolean;
    private _hasFinish: boolean;
    private _hasCloseButton: boolean;
    private _focusElement: HTMLElement;

    constructor(
        private _componentFactoryResolver: ComponentFactoryResolver,
        private _applicationRef: ApplicationRef,
        private _injector: Injector
    ) { }

    @HostListener('window:resize')
    resize() {
        if (WalkthroughComponent._walkthroughContainer && this._show) {
            this._elementLocations();
        }
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
        // init the Walkthrough element container
        if (!WalkthroughComponent._walkthroughContainer && !WalkthroughComponent._walkthroughContainerCreating) {
            WalkthroughComponent._walkthroughContainerCreating = true;
            setTimeout(() => {
                WalkthroughComponent._walkthroughContainer =
                    this._appendComponentToBody<WalkthroughContainerComponent>(WalkthroughContainerComponent);
            }, 0);
        }
    }

    open() {
        this._elementLocations();
    }

    loadPrevioustStep() {
        setTimeout(() => {
            this.previousStep.open();
        }, 0)
    }

    loadNextStep() {
        setTimeout(() => {
            this.nextStep.open();
        }, 0);
    }

    show() {
        this._show = true;
    }

    hide() {
        this._show = false;
    }

    private _appendComponentToBody<T>(component: Type<T>): ComponentRef<T> {
        // create a component reference
        const componentRef = this._componentFactoryResolver.resolveComponentFactory(component).create(this._injector);

        // attach component to the appRef so that so that it will be dirty checked.
        this._applicationRef.attachView(componentRef.hostView);

        // get DOM element from component
        const domElem = (componentRef.hostView as EmbeddedViewRef<T>).rootNodes[0] as HTMLElement;

        document.body.appendChild(domElem);

        return componentRef;
    }

    private _attachWalkthroughContent<T>(
        componentOrTemplateRef: ComponentType<T> | TemplateRef<T>,
        walkthroughContainer: WalkthroughContainerComponent
    ) {
        if (componentOrTemplateRef instanceof TemplateRef) {
            walkthroughContainer.attachTemplatePortal(
                new TemplatePortal<T>(componentOrTemplateRef, null!));
        } else {
            const injectionTokens = new WeakMap();
            injectionTokens.set(WalkthroughContainerComponent, walkthroughContainer);
            const injector = new PortalInjector(this._injector, injectionTokens);
            walkthroughContainer.attachComponentPortal(
                new ComponentPortal(componentOrTemplateRef, undefined, injector)
            );

        }

    }

    private _elementLocations(): void {

        this._getFocusElement();

        // get focus elements datas

        const element = this._focusElement;
        if (element) {
            const offsetCoordinates = this._getOffsetCoordinates(element);
            this._setFocus(offsetCoordinates);
        }
    }

    /**
     *
     */
    private _getFocusElement() {
        const focusElements: NodeListOf<HTMLElement> = this.focusElementSelector
            ? document.querySelectorAll(this.focusElementSelector) as NodeListOf<HTMLElement>
            : null;

        // getting focus element

        if (focusElements && focusElements.length > 0) {
            if (focusElements.length > 1) {
                console.warn('Multiple items fit selector, displaying first visible as focus item');
                for (let i = 0, l = focusElements.length; i < l; i++) {
                    // offsetHeight not of 0 means visible
                    if (focusElements[i].offsetHeight) {
                        this._focusElement = focusElements[i];
                        i = focusElements.length;
                    }
                }
            } else {
                this._focusElement = focusElements[0];
            }
        } else {
            console.error('No element found with selector: ' + this.focusElementSelector);
            this._focusElement = null;
        }
    }

    /**
     * get the offest coordinates of a HTML element
     * @param focusElement target element
     * @returns cordinates of focusElement (width, height, left, top)
     */
    private _getOffsetCoordinates(focusElement: HTMLElement): WalkthroughElementCoordinate {
        const ionicElement = focusElement.getBoundingClientRect();
        const width = ionicElement.width;
        const height = ionicElement.height;
        const left = ionicElement.left;
        const top = ionicElement.top;

        return { top: top, left: left, height: height, width: width };
    }

    /**
     * get instance, hightlight the focused element et show the template
     */
    private _setFocus(coordinate: WalkthroughElementCoordinate) {
        const instance = WalkthroughComponent._walkthroughContainer.instance;
        if (instance) {
            if (instance.zone) {
                instance.hightlightZone(coordinate);
            }
            if (!this._show) {
                this._attachContentTemplate(coordinate, instance);
                this._initContentTemplate(instance);
            }
        }
    }

    /**
     * Attache the template in the contener, if a template is linked, and show this at the good position.
     */
    private _attachContentTemplate(coordinate: WalkthroughElementCoordinate, instance: WalkthroughContainerComponent) {
        if (this.contentTemplate) {
            this._attachWalkthroughContent(
                this.contentTemplate,
                WalkthroughComponent._walkthroughContainer.instance
            );
            setTimeout(() => {
                instance.contentBlockPosition(coordinate);
            }, 0);
        }
    }

    /**
     * init all datas of the contenaire
     */
    private _initContentTemplate(instance: WalkthroughContainerComponent) {
        instance.parent = this;
        instance.show = true;
        instance.hasBackdrop = this._hasBackdrop;
        instance.hasGlow = this._hasGlow;
        instance.hasPrevious = !!this.previousStep;
        instance.hasNext = !!this.nextStep;
        instance.hasCloseButton = this._hasCloseButton;
        instance.hasFinish = this._hasFinish;
        instance.text = this.texts
            ? { ...new WalkthroughText(), ...this.texts }
            : new WalkthroughText();
        this.show();
    }

}
