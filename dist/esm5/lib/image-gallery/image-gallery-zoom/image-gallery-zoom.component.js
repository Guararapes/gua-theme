/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
var ImageGalleryZoomComponent = /** @class */ (function () {
    function ImageGalleryZoomComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    /**
     * @param {?} closeDialog
     * @return {?}
     */
    ImageGalleryZoomComponent.prototype.closeDialog = /**
     * @param {?} closeDialog
     * @return {?}
     */
    function (closeDialog) {
        if (closeDialog)
            return;
        this.dialogRef.close();
    };
    ImageGalleryZoomComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gua-image-gallery-zoom',
                    template: "<div [style.color]=\"data?.color\" class=\"close-button\">\r\n  <button mat-icon-button (click)=\"closeDialog(false)\" [style.background-color]=\"data?.background\">\r\n    <i class=\"material-icons\">close</i>\r\n  </button>\r\n</div>\r\n<div class=\"image\" (click)=\"closeDialog(data?.disableClose)\">\r\n  <img cdkFocusInitial [src]=\"data.url\">\r\n</div>\r\n",
                    styles: [":host{background-color:#000}:host .image{display:flex;align-items:center;justify-content:center;align-items:center;height:100%}:host img{align-content:center;height:inherit}:host .close-button{color:#000;position:absolute;right:10px;top:10px}:host .mat-icon-button{height:auto;width:auto}:host .material-icons{font-size:50px}"]
                }] }
    ];
    /** @nocollapse */
    ImageGalleryZoomComponent.ctorParameters = function () { return [
        { type: MatDialogRef },
        { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
    ]; };
    return ImageGalleryZoomComponent;
}());
export { ImageGalleryZoomComponent };
if (false) {
    /** @type {?} */
    ImageGalleryZoomComponent.prototype.dialogRef;
    /** @type {?} */
    ImageGalleryZoomComponent.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UtZ2FsbGVyeS16b29tLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2d1YS10aGVtZS1saWIvIiwic291cmNlcyI6WyJsaWIvaW1hZ2UtZ2FsbGVyeS9pbWFnZS1nYWxsZXJ5LXpvb20vaW1hZ2UtZ2FsbGVyeS16b29tLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVsRTtJQU9FLG1DQUFtQixTQUFrRCxFQUFrQyxJQUFTO1FBQTdGLGNBQVMsR0FBVCxTQUFTLENBQXlDO1FBQWtDLFNBQUksR0FBSixJQUFJLENBQUs7SUFBSSxDQUFDOzs7OztJQUVySCwrQ0FBVzs7OztJQUFYLFVBQVksV0FBb0I7UUFDOUIsSUFBSSxXQUFXO1lBQ2IsT0FBTztRQUNULElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDekIsQ0FBQzs7Z0JBYkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx3QkFBd0I7b0JBQ2xDLHdYQUFrRDs7aUJBRW5EOzs7O2dCQU55QixZQUFZO2dEQVNvQyxNQUFNLFNBQUMsZUFBZTs7SUFPaEcsZ0NBQUM7Q0FBQSxBQWRELElBY0M7U0FUWSx5QkFBeUI7OztJQUV4Qiw4Q0FBeUQ7O0lBQUUseUNBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTUFUX0RJQUxPR19EQVRBLCBNYXREaWFsb2dSZWYgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2d1YS1pbWFnZS1nYWxsZXJ5LXpvb20nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9pbWFnZS1nYWxsZXJ5LXpvb20uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2ltYWdlLWdhbGxlcnktem9vbS5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJbWFnZUdhbGxlcnlab29tQ29tcG9uZW50IHtcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPEltYWdlR2FsbGVyeVpvb21Db21wb25lbnQ+LCBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHVibGljIGRhdGE6IGFueSkgeyB9XHJcblxyXG4gIGNsb3NlRGlhbG9nKGNsb3NlRGlhbG9nOiBib29sZWFuKSB7XHJcbiAgICBpZiAoY2xvc2VEaWFsb2cpXHJcbiAgICAgIHJldHVybjtcclxuICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==