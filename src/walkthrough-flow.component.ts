import {
    Component,
    ContentChildren,
    QueryList,
    AfterViewInit
} from '@angular/core';
import { WalkthroughComponent } from './walkthrough.component';

@Component({
    selector: 'ng-walkthrough-flow',
    template: ''
})
export class WalkthroughFlowComponent implements AfterViewInit {

    @ContentChildren(WalkthroughComponent) walkthroughComponents: QueryList<WalkthroughComponent>;

    constructor(
    ) { }

    ngAfterViewInit() {
        setTimeout(() => {
            let prevComp: WalkthroughComponent = null;
            this.walkthroughComponents.forEach((walkthrough: WalkthroughComponent) => {
                if (prevComp) {
                    walkthrough.previousStep = prevComp;
                    prevComp.nextStep = walkthrough;
                }
                prevComp = walkthrough;
            });
            prevComp.finishStep = true;
        }, 0);
    }

    start() {
        this.walkthroughComponents.first.open();
    }
}
