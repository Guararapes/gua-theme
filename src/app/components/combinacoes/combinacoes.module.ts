import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CombinacoesComponent } from './combinacoes.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [CombinacoesComponent],
  exports: [CombinacoesComponent],
  providers:[
  ]
})
export class CombinacoesModule {
}
