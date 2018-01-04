
import {
    Component,
    TemplateRef,
    ViewChild,
    ElementRef,
    ViewContainerRef,
    EmbeddedViewRef,
    ComponentRef,
    HostBinding,
    HostListener,
    Renderer2
} from '@angular/core';
import {
    BasePortalHost,
    ComponentPortal,
    PortalHostDirective,
    TemplatePortal
} from '@angular/cdk/portal';
import { WalkthroughComponent, WalkthroughElementCoordinate } from './walkthrough.component';
import { WalkthroughService } from './walkthrough.service';
import { WalkthroughText } from './walkthrough-text';

export function throwWalkthroughContentAlreadyAttachedError() {
    throw Error('Attempting to attach walkthrough content after content is already attached');
}

@Component({
    selector: 'walkthrough-container',
    styleUrls: ['./walkthrough-container.component.scss'],
    templateUrl: './walkthrough-container.component.html'
})
export class WalkthroughContainerComponent extends BasePortalHost {

    show: boolean;
    parent: WalkthroughComponent;

    // highlight zone

    hasHighlightZone = false;
    hasHighlight = false;
    hasBackdrop = false;
    hasGlow = false;
    hasClickable: boolean;
    hideOther: boolean;

    // navigate

    hasPrevious = false;
    hasNext = false;
    hasFinish = false;
    hasCloseButton = false;
    hasCloseAnywhere = true;

    // arrow

    hasArrow = false;
    arrowPath: string;
    arrowMarkerDist = 7;
    arrowMargin = 30;

    // styling

    contentStyle: string;
    radius: string;
    arrowColor: string;

    // content

    contentText: string;

    // texts change / i18n

    text = new WalkthroughText();

    // elements

    @ViewChild(PortalHostDirective) _portalHost: PortalHostDirective;
    @ViewChild('content') content: TemplateRef<any>;
    @ViewChild('contentBlock') contentBlock: ElementRef;
    @ViewChild('zone') zone: ElementRef;

    // HostBinding

    @HostBinding('attr.id')
    get id() {
        return this.parent ? this.parent.id + '-container' : null;
    }

    @HostBinding('class.hide')
    get hide() {
        return !this.show;
    }

    @HostBinding('class.cursor')
    get cursor() {
        return this.hasCloseAnywhere;
    }

    @HostBinding('class.backdrop')
    get backdrop() {
        return !this.hasHighlightZone && this.hasBackdrop;
    }

    private _contentPosition: 'top' | 'bottom';
    private _arrowPosition: 'topBottom' | 'leftRight';

    constructor(
        public viewContainerRef: ViewContainerRef,
        private _walkthroughService: WalkthroughService,
        private _renderer: Renderer2,
        private _el: ElementRef
    ) {
        super();
    }

    @HostListener('click')
    click() {
        if (this.hasCloseAnywhere && this.show) {
            this.close();
        }
    }

    clickZone(event: Event) {
        if (this.parent && this.hasClickable) {
            this.parent.focusClick(event, this);
        }
    }

    /**
     * Attach a ComponentPortal as content to this walkthrough container.
     * @param portal Portal to be attached as the walkthrough content.
     */
    attachComponentPortal<T>(portal: ComponentPortal<T>): ComponentRef<T> {
        if (this._portalHost.hasAttached()) {
            throwWalkthroughContentAlreadyAttachedError();
        }

        // this._savePreviouslyFocusedElement();
        return this._portalHost.attachComponentPortal(portal);
    }

    /**
     * Attach a TemplatePortal as content to this walkthrough container.
     * @param portal Portal to be attached as the walkthrough content.
     */
    attachTemplatePortal<C>(portal: TemplatePortal<C>): EmbeddedViewRef<C> {
        if (this._portalHost.hasAttached()) {
            throwWalkthroughContentAlreadyAttachedError();
        }

        // this._savePreviouslyFocusedElement();
        return this._portalHost.attachTemplatePortal(portal);
    }

    setHeight(): void {
        this._renderer.setStyle(this._el.nativeElement, 'height', this._walkthroughService.getDocumentHeight() + 'px');
    }

    hightlightZone(
        coordinate: WalkthroughElementCoordinate,
        scrollDiff: number,
        animation: 'none' | 'linear',
        animationDelays: number,
        continueFunction: () => {}
    ) {

        const element = (this.zone.nativeElement as HTMLElement);
        const zoneStyle = element.style;
        const style = window.getComputedStyle(element, null);

        if (animation === 'linear' && animationDelays > 0 && style.left !== 'auto') {
            this.hideOther = true;
            const fragment = 20;
            const intervale = animationDelays / fragment;
            const left = parseInt(style.left, 10);
            const top = scrollDiff + parseInt(style.top, 10);
            const width = parseInt(style.width, 10);
            const height = parseInt(style.height, 10);
            const partLeft = (coordinate.left - left) / fragment;
            const partTop = (coordinate.top - top) / fragment;
            const partWidth = (coordinate.width - width) / fragment;
            const partHeight = (coordinate.height - height) / fragment;
            let count = 0;

            this.show = true;
            zoneStyle.borderRadius = '50%';
            const timer = setInterval(() => {

                zoneStyle.left = (left + partLeft * count) + 'px';
                zoneStyle.top = (top + partTop * count) + 'px';
                zoneStyle.width = (width + partWidth * count) + 'px';
                zoneStyle.height = (height + partHeight * count) + 'px';
                if (count++ >= fragment) {
                    clearInterval(timer);
                    this.hideOther = false;
                    continueFunction();
                }
            }, intervale);

        } else {
            zoneStyle.left = coordinate.left + 'px';
            zoneStyle.top = coordinate.top + 'px';
            zoneStyle.width = coordinate.width + 'px';
            zoneStyle.height = coordinate.height + 'px';

            continueFunction();
        }
    }

    hightlightZoneStyling(element: HTMLElement) {
        const zoneStyle = (this.zone.nativeElement as HTMLElement).style;
        if (this.radius) {
            if (Number(this.radius) === parseFloat(this.radius)) {
                // if is numeric, change in %
                zoneStyle.borderRadius = this.radius + '%';
            } else if (this.radius === 'auto') {
                // if mode auto
                const elementStyle = window.getComputedStyle(element, null);
                // borderRadius work only on Chrome, use TopLeft, TopRight... for Firefox/Egde/IE
                zoneStyle.borderTopLeftRadius = elementStyle.borderTopLeftRadius;
                zoneStyle.borderTopRightRadius = elementStyle.borderTopRightRadius;
                zoneStyle.borderBottomLeftRadius = elementStyle.borderBottomLeftRadius;
                zoneStyle.borderBottomRightRadius = elementStyle.borderBottomRightRadius;
            } else {
                // if is numeric, change in %
                zoneStyle.borderRadius = this.radius;
            }
        } else {
            zoneStyle.borderRadius = '';
        }
    }

    contentBlockPosition(coordinate: WalkthroughElementCoordinate, position: 'left' | 'center' | 'right') {
        const element = this.contentBlock.nativeElement as HTMLElement;
        const elementStyle = window.getComputedStyle(element, null);

        const height = this._walkthroughService.retrieveCoordinates(element).height
            + parseInt(elementStyle.marginTop, 10) + parseInt(elementStyle.marginBottom, 10);

        // position of content left/center/right

        element.style.right = '';
        element.style.left = '';

        if (position === 'left') {
            element.style.left = '0';
        } else if (position === 'center') {
            element.style.left = (window.innerWidth / 2 - this._walkthroughService.retrieveCoordinates(element).width / 2) + 'px';
        } else if (position === 'right') {
            element.style.right = '0';
        }

        if (this.hasHighlightZone) {

            // for arrow possition

            const contentBlockCoordinates = this._walkthroughService.retrieveCoordinates(element);
            const startLeft = contentBlockCoordinates.left + contentBlockCoordinates.width / 2;


            this._arrowPosition = startLeft > coordinate.left - this.arrowMargin
                && startLeft < coordinate.left + coordinate.width + this.arrowMargin
                ? 'topBottom' : 'leftRight';

            const margin = this._arrowPosition === 'topBottom' ? this.arrowMargin : 0;

            // position of content top/bottom

            if (coordinate.top < height) {
                element.style.top = (coordinate.top + coordinate.height + margin) + 'px';
                this._contentPosition = 'bottom';
            } else {
                element.style.top = (coordinate.top - height - margin) + 'px';
                this._contentPosition = 'top';
            }

        } else {
            element.style.top = (this._walkthroughService.getHeightOfPage() / 2 - height / 2) + 'px';
        }

    }

    arrowPosition(coordinate: WalkthroughElementCoordinate) {

        const contentBlockElement = this.contentBlock.nativeElement as HTMLElement;
        const contentBlockCoordinates = this._walkthroughService.retrieveCoordinates(contentBlockElement);

        const startLeft = contentBlockCoordinates.left + contentBlockCoordinates.width / 2;
        let startTop = contentBlockCoordinates.top + contentBlockCoordinates.height;
        let centerTop: number;
        let centerLeft: number;
        let endLeft = coordinate.left;
        let endTop = coordinate.top;

        if (this._contentPosition === 'bottom') {
            startTop -= contentBlockCoordinates.height;
        }

        if (this._arrowPosition === 'topBottom') {
            endLeft += coordinate.width / 2;

            if (this._contentPosition === 'bottom') {
                endTop += coordinate.height + 6;
            } else {
                endTop -= 6;
            }

            centerLeft = (startLeft + endLeft) / 2;
            centerTop = (startTop + endTop) / 2;

            this.arrowPath = `M${startLeft},${startTop} Q${startLeft},${centerTop} ${centerLeft},${centerTop} `
                + `Q${endLeft},${centerTop} ${endLeft},${endTop}`;

        } else {
            if (startLeft > coordinate.left) {
                endLeft += coordinate.width + this.arrowMarkerDist;
            } else {
                endLeft -= this.arrowMarkerDist;
            }

            endTop += coordinate.height / 2;

            this.arrowPath = `M${startLeft},${startTop} Q${startLeft},${endTop} ${endLeft},${endTop}`;
        }
    }

    open() {
        // show
        this.show = true;
        // scroll
        // this._walkthroughService.disableScroll();
    }

    previous() {
        this.close(false);
        this.parent.loadPrevioustStep();
    }

    next() {
        this.close(false);
        this.parent.loadNextStep();
    }

    close(closingWalkthrough = true) {
        // remove content
        this._portalHost.dispose();
        // hide
        this.show = false;
        this.parent.hide(closingWalkthrough, this.hasFinish);
        // scroll
        // this._walkthroughService.enableScroll();
    }

}
