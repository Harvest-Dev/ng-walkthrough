import {
    Type,
    TemplateRef,
    Input,
    Output,
    Component,
    ComponentFactoryResolver,
    EmbeddedViewRef,
    ComponentRef,
    ApplicationRef,
    Injector,
    HostListener,
    OnInit,
    AfterViewInit,
    Renderer2,
    EventEmitter
} from '@angular/core';

import { ComponentPortal, ComponentType, PortalInjector, TemplatePortal } from '@angular/cdk/portal';
import { WalkthroughContainerComponent } from './walkthrough-container.component';
import { WalkthroughService } from './walkthrough.service';
import { WalkthroughText } from './walkthrough-text';
import { WalkthroughEvent, booleanValue, WalkthroughElementCoordinate, WalkthroughMargin } from './walkthrough-tools';

let nextUniqueId = 0;

@Component({
    selector: 'ng-walkthrough',
    template: ''
})
export class WalkthroughComponent implements OnInit, AfterViewInit {

    private static _walkthroughContainer: ComponentRef<WalkthroughContainerComponent> = null;
    private static _walkthroughContainerCreating = false;
    private _readyHasBeenEmited = false;

    @Output() closed: EventEmitter<boolean> = new EventEmitter();
    @Output() finished: EventEmitter<WalkthroughEvent> = new EventEmitter();
    @Output() ready: EventEmitter<WalkthroughEvent> = new EventEmitter();
    @Input() focusElementCSSClass: string = undefined;

    @Input() focusElementSelector: string;
    @Input() typeSelector: 'element' | 'zone' = 'element';
    @Input() focusClick: (event: Event, content: WalkthroughContainerComponent) => {};
    @Input() radius: string;

    @Input() previousStep: WalkthroughComponent;
    @Input() nextStep: WalkthroughComponent;
    @Input() texts: WalkthroughText;

    @Input() contentTemplate: TemplateRef<any>;
    @Input() contentText: string;
    @Input() contentStyle: 'none' | 'draken' = 'draken';

    @Input()
    get marginZone() { return this._marginZone; }
    set marginZone(points: string | null) {
        if (this._marginZone !== points) {
            if (points === null) {
                this._marginZone = null;
            }

            this._marginZonePx = WalkthroughMargin.parsePoints(points);
            if (this._marginZonePx !== null) {
                this._marginZone = points;
            }
        }
    }

    @Input()
    get arrowColor() { return this._arrowColor; }
    set arrowColor(color: string) {
        if (this._arrowColor !== color) {
            this._arrowColor = color;
            if (this._getInstance()) {
                this._getInstance().arrowColor = this._arrowColor;
            }
        }
    }

    @Input() animation: 'none' | 'linear' = 'none';
    @Input() animationDelays = 0;

    @Input()
    get id() { return this._id; }
    set id(value: string) { this._id = value || this._uid; }

    @Input()
    get justifyContent() {
        return this._justifyContent;
    }
    set justifyContent(value: 'left' | 'center' | 'right') {
        if (this._justifyContent !== value) {
            this._justifyContent = value;
            if (WalkthroughComponent._walkthroughContainer && this._getInstance()) {
                this._updateElementPositions(this._getInstance());
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
    get focusHighlightAnimation() {
        return this._hasHighlightAnimation;
    }
    set focusHighlightAnimation(value: string | boolean) {
        this._hasHighlightAnimation = booleanValue(value);
    }

    @Input()
    get focusBackdrop() {
        return this._hasBackdrop;
    }
    set focusBackdrop(value: string | boolean) {
        this._hasBackdrop = booleanValue(value);
    }

    @Input()
    get focusGlow() {
        return this._hasGlow;
    }
    set focusGlow(value: string | boolean) {
        this._hasGlow = booleanValue(value);
    }

    private _id: string;
    private _uid = `walkthrough-${nextUniqueId++}`;
    private _show = false;
    private _hasHighlightAnimation = false;
    private _hasBackdrop = false;
    private _hasGlow = false;
    private _hasFinish = false;
    private _hasArrow = false;
    private _hasCloseButton = false;
    private _hasCloseAnywhere = true;
    private _arrowColor: string;
    private _marginZone: string;
    private _marginZonePx = new WalkthroughMargin();
    private _justifyContent: 'left' | 'center' | 'right' = 'left';
    private _focusElement: HTMLElement;
    private _focusElementEnd: HTMLElement;
    private _offsetCoordinates: WalkthroughElementCoordinate;

    constructor(
        private _componentFactoryResolver: ComponentFactoryResolver,
        private _applicationRef: ApplicationRef,
        private _injector: Injector,
        private _renderer: Renderer2,
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

    private next(
        closedEvent: EventEmitter<boolean> = undefined,
        finishedEvent: EventEmitter<WalkthroughEvent> = undefined
    ) {
        if (closedEvent) {
            this.closed = closedEvent;
        }
        if (finishedEvent) {
            this.finished = finishedEvent;
        }
        this.open();
    }

    open() {
        this._elementLocations();
    }

    loadPrevioustStep() {
        setTimeout(() => {
            this.previousStep.next(this.closed, this.finished);
        }, 0);
    }

    loadNextStep() {
        setTimeout(() => {
            this.nextStep.next(this.closed, this.finished);
        }, 0);
    }

    show() {
        this._show = true;
    }

    hide(finishLink = false, closeWalkthrough = true) {
        this._show = false;

        // add CSS to focusElement
        if (this.focusElementCSSClass) {
            this._renderer.removeClass(this._focusElement, this.focusElementCSSClass);
        }

        if (closeWalkthrough) {
            setTimeout(() => {
                // emit closed event
                this.closed.emit(finishLink);
                if (!this.nextStep) {
                    // emit finished event
                    this.finished.emit(new WalkthroughEvent(this, this._focusElement));
                }
            }, 20);
        }
    }

    private _getInstance(): WalkthroughContainerComponent {
        return WalkthroughComponent._walkthroughContainer
            ? WalkthroughComponent._walkthroughContainer.instance
            : null;
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

        const element = this._focusElement;
        if (element) {
            this._walkthroughService.scrollIntoViewIfOutOfView(element);
            this._offsetCoordinates = this._walkthroughService.retrieveCoordinates(element, this._marginZonePx);

            if (this.typeSelector === 'zone') {
                const offsetEndCoordinatesEnd = this._walkthroughService.retrieveCoordinates(
                    this._focusElementEnd,
                    this._marginZonePx
                );

                this._offsetCoordinates.height = offsetEndCoordinatesEnd.top
                    - this._offsetCoordinates.top
                    + offsetEndCoordinatesEnd.height;
                this._offsetCoordinates.width = offsetEndCoordinatesEnd.left
                    - this._offsetCoordinates.left
                    + offsetEndCoordinatesEnd.width;
            }
        } else {
            this._offsetCoordinates = null;
        }
        this._setFocus();
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
                // Multiple items fit selector, displaying first visible as focus item in 'element' mode

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
            this._focusElement = null;
        }
    }

    /**
     * get instance, hightlight the focused element et show the template
     */
    private _setFocus() {
        const instance = this._getInstance();
        if (instance) {
            const scrollY = window.pageXOffset;
            this._initStylingTemplate(instance);
            setTimeout(() => {
                if (this._focusElement && instance.zone) {
                    instance.hightlightZone(
                        this._offsetCoordinates,
                        scrollY - window.pageXOffset,
                        this.animation,
                        this.animationDelays,
                        this._setFocusContinue.bind(this)
                    );
                } else {
                    this._setFocusContinue();
                }
            }, 20);
        }
    }

    private _setFocusContinue() {
        const instance = this._getInstance();
        if (!this._show) {
            this._attachContentTemplate();

            this._initContentTemplate(instance);
        }
        setTimeout(() => {
            instance.hightlightZoneStyling(this._focusElement);
            this._updateElementPositions(instance);
        }, 0);
    }

    private _updateElementPositions(instance: WalkthroughContainerComponent) {
        setTimeout(() => {
            instance.contentBlockPosition(this._offsetCoordinates, this._justifyContent);
            if (this._focusElement !== null && this._hasArrow) {
                instance.arrowPosition(this._offsetCoordinates);
            }

            // add CSS to focusElement
            if (this.focusElementCSSClass) {
                this._renderer.addClass(this._focusElement, this.focusElementCSSClass);
            }

            setTimeout(() => {
                this._getInstance().setHeight();

                if (!this._readyHasBeenEmited) {
                    this._readyHasBeenEmited = true;
                    this.ready.emit(new WalkthroughEvent(this, this._focusElement));
                }

                this._walkthroughService.scrollToTopElement(
                    this._focusElement,
                    <HTMLElement>document.querySelector('walkthrough-container .wkt-content-block'),
                    this._marginZonePx
                );
            }, 50);
        }, 0);
    }

    /**
     * Attache the template in the contener, if a template is linked.
     */
    private _attachContentTemplate() {
        if (this.contentTemplate) {
            this._attachWalkthroughContent(
                this.contentTemplate,
                this._getInstance()
            );
        }
    }

    /**
     * init a partof styles of the contenaire
     */
    private _initStylingTemplate(instance: WalkthroughContainerComponent) {
        const hasHighlightZone = this._focusElement !== null;

        instance.parent = this;
        instance.open();
        instance.hasHighlightZone = hasHighlightZone;
        instance.hasClickable = hasHighlightZone && typeof this.focusClick === 'function';
        instance.hasHighlight = hasHighlightZone && this._hasHighlightAnimation;
        instance.hasBackdrop = this._hasBackdrop;
        instance.hasGlow = hasHighlightZone && this._hasGlow;

    }


    /**
     * init all datas of the contenaire
     */
    private _initContentTemplate(instance: WalkthroughContainerComponent) {
        const hasHighlightZone = this._focusElement !== null;

        instance.hasPrevious = !!this.previousStep;
        instance.hasNext = !!this.nextStep;
        instance.hasCloseButton = this._hasCloseButton;
        instance.hasCloseAnywhere = this._hasCloseAnywhere;
        instance.hasFinish = this._hasFinish;
        instance.hasArrow = hasHighlightZone && this._hasArrow;
        instance.arrowColor = this.arrowColor;
        instance.radius = this.radius;
        instance.marginZone = this._marginZone ? this._marginZone.replace(/(\d+)/g, '$1px') : null;
        instance.marginZonePx = this._marginZonePx;
        instance.contentText = this.contentText;
        instance.contentStyle = this.contentStyle;
        instance.text = this.texts
            ? { ...new WalkthroughText(), ...this.texts }
            : new WalkthroughText();

        this.show();
    }


}
