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

    hasBackdrop = false;
    hasGlow = false;

    parent: WalkthroughComponent;

    @ViewChild(PortalHostDirective) _portalHost: PortalHostDirective;

    @ViewChild('content') content: TemplateRef<any>;
    @ViewChild('contentBlock') contentBlock: ElementRef;
    @ViewChild('zone') zone: ElementRef;

    @HostBinding('class.hide')
    get hide() {
        return !this.show;
    }
    constructor(
        public viewContainerRef: ViewContainerRef
    ) {
        super();
    }

    @HostListener('click')
    click() {
        this.next();
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

    contentBlockPosition(coordinate: WalkthroughElementCoordinate) {
        const element = this.contentBlock.nativeElement as HTMLElement;
        const elementStyle = window.getComputedStyle(element, null);
        const height = element.getBoundingClientRect().height
            + parseInt(elementStyle.marginTop, 10) + parseInt(elementStyle.marginBottom);

        if (coordinate.top < height) {
            element.style.top = (coordinate.top + coordinate.height) + 'px';
        }
    }

    next() {
        // remove content
        this._portalHost.dispose();
        // hide
        this.show = false;
        this.parent.hide();
    }

}
