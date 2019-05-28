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
                template: "<ng-container *ngIf=\"images && images.length\">\r\n  <div fxFlex fxFlexFill>\r\n    <mat-card class=\"imagem-principal\" (click)=\"openZoom()\" fxLayoutAlign=\"center center\">\r\n      <img mat-card-image [style.height]=\"height\" [src]=\"selectedImage\">\r\n    </mat-card>\r\n    <div fxLayout=\"row wrap\" fxLayoutAlign=\"center\">\r\n      <div *ngFor=\"let i of images\" fxLayout=\"row\" (click)=\"selectedImage = i;\" class=\"selecao-image\">\r\n        <mat-card [style.height]=\"height\" fxLayoutAlign=\"center center\">\r\n          <img mat-card-image [src]=\"i\">\r\n        </mat-card>\r\n      </div>\r\n      <div *ngIf=\"onAddImage?.observers?.length\" fxLayout=\"row\" class=\"selecao-image\">\r\n        <mat-card class=\"add-btn\" fxLayoutAlign=\"center center\" (click)=\"onClick($event)\">\r\n          <mat-icon class=\"add-icon\" fxFlex>add_circle</mat-icon>\r\n        </mat-card>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-container>\r\n",
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
    onAddImage: [{ type: Output }],
    proportion: [{ type: Input }]
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
    ImageGalleryComponent.prototype.proportion;
    /** @type {?} */
    ImageGalleryComponent.prototype.height;
    /** @type {?} */
    ImageGalleryComponent.prototype.selectedImage;
    /** @type {?} */
    ImageGalleryComponent.prototype.dialog;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UtZ2FsbGVyeS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ndWEtdGhlbWUtbGliLyIsInNvdXJjZXMiOlsibGliL2ltYWdlLWdhbGxlcnkvaW1hZ2UtZ2FsbGVyeS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDMUYsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzlDLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBTzlGLE1BQU0sT0FBTyxxQkFBcUI7Ozs7SUFXaEMsWUFBbUIsTUFBaUI7UUFBakIsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQU4xQixlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQU1GLENBQUM7Ozs7SUFHekMsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUU7WUFDdEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3JDO0lBQ0gsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7U0FDdEI7YUFBTTtZQUNMLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1NBQ3RCO1FBQ0QsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRTtZQUN0QixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDckM7SUFDSCxDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHlCQUF5QixFQUFFO1lBQzFDLFlBQVksRUFBRSxJQUFJO1lBQ2xCLE1BQU0sRUFBRSxNQUFNO1lBQ2QsS0FBSyxFQUFFLE1BQU07WUFDYixRQUFRLEVBQUUsT0FBTztZQUNqQixTQUFTLEVBQUUsT0FBTztZQUNsQixJQUFJLEVBQUUsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQy9ELFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVTtTQUM1QixDQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELE9BQU8sQ0FBQyxNQUFNO1FBQ1osSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDL0IsQ0FBQzs7O1lBbERGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixzOUJBQTZDOzthQUU5Qzs7OztZQVBRLFNBQVM7OztxQkFVZixLQUFLOytCQUNMLEtBQUs7eUJBQ0wsS0FBSzt5QkFDTCxNQUFNO3lCQUNOLEtBQUs7Ozs7SUFKTix1Q0FBMEI7O0lBQzFCLGlEQUFrQzs7SUFDbEMsMkNBQTRCOztJQUM1QiwyQ0FBMEM7O0lBQzFDLDJDQUE2Qjs7SUFDN0IsdUNBQWU7O0lBRWYsOENBQXNCOztJQUVWLHVDQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNYXREaWFsb2cgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XHJcbmltcG9ydCB7IEltYWdlR2FsbGVyeVpvb21Db21wb25lbnQgfSBmcm9tICcuL2ltYWdlLWdhbGxlcnktem9vbS9pbWFnZS1nYWxsZXJ5LXpvb20uY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZ3VhLWltYWdlLWdhbGxlcnknLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9pbWFnZS1nYWxsZXJ5LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9pbWFnZS1nYWxsZXJ5LmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEltYWdlR2FsbGVyeUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcclxuXHJcbiAgQElucHV0KCkgaW1hZ2VzOiBzdHJpbmdbXTtcclxuICBASW5wdXQoKSBjbG9zZUJ1dHRvbkNvbG9yOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgcGFuZWxDbGFzczogc3RyaW5nO1xyXG4gIEBPdXRwdXQoKSBvbkFkZEltYWdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBJbnB1dCgpIHByb3BvcnRpb246IGJvb2xlYW47XHJcbiAgaGVpZ2h0OiBzdHJpbmc7XHJcblxyXG4gIHNlbGVjdGVkSW1hZ2U6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIGRpYWxvZzogTWF0RGlhbG9nKSB7IH1cclxuXHJcblxyXG4gIG5nT25DaGFuZ2VzKCkge1xyXG4gICAgaWYgKHRoaXMuaW1hZ2VzLmxlbmd0aCkge1xyXG4gICAgICB0aGlzLnNlbGVjdGVkSW1hZ2UgPSB0aGlzLmltYWdlc1swXTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgaWYgKHRoaXMucHJvcG9ydGlvbikge1xyXG4gICAgICB0aGlzLmhlaWdodCA9IFwiYXV0b1wiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5oZWlnaHQgPSBcIjEwMCVcIjtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmltYWdlcy5sZW5ndGgpIHtcclxuICAgICAgdGhpcy5zZWxlY3RlZEltYWdlID0gdGhpcy5pbWFnZXNbMF07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvcGVuWm9vbSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGlhbG9nLm9wZW4oSW1hZ2VHYWxsZXJ5Wm9vbUNvbXBvbmVudCwge1xyXG4gICAgICBkaXNhYmxlQ2xvc2U6IHRydWUsXHJcbiAgICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICBtYXhXaWR0aDogJzEwMHZ3JyxcclxuICAgICAgbWF4SGVpZ2h0OiAnMTAwdmgnLFxyXG4gICAgICBkYXRhOiB7IHVybDogdGhpcy5zZWxlY3RlZEltYWdlLCBjb2xvcjogdGhpcy5jbG9zZUJ1dHRvbkNvbG9yIH0sXHJcbiAgICAgIHBhbmVsQ2xhc3M6IHRoaXMucGFuZWxDbGFzcyxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb25DbGljaygkZXZlbnQpIHtcclxuICAgIHRoaXMub25BZGRJbWFnZS5lbWl0KCRldmVudCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==