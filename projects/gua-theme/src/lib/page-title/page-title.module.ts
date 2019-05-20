import { NgModule } from '@angular/core';
import { SharedModule } from '../shared.module';
import { SideMenuModule } from '../side-menu/side-menu.module';
import { InputSearchModule } from '../input-search/input-search.module';
import { PageTitleComponent } from './page-title.component';

@NgModule({
  declarations: [PageTitleComponent],
  imports: [
    SharedModule,
    SideMenuModule,
    InputSearchModule
  ],
  exports: [PageTitleComponent]
})
export class PageTitleModule { }
