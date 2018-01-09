import { Component } from '@angular/core';

import { WalkthroughText, WalkthroughContainerComponent } from '../src';

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
    }

    testClickCount = 0;
    testClickTexts = ['click me', 'it\'s ok!', 'realy ok', 'ok ok...', 'stop that!']
    testPosition = 'center';

    buttonAction() {
        if (this.testClickCount < this.testClickTexts.length - 1) {
            this.testClickCount++;
        }
    }

    focusClickAction(event: Event, contenaire: WalkthroughContainerComponent) {
        contenaire.next();
    }

    walk3IsReady() {
        window.alert('walk3 is ready');
    }

    walk1Closed(finishButton: boolean) {
        window.alert('walk1 has been closed with value : ' + (finishButton ? 'true' : 'false'));
    }

    walk1Finished() {
        window.alert('walk1 has been finished');
    }
}
