import { NgModule, ModuleWithProviders } from '@angular/core';
import { LoadingOverlayComponent } from "./loading-overlay.component";
import { SharedModule } from '../shared.module';
import { LoadingOverlayService } from './loading-overlay.service';

@NgModule({
  declarations: [
    LoadingOverlayComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    LoadingOverlayComponent
  ],
  providers: [
    LoadingOverlayService
  ]
})
export class LoadingOverlayModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: LoadingOverlayModule,
      providers: [LoadingOverlayService, LoadingOverlayComponent]
    }
  }

}
