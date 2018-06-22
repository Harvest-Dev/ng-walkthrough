import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularWalkthroughModule } from 'angular-walkthrough';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AngularWalkthroughModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
