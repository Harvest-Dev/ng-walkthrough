import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PortalModule } from '@angular/cdk/portal';

import { WalkthroughFlowComponent } from './walkthrough-flow.component';
import { WalkthroughComponent } from './walkthrough.component';
import { WalkthroughService } from './walkthrough.service';
import { WalkthroughContainerComponent } from './walkthrough-container.component';

@NgModule({
    declarations: [
        WalkthroughFlowComponent,
        WalkthroughComponent,
        WalkthroughContainerComponent
    ],
    exports: [
        WalkthroughFlowComponent,
        WalkthroughComponent,
        WalkthroughContainerComponent
    ],
    imports: [
        CommonModule,
        PortalModule
    ],
    entryComponents: [
        WalkthroughContainerComponent
    ],
    providers: [
        WalkthroughService
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
