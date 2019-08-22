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
                    styles: [":host{background-color:#000}:host .image{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;align-items:center;height:100%}:host img{align-content:center;height:inherit}:host .close-button{color:#000;position:absolute;right:10px;top:10px}:host .mat-icon-button{height:auto;width:auto}:host .material-icons{font-size:50px}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UtZ2FsbGVyeS16b29tLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2d1YS10aGVtZS8iLCJzb3VyY2VzIjpbImxpYi9pbWFnZS1nYWxsZXJ5L2ltYWdlLWdhbGxlcnktem9vbS9pbWFnZS1nYWxsZXJ5LXpvb20uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsZUFBZSxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRWxFO0lBT0UsbUNBQW1CLFNBQWtELEVBQWtDLElBQVM7UUFBN0YsY0FBUyxHQUFULFNBQVMsQ0FBeUM7UUFBa0MsU0FBSSxHQUFKLElBQUksQ0FBSztJQUFJLENBQUM7Ozs7O0lBRXJILCtDQUFXOzs7O0lBQVgsVUFBWSxXQUFvQjtRQUM5QixJQUFJLFdBQVc7WUFDYixPQUFPO1FBQ1QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN6QixDQUFDOztnQkFiRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtvQkFDbEMsd1hBQWtEOztpQkFFbkQ7Ozs7Z0JBTnlCLFlBQVk7Z0RBU29DLE1BQU0sU0FBQyxlQUFlOztJQU9oRyxnQ0FBQztDQUFBLEFBZEQsSUFjQztTQVRZLHlCQUF5Qjs7O0lBRXhCLDhDQUF5RDs7SUFBRSx5Q0FBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNQVRfRElBTE9HX0RBVEEsIE1hdERpYWxvZ1JlZiB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZ3VhLWltYWdlLWdhbGxlcnktem9vbScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2ltYWdlLWdhbGxlcnktem9vbS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vaW1hZ2UtZ2FsbGVyeS16b29tLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEltYWdlR2FsbGVyeVpvb21Db21wb25lbnQge1xyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8SW1hZ2VHYWxsZXJ5Wm9vbUNvbXBvbmVudD4sIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwdWJsaWMgZGF0YTogYW55KSB7IH1cclxuXHJcbiAgY2xvc2VEaWFsb2coY2xvc2VEaWFsb2c6IGJvb2xlYW4pIHtcclxuICAgIGlmIChjbG9zZURpYWxvZylcclxuICAgICAgcmV0dXJuO1xyXG4gICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoKTtcclxuICB9XHJcbn1cclxuIl19