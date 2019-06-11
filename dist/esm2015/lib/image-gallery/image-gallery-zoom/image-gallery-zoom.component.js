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
                styles: [":host{background-color:#000}:host .image{display:flex;align-items:center;justify-content:center;align-items:center;height:100%}:host img{align-content:center;height:inherit}:host .close-button{color:#000;position:absolute;right:10px;top:10px}:host .mat-icon-button{height:auto;width:auto}:host .material-icons{font-size:50px}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UtZ2FsbGVyeS16b29tLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2d1YS10aGVtZS1saWIvIiwic291cmNlcyI6WyJsaWIvaW1hZ2UtZ2FsbGVyeS9pbWFnZS1nYWxsZXJ5LXpvb20vaW1hZ2UtZ2FsbGVyeS16b29tLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQU9sRSxNQUFNLE9BQU8seUJBQXlCOzs7OztJQUVwQyxZQUFtQixTQUFrRCxFQUFrQyxJQUFTO1FBQTdGLGNBQVMsR0FBVCxTQUFTLENBQXlDO1FBQWtDLFNBQUksR0FBSixJQUFJLENBQUs7SUFBSSxDQUFDOzs7OztJQUVySCxXQUFXLENBQUMsV0FBb0I7UUFDOUIsSUFBSSxXQUFXO1lBQ2IsT0FBTztRQUNULElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDekIsQ0FBQzs7O1lBYkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLHdYQUFrRDs7YUFFbkQ7Ozs7WUFOeUIsWUFBWTs0Q0FTb0MsTUFBTSxTQUFDLGVBQWU7Ozs7SUFBbEYsOENBQXlEOztJQUFFLHlDQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1BVF9ESUFMT0dfREFUQSwgTWF0RGlhbG9nUmVmIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdndWEtaW1hZ2UtZ2FsbGVyeS16b29tJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vaW1hZ2UtZ2FsbGVyeS16b29tLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9pbWFnZS1nYWxsZXJ5LXpvb20uY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSW1hZ2VHYWxsZXJ5Wm9vbUNvbXBvbmVudCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxJbWFnZUdhbGxlcnlab29tQ29tcG9uZW50PiwgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHB1YmxpYyBkYXRhOiBhbnkpIHsgfVxyXG5cclxuICBjbG9zZURpYWxvZyhjbG9zZURpYWxvZzogYm9vbGVhbikge1xyXG4gICAgaWYgKGNsb3NlRGlhbG9nKVxyXG4gICAgICByZXR1cm47XHJcbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgpO1xyXG4gIH1cclxufVxyXG4iXX0=