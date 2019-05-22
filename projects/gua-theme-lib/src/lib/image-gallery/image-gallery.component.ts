import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ImageGalleryZoomComponent } from './image-gallery-zoom/image-gallery-zoom.component';

@Component({
  selector: 'gua-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.scss']
})
export class ImageGalleryComponent implements OnInit {

  @Input() images: string[];
  @Input() closeButtonColor: string;
  @Input() panelClass: string;
  @Output() onAddImage = new EventEmitter();

  selectedImage: string;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    if (this.images.length) {
      this.selectedImage = this.images[0];
    }
  }

  openZoom(): void {
    this.dialog.open(ImageGalleryZoomComponent, {
      disableClose: true,
      height: '100%',
      width: '100%',
      maxWidth: '100vw',
      maxHeight: '100vh',
      data: { url: this.selectedImage, color: this.closeButtonColor },
      panelClass: this.panelClass,
    });
  }

  onClick($event) {
    this.onAddImage.emit($event);
  }
}
