import { Injectable } from '@angular/core';
import { WalkthroughElementCoordinate } from './walkthrough.component';

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

    disableScroll() {
        window.addEventListener('wheel', this._preventDefault, false);
        window.addEventListener('touchmove', this._preventDefault, false);
        document.addEventListener('keydown', this._preventDefaultForScrollKeys, false);
    }

    enableScroll() {
        window.removeEventListener('wheel', this._preventDefault);
        window.removeEventListener('touchmove', this._preventDefault);
        document.removeEventListener('keydown', this._preventDefaultForScrollKeys);
    }

    retrieveCoordinates(element: HTMLElement): WalkthroughElementCoordinate {
        const clientrect: ClientRect = element.getBoundingClientRect();

        const coordinates = {
            top: clientrect.top,
            height: clientrect.height,
            width: clientrect.width,
            left: clientrect.left
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
        } else {
            // test of overflow element
            let current = element;
            while (current && current !== document.body) {
                parent = this.getScrollParent(current);
                if (current.offsetTop + current.offsetHeight - parent.scrollTop > parent.offsetHeight ||
                    current.offsetLeft + current.offsetWidth - parent.scrollLeft > parent.offsetWidth) {

                    element.scrollIntoView();
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
