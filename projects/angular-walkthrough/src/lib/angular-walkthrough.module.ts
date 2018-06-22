import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalModule } from '@angular/cdk/portal';

import { WalkthroughFlowComponent } from './walkthrough-flow.component';
import { WalkthroughComponent } from './walkthrough.component';
import { WalkthroughService } from './walkthrough.service';
import { WalkthroughContainerComponent } from './walkthrough-container.component';

@NgModule({
  imports: [
    CommonModule,
    PortalModule
  ],
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
  entryComponents: [
    WalkthroughContainerComponent
  ],
  providers: [
    WalkthroughService
  ]
})
export class WalkthroughModule { }
