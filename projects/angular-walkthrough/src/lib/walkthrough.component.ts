import { ComponentPortal, ComponentType, TemplatePortal } from '@angular/cdk/portal';
import {
    AfterViewInit,
    ApplicationRef,
    Component,
    ComponentFactoryResolver,
    ComponentRef,
    EmbeddedViewRef,
    EventEmitter,
    HostListener,
    Injector,
    Input,
    Output,
    Renderer2,
    TemplateRef,
    Type,
} from '@angular/core';

import { Subject } from 'rxjs';
import { debounceTime, first } from 'rxjs/operators';

import { WalkthroughContainerComponent } from './walkthrough-container.component';
import { WalkthroughText, WalkthroughTextI } from './walkthrough-text';
import { booleanValue, WalkthroughElementCoordinate, WalkthroughEvent, WalkthroughMargin } from './walkthrough-tools';
import { WalkthroughService } from './walkthrough.service';

let nextUniqueId = 0;

const noInstanceWarn = 'No instance of walkthroughContainer.';
const anoterWktOnGoing = 'Another walkthrough is ongoing. Please close it before opening a new one.';

export interface WalkthroughNavigate {
    previous: WalkthroughComponent;
    next: WalkthroughComponent;
}

@Component({
    selector: 'ng-walkthrough',
    template: '',
})
export class WalkthroughComponent implements AfterViewInit {
    private static _walkthroughContainer: ComponentRef<WalkthroughContainerComponent> = null;
    private static _walkthroughContainerCreating = false;
    public static minimalMargin = 60;

    public static onOpen = new Subject<WalkthroughComponent>();
    public static onRefresh = new Subject<WalkthroughComponent>();
    public static onClose = new Subject<WalkthroughComponent>();
    public static onNavigate = new Subject<WalkthroughNavigate>();
    public static onNavigatePrevious = new Subject<WalkthroughNavigate>();
    public static onNavigateNext = new Subject<WalkthroughNavigate>();
    public static onFinish = new Subject<WalkthroughComponent>();

    @Output() closed: EventEmitter<boolean> = new EventEmitter();
    @Output() finished: EventEmitter<WalkthroughEvent> = new EventEmitter();
    @Output() ready: EventEmitter<WalkthroughEvent> = new EventEmitter();

    @Input() focusElementCSSClass: string;
    @Input() rootElement: string;

    @Input() focusElementSelector: string;
    @Input() typeSelector: 'element' | 'zone' = 'element';
    @Input() focusClick: (event: Event, content: WalkthroughContainerComponent) => {};
    @Input() radius: string;

    @Input() previousStep: WalkthroughComponent;
    @Input() nextStep: WalkthroughComponent;
    @Input() texts: WalkthroughTextI;

    @Input() contentTemplate: TemplateRef<any>;
    @Input() contentText: string;
    @Input() contentStyle: 'none' | 'draken' = 'draken';

    @Input()
    get marginZone() {
        return this._marginZone;
    }
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
    get arrowColor() {
        return this._arrowColor;
    }
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
    get notScrollOnResize() {
        return this._notScrollOnResize;
    }
    set notScrollOnResize(value: string | boolean) {
        this._notScrollOnResize = booleanValue(value);
    }

    @Input()
    get id() {
        return this._id;
    }
    set id(value: string) {
        this._id = value || this._uid;
    }

    @Input()
    get alignContent() {
        return this._alignContent;
    }
    set alignContent(value: 'left' | 'center' | 'right') {
        if (this._alignContent !== value) {
            this._alignContent = value;
            this._updateElementPositions(this._getInstance());
        } else {
            this._alignContent = value;
        }
    }

    @Input()
    get verticalAlignContent() {
        return this._verticalAlignContent;
    }
    set verticalAlignContent(value: 'above' | 'top' | 'center' | 'bottom' | 'below') {
        if (this._verticalAlignContent !== value) {
            this._verticalAlignContent = value;
            this._updateElementPositions(this._getInstance());
        } else {
            this._verticalAlignContent = value;
        }
    }

    @Input()
    get contentSpacing() {
        return this._contentSpacing;
    }
    set contentSpacing(value: number) {
        value = Math.max(WalkthroughComponent.minimalMargin, value);
        if (this._contentSpacing !== value) {
            this._contentSpacing = value * 1;
            this._updateElementPositions(this._getInstance());
        } else {
            this._contentSpacing = value * 1;
        }
    }

    @Input()
    get verticalContentSpacing() {
        return this._verticalContentSpacing;
    }
    set verticalContentSpacing(value: number) {
        value = Math.max(WalkthroughComponent.minimalMargin, value);
        if (this._verticalContentSpacing !== value) {
            this._verticalContentSpacing = value * 1;
            this._updateElementPositions(this._getInstance());
        } else {
            this._verticalContentSpacing = value * 1;
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
    get finishButton() {
        return this._hasFinish;
    }
    set finishButton(value: string | boolean) {
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

    @Input()
    get disabled() {
        return this._disabled;
    }
    set disabled(value: boolean) {
        this._disabled = value;

        const instance = this._getInstance();
        if (instance) {
            setTimeout(() => {
                instance.hasPrevious = this._hasPreviousStep(instance);
                instance.hasNext = this._hasNextStep(instance);
                if (!instance.hasNext) {
                    instance.hasFinish = true;
                } else {
                    instance.hasFinish = <boolean>instance.parent.finishButton;
                }
            }, 50);
        }
    }

    @Input()
    get hidePrevious() {
        return this._hidePrevious;
    }
    set hidePrevious(value: string | boolean) {
        this._hidePrevious = booleanValue(value);
    }

    @Input() scrollOnTarget = true;
    @Input() visibilityCallback: Function;

    private _id: string;
    private _uid = `walkthrough-${nextUniqueId++}`;
    private _readyHasBeenEmited = false;
    private _display = false;
    private _hasHighlightAnimation = false;
    private _hasBackdrop = false;
    private _hasGlow = false;
    private _hasFinish = false;
    private _hasArrow = false;
    private _hasCloseButton = false;
    private _hasCloseAnywhere = true;
    private _disabled = false;
    private _hidePrevious = false;
    private _arrowColor: string;
    private _marginZone: string;
    private _marginZonePx = new WalkthroughMargin();
    private _alignContent: 'left' | 'center' | 'right' = 'left';
    private _verticalAlignContent: 'above' | 'top' | 'center' | 'bottom' | 'below' = 'top';
    private _contentSpacing = 0;
    private _verticalContentSpacing = 50;
    private _focusElement: HTMLElement;
    private _focusElementEnd: HTMLElement;
    private _offsetCoordinates: WalkthroughElementCoordinate;
    private _onContainerInit = new Subject<void>();
    private _onResize = new Subject<void>();
    private _notScrollOnResize = true;
    private _resizeDelays = 200;
    private _domChangedObserver = new MutationObserver(() => {
        if (!this._hasElements(this._getFocusElements())) {
            // focus element does not exist anymore we close the walkthrough
            this._close();
        }
    });

    static walkthroughStop() {
        if (WalkthroughComponent._walkthroughContainer) {
            WalkthroughComponent._walkthroughContainer.instance.stop();
        }
    }

    static walkthroughHasShow(): boolean {
        return WalkthroughComponent._walkthroughContainer
            ? WalkthroughComponent._walkthroughContainer.instance.show
            : false;
    }

    static walkthroughHasPause(): boolean {
        return WalkthroughComponent._walkthroughContainer
            ? WalkthroughComponent._walkthroughContainer.instance.pause
            : false;
    }

    static walkthroughContinue() {
        if (WalkthroughComponent._walkthroughContainer && WalkthroughComponent._walkthroughContainer.instance.parent) {
            const visible = WalkthroughComponent._walkthroughContainer.instance.parent._checkVisibility();
            if (visible) {
                WalkthroughComponent._walkthroughContainer.instance.continue();
            } else {
                // we can't open the walkthrough anymore, the focusElementSelector is no more visible
                // so we update the flag "ongoing"
                WalkthroughComponent._walkthroughContainer.instance.ongoing = false;
            }
        }
    }

    static walkthroughNext() {
        if (WalkthroughComponent._walkthroughContainer) {
            WalkthroughComponent._walkthroughContainer.instance.next();
        }
    }

    static walkthroughPrevious() {
        if (WalkthroughComponent._walkthroughContainer) {
            WalkthroughComponent._walkthroughContainer.instance.previous();
        }
    }

    constructor(
        private _componentFactoryResolver: ComponentFactoryResolver,
        private _applicationRef: ApplicationRef,
        private _injector: Injector,
        private _renderer: Renderer2,
        private _walkthroughService: WalkthroughService,
    ) {
        this._onResize.pipe(debounceTime(this._resizeDelays)).subscribe(() => {
            const instance = this._getInstance();
            if (instance?.ongoing && this._display && !WalkthroughComponent._walkthroughContainer?.instance?.pause) {
                this._elementLocations(!this._notScrollOnResize);
                setTimeout(() => {
                    this._elementLocations(!this._notScrollOnResize);
                }, 200);
            }
        });
    }

    @HostListener('window:resize')
    resize() {
        this._onResize.next();
    }

    ngAfterViewInit() {
        // init the Walkthrough element container
        if (!WalkthroughComponent._walkthroughContainer && !WalkthroughComponent._walkthroughContainerCreating) {
            WalkthroughComponent._walkthroughContainerCreating = true;
            setTimeout(() => {
                WalkthroughComponent._walkthroughContainer =
                    this._appendComponentToBody<WalkthroughContainerComponent>(WalkthroughContainerComponent);
                this._onContainerInit.next();
            });
        }
    }

    next(closedEvent?: EventEmitter<boolean>, finishedEvent?: EventEmitter<WalkthroughEvent>) {
        if (closedEvent) {
            this.closed = closedEvent;
        }
        if (finishedEvent) {
            this.finished = finishedEvent;
        }
        this.open();
    }

    refresh() {
        if (this._getInstance()) {
            if (!this._getInstance().ongoing) {
                WalkthroughComponent.onRefresh.next(this);
                this._elementLocations();
            } else {
                console.warn(anoterWktOnGoing);
            }
        } else {
            console.warn(noInstanceWarn);
        }
    }

    open(): Promise<boolean> {
        return new Promise<boolean>(resolve => {
            if (this._checkVisibility()) {
                if (this._getInstance()) {
                    resolve(this._open());
                } else {
                    this._onContainerInit.pipe(first()).subscribe(() => {
                        if (this._getInstance()) {
                            resolve(this._open());
                        } else {
                            console.warn(noInstanceWarn);
                            resolve(false);
                        }
                    });
                }
            } else {
                resolve(false);
            }
        });
    }

    /**
     * Do not use this method outside of the library
     */
    loadPrevioustStep() {
        setTimeout(() => {
            WalkthroughComponent.onNavigate.next({ previous: this, next: this.previousStep });
            WalkthroughComponent.onNavigatePrevious.next({ previous: this, next: this.previousStep });
            this.previousStep._next(this.closed, this.finished);
        }, 0);
    }

    /**
     * Do not use this method outside of the library
     */
    loadNextStep() {
        setTimeout(() => {
            WalkthroughComponent.onNavigate.next({ previous: this, next: this.nextStep });
            WalkthroughComponent.onNavigateNext.next({ previous: this, next: this.nextStep });
            this.nextStep._next(this.closed, this.finished);
        }, 0);
    }

    /**
     * Do not use this method outside of the library
     */
    _hide(finishLink = false, closeWalkthrough = true, triggerFinishIfEnd = true) {
        this._display = false;

        // add CSS to focusElement
        if (this.focusElementCSSClass && this._focusElement) {
            this._renderer.removeClass(this._focusElement, this.focusElementCSSClass);
        }

        if (closeWalkthrough) {
            setTimeout(() => {
                this._getInstance().ongoing = false;
                WalkthroughComponent.onClose.next(this);

                // emit closed event
                this.closed.emit(finishLink);
                if (!this.nextStep && triggerFinishIfEnd) {
                    // emit finished event
                    WalkthroughComponent.onFinish.next(this);
                    this.finished.emit(new WalkthroughEvent(this, this._focusElement));
                }
            }, 20);
            this._domChangedObserver.disconnect();
        }
    }

    private _checkVisibility(): boolean {
        if (this.focusElementSelector) {
            const elements = document.querySelectorAll(this.focusElementSelector);
            if (elements.length === 0) {
                return false;
            }
            if (this.visibilityCallback) {
                return this.visibilityCallback();
            }
            for (const el of <any>elements) {
                if (el.offsetParent === null) {
                    return false;
                }
            }
        }
        return true;
    }

    private _open(): boolean {
        if (!this._getInstance().ongoing) {
            this._getInstance().ongoing = true;
            WalkthroughComponent.onOpen.next(this);
            this._elementLocations();
            this._domChangedObserver.observe(document.body, { attributes: false, childList: true, subtree: true });
            return true;
        } else {
            console.warn(anoterWktOnGoing);
            return false;
        }
    }

    private _show() {
        this._display = true;
    }

    private _next(closedEvent?: EventEmitter<boolean>, finishedEvent?: EventEmitter<WalkthroughEvent>) {
        if (closedEvent) {
            this.closed = closedEvent;
        }
        if (finishedEvent) {
            this.finished = finishedEvent;
        }
        const instance = this._getInstance();
        if (instance && instance.ongoing) {
            instance.ongoing = false;
        }
        this.open();
    }

    private _getInstance(): WalkthroughContainerComponent {
        return WalkthroughComponent._walkthroughContainer ? WalkthroughComponent._walkthroughContainer.instance : null;
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
        walkthroughContainer: WalkthroughContainerComponent,
    ) {
        if (componentOrTemplateRef instanceof TemplateRef) {
            walkthroughContainer.attachTemplatePortal(new TemplatePortal<T>(componentOrTemplateRef, null));
        } else {
            walkthroughContainer.attachComponentPortal(new ComponentPortal(componentOrTemplateRef));
        }
    }

    private _elementLocations(scroll: boolean = true): void {
        this._getFocusElement();

        const element = this._focusElement;
        if (element) {
            if (scroll) {
                if (this.scrollOnTarget) {
                    this._walkthroughService.scrollIntoViewIfOutOfView(element);
                }

                // if there is a root element defined (in some cases when position fixed is used, we need to scroll on it)
                if (this.rootElement) {
                    document.querySelector(this.rootElement).scrollIntoView(true);
                }
            }
            this._offsetCoordinates = this._walkthroughService.retrieveCoordinates(element);

            if (this.typeSelector === 'zone') {
                const offsetEndCoordinatesEnd = this._walkthroughService.retrieveCoordinates(this._focusElementEnd);

                this._offsetCoordinates.height =
                    offsetEndCoordinatesEnd.top - this._offsetCoordinates.top + offsetEndCoordinatesEnd.height;
                this._offsetCoordinates.width =
                    offsetEndCoordinatesEnd.left - this._offsetCoordinates.left + offsetEndCoordinatesEnd.width;
            }
        } else {
            this._offsetCoordinates = null;

            // focus element does not exist anymore we close the walkthrough
            this._close();
        }
        this._setFocus(scroll);
    }

    private _close() {
        setTimeout(() => this._getInstance().close(false, true, false), 50);
    }

    private _hasElements(elements: NodeListOf<HTMLElement>): boolean {
        return elements && elements.length > 0;
    }

    private _getFocusElements(): NodeListOf<HTMLElement> {
        let focusElements: NodeListOf<HTMLElement> = null;
        if (this.focusElementSelector) {
            try {
                focusElements = document.querySelectorAll(this.focusElementSelector) as NodeListOf<HTMLElement>;
            } catch (error) {
                console.error(
                    `#${this.id}@focusElementSelector: '${this.focusElementSelector}' is not a valid selector.\n`,
                    error,
                );
            }
        }
        return focusElements;
    }

    private _getFocusElement() {
        const focusElements: NodeListOf<HTMLElement> = this._getFocusElements();

        // getting focus element
        if (this._hasElements(focusElements)) {
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
    private _setFocus(scroll: boolean = true) {
        const instance = this._getInstance();
        if (instance) {
            const scrollY = window.pageXOffset;
            this._initStylingTemplate(instance);
            setTimeout(() => {
                if (this._focusElement && instance.zone) {
                    instance.marginZonePx = this._marginZonePx;
                    instance.hightlightZone(
                        this._offsetCoordinates,
                        scrollY - window.pageXOffset,
                        this.animation,
                        this.animationDelays,
                        this._setFocusContinue.bind(this),
                        scroll,
                    );
                } else {
                    this._setFocusContinue(scroll);
                }
            }, 20);
        }
    }

    private _setFocusContinue(scroll: boolean) {
        const instance = this._getInstance();
        if (!this._display) {
            this._attachContentTemplate();

            this._initContentTemplate(instance);
        }
        setTimeout(() => {
            instance.hightlightZoneStyling(this._focusElement);
            this._updateElementPositions(instance, scroll);
        });
    }

    private _updateElementPositions(instance: WalkthroughContainerComponent, scroll: boolean = true) {
        if (WalkthroughComponent._walkthroughContainer && this._getInstance()) {
            setTimeout(() => {
                if (this._offsetCoordinates) {
                    instance.contentBlockPosition(
                        this._offsetCoordinates,
                        this._alignContent,
                        this._verticalAlignContent,
                        this._contentSpacing,
                        this._verticalContentSpacing,
                    );
                }
                if (this._offsetCoordinates && this._focusElement !== null && this._hasArrow) {
                    instance.arrowPosition(this._offsetCoordinates);
                }

                // add CSS to focusElement
                if (this.focusElementCSSClass && this._focusElement) {
                    this._renderer.addClass(this._focusElement, this.focusElementCSSClass);
                }

                setTimeout(() => {
                    this._getInstance().setHeight();

                    if (!this._readyHasBeenEmited) {
                        this._readyHasBeenEmited = true;
                        this.ready.emit(new WalkthroughEvent(this, this._focusElement));
                    }

                    const contentBlockNative = instance.contentBlock.nativeElement as HTMLElement;
                    let scrollPos;

                    if (this._focusElement != null) {
                        const coordinatesContent = this._walkthroughService.retrieveCoordinates(contentBlockNative);
                        const coordinatesFocus = this._walkthroughService.retrieveCoordinates(this._focusElement);
                        // is content + focus higher than window ?
                        if (coordinatesContent.height + coordinatesFocus.height > window.innerHeight) {
                            // we scroll on content
                            if (scroll) {
                                contentBlockNative.scrollIntoView(true);
                            }
                            // we offset the window half of the content height
                            if (coordinatesContent.top > coordinatesFocus.top) {
                                // content below focusZone
                                scrollPos = -(coordinatesContent.height / 2);
                            } else {
                                // content above focusZone
                                scrollPos = +(coordinatesContent.height / 2);
                            }
                        } else {
                            // scroll on element higher minus minimal margin
                            if (coordinatesContent.top > coordinatesFocus.top) {
                                if (scroll) {
                                    window.scrollTo(coordinatesFocus.left, coordinatesFocus.top);
                                }
                                scrollPos = -WalkthroughComponent.minimalMargin;
                            } else {
                                if (scroll) {
                                    contentBlockNative.scrollIntoView(true);
                                }
                                scrollPos = -WalkthroughComponent.minimalMargin;
                            }
                        }
                    } else {
                        // no focus zone, scroll on content minus margin
                        if (scroll) {
                            contentBlockNative.scrollIntoView(true);
                        }
                        scrollPos = -WalkthroughComponent.minimalMargin;
                    }

                    if (scroll) {
                        window.scrollBy(0, scrollPos);
                    }
                }, 50);
            }, 0);
        }
    }

    /**
     * Attache the template in the contener, if a template is linked.
     */
    private _attachContentTemplate() {
        if (this.contentTemplate) {
            this._attachWalkthroughContent(this.contentTemplate, this._getInstance());
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

        instance.hasPrevious = this._hasPreviousStep(instance);
        instance.hasNext = this._hasNextStep(instance);
        instance.hasCloseButton = this._hasCloseButton;
        instance.hasCloseAnywhere = this._hasCloseAnywhere;
        instance.hasFinish = this._hasFinish || !instance.hasNext;
        instance.hasArrow = hasHighlightZone && this._hasArrow;
        instance.arrowColor = this.arrowColor;
        instance.radius = this.radius;
        instance.marginZone = this._marginZone ? this._marginZone.replace(/(\d+)/g, '$1px') : null;
        instance.marginZonePx = this._marginZonePx;
        instance.contentText = this.contentText;
        instance.contentStyle = this.contentStyle;
        instance.text = this.texts ? { ...new WalkthroughText(), ...this.texts } : new WalkthroughText();
        instance.hidePrevious = this._hidePrevious;

        this._show();
    }

    /**
     * check if there is a previous step enabled
     */
    private _hasPreviousStep(instance: WalkthroughContainerComponent): boolean {
        if (instance.parent) {
            let current = instance.parent.previousStep;
            while (current) {
                if (!current.disabled) {
                    return true;
                }
                current = current.previousStep;
            }
        }

        return false;
    }

    /**
     * check if there is a next step enabled
     */
    private _hasNextStep(instance: WalkthroughContainerComponent): boolean {
        if (instance.parent) {
            let current = instance.parent.nextStep;
            while (current) {
                if (!current.disabled) {
                    return true;
                }
                current = current.nextStep;
            }
        }

        return false;
    }
}
