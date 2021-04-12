import { Injectable } from '@angular/core';

import { WalkthroughElementCoordinate, WalkthroughMargin } from './walkthrough-tools';

@Injectable()
export class WalkthroughService {

    private _overflowRegex = /(auto|scroll)/;

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

    scrollIntoViewIfOutOfView(element: HTMLElement) {
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
