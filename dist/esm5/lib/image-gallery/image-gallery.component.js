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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UtZ2FsbGVyeS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ndWEtdGhlbWUtbGliLyIsInNvdXJjZXMiOlsibGliL2ltYWdlLWdhbGxlcnkvaW1hZ2UtZ2FsbGVyeS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDMUYsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzlDLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBRTlGO0lBa0JFLCtCQUFtQixNQUFpQjtRQUFqQixXQUFNLEdBQU4sTUFBTSxDQUFXO1FBUDFCLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBT0YsQ0FBQzs7OztJQUd6QywyQ0FBVzs7O0lBQVg7UUFDRSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNyQztJQUNILENBQUM7Ozs7SUFFRCx3Q0FBUTs7O0lBQVI7UUFDRSxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7U0FDdEI7YUFBTTtZQUNMLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1NBQ3RCO1FBQ0QsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRTtZQUN0QixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDckM7SUFDSCxDQUFDOzs7O0lBRUQsd0NBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMseUJBQXlCLEVBQUU7WUFDMUMsWUFBWSxFQUFFLEtBQUs7WUFDbkIsTUFBTSxFQUFFLE1BQU07WUFDZCxLQUFLLEVBQUUsTUFBTTtZQUNiLFFBQVEsRUFBRSxPQUFPO1lBQ2pCLFNBQVMsRUFBRSxPQUFPO1lBQ2xCLElBQUksRUFBRSxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRTtZQUN4SSxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7U0FDNUIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFRCx1Q0FBTzs7OztJQUFQLFVBQVEsTUFBTTtRQUNaLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQy9CLENBQUM7O2dCQXBERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsNC9CQUE2Qzs7aUJBRTlDOzs7O2dCQVBRLFNBQVM7Ozt5QkFVZixLQUFLO21DQUNMLEtBQUs7d0NBQ0wsS0FBSzs2QkFDTCxLQUFLOzZCQUNMLE1BQU07NkJBQ04sS0FBSzt5QkFDTCxLQUFLOytCQUNMLEtBQUs7O0lBdUNSLDRCQUFDO0NBQUEsQUFyREQsSUFxREM7U0FoRFkscUJBQXFCOzs7SUFFaEMsdUNBQTBCOztJQUMxQixpREFBa0M7O0lBQ2xDLHNEQUF1Qzs7SUFDdkMsMkNBQTRCOztJQUM1QiwyQ0FBMEM7O0lBQzFDLDJDQUE2Qjs7SUFDN0IsdUNBQXdCOztJQUN4Qiw2Q0FBK0I7O0lBRS9CLDhDQUFzQjs7SUFFVix1Q0FBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWF0RGlhbG9nIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgeyBJbWFnZUdhbGxlcnlab29tQ29tcG9uZW50IH0gZnJvbSAnLi9pbWFnZS1nYWxsZXJ5LXpvb20vaW1hZ2UtZ2FsbGVyeS16b29tLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2d1YS1pbWFnZS1nYWxsZXJ5JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vaW1hZ2UtZ2FsbGVyeS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vaW1hZ2UtZ2FsbGVyeS5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJbWFnZUdhbGxlcnlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XHJcblxyXG4gIEBJbnB1dCgpIGltYWdlczogc3RyaW5nW107XHJcbiAgQElucHV0KCkgY2xvc2VCdXR0b25Db2xvcjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGNsb3NlQnV0dG9uQmFja2dyb3VuZDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHBhbmVsQ2xhc3M6IHN0cmluZztcclxuICBAT3V0cHV0KCkgb25BZGRJbWFnZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBASW5wdXQoKSBwcm9wb3J0aW9uOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGhlaWdodDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGRpc2FibGVDbG9zZTogYm9vbGVhbjtcclxuXHJcbiAgc2VsZWN0ZWRJbWFnZTogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZGlhbG9nOiBNYXREaWFsb2cpIHsgfVxyXG5cclxuXHJcbiAgbmdPbkNoYW5nZXMoKSB7XHJcbiAgICBpZiAodGhpcy5pbWFnZXMubGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRJbWFnZSA9IHRoaXMuaW1hZ2VzWzBdO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBpZiAodGhpcy5wcm9wb3J0aW9uKSB7XHJcbiAgICAgIHRoaXMuaGVpZ2h0ID0gXCJhdXRvXCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmhlaWdodCA9IFwiMTAwJVwiO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuaW1hZ2VzLmxlbmd0aCkge1xyXG4gICAgICB0aGlzLnNlbGVjdGVkSW1hZ2UgPSB0aGlzLmltYWdlc1swXTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9wZW5ab29tKCk6IHZvaWQge1xyXG4gICAgdGhpcy5kaWFsb2cub3BlbihJbWFnZUdhbGxlcnlab29tQ29tcG9uZW50LCB7XHJcbiAgICAgIGRpc2FibGVDbG9zZTogZmFsc2UsXHJcbiAgICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICBtYXhXaWR0aDogJzEwMHZ3JyxcclxuICAgICAgbWF4SGVpZ2h0OiAnMTAwdmgnLFxyXG4gICAgICBkYXRhOiB7IHVybDogdGhpcy5zZWxlY3RlZEltYWdlLCBjb2xvcjogdGhpcy5jbG9zZUJ1dHRvbkNvbG9yLCBiYWNrZ3JvdW5kOiB0aGlzLmNsb3NlQnV0dG9uQmFja2dyb3VuZCwgZGlzYWJsZUNsb3NlOiB0aGlzLmRpc2FibGVDbG9zZSB9LFxyXG4gICAgICBwYW5lbENsYXNzOiB0aGlzLnBhbmVsQ2xhc3MsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG9uQ2xpY2soJGV2ZW50KSB7XHJcbiAgICB0aGlzLm9uQWRkSW1hZ2UuZW1pdCgkZXZlbnQpO1xyXG4gIH1cclxufVxyXG4iXX0=