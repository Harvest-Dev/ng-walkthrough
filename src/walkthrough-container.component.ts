import {
    Component,
    TemplateRef,
    ViewChild,
    ElementRef,
    ViewContainerRef,
    EmbeddedViewRef,
    ComponentRef,
    HostBinding,
    HostListener
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

    // highlight

    hasBackdrop = false;
    hasGlow = false;

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

    text = new WalkthroughText();

    parent: WalkthroughComponent;

    @ViewChild(PortalHostDirective) _portalHost: PortalHostDirective;

    @ViewChild('content') content: TemplateRef<any>;
    @ViewChild('contentBlock') contentBlock: ElementRef;
    @ViewChild('zone') zone: ElementRef;

    @HostBinding('class.hide')
    get hide() {
        return !this.show;
    }

    @HostBinding('class.cursor')
    get cursor() {
        return this.hasCloseAnywhere;
    }

    private _contentPosition: 'top' | 'bottom';
    private _arrowPosition: 'topBottom' | 'leftRight';

    constructor(
        public viewContainerRef: ViewContainerRef,
        private _walkthroughService: WalkthroughService
    ) {
        super();
    }

    @HostListener('click')
    click() {
        if (this.hasCloseAnywhere) {
            this.close();
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

    hightlightZone(coordinate: WalkthroughElementCoordinate) {
        const zoneStyle = (this.zone.nativeElement as HTMLElement).style;
        zoneStyle.left = coordinate.left + 'px';
        zoneStyle.top = coordinate.top + 'px';
        zoneStyle.width = coordinate.width + 'px';
        zoneStyle.height = coordinate.height + 'px';
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

        const height = element.getBoundingClientRect().height
            + parseInt(elementStyle.marginTop, 10) + parseInt(elementStyle.marginBottom, 10);

        // position of content left/center/right

        element.style.right = '';
        element.style.left = '';

        if (position === 'left') {
            element.style.left = '0';
        } else if (position === 'center') {
            element.style.left = (window.innerWidth / 2 - element.getBoundingClientRect().width / 2) + 'px';
        } else if (position === 'right') {
            element.style.right = '0';
        }

        // for arrow possition

        const contentBlockCoordinates = element.getBoundingClientRect();
        const startLeft = contentBlockCoordinates.left + contentBlockCoordinates.width / 2;
        const arrowMargin = 30;

        this._arrowPosition = startLeft > coordinate.left - arrowMargin
            && startLeft < coordinate.left + coordinate.width + arrowMargin
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
    }

    arrowPosition(coordinate: WalkthroughElementCoordinate) {

        const contentBlockElement = this.contentBlock.nativeElement as HTMLElement;
        const contentBlockCoordinates = contentBlockElement.getBoundingClientRect();

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
                endTop += coordinate.height
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
        this._walkthroughService.disableScroll();
    }

    previous() {
        this.close();
        this.parent.loadPrevioustStep();
    }

    next() {
        this.close();
        this.parent.loadNextStep();
    }

    close() {
        // remove content
        this._portalHost.dispose();
        // hide
        this.show = false;
        this.parent.hide();
        // scroll
        this._walkthroughService.enableScroll();
    }

}
