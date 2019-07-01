import { NgModule } from '@angular/core';
import { GuaThemeComponent } from './gua-theme.component';
import { BreadcrumbModule } from './breadcrumb/breadcrumb.module';
import { InputSearchModule } from './input-search/input-search.module';
import { SideMenuModule } from './side-menu/side-menu.module';
import { NavbarModule } from './navbar/navbar.module';
import { ButtonModule } from './button/button.module';
import { PageTitleModule } from './page-title/page-title.module';
import { ToolbarModule } from './toolbar/toolbar.module';
import { LabelModule } from './label/label.module';
import { CardListModule } from './card-list/card-list.module';
import { ImageGalleryModule } from './image-gallery/image-gallery.module';
import { LoadingOverlayModule } from './loading-overlay/loading-overlay.module';

@NgModule({
  declarations: [GuaThemeComponent],
  exports: [
    GuaThemeComponent,
    BreadcrumbModule,
    InputSearchModule,
    SideMenuModule,
    NavbarModule,
    ButtonModule,
    PageTitleModule,
    ToolbarModule,
    LabelModule,
    CardListModule,
    ImageGalleryModule,
    LoadingOverlayModule
  ]
})
export class GuaThemeModule { }
