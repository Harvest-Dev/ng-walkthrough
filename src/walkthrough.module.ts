import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PortalModule } from '@angular/cdk/portal';

import { WalkthroughFlowComponent } from './walkthrough-flow.component';
import { WalkthroughComponent } from './walkthrough.component';
import { WalkthroughContainerComponent } from './walkthrough-container.component';

@NgModule({
    declarations: [
        WalkthroughFlowComponent,
        WalkthroughComponent,
        WalkthroughContainerComponent
    ],
    imports: [
        CommonModule,
        PortalModule
    ],
    exports: [
        WalkthroughFlowComponent,
        WalkthroughComponent,
        WalkthroughContainerComponent
    ],
    entryComponents: [
        WalkthroughContainerComponent
    ]
})
export class WalkthroughModule {
    static forRoot() {
        return {
            ngModule: WalkthroughModule,
            providers: []
        };
    }
}
