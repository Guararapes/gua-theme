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
     * @return {?}
     */
    closeDialog() {
        this.dialogRef.close();
    }
}
ImageGalleryZoomComponent.decorators = [
    { type: Component, args: [{
                selector: 'gua-image-gallery-zoom',
                template: "<div [style.color]=\"data?.color\" class=\"close-button\">\r\n  <button mat-icon-button (click)=\"closeDialog()\">\r\n    <i class=\"material-icons\" (click)=\"closeDialog()\">close</i>\r\n  </button>\r\n</div>\r\n<div class=\"image\">\r\n  <img [src]=\"data.url\">\r\n</div>\r\n",
                styles: [":host{background-color:#000}:host .image{display:flex;align-items:center;justify-content:center;align-items:center;height:100%}:host img{align-content:center;height:inherit}:host .close-button{color:#000;position:absolute;right:0;top:0}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UtZ2FsbGVyeS16b29tLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2d1YS10aGVtZS1saWIvIiwic291cmNlcyI6WyJsaWIvaW1hZ2UtZ2FsbGVyeS9pbWFnZS1nYWxsZXJ5LXpvb20vaW1hZ2UtZ2FsbGVyeS16b29tLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQU9sRSxNQUFNLE9BQU8seUJBQXlCOzs7OztJQUVwQyxZQUFtQixTQUFrRCxFQUFrQyxJQUFTO1FBQTdGLGNBQVMsR0FBVCxTQUFTLENBQXlDO1FBQWtDLFNBQUksR0FBSixJQUFJLENBQUs7SUFBSSxDQUFDOzs7O0lBRXJILFdBQVc7UUFDVCxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3pCLENBQUM7OztZQVhGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsd0JBQXdCO2dCQUNsQyxtU0FBa0Q7O2FBRW5EOzs7O1lBTnlCLFlBQVk7NENBU29DLE1BQU0sU0FBQyxlQUFlOzs7O0lBQWxGLDhDQUF5RDs7SUFBRSx5Q0FBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNQVRfRElBTE9HX0RBVEEsIE1hdERpYWxvZ1JlZiB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZ3VhLWltYWdlLWdhbGxlcnktem9vbScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2ltYWdlLWdhbGxlcnktem9vbS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vaW1hZ2UtZ2FsbGVyeS16b29tLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEltYWdlR2FsbGVyeVpvb21Db21wb25lbnQge1xyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8SW1hZ2VHYWxsZXJ5Wm9vbUNvbXBvbmVudD4sIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwdWJsaWMgZGF0YTogYW55KSB7IH1cclxuXHJcbiAgY2xvc2VEaWFsb2coKSB7XHJcbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgpO1xyXG4gIH1cclxufVxyXG4iXX0=