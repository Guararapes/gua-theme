import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar.component';
import { SharedModule } from '../shared.module';
import { NavBarItemModule } from './navbar-item/navbar-item.module';

@NgModule({
  imports: [
    SharedModule,
    NavBarItemModule,
  ],
  declarations: [
    NavbarComponent,
  ],
  exports: [NavbarComponent, NavBarItemModule]
})
export class NavbarModule {
}
