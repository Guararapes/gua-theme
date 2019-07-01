import { NgModule } from '@angular/core';
import { CardListComponent } from './card-list.component';
import { SharedModule } from '../shared.module';

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [
    CardListComponent,
  ],
  exports: [CardListComponent]
})
export class CardListModule {
}
