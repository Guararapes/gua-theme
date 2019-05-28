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
            disableClose: true,
            height: '100%',
            width: '100%',
            maxWidth: '100vw',
            maxHeight: '100vh',
            data: { url: this.selectedImage, color: this.closeButtonColor },
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
                    template: "<ng-container *ngIf=\"images && images.length\">\r\n  <div fxFlex fxFlexFill>\r\n    <mat-card class=\"imagem-principal\" (click)=\"openZoom()\" fxLayoutAlign=\"center center\">\r\n      <img mat-card-image [style.height]=\"height\" [src]=\"selectedImage\">\r\n    </mat-card>\r\n    <div fxLayout=\"row wrap\" fxLayoutAlign=\"center\">\r\n      <div *ngFor=\"let i of images\" fxLayout=\"row\" (click)=\"selectedImage = i;\" class=\"selecao-image\">\r\n        <mat-card [style.height]=\"height\" fxLayoutAlign=\"center center\">\r\n          <img mat-card-image [src]=\"i\">\r\n        </mat-card>\r\n      </div>\r\n      <div *ngIf=\"onAddImage?.observers?.length\" fxLayout=\"row\" class=\"selecao-image\">\r\n        <mat-card class=\"add-btn\" fxLayoutAlign=\"center center\" (click)=\"onClick($event)\">\r\n          <mat-icon class=\"add-icon\" fxFlex>add_circle</mat-icon>\r\n        </mat-card>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-container>\r\n",
                    styles: [":host .imagem-principal{height:80%}:host .mat-card{cursor:pointer;border-radius:0;padding:0;margin:0;box-shadow:none!important;background-color:transparent}:host .mat-card>img{border-radius:10px;height:100%;width:100%;margin-top:0}:host .selecao-image{height:100px;width:100px;padding:5px}:host .add-btn{width:100%;border-radius:10px;background-color:rgba(0,0,0,.3)}:host .add-icon{height:auto;text-align:center;font-size:40px}"]
                }] }
    ];
    /** @nocollapse */
    ImageGalleryComponent.ctorParameters = function () { return [
        { type: MatDialog }
    ]; };
    ImageGalleryComponent.propDecorators = {
        images: [{ type: Input }],
        closeButtonColor: [{ type: Input }],
        panelClass: [{ type: Input }],
        onAddImage: [{ type: Output }],
        proportion: [{ type: Input }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UtZ2FsbGVyeS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ndWEtdGhlbWUtbGliLyIsInNvdXJjZXMiOlsibGliL2ltYWdlLWdhbGxlcnkvaW1hZ2UtZ2FsbGVyeS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDMUYsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzlDLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBRTlGO0lBZ0JFLCtCQUFtQixNQUFpQjtRQUFqQixXQUFNLEdBQU4sTUFBTSxDQUFXO1FBTjFCLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBTUYsQ0FBQzs7OztJQUd6QywyQ0FBVzs7O0lBQVg7UUFDRSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNyQztJQUNILENBQUM7Ozs7SUFFRCx3Q0FBUTs7O0lBQVI7UUFDRSxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7U0FDdEI7YUFBTTtZQUNMLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1NBQ3RCO1FBQ0QsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRTtZQUN0QixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDckM7SUFDSCxDQUFDOzs7O0lBRUQsd0NBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMseUJBQXlCLEVBQUU7WUFDMUMsWUFBWSxFQUFFLElBQUk7WUFDbEIsTUFBTSxFQUFFLE1BQU07WUFDZCxLQUFLLEVBQUUsTUFBTTtZQUNiLFFBQVEsRUFBRSxPQUFPO1lBQ2pCLFNBQVMsRUFBRSxPQUFPO1lBQ2xCLElBQUksRUFBRSxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDL0QsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVO1NBQzVCLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQsdUNBQU87Ozs7SUFBUCxVQUFRLE1BQU07UUFDWixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMvQixDQUFDOztnQkFsREYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLHM5QkFBNkM7O2lCQUU5Qzs7OztnQkFQUSxTQUFTOzs7eUJBVWYsS0FBSzttQ0FDTCxLQUFLOzZCQUNMLEtBQUs7NkJBQ0wsTUFBTTs2QkFDTixLQUFLOztJQXdDUiw0QkFBQztDQUFBLEFBbkRELElBbURDO1NBOUNZLHFCQUFxQjs7O0lBRWhDLHVDQUEwQjs7SUFDMUIsaURBQWtDOztJQUNsQywyQ0FBNEI7O0lBQzVCLDJDQUEwQzs7SUFDMUMsMkNBQTZCOztJQUM3Qix1Q0FBZTs7SUFFZiw4Q0FBc0I7O0lBRVYsdUNBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1hdERpYWxvZyB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcclxuaW1wb3J0IHsgSW1hZ2VHYWxsZXJ5Wm9vbUNvbXBvbmVudCB9IGZyb20gJy4vaW1hZ2UtZ2FsbGVyeS16b29tL2ltYWdlLWdhbGxlcnktem9vbS5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdndWEtaW1hZ2UtZ2FsbGVyeScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2ltYWdlLWdhbGxlcnkuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2ltYWdlLWdhbGxlcnkuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSW1hZ2VHYWxsZXJ5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xyXG5cclxuICBASW5wdXQoKSBpbWFnZXM6IHN0cmluZ1tdO1xyXG4gIEBJbnB1dCgpIGNsb3NlQnV0dG9uQ29sb3I6IHN0cmluZztcclxuICBASW5wdXQoKSBwYW5lbENsYXNzOiBzdHJpbmc7XHJcbiAgQE91dHB1dCgpIG9uQWRkSW1hZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQElucHV0KCkgcHJvcG9ydGlvbjogYm9vbGVhbjtcclxuICBoZWlnaHQ6IHN0cmluZztcclxuXHJcbiAgc2VsZWN0ZWRJbWFnZTogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZGlhbG9nOiBNYXREaWFsb2cpIHsgfVxyXG5cclxuXHJcbiAgbmdPbkNoYW5nZXMoKSB7XHJcbiAgICBpZiAodGhpcy5pbWFnZXMubGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRJbWFnZSA9IHRoaXMuaW1hZ2VzWzBdO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBpZiAodGhpcy5wcm9wb3J0aW9uKSB7XHJcbiAgICAgIHRoaXMuaGVpZ2h0ID0gXCJhdXRvXCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmhlaWdodCA9IFwiMTAwJVwiO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuaW1hZ2VzLmxlbmd0aCkge1xyXG4gICAgICB0aGlzLnNlbGVjdGVkSW1hZ2UgPSB0aGlzLmltYWdlc1swXTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9wZW5ab29tKCk6IHZvaWQge1xyXG4gICAgdGhpcy5kaWFsb2cub3BlbihJbWFnZUdhbGxlcnlab29tQ29tcG9uZW50LCB7XHJcbiAgICAgIGRpc2FibGVDbG9zZTogdHJ1ZSxcclxuICAgICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgIG1heFdpZHRoOiAnMTAwdncnLFxyXG4gICAgICBtYXhIZWlnaHQ6ICcxMDB2aCcsXHJcbiAgICAgIGRhdGE6IHsgdXJsOiB0aGlzLnNlbGVjdGVkSW1hZ2UsIGNvbG9yOiB0aGlzLmNsb3NlQnV0dG9uQ29sb3IgfSxcclxuICAgICAgcGFuZWxDbGFzczogdGhpcy5wYW5lbENsYXNzLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBvbkNsaWNrKCRldmVudCkge1xyXG4gICAgdGhpcy5vbkFkZEltYWdlLmVtaXQoJGV2ZW50KTtcclxuICB9XHJcbn1cclxuIl19