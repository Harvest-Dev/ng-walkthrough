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

    radius: string;

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

    constructor(
        public viewContainerRef: ViewContainerRef
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

        if (coordinate.top < height) {
            element.style.top = (coordinate.top + coordinate.height) + 'px';
            this._contentPosition = 'bottom';
        } else {
            element.style.top = (coordinate.top - coordinate.height - height) + 'px';
            this._contentPosition = 'top';
        }

        if (position === 'center') {
            element.style.left = (window.innerWidth / 2 - element.getBoundingClientRect().width / 2) + 'px';
        } else if (position === 'right') {
            element.style.right = '0';
        }
    }

    arrowPosition(coordinate: WalkthroughElementCoordinate) {

        const element = this.contentBlock.nativeElement as HTMLElement;
        const offsetCoordinates = element.getBoundingClientRect();

        const startLeft = offsetCoordinates.left + offsetCoordinates.width / 2;
        let startTop = offsetCoordinates.top + offsetCoordinates.height;
        let endLeft = coordinate.left;

        if (this._contentPosition === 'bottom') {
            startTop -= offsetCoordinates.height;
        }

        if (startLeft > coordinate.left) {
            endLeft += coordinate.width + this.arrowMarkerDist;
        } else {
            endLeft -= this.arrowMarkerDist;
        }
        const endTop = coordinate.top + (coordinate.height / 2);

        this.arrowPath = `M${startLeft},${startTop} Q${startLeft},${endTop} ${endLeft},${endTop}`;
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
    }

}
