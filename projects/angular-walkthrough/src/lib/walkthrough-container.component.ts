import { BasePortalOutlet, CdkPortalOutlet, ComponentPortal, TemplatePortal } from '@angular/cdk/portal';
import {
    Component,
    ComponentRef,
    ElementRef,
    EmbeddedViewRef,
    HostBinding,
    HostListener,
    Renderer2,
    TemplateRef,
    ViewChild,
    ViewContainerRef,
} from '@angular/core';

import { WalkthroughText } from './walkthrough-text';
import { WalkthroughElementCoordinate, WalkthroughMargin } from './walkthrough-tools';
import { WalkthroughComponent } from './walkthrough.component';
import { WalkthroughService } from './walkthrough.service';

export function throwWalkthroughContentAlreadyAttachedError() {
    throw Error('Attempting to attach walkthrough content after content is already attached');
}

const is_safari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

@Component({
    selector: 'walkthrough-container',
    styleUrls: ['./walkthrough-container.component.scss'],
    templateUrl: './walkthrough-container.component.html',
})
export class WalkthroughContainerComponent extends BasePortalOutlet {
    markerUrl = 'url(#wkt-arrow)';

    /* if a walkthrough is ongoing (paused or not) */
    ongoing = false;

    show = false;
    pause = false;
    parent: WalkthroughComponent;

    // highlight zone

    hasHighlightZone = false;
    hasHighlight = false;
    hasBackdrop = false;
    hasGlow = false;
    hasClickable: boolean;
    hideOther: boolean;

    // navigate

    hidePrevious = false;
    hideNext = false;
    hideNav = false;
    hasPrevious = false;
    hasNext = false;
    hasFinish = false;
    hasCloseButton = false;
    hasCloseAnywhere = true;

    // arrow

    hasArrow = false;
    arrowPath: string;
    arrowMarkerDist = 7;

    // styling

    contentStyle: string;
    radius: string;
    arrowColor: string;
    marginZone: string | null;
    marginZonePx = new WalkthroughMargin();

    // content

    contentText: string;

    // texts change / i18n

    text = new WalkthroughText();

    // elements

    @ViewChild(CdkPortalOutlet) _portalHost: CdkPortalOutlet;
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

    private _contentPosition: 'above' | 'top' | 'center' | 'bottom' | 'below';
    private _arrowPosition: 'topBottom' | 'leftRight';

    constructor(
        public viewContainerRef: ViewContainerRef,
        private _walkthroughService: WalkthroughService,
        private _renderer: Renderer2,
        private _el: ElementRef,
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

    highlightZone(
        coordinate: WalkthroughElementCoordinate,
        scrollDiff: number,
        animation: 'none' | 'linear',
        animationDelays: number,
        continueFunction: (scroll: boolean) => void,
        scroll: boolean,
    ) {
        const element = this.zone.nativeElement as HTMLElement;
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
                zoneStyle.left = left + partLeft * count + 'px';
                zoneStyle.top = top + partTop * count + 'px';
                zoneStyle.width = width + partWidth * count + 'px';
                zoneStyle.height = height + partHeight * count + 'px';
                if (count++ >= fragment) {
                    clearInterval(timer);
                    this.hideOther = false;
                    continueFunction(scroll);
                }
            }, intervale);
        } else {
            zoneStyle.left = coordinate.left - this.marginZonePx.left + 'px';
            zoneStyle.top = coordinate.top - this.marginZonePx.top + 'px';
            zoneStyle.width = coordinate.width + 'px';
            zoneStyle.height = coordinate.height + 'px';

            continueFunction(scroll);
        }
    }

    highlightZoneStyling(element: HTMLElement) {
        if (element) {
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
    }

    contentBlockPosition(
        paramCoordinate: WalkthroughElementCoordinate,
        alignContent: 'left' | 'center' | 'right' | 'content',
        verticalAlignContent: 'above' | 'top' | 'center' | 'bottom' | 'below',
        contentSpacing: number,
        verticalContentSpacing: number,
    ) {
        const element = this.contentBlock.nativeElement as HTMLElement;

        const elementSize = this._walkthroughService.retrieveCoordinates(element);
        const width = elementSize.width + elementSize.margin.left + elementSize.margin.right;
        const height = elementSize.height + elementSize.margin.top + elementSize.margin.bottom;

        const coordinate = JSON.parse(JSON.stringify(paramCoordinate));
        coordinate.top -= this.marginZonePx.top;
        coordinate.left -= this.marginZonePx.left;
        coordinate.width += this.marginZonePx.left + this.marginZonePx.right;
        coordinate.height += this.marginZonePx.top + this.marginZonePx.bottom;

        // check if we've got the space to respect the alignContent attribute
        let notEnoughSpace = false;
        if (this.hasHighlightZone) {
            const spaceLeft = coordinate.left;
            const spaceRight = window.innerWidth - coordinate.left - coordinate.width;
            if (spaceLeft < width && spaceRight < width) {
                notEnoughSpace = true;
            }
            // if not enough space to respect the alignContent, content goes above/below
            if (
                (verticalAlignContent === 'top' ||
                    verticalAlignContent === 'center' ||
                    verticalAlignContent === 'bottom') &&
                !notEnoughSpace
            ) {
                // change align center to left or right if not enough space to align center
                if (alignContent === 'center' || alignContent === 'content') {
                    const maxSpace = Math.max(spaceRight, spaceLeft);
                    if (maxSpace < width + (window.innerWidth - width) / 2) {
                        alignContent = spaceRight > spaceLeft ? 'right' : 'left';
                    }
                } else if (
                    (alignContent === 'left' && spaceLeft < width) ||
                    (alignContent === 'right' && spaceRight < width)
                ) {
                    verticalAlignContent =
                        verticalAlignContent === 'bottom' || coordinate.top < height ? 'below' : 'above';
                }
            }
        }

        // if not enough space on screen width, we center the content
        if (notEnoughSpace) {
            alignContent = 'center';
        }

        // position of content left/center/right
        element.style.right = '';
        element.style.left = '';
        if (alignContent === 'left') {
            element.style.left = '0';
            if (this.hasHighlightZone) {
                const space = coordinate.left - width;
                // handle contentSpacing
                if (contentSpacing && space > contentSpacing) {
                    element.style.left = coordinate.left - width - contentSpacing + 'px';
                }
            }
        } else if (alignContent === 'center') {
            element.style.left = window.innerWidth / 2 - width / 2 + 'px';
        } else if (alignContent === 'content') {
            element.style.left = coordinate.left + coordinate.width / 2 - width / 2 + 'px';
        } else if (alignContent === 'right') {
            element.style.right = '0';
            if (this.hasHighlightZone) {
                const space = window.innerWidth - coordinate.left - coordinate.width - width;
                // handle contentSpacing
                if (contentSpacing && space > contentSpacing) {
                    element.style.right = '';
                    element.style.left = coordinate.left + coordinate.width + contentSpacing + 'px';
                }
            }
        }

        if (this.hasHighlightZone) {
            // for arrow position
            const startLeft = this._walkthroughService.retrieveCoordinates(element).left + width / 2;

            this._arrowPosition =
                startLeft > coordinate.left - WalkthroughComponent.minimalMargin &&
                startLeft < coordinate.left + coordinate.width + WalkthroughComponent.minimalMargin
                    ? 'topBottom'
                    : 'leftRight';

            // if there is enough place on the left or on the right, we consider verticalAlignContent, otherwise, we ignore it
            if (verticalAlignContent && !notEnoughSpace) {
                let space = 0;
                this._contentPosition = verticalAlignContent;
                switch (verticalAlignContent) {
                    case 'above':
                        space = coordinate.top;
                        if (space > verticalContentSpacing) {
                            element.style.top = coordinate.top - height - verticalContentSpacing + 'px';
                        } else {
                            element.style.top = '0';
                        }
                        this._arrowPosition = 'topBottom';
                        break;
                    case 'top':
                        element.style.top = coordinate.top + 'px';
                        break;
                    case 'center':
                        element.style.top = coordinate.top + coordinate.height / 2 - height / 2 + 'px';
                        break;
                    case 'bottom':
                        element.style.top = coordinate.top + coordinate.height - height + 'px';
                        break;
                    case 'below':
                        element.style.top =
                            this._walkthroughService.getDocumentHeight() -
                                coordinate.top +
                                coordinate.height +
                                verticalContentSpacing >
                            height
                                ? coordinate.top + coordinate.height + verticalContentSpacing + 'px'
                                : this._walkthroughService.getDocumentHeight() - height + 'px';
                        this._arrowPosition = 'topBottom';
                        break;
                }
            } else {
                // position of content top/bottom
                if (verticalAlignContent === 'below' || coordinate.top < height) {
                    element.style.top = coordinate.top + coordinate.height + WalkthroughComponent.minimalMargin + 'px';
                    this._contentPosition = 'below';
                } else {
                    element.style.top = coordinate.top - height - WalkthroughComponent.minimalMargin + 'px';
                    this._contentPosition = 'above';
                }
            }
        } else {
            element.style.top = this._walkthroughService.getHeightOfPage() / 2 - height / 2 + 'px';
        }
    }

    arrowPosition(coordinate: WalkthroughElementCoordinate) {
        const contentBlockElement = this.contentBlock.nativeElement as HTMLElement;
        const contentBlockCoordinates = this._walkthroughService.retrieveCoordinates(contentBlockElement);

        const realWidth = coordinate.width + this.marginZonePx.left + this.marginZonePx.right;
        const realHeight = coordinate.height + this.marginZonePx.top + this.marginZonePx.bottom;

        // start point of the arrow (tail)
        let startLeft = contentBlockCoordinates.left + contentBlockCoordinates.width / 2;
        let startTop = contentBlockCoordinates.top + contentBlockCoordinates.height;

        // start point of the curve of the arrow
        let centerTop: number;
        let centerLeft: number;

        // end point of the arrow (head)
        let endLeft = coordinate.left - this.marginZonePx.left;
        let endTop = coordinate.top - this.marginZonePx.top;

        switch (this._contentPosition) {
            case 'top':
            case 'center':
            case 'bottom':
                if (contentBlockCoordinates.left > coordinate.left) {
                    startLeft = contentBlockCoordinates.left;
                } else {
                    startLeft = contentBlockCoordinates.left + contentBlockCoordinates.width;
                }
                startTop -= contentBlockCoordinates.height / 2;
                break;
            case 'below':
                startTop -= contentBlockCoordinates.height;
                break;
        }

        if (this._arrowPosition === 'topBottom') {
            endLeft += realWidth / 2;

            if (this._contentPosition === 'below') {
                endTop += realHeight + 6;
            } else {
                endTop -= 6;
            }

            centerLeft = (startLeft + endLeft) / 2;
            centerTop = (startTop + endTop) / 2;

            // we make the curve start nearer the tail of the arrow
            if (startTop < centerTop) {
                centerTop = centerTop - Math.abs(startTop - centerTop) / 2;
            } else {
                centerTop = centerTop + Math.abs(startTop - centerTop) / 2;
            }

            this.arrowPath =
                `M${startLeft},${startTop} Q${startLeft},${centerTop} ${centerLeft},${centerTop} ` +
                `Q${endLeft},${centerTop} ${endLeft},${endTop}`;
        } else {
            if (startLeft > coordinate.left) {
                endLeft += realWidth + this.arrowMarkerDist;
            } else {
                endLeft -= this.arrowMarkerDist;
            }

            endTop += realHeight / 2;

            centerLeft = (startLeft + endLeft) / 2;
            centerTop = (startTop + endTop) / 2;

            // we make the curve start nearer the tail of the arrow
            if (startLeft < centerLeft) {
                centerLeft = centerLeft - Math.abs(startLeft - centerLeft) / 2;
            } else {
                centerLeft = centerLeft + Math.abs(startLeft - centerLeft) / 2;
            }

            let directStartLeft: number = startLeft;
            let directStartTop: number = startTop;
            if (this._contentPosition === 'top' || this._contentPosition === 'bottom') {
                directStartLeft = contentBlockCoordinates.left + contentBlockCoordinates.width / 2;
                directStartTop =
                    this._contentPosition === 'top'
                        ? contentBlockCoordinates.top + contentBlockCoordinates.height
                        : contentBlockCoordinates.top;

                // we use direct curve only if the arrow don't cross the content, otherwise, we use double curved
                if (
                    (this._contentPosition === 'top' && directStartTop < endTop - WalkthroughComponent.minimalMargin) ||
                    (this._contentPosition === 'bottom' && directStartTop > endTop + WalkthroughComponent.minimalMargin)
                ) {
                    this.arrowPath = `M${directStartLeft},${directStartTop} Q${directStartLeft},${endTop} ${endLeft},${endTop}`;
                } else {
                    this.arrowPath =
                        `M${startLeft},${startTop} Q${centerLeft},${startTop} ${centerLeft},${centerTop} ` +
                        `Q${centerLeft},${endTop} ${endLeft},${endTop}`;
                }
            } else {
                this.arrowPath = `M${directStartLeft},${directStartTop} Q${directStartLeft},${endTop} ${endLeft},${endTop}`;
            }
        }
    }

    /**
     * stop the walkthrough : hide the container and change to pause at true
     */
    stop() {
        if (this.parent && !this.pause && this.show) {
            this.show = false;
            this.pause = true;
        }
    }

    /**
     * continue the walkthrough if is stopped : show the container and change to pause at false
     */
    continue() {
        if (this.parent && this.pause) {
            this.show = true;
            this.pause = false;
            this.parent.refresh();
        }
    }

    open() {
        // change markerUrl on Safari
        // related to
        // https://gist.github.com/leonderijke/c5cf7c5b2e424c0061d2
        // http://stackoverflow.com/a/18265336/796152
        // http://www.w3.org/TR/SVG/linking.html
        if (is_safari) {
            this.markerUrl = 'url(' + window.location.href + '#wkt-arrow)';
        }
        this.show = true;
    }

    previous() {
        this.close(false, false);

        // we check if previous walkthrough is not disabled
        let current = this.parent;
        while (current) {
            if (current.previousStep && !current.previousStep.disabled) {
                current._loadPreviousStep();
                return;
            } else {
                if (!current.previousStep) {
                    break;
                }
                current = current.previousStep;
            }
        }
        // no more previous walkthrough enabled, we quit the walkthrough
        this.parent = current;
        this.close(true, true);
    }

    next() {
        this.close(false, false);

        // we check if next walkthrough is not disabled
        let current = this.parent;
        while (current) {
            if (current.nextStep && !current.nextStep.disabled) {
                current.loadNextStep();
                return;
            } else {
                if (!current.nextStep) {
                    break;
                }
                current = current.nextStep;
            }
        }
        // no more next walkthrough enabled, we quit the walkthrough
        this.parent = current;
        this.close(true, true);
    }

    close(finishLink = false, closeWalkthrough = true, triggerFinishIfEnd = true) {
        // remove content
        this._portalHost.dispose();
        // hide
        this.show = false;
        if (this.parent) {
            this.parent._hide(finishLink, closeWalkthrough, triggerFinishIfEnd);
        }
    }
}
