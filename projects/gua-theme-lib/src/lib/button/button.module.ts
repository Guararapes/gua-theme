import { NgModule } from '@angular/core';
import { SharedModule } from '../shared.module';
import { ButtonComponent } from './button.component';

@NgModule({
  declarations: [ButtonComponent],
  imports: [
    SharedModule
  ],
  exports: [ButtonComponent]
})
export class ButtonModule { }
