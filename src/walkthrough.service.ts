import { Injectable } from '@angular/core';
import { WalkthroughElementCoordinate, WalkthroughMargin } from './walkthrough-tools';

@Injectable()
export class WalkthroughService {

    private _preventDefault = ((e: Event) => {
        e = e || window.event;
        if (e.preventDefault) {
            e.preventDefault();
        }
        e.returnValue = false;
    }).bind(this);

    private _overflowRegex = /(auto|scroll)/;

    private _preventDefaultForScrollKeys = ((e: KeyboardEvent) => {
        // spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36, left: 37, up: 38, right: 39, down: 40
        if (e.keyCode >= 32 && e.keyCode <= 40) {
            this._preventDefault(e);
            return false;
        }
    }).bind(this);

    retrieveCoordinates(element: HTMLElement, margin?: WalkthroughMargin): WalkthroughElementCoordinate {
        const clientrect: ClientRect = element.getBoundingClientRect();
        const style = window.getComputedStyle(element);

        const coordinates = {
            top: clientrect.top - (margin ? margin.top : 0),
            height: clientrect.height,
            width: clientrect.width,
            left: clientrect.left - (margin ? margin.left : 0),
            margin: {
                top: parseFloat(style.marginTop),
                right: parseFloat(style.marginRight),
                bottom: parseFloat(style.marginBottom),
                left: parseFloat(style.marginLeft),
            }
        };
        coordinates.top += this.getTop();
        return coordinates;
    }

    getTop(): number {
        return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    }

    getDocumentHeight() {
        // Height of entire body : https://stackoverflow.com/a/1147768
        const body_height = Math.max(
            document.body.scrollHeight,
            document.body.offsetHeight,
            document.documentElement.clientHeight,
            document.documentElement.scrollHeight,
            document.documentElement.offsetHeight
        );

        return Math.max(this.getHeightOfPage() + this.getTop(), body_height);
    }

    scrollIntoViewIfOutOfView(element: HTMLElement, marginTop = 0) {
        const topOfPage = this.getTop();
        const heightOfPage = this.getHeightOfPage();
        let elementY = 0;
        let elementH = 0;

        let parent = element;
        while (parent && parent !== document.body) {
            elementY += parent.offsetTop;
            parent = parent.offsetParent as HTMLElement;
        }
        elementH = element.offsetHeight;

        if ((topOfPage + heightOfPage) < (elementY + elementH)) {
            element.scrollIntoView(false);
        } else if (elementY < topOfPage) {
            element.scrollIntoView(true);
            window.scrollBy(0, -30);
        } else {
            // test of overflow element
            let current = element;
            while (current && current !== document.body) {
                parent = this.getScrollParent(current);
                if (current.offsetTop + current.offsetHeight - parent.scrollTop > parent.offsetHeight ||
                    current.offsetLeft + current.offsetWidth - parent.scrollLeft > parent.offsetWidth) {

                    element.scrollIntoView();
                    window.scrollBy(0, -30);
                    break;
                }
                current = parent;
            }
        }
    }

    scrollToTopElement(element1: HTMLElement, element2: HTMLElement, margin: WalkthroughMargin) {
        if (element1 && element2) {
            const element1Position = this.retrieveCoordinates(element1, margin);
            const element2Position = this.retrieveCoordinates(element2, margin);
            const minX = Math.min(element1Position.left, element2Position.left);
            const minY = Math.min(element1Position.top, element2Position.top);
            window.scrollTo(minX - 20, minY - 20);
        }
    }

    getScrollParent(element: HTMLElement): HTMLElement {
        let scrollParent;
        let style = getComputedStyle(element);
        const excludeStaticParent = style.position === 'absolute';

        if (style.position !== 'fixed') {

            let parent = element.parentElement;
            while (parent && parent !== document.body) {
                style = getComputedStyle(parent);
                if (
                    !(excludeStaticParent && style.position === 'static') &&
                    this._overflowRegex.test(style.overflow + style.overflowY + style.overflowX)
                ) {
                    scrollParent = parent;
                    break;
                }
                parent = parent.parentElement;
            }
        }
        return scrollParent || document.body;
    }

    getHeightOfPage() {
        return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    }

}
