import { Injectable } from '@angular/core';

@Injectable()
export class WalkthroughService {

    private _preventDefault = ((e: Event) => {
        e = e || window.event;
        if (e.preventDefault) {
            e.preventDefault();
        }
        e.returnValue = false;
    }).bind(this);

    private _preventDefaultForScrollKeys = ((e: KeyboardEvent) => {
        // spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
        // left: 37, up: 38, right: 39, down: 40
        if (e.keyCode >= 32 && e.keyCode <= 40) {
            this._preventDefault(e);
            return false;
        }
    }).bind(this)

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

    scrollIntoViewIfOutOfView(element: HTMLElement) {
        const topOfPage = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        const heightOfPage = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        let elementY = 0;
        let elementH = 0;

        let p = element;
        while (p && p.tagName.toLowerCase() !== 'body') {
            elementY += p.offsetTop;
            p = p.offsetParent as HTMLElement;
        }
        elementH = element.offsetHeight;

        if ((topOfPage + heightOfPage) < (elementY + elementH)) {
            element.scrollIntoView(false);
        } else if (elementY < topOfPage) {
            element.scrollIntoView(true);
        }
    }

}
