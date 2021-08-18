import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { WalkthroughModule } from 'projects/angular-walkthrough/src/public_api';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [WalkthroughModule, BrowserModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
