import { NgModule } from '@angular/core';
import { ImageGalleryComponent } from './image-gallery.component';
import { SharedModule } from '../shared.module';
import { ImageGalleryZoomComponent } from './image-gallery-zoom/image-gallery-zoom.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    ImageGalleryComponent,
    ImageGalleryZoomComponent,
  ],
  entryComponents:[ImageGalleryZoomComponent],
  exports: [ImageGalleryComponent]
})
export class ImageGalleryModule {
}
