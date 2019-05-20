import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GuaThemeModule } from 'projects/gua-theme-lib/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GuaThemeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
