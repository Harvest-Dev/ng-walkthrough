import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { WalkthroughContainerComponent } from './walkthrough-container.component';
import { WalkthroughFlowComponent } from './walkthrough-flow.component';
import { WalkthroughComponent } from './walkthrough.component';
import { WalkthroughService } from './walkthrough.service';

@NgModule({
    imports: [CommonModule, PortalModule],
    declarations: [WalkthroughFlowComponent, WalkthroughComponent, WalkthroughContainerComponent],
    exports: [WalkthroughFlowComponent, WalkthroughComponent, WalkthroughContainerComponent],
    providers: [WalkthroughService],
})
export class WalkthroughModule {}
