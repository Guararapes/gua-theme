/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ImageGalleryZoomComponent } from './image-gallery-zoom/image-gallery-zoom.component';
var ImageGalleryComponent = /** @class */ (function () {
    function ImageGalleryComponent(dialog) {
        this.dialog = dialog;
        this.onAddImage = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ImageGalleryComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        if (this.images.length) {
            this.selectedImage = this.images[0];
        }
    };
    /**
     * @return {?}
     */
    ImageGalleryComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.proportion) {
            this.height = "auto";
        }
        else {
            this.height = "100%";
        }
        if (this.images.length) {
            this.selectedImage = this.images[0];
        }
    };
    /**
     * @return {?}
     */
    ImageGalleryComponent.prototype.openZoom = /**
     * @return {?}
     */
    function () {
        this.dialog.open(ImageGalleryZoomComponent, {
            disableClose: false,
            height: '100%',
            width: '100%',
            maxWidth: '100vw',
            maxHeight: '100vh',
            data: { url: this.selectedImage, color: this.closeButtonColor, background: this.closeButtonBackground, disableClose: this.disableClose },
            panelClass: this.panelClass,
        });
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    ImageGalleryComponent.prototype.onClick = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.onAddImage.emit($event);
    };
    ImageGalleryComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gua-image-gallery',
                    template: "<ng-container *ngIf=\"images && images.length\" style=\" height: 100%;\">\r\n  <div fxFlex style=\"height: 100%;\">\r\n    <mat-card class=\"imagem-principal\" (click)=\"openZoom()\" fxLayoutAlign=\"center center\">\r\n      <img mat-card-image [style.height]=\"height\" [src]=\"selectedImage\">\r\n    </mat-card>\r\n    <div fxLayout=\"row wrap\" fxLayoutAlign=\"center\">\r\n      <div *ngFor=\"let i of images\" fxLayout=\"row\" (click)=\"selectedImage = i;\" class=\"selecao-image\">\r\n        <mat-card [style.height]=\"height\" fxLayoutAlign=\"center center\">\r\n          <img mat-card-image [src]=\"i\">\r\n        </mat-card>\r\n      </div>\r\n      <div *ngIf=\"onAddImage?.observers?.length\" fxLayout=\"row\" class=\"selecao-image\">\r\n        <mat-card class=\"add-btn\" fxLayoutAlign=\"center center\" (click)=\"onClick($event)\">\r\n          <mat-icon class=\"add-icon\" fxFlex>add_circle</mat-icon>\r\n        </mat-card>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-container>\r\n",
                    styles: [":host .imagem-principal{height:80%}:host .material-icons{font-size:18px}:host .mat-card{cursor:pointer;border-radius:0;padding:0;margin:0;box-shadow:none!important;background-color:transparent}:host .mat-card>img{border-radius:10px;height:100%;width:100%;margin-top:0}:host .selecao-image{height:100px;width:100px;padding:5px}:host .add-btn{width:100%;border-radius:10px;background-color:rgba(0,0,0,.3)}:host .add-icon{height:auto;text-align:center;font-size:40px}"]
                }] }
    ];
    /** @nocollapse */
    ImageGalleryComponent.ctorParameters = function () { return [
        { type: MatDialog }
    ]; };
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
    return ImageGalleryComponent;
}());
export { ImageGalleryComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UtZ2FsbGVyeS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ndWEtdGhlbWUvIiwic291cmNlcyI6WyJsaWIvaW1hZ2UtZ2FsbGVyeS9pbWFnZS1nYWxsZXJ5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUMxRixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDOUMsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFFOUY7SUFrQkUsK0JBQW1CLE1BQWlCO1FBQWpCLFdBQU0sR0FBTixNQUFNLENBQVc7UUFQMUIsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFPRixDQUFDOzs7O0lBR3pDLDJDQUFXOzs7SUFBWDtRQUNFLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUU7WUFDdEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3JDO0lBQ0gsQ0FBQzs7OztJQUVELHdDQUFROzs7SUFBUjtRQUNFLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNuQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztTQUN0QjthQUFNO1lBQ0wsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7U0FDdEI7UUFDRCxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNyQztJQUNILENBQUM7Ozs7SUFFRCx3Q0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyx5QkFBeUIsRUFBRTtZQUMxQyxZQUFZLEVBQUUsS0FBSztZQUNuQixNQUFNLEVBQUUsTUFBTTtZQUNkLEtBQUssRUFBRSxNQUFNO1lBQ2IsUUFBUSxFQUFFLE9BQU87WUFDakIsU0FBUyxFQUFFLE9BQU87WUFDbEIsSUFBSSxFQUFFLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLHFCQUFxQixFQUFFLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3hJLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVTtTQUM1QixDQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELHVDQUFPOzs7O0lBQVAsVUFBUSxNQUFNO1FBQ1osSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDL0IsQ0FBQzs7Z0JBcERGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsbUJBQW1CO29CQUM3Qiw0L0JBQTZDOztpQkFFOUM7Ozs7Z0JBUFEsU0FBUzs7O3lCQVVmLEtBQUs7bUNBQ0wsS0FBSzt3Q0FDTCxLQUFLOzZCQUNMLEtBQUs7NkJBQ0wsTUFBTTs2QkFDTixLQUFLO3lCQUNMLEtBQUs7K0JBQ0wsS0FBSzs7SUF1Q1IsNEJBQUM7Q0FBQSxBQXJERCxJQXFEQztTQWhEWSxxQkFBcUI7OztJQUVoQyx1Q0FBMEI7O0lBQzFCLGlEQUFrQzs7SUFDbEMsc0RBQXVDOztJQUN2QywyQ0FBNEI7O0lBQzVCLDJDQUEwQzs7SUFDMUMsMkNBQTZCOztJQUM3Qix1Q0FBd0I7O0lBQ3hCLDZDQUErQjs7SUFFL0IsOENBQXNCOztJQUVWLHVDQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNYXREaWFsb2cgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XHJcbmltcG9ydCB7IEltYWdlR2FsbGVyeVpvb21Db21wb25lbnQgfSBmcm9tICcuL2ltYWdlLWdhbGxlcnktem9vbS9pbWFnZS1nYWxsZXJ5LXpvb20uY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZ3VhLWltYWdlLWdhbGxlcnknLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9pbWFnZS1nYWxsZXJ5LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9pbWFnZS1nYWxsZXJ5LmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEltYWdlR2FsbGVyeUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcclxuXHJcbiAgQElucHV0KCkgaW1hZ2VzOiBzdHJpbmdbXTtcclxuICBASW5wdXQoKSBjbG9zZUJ1dHRvbkNvbG9yOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgY2xvc2VCdXR0b25CYWNrZ3JvdW5kOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgcGFuZWxDbGFzczogc3RyaW5nO1xyXG4gIEBPdXRwdXQoKSBvbkFkZEltYWdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBJbnB1dCgpIHByb3BvcnRpb246IGJvb2xlYW47XHJcbiAgQElucHV0KCkgaGVpZ2h0OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgZGlzYWJsZUNsb3NlOiBib29sZWFuO1xyXG5cclxuICBzZWxlY3RlZEltYWdlOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBkaWFsb2c6IE1hdERpYWxvZykgeyB9XHJcblxyXG5cclxuICBuZ09uQ2hhbmdlcygpIHtcclxuICAgIGlmICh0aGlzLmltYWdlcy5sZW5ndGgpIHtcclxuICAgICAgdGhpcy5zZWxlY3RlZEltYWdlID0gdGhpcy5pbWFnZXNbMF07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIGlmICh0aGlzLnByb3BvcnRpb24pIHtcclxuICAgICAgdGhpcy5oZWlnaHQgPSBcImF1dG9cIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaGVpZ2h0ID0gXCIxMDAlXCI7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5pbWFnZXMubGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRJbWFnZSA9IHRoaXMuaW1hZ2VzWzBdO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb3Blblpvb20oKTogdm9pZCB7XHJcbiAgICB0aGlzLmRpYWxvZy5vcGVuKEltYWdlR2FsbGVyeVpvb21Db21wb25lbnQsIHtcclxuICAgICAgZGlzYWJsZUNsb3NlOiBmYWxzZSxcclxuICAgICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgIG1heFdpZHRoOiAnMTAwdncnLFxyXG4gICAgICBtYXhIZWlnaHQ6ICcxMDB2aCcsXHJcbiAgICAgIGRhdGE6IHsgdXJsOiB0aGlzLnNlbGVjdGVkSW1hZ2UsIGNvbG9yOiB0aGlzLmNsb3NlQnV0dG9uQ29sb3IsIGJhY2tncm91bmQ6IHRoaXMuY2xvc2VCdXR0b25CYWNrZ3JvdW5kLCBkaXNhYmxlQ2xvc2U6IHRoaXMuZGlzYWJsZUNsb3NlIH0sXHJcbiAgICAgIHBhbmVsQ2xhc3M6IHRoaXMucGFuZWxDbGFzcyxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb25DbGljaygkZXZlbnQpIHtcclxuICAgIHRoaXMub25BZGRJbWFnZS5lbWl0KCRldmVudCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==