import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'gua-image-gallery-zoom',
  templateUrl: './image-gallery-zoom.component.html',
  styleUrls: ['./image-gallery-zoom.component.scss']
})
export class ImageGalleryZoomComponent {

  constructor(public dialogRef: MatDialogRef<ImageGalleryZoomComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  closeDialog(closeDialog: boolean) {
    if (closeDialog)
      return;
    this.dialogRef.close();
  }
}
