/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ImageGalleryZoomComponent } from './image-gallery-zoom/image-gallery-zoom.component';
export class ImageGalleryComponent {
    /**
     * @param {?} dialog
     */
    constructor(dialog) {
        this.dialog = dialog;
        this.onAddImage = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        if (this.images.length) {
            this.selectedImage = this.images[0];
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.proportion) {
            this.height = "auto";
        }
        else {
            this.height = "100%";
        }
        if (this.images.length) {
            this.selectedImage = this.images[0];
        }
    }
    /**
     * @return {?}
     */
    openZoom() {
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
    /**
     * @param {?} $event
     * @return {?}
     */
    onClick($event) {
        this.onAddImage.emit($event);
    }
}
ImageGalleryComponent.decorators = [
    { type: Component, args: [{
                selector: 'gua-image-gallery',
                template: "<ng-container *ngIf=\"images && images.length\" style=\" height: 100%;\">\r\n  <div fxFlex style=\"height: 100%;\">\r\n    <mat-card class=\"imagem-principal\" (click)=\"openZoom()\" fxLayoutAlign=\"center center\">\r\n      <img mat-card-image [style.height]=\"height\" [src]=\"selectedImage\">\r\n    </mat-card>\r\n    <div fxLayout=\"row wrap\" fxLayoutAlign=\"center\">\r\n      <div *ngFor=\"let i of images\" fxLayout=\"row\" (click)=\"selectedImage = i;\" class=\"selecao-image\">\r\n        <mat-card [style.height]=\"height\" fxLayoutAlign=\"center center\">\r\n          <img mat-card-image [src]=\"i\">\r\n        </mat-card>\r\n      </div>\r\n      <div *ngIf=\"onAddImage?.observers?.length\" fxLayout=\"row\" class=\"selecao-image\">\r\n        <mat-card class=\"add-btn\" fxLayoutAlign=\"center center\" (click)=\"onClick($event)\">\r\n          <mat-icon class=\"add-icon\" fxFlex>add_circle</mat-icon>\r\n        </mat-card>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-container>\r\n",
                styles: [":host .imagem-principal{height:80%}:host .material-icons{font-size:18px}:host .mat-card{cursor:pointer;border-radius:0;padding:0;margin:0;box-shadow:none!important;background-color:transparent}:host .mat-card>img{border-radius:10px;height:100%;width:100%;margin-top:0}:host .selecao-image{height:100px;width:100px;padding:5px}:host .add-btn{width:100%;border-radius:10px;background-color:rgba(0,0,0,.3)}:host .add-icon{height:auto;text-align:center;font-size:40px}"]
            }] }
];
/** @nocollapse */
ImageGalleryComponent.ctorParameters = () => [
    { type: MatDialog }
];
ImageGalleryComponent.propDecorators = {
    images: [{ type: Input }],
    closeButtonColor: [{ type: Input }],
    closeButtonBackground: [{ type: Input }],
    panelClass: [{ type: Input }],
    onAddImage: [{ type: Output }],
    proportion: [{ type: Input }],
    height: [{ type: Input }],
    disableClose: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    ImageGalleryComponent.prototype.images;
    /** @type {?} */
    ImageGalleryComponent.prototype.closeButtonColor;
    /** @type {?} */
    ImageGalleryComponent.prototype.closeButtonBackground;
    /** @type {?} */
    ImageGalleryComponent.prototype.panelClass;
    /** @type {?} */
    ImageGalleryComponent.prototype.onAddImage;
    /** @type {?} */
    ImageGalleryComponent.prototype.proportion;
    /** @type {?} */
    ImageGalleryComponent.prototype.height;
    /** @type {?} */
    ImageGalleryComponent.prototype.disableClose;
    /** @type {?} */
    ImageGalleryComponent.prototype.selectedImage;
    /** @type {?} */
    ImageGalleryComponent.prototype.dialog;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UtZ2FsbGVyeS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ndWEtdGhlbWUtbGliLyIsInNvdXJjZXMiOlsibGliL2ltYWdlLWdhbGxlcnkvaW1hZ2UtZ2FsbGVyeS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDMUYsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzlDLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBTzlGLE1BQU0sT0FBTyxxQkFBcUI7Ozs7SUFhaEMsWUFBbUIsTUFBaUI7UUFBakIsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQVAxQixlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQU9GLENBQUM7Ozs7SUFHekMsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUU7WUFDdEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3JDO0lBQ0gsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7U0FDdEI7YUFBTTtZQUNMLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1NBQ3RCO1FBQ0QsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRTtZQUN0QixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDckM7SUFDSCxDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHlCQUF5QixFQUFFO1lBQzFDLFlBQVksRUFBRSxLQUFLO1lBQ25CLE1BQU0sRUFBRSxNQUFNO1lBQ2QsS0FBSyxFQUFFLE1BQU07WUFDYixRQUFRLEVBQUUsT0FBTztZQUNqQixTQUFTLEVBQUUsT0FBTztZQUNsQixJQUFJLEVBQUUsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMscUJBQXFCLEVBQUUsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDeEksVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVO1NBQzVCLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQsT0FBTyxDQUFDLE1BQU07UUFDWixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMvQixDQUFDOzs7WUFwREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLDQvQkFBNkM7O2FBRTlDOzs7O1lBUFEsU0FBUzs7O3FCQVVmLEtBQUs7K0JBQ0wsS0FBSztvQ0FDTCxLQUFLO3lCQUNMLEtBQUs7eUJBQ0wsTUFBTTt5QkFDTixLQUFLO3FCQUNMLEtBQUs7MkJBQ0wsS0FBSzs7OztJQVBOLHVDQUEwQjs7SUFDMUIsaURBQWtDOztJQUNsQyxzREFBdUM7O0lBQ3ZDLDJDQUE0Qjs7SUFDNUIsMkNBQTBDOztJQUMxQywyQ0FBNkI7O0lBQzdCLHVDQUF3Qjs7SUFDeEIsNkNBQStCOztJQUUvQiw4Q0FBc0I7O0lBRVYsdUNBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1hdERpYWxvZyB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcclxuaW1wb3J0IHsgSW1hZ2VHYWxsZXJ5Wm9vbUNvbXBvbmVudCB9IGZyb20gJy4vaW1hZ2UtZ2FsbGVyeS16b29tL2ltYWdlLWdhbGxlcnktem9vbS5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdndWEtaW1hZ2UtZ2FsbGVyeScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2ltYWdlLWdhbGxlcnkuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2ltYWdlLWdhbGxlcnkuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSW1hZ2VHYWxsZXJ5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xyXG5cclxuICBASW5wdXQoKSBpbWFnZXM6IHN0cmluZ1tdO1xyXG4gIEBJbnB1dCgpIGNsb3NlQnV0dG9uQ29sb3I6IHN0cmluZztcclxuICBASW5wdXQoKSBjbG9zZUJ1dHRvbkJhY2tncm91bmQ6IHN0cmluZztcclxuICBASW5wdXQoKSBwYW5lbENsYXNzOiBzdHJpbmc7XHJcbiAgQE91dHB1dCgpIG9uQWRkSW1hZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQElucHV0KCkgcHJvcG9ydGlvbjogYm9vbGVhbjtcclxuICBASW5wdXQoKSBoZWlnaHQ6IHN0cmluZztcclxuICBASW5wdXQoKSBkaXNhYmxlQ2xvc2U6IGJvb2xlYW47XHJcblxyXG4gIHNlbGVjdGVkSW1hZ2U6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIGRpYWxvZzogTWF0RGlhbG9nKSB7IH1cclxuXHJcblxyXG4gIG5nT25DaGFuZ2VzKCkge1xyXG4gICAgaWYgKHRoaXMuaW1hZ2VzLmxlbmd0aCkge1xyXG4gICAgICB0aGlzLnNlbGVjdGVkSW1hZ2UgPSB0aGlzLmltYWdlc1swXTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgaWYgKHRoaXMucHJvcG9ydGlvbikge1xyXG4gICAgICB0aGlzLmhlaWdodCA9IFwiYXV0b1wiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5oZWlnaHQgPSBcIjEwMCVcIjtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmltYWdlcy5sZW5ndGgpIHtcclxuICAgICAgdGhpcy5zZWxlY3RlZEltYWdlID0gdGhpcy5pbWFnZXNbMF07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvcGVuWm9vbSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGlhbG9nLm9wZW4oSW1hZ2VHYWxsZXJ5Wm9vbUNvbXBvbmVudCwge1xyXG4gICAgICBkaXNhYmxlQ2xvc2U6IGZhbHNlLFxyXG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgbWF4V2lkdGg6ICcxMDB2dycsXHJcbiAgICAgIG1heEhlaWdodDogJzEwMHZoJyxcclxuICAgICAgZGF0YTogeyB1cmw6IHRoaXMuc2VsZWN0ZWRJbWFnZSwgY29sb3I6IHRoaXMuY2xvc2VCdXR0b25Db2xvciwgYmFja2dyb3VuZDogdGhpcy5jbG9zZUJ1dHRvbkJhY2tncm91bmQsIGRpc2FibGVDbG9zZTogdGhpcy5kaXNhYmxlQ2xvc2UgfSxcclxuICAgICAgcGFuZWxDbGFzczogdGhpcy5wYW5lbENsYXNzLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBvbkNsaWNrKCRldmVudCkge1xyXG4gICAgdGhpcy5vbkFkZEltYWdlLmVtaXQoJGV2ZW50KTtcclxuICB9XHJcbn1cclxuIl19