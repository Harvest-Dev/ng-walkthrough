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
import { WalkthroughContainerComponent } from './walkthrough-container.component';
import { WalkthroughService } from './walkthrough.service';
import { WalkthroughText } from './walkthrough-text';

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
    @Input() typeSelector: 'element' | 'zone' = 'element';
    @Input() radius: string;

    @Input() previousStep: WalkthroughComponent;
    @Input() nextStep: WalkthroughComponent;
    @Input() texts: WalkthroughText;

    @Input() contentTemplate: TemplateRef<any>;

    @Input()
    get justifyContent() {
        return this._justifyContent;
    }
    set justifyContent(value: 'left' | 'center' | 'right') {
        if (this._justifyContent !== value) {
            this._justifyContent = value;
            if (WalkthroughComponent._walkthroughContainer && WalkthroughComponent._walkthroughContainer.instance) {
                this._updateElementPositions(WalkthroughComponent._walkthroughContainer.instance);
            }
        } else {
            this._justifyContent = value;
        }
    }

    @Input()
    get closeButton() {
        return this._hasCloseButton;
    }
    set closeButton(value: string | boolean) {
        this._hasCloseButton = booleanValue(value);
    }

    @Input()
    get closeAnywhere() {
        return this._hasCloseAnywhere;
    }
    set closeAnywhere(value: string | boolean) {
        this._hasCloseAnywhere = booleanValue(value);
    }

    @Input()
    get showArrow() {
        return this._hasArrow;
    }
    set showArrow(value: string | boolean) {
        this._hasArrow = booleanValue(value);
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

    private _show = false;
    private _hasBackdrop = false;
    private _hasGlow = false;
    private _hasFinish = false;
    private _hasArrow = false;
    private _hasCloseButton = false;
    private _hasCloseAnywhere = true;
    private _justifyContent: 'left' | 'center' | 'right' = 'left';
    private _focusElement: HTMLElement;
    private _focusElementEnd: HTMLElement;
    private _offsetCoordinates: WalkthroughElementCoordinate;

    constructor(
        private _componentFactoryResolver: ComponentFactoryResolver,
        private _applicationRef: ApplicationRef,
        private _injector: Injector,
        private _walkthroughService: WalkthroughService
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
            this._walkthroughService.scrollIntoViewIfOutOfView(element);
            this._offsetCoordinates = this._getOffsetCoordinates(element);

            if (this.typeSelector === 'zone') {
                const offsetEndCoordinatesEnd = this._getOffsetCoordinates(this._focusElementEnd);
                this._offsetCoordinates.height = offsetEndCoordinatesEnd.top - this._offsetCoordinates.top
                    + offsetEndCoordinatesEnd.height;
                this._offsetCoordinates.width = offsetEndCoordinatesEnd.left - this._offsetCoordinates.left
                    + offsetEndCoordinatesEnd.width;
            }

            this._setFocus();
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
                const l = focusElements.length;
                for (let i = 0; i < l; i++) {
                    // offsetHeight not of 0 means visible
                    if (focusElements[i].offsetHeight) {
                        this._focusElement = focusElements[i];
                        i = focusElements.length;
                        break;
                    }
                }

                // if typeSelector is by zone, get also the last element
                if (this.typeSelector === 'zone') {

                    for (let i = l - 1; i >= 0; i--) {
                        // offsetHeight not of 0 means visible
                        if (focusElements[i].offsetHeight) {
                            this._focusElementEnd = focusElements[i];
                            i = focusElements.length;
                            break;
                        }
                    }

                    // this the zone this just a unique element, change mode for 'element'
                    if (this._focusElement === this._focusElementEnd) {
                        this.typeSelector = 'element';
                    }
                }

            } else {
                this._focusElement = focusElements[0];
                this.typeSelector = 'element';
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
    private _setFocus() {
        const instance = WalkthroughComponent._walkthroughContainer.instance;
        if (instance) {
            if (instance.zone) {
                instance.hightlightZone(this._offsetCoordinates);
            }
            if (!this._show) {
                this._attachContentTemplate();
                this._initContentTemplate(instance);
            }
            setTimeout(() => {
                instance.hightlightZoneStyling(this._focusElement);
                this._updateElementPositions(instance);
            }, 0);
        }
    }

    private _updateElementPositions(instance: WalkthroughContainerComponent) {
        setTimeout(() => {
            instance.contentBlockPosition(this._offsetCoordinates, this._justifyContent);
            if (this._hasArrow) {
                instance.arrowPosition(this._offsetCoordinates);
            }
        }, 0);
    }

    /**
     * Attache the template in the contener, if a template is linked.
     */
    private _attachContentTemplate() {
        if (this.contentTemplate) {
            this._attachWalkthroughContent(
                this.contentTemplate,
                WalkthroughComponent._walkthroughContainer.instance
            );
        }
    }

    /**
     * init all datas of the contenaire
     */
    private _initContentTemplate(instance: WalkthroughContainerComponent) {
        instance.parent = this;
        instance.open();
        instance.hasBackdrop = this._hasBackdrop;
        instance.hasGlow = this._hasGlow;
        instance.hasPrevious = !!this.previousStep;
        instance.hasNext = !!this.nextStep;
        instance.hasCloseButton = this._hasCloseButton;
        instance.hasCloseAnywhere = this._hasCloseAnywhere;
        instance.hasFinish = this._hasFinish;
        instance.hasArrow = this._hasArrow;
        instance.radius = this.radius;
        instance.text = this.texts
            ? { ...new WalkthroughText(), ...this.texts }
            : new WalkthroughText();
        this.show();
    }

}
