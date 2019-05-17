import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CombinacoesModule } from './combinacoes/combinacoes.module';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    CombinacoesModule
  ],
  exports:[CombinacoesModule],
  providers: [],
  bootstrap: []
})
export class GuaThemeModule { }
