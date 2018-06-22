import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WalkthroughModule } from 'angular-walkthrough';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    WalkthroughModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
