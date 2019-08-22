/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
export class ImageGalleryZoomComponent {
    /**
     * @param {?} dialogRef
     * @param {?} data
     */
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    /**
     * @param {?} closeDialog
     * @return {?}
     */
    closeDialog(closeDialog) {
        if (closeDialog)
            return;
        this.dialogRef.close();
    }
}
ImageGalleryZoomComponent.decorators = [
    { type: Component, args: [{
                selector: 'gua-image-gallery-zoom',
                template: "<div [style.color]=\"data?.color\" class=\"close-button\">\r\n  <button mat-icon-button (click)=\"closeDialog(false)\" [style.background-color]=\"data?.background\">\r\n    <i class=\"material-icons\">close</i>\r\n  </button>\r\n</div>\r\n<div class=\"image\" (click)=\"closeDialog(data?.disableClose)\">\r\n  <img cdkFocusInitial [src]=\"data.url\">\r\n</div>\r\n",
                styles: [":host{background-color:#000}:host .image{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;align-items:center;height:100%}:host img{align-content:center;height:inherit}:host .close-button{color:#000;position:absolute;right:10px;top:10px}:host .mat-icon-button{height:auto;width:auto}:host .material-icons{font-size:50px}"]
            }] }
];
/** @nocollapse */
ImageGalleryZoomComponent.ctorParameters = () => [
    { type: MatDialogRef },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
];
if (false) {
    /** @type {?} */
    ImageGalleryZoomComponent.prototype.dialogRef;
    /** @type {?} */
    ImageGalleryZoomComponent.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UtZ2FsbGVyeS16b29tLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2d1YS10aGVtZS8iLCJzb3VyY2VzIjpbImxpYi9pbWFnZS1nYWxsZXJ5L2ltYWdlLWdhbGxlcnktem9vbS9pbWFnZS1nYWxsZXJ5LXpvb20uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsZUFBZSxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBT2xFLE1BQU0sT0FBTyx5QkFBeUI7Ozs7O0lBRXBDLFlBQW1CLFNBQWtELEVBQWtDLElBQVM7UUFBN0YsY0FBUyxHQUFULFNBQVMsQ0FBeUM7UUFBa0MsU0FBSSxHQUFKLElBQUksQ0FBSztJQUFJLENBQUM7Ozs7O0lBRXJILFdBQVcsQ0FBQyxXQUFvQjtRQUM5QixJQUFJLFdBQVc7WUFDYixPQUFPO1FBQ1QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN6QixDQUFDOzs7WUFiRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtnQkFDbEMsd1hBQWtEOzthQUVuRDs7OztZQU55QixZQUFZOzRDQVNvQyxNQUFNLFNBQUMsZUFBZTs7OztJQUFsRiw4Q0FBeUQ7O0lBQUUseUNBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTUFUX0RJQUxPR19EQVRBLCBNYXREaWFsb2dSZWYgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2d1YS1pbWFnZS1nYWxsZXJ5LXpvb20nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9pbWFnZS1nYWxsZXJ5LXpvb20uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2ltYWdlLWdhbGxlcnktem9vbS5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJbWFnZUdhbGxlcnlab29tQ29tcG9uZW50IHtcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPEltYWdlR2FsbGVyeVpvb21Db21wb25lbnQ+LCBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHVibGljIGRhdGE6IGFueSkgeyB9XHJcblxyXG4gIGNsb3NlRGlhbG9nKGNsb3NlRGlhbG9nOiBib29sZWFuKSB7XHJcbiAgICBpZiAoY2xvc2VEaWFsb2cpXHJcbiAgICAgIHJldHVybjtcclxuICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==