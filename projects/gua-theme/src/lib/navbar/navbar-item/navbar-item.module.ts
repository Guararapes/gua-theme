import { NgModule } from '@angular/core';
import { NavBarItemComponent } from './navbar-item.component';
import { SharedModule } from '../../shared.module';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    NavBarItemComponent,
  ],
  exports: [NavBarItemComponent]
})
export class NavBarItemModule {
}
