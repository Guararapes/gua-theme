import { NgModule } from '@angular/core';
import { LabelComponent } from './label.component';
import { SharedModule } from '../shared.module';

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [
    LabelComponent,
  ],
  exports: [LabelComponent]
})
export class LabelModule {
}
