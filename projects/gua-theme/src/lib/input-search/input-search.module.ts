import { NgModule } from '@angular/core';
import { SharedModule } from '../shared.module';
import { InputSearchComponent } from './input-search.component';

@NgModule({
  declarations: [InputSearchComponent],
  imports: [
    SharedModule
  ],
  exports: [InputSearchComponent]
})
export class InputSearchModule { }
