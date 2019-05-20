import { NgModule } from '@angular/core';
import { ToolbarComponent } from './toolbar.component';
import { SharedModule } from '../shared.module';
import { NavbarModule } from '../navbar/navbar.module';
import { InputSearchModule } from '../input-search/input-search.module';
import { SideMenuModule } from '../side-menu/side-menu.module';
import { ButtonModule } from '../button/button.module';
@NgModule({
  declarations: [ToolbarComponent],
  imports: [
    SharedModule,
    NavbarModule,
    InputSearchModule,
    SideMenuModule,
    ButtonModule
  ],
  exports: [
    ToolbarComponent
  ]
})
export class ToolbarModule { }
