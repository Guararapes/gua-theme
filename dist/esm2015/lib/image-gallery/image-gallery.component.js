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
    ngOnInit() {
        if (this.images.length) {
            this.selectedImage = this.images[0];
        }
    }
    /**
     * @return {?}
     */
    openZoom() {
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
                template: "<ng-container *ngIf=\"images && images.length\">\r\n  <div fxFlex fxFlexFill>\r\n    <mat-card class=\"imagem-principal\" (click)=\"openZoom()\" fxLayoutAlign=\"center center\">\r\n      <img mat-card-image [src]=\"selectedImage\">\r\n    </mat-card>\r\n    <div fxLayout=\"row wamp\" fxLayoutAlign=\"center\">\r\n      <div *ngFor=\"let i of images\" fxLayout=\"row\" (click)=\"selectedImage = i;\" class=\"selecao-image\">\r\n        <mat-card fxLayoutAlign=\"center center\">\r\n          <img mat-card-image [src]=\"i\">\r\n        </mat-card>\r\n      </div>\r\n      <div *ngIf=\"onAddImage?.observers?.length\" fxLayout=\"row\" class=\"selecao-image\">\r\n        <mat-card class=\"add-btn\" fxLayoutAlign=\"center center\" (click)=\"onClick($event)\">\r\n          <mat-icon class=\"add-icon\" fxFlex>add_circle</mat-icon>\r\n        </mat-card>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-container>\r\n",
                styles: [":host .imagem-principal{height:80%}:host .mat-card{cursor:pointer;border-radius:0;padding:0;margin:0;box-shadow:none!important;background-color:transparent}:host .mat-card>img{border-radius:10px;height:100%;width:100%;margin-top:0}:host .selecao-image{height:100px;width:100px;padding:5px}:host .add-btn{width:100%;border-radius:10px;background-color:rgba(0,0,0,.3)}:host .add-icon{height:auto;text-align:center;font-size:40px}"]
            }] }
];
/** @nocollapse */
ImageGalleryComponent.ctorParameters = () => [
    { type: MatDialog }
];
ImageGalleryComponent.propDecorators = {
    images: [{ type: Input }],
    closeButtonColor: [{ type: Input }],
    panelClass: [{ type: Input }],
    onAddImage: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    ImageGalleryComponent.prototype.images;
    /** @type {?} */
    ImageGalleryComponent.prototype.closeButtonColor;
    /** @type {?} */
    ImageGalleryComponent.prototype.panelClass;
    /** @type {?} */
    ImageGalleryComponent.prototype.onAddImage;
    /** @type {?} */
    ImageGalleryComponent.prototype.selectedImage;
    /** @type {?} */
    ImageGalleryComponent.prototype.dialog;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UtZ2FsbGVyeS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ndWEtdGhlbWUtbGliLyIsInNvdXJjZXMiOlsibGliL2ltYWdlLWdhbGxlcnkvaW1hZ2UtZ2FsbGVyeS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzlDLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBTzlGLE1BQU0sT0FBTyxxQkFBcUI7Ozs7SUFTaEMsWUFBbUIsTUFBaUI7UUFBakIsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQUoxQixlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUlGLENBQUM7Ozs7SUFFekMsUUFBUTtRQUNOLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUU7WUFDdEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3JDO0lBQ0gsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyx5QkFBeUIsRUFBRTtZQUMxQyxZQUFZLEVBQUUsSUFBSTtZQUNsQixNQUFNLEVBQUUsTUFBTTtZQUNkLEtBQUssRUFBRSxNQUFNO1lBQ2IsUUFBUSxFQUFFLE9BQU87WUFDakIsU0FBUyxFQUFFLE9BQU87WUFDbEIsSUFBSSxFQUFFLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtZQUMvRCxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7U0FDNUIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFRCxPQUFPLENBQUMsTUFBTTtRQUNaLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQy9CLENBQUM7OztZQXBDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsazZCQUE2Qzs7YUFFOUM7Ozs7WUFQUSxTQUFTOzs7cUJBVWYsS0FBSzsrQkFDTCxLQUFLO3lCQUNMLEtBQUs7eUJBQ0wsTUFBTTs7OztJQUhQLHVDQUEwQjs7SUFDMUIsaURBQWtDOztJQUNsQywyQ0FBNEI7O0lBQzVCLDJDQUEwQzs7SUFFMUMsOENBQXNCOztJQUVWLHVDQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWF0RGlhbG9nIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgeyBJbWFnZUdhbGxlcnlab29tQ29tcG9uZW50IH0gZnJvbSAnLi9pbWFnZS1nYWxsZXJ5LXpvb20vaW1hZ2UtZ2FsbGVyeS16b29tLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2d1YS1pbWFnZS1nYWxsZXJ5JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vaW1hZ2UtZ2FsbGVyeS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vaW1hZ2UtZ2FsbGVyeS5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJbWFnZUdhbGxlcnlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBASW5wdXQoKSBpbWFnZXM6IHN0cmluZ1tdO1xyXG4gIEBJbnB1dCgpIGNsb3NlQnV0dG9uQ29sb3I6IHN0cmluZztcclxuICBASW5wdXQoKSBwYW5lbENsYXNzOiBzdHJpbmc7XHJcbiAgQE91dHB1dCgpIG9uQWRkSW1hZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIHNlbGVjdGVkSW1hZ2U6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIGRpYWxvZzogTWF0RGlhbG9nKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBpZiAodGhpcy5pbWFnZXMubGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRJbWFnZSA9IHRoaXMuaW1hZ2VzWzBdO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb3Blblpvb20oKTogdm9pZCB7XHJcbiAgICB0aGlzLmRpYWxvZy5vcGVuKEltYWdlR2FsbGVyeVpvb21Db21wb25lbnQsIHtcclxuICAgICAgZGlzYWJsZUNsb3NlOiB0cnVlLFxyXG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgbWF4V2lkdGg6ICcxMDB2dycsXHJcbiAgICAgIG1heEhlaWdodDogJzEwMHZoJyxcclxuICAgICAgZGF0YTogeyB1cmw6IHRoaXMuc2VsZWN0ZWRJbWFnZSwgY29sb3I6IHRoaXMuY2xvc2VCdXR0b25Db2xvciB9LFxyXG4gICAgICBwYW5lbENsYXNzOiB0aGlzLnBhbmVsQ2xhc3MsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG9uQ2xpY2soJGV2ZW50KSB7XHJcbiAgICB0aGlzLm9uQWRkSW1hZ2UuZW1pdCgkZXZlbnQpO1xyXG4gIH1cclxufVxyXG4iXX0=