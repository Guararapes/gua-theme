import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ImageGalleryZoomComponent } from './image-gallery-zoom/image-gallery-zoom.component';

@Component({
  selector: 'gua-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.scss']
})
export class ImageGalleryComponent implements OnInit, OnChanges {

  @Input() images: string[];
  @Input() closeButtonColor: string;
  @Input() closeButtonBackground: string;
  @Input() panelClass: string;
  @Output() onAddImage = new EventEmitter();
  @Input() proportion: boolean;
  @Input() height: string;
  @Input() disableClose: boolean;

  selectedImage: string;

  constructor(public dialog: MatDialog) { }


  ngOnChanges() {
    if (this.images.length) {
      this.selectedImage = this.images[0];
    }
  }

  ngOnInit() {
    if (this.proportion) {
      this.height = "auto";
    } else {
      this.height = "100%";
    }
    if (this.images.length) {
      this.selectedImage = this.images[0];
    }
  }

  openZoom(): void {
    this.dialog.open(ImageGalleryZoomComponent, {
      disableClose: false,
      height: '100%',
      width: '100%',
      maxWidth: '100vw',
      maxHeight: '100vh',
      data: { url: this.selectedImage, color: this.closeButtonColor, background: this.closeButtonBackground, disableClose: this.disableClose },
      panelClass: this.panelClass,
    });
  }

  onClick($event) {
    this.onAddImage.emit($event);
  }
}
