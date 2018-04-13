import { Component, ViewChild } from '@angular/core';

import { WalkthroughText, WalkthroughContainerComponent, WalkthroughEvent, WalkthroughComponent } from '../src';

@Component({
    selector: 'example-root',
    templateUrl: './example.component.html',
    styleUrls: ['./example.component.scss']
})
export class ExampleComponent {

    frenchText: WalkthroughText = {
        previous: 'Précédent',
        next: 'Suivant',
        close: 'Fermer'
    };

    testClickCount = 0;
    testClickTexts = ['click me', 'it\'s ok!', 'realy ok', 'ok ok...', 'stop that!'];
    testPosition = 'center';

    hideCount = 3;
    private _count = 3;
    private _start = false;

    buttonAction() {
        if (this.testClickCount < this.testClickTexts.length - 1) {
            this.testClickCount++;
        }
    }

    focusClickAction(event: Event, contenaire: WalkthroughContainerComponent) {
        contenaire.next();
    }

    walk3IsReady(event: WalkthroughEvent) {
        // tslint:disable-next-line:no-console
        console.log('walk3IsReady', event);
        setTimeout(() => {
            event.component.arrowColor = 'red';
        }, 1000);
        setTimeout(() => {
            event.component.arrowColor = 'blue';
        }, 2000);
        setTimeout(() => {
            event.component.arrowColor = 'yellow';
        }, 3000);
    }

    hideWalkthrough() {
        if (this.hideCount === this._count && !this._start) {
            this._start = true;
            const int = setInterval(() => {
                this.hideCount--;
                if (this.hideCount === 0) {
                    clearInterval(int);
                    if (WalkthroughComponent.walkthroughHasShow() && !WalkthroughComponent.walkthroughHasPause()) {
                        WalkthroughComponent.walkthroughStop();
                    } else {
                        console.warn('Not walkthrough showing');
                        this._start = false;
                        this.hideCount = this._count;
                    }
                }
            }, 1000);
        } else if (this.hideCount === 0) {
            this._start = false;
            this.hideCount = this._count;
            WalkthroughComponent.walkthroughContinue();
        }
    }

    walk1Closed(finishButton: boolean) {
        // tslint:disable-next-line:no-console
        console.log('walk1 has been closed with value : ' + (finishButton ? 'true' : 'false'));
    }

    walk1Finished() {
        // tslint:disable-next-line:no-console
        console.log('walk1 has been finished');
    }

    flowClosed(finishButton: boolean) {
        // tslint:disable-next-line:no-console
        console.log('flow has been closed with value : ' + (finishButton ? 'true' : 'false'));
    }

    flowFinished() {
        // tslint:disable-next-line:no-console
        console.log('flow has been finished');
    }
}
