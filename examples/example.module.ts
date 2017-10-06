import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ExampleComponent } from './example.component';
import { WalkthroughModule } from '../index';

@NgModule({
    declarations: [
        ExampleComponent
    ],
    imports: [
        BrowserModule,
        WalkthroughModule
    ],
    providers: [],
    bootstrap: [ExampleComponent]
})
export class ExampleModule { }
