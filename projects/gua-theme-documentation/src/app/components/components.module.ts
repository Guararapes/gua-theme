import { NgModule } from '@angular/core';
import { ComponentsComponent } from './components.component';
import { ScrollbarModule } from './scrollbar/scrollbar.module';
import { SharedModule } from '../shared.module';
import { GuaThemeModule } from 'gua-theme';
import { HighlightModule } from './highlightjs/highlight.module';

@NgModule({
  imports: [
    ScrollbarModule,
    SharedModule,
    HighlightModule
  ],
  declarations: [
    ComponentsComponent,
  ],
  exports: [ComponentsComponent]
})
export class ComponentsModule {
}
