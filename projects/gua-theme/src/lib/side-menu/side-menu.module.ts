import { NgModule } from '@angular/core';
import { SharedModule } from '../shared.module';
import { SideMenuComponent } from './side-menu.component';

@NgModule({
  declarations: [SideMenuComponent],
  imports: [
    SharedModule,
  ],
  exports: [SideMenuComponent]
})
export class SideMenuModule { }
