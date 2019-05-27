/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class LoadingOverlayComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.image) {
            this.image = "assets/image-loading.gif";
        }
    }
}
LoadingOverlayComponent.decorators = [
    { type: Component, args: [{
                selector: 'gua-loading-overlay',
                template: "<div class=\"loading-overlay\" style=\"display: flex; align-items: center; justify-content: center;\" [class.show]=\"loading\">\r\n  <img class=\"image-loading\" [src]=\"image\">\r\n</div>",
                styles: [".loading-overlay{background-color:rgba(255,255,255,.7);position:fixed;top:0;left:0;width:100%;height:100%;z-index:10;transition:.25s ease-in-out;opacity:0;visibility:hidden}.loading-overlay.show{opacity:1;visibility:visible}.image-loading{height:128px}"]
            }] }
];
/** @nocollapse */
LoadingOverlayComponent.ctorParameters = () => [];
LoadingOverlayComponent.propDecorators = {
    loading: [{ type: Input, args: ['loading',] }],
    image: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    LoadingOverlayComponent.prototype.loading;
    /** @type {?} */
    LoadingOverlayComponent.prototype.image;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy1vdmVybGF5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2d1YS10aGVtZS1saWIvIiwic291cmNlcyI6WyJsaWIvbG9hZGluZy1vdmVybGF5L2xvYWRpbmctb3ZlcmxheS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQVUsS0FBSyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBT3ZELE1BQU0sT0FBTyx1QkFBdUI7SUFLbEMsZ0JBQWdCLENBQUM7Ozs7SUFFakIsUUFBUTtRQUNOLElBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFDO1lBQ2IsSUFBSSxDQUFDLEtBQUssR0FBRywwQkFBMEIsQ0FBQTtTQUN4QztJQUNILENBQUM7OztZQWhCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0Isd01BQStDOzthQUVoRDs7Ozs7c0JBR0UsS0FBSyxTQUFDLFNBQVM7b0JBQ2YsS0FBSzs7OztJQUROLDBDQUFtQzs7SUFDbkMsd0NBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdndWEtbG9hZGluZy1vdmVybGF5JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbG9hZGluZy1vdmVybGF5LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9sb2FkaW5nLW92ZXJsYXkuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9hZGluZ092ZXJsYXlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIFxyXG4gIEBJbnB1dCgnbG9hZGluZycpIGxvYWRpbmc6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgaW1hZ2U6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBpZighdGhpcy5pbWFnZSl7XHJcbiAgICAgIHRoaXMuaW1hZ2UgPSBcImFzc2V0cy9pbWFnZS1sb2FkaW5nLmdpZlwiXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==