import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PortalModule } from '@angular/cdk/portal';

import { WalkthroughComponent } from './walkthrough.component';
import { WalkthroughContainerComponent } from './walkthrough-container.component';

@NgModule({
    declarations: [
        WalkthroughComponent,
        WalkthroughContainerComponent
    ],
    imports: [
        CommonModule,
        PortalModule
    ],
    exports: [
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
