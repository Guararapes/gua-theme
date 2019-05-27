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
        if (this.image) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy1vdmVybGF5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2d1YS10aGVtZS1saWIvIiwic291cmNlcyI6WyJsaWIvbG9hZGluZy1vdmVybGF5L2xvYWRpbmctb3ZlcmxheS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQVUsS0FBSyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBT3ZELE1BQU0sT0FBTyx1QkFBdUI7SUFLbEMsZ0JBQWdCLENBQUM7Ozs7SUFFakIsUUFBUTtRQUNOLElBQUcsSUFBSSxDQUFDLEtBQUssRUFBQztZQUNaLElBQUksQ0FBQyxLQUFLLEdBQUcsMEJBQTBCLENBQUE7U0FDeEM7SUFDSCxDQUFDOzs7WUFoQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLHdNQUErQzs7YUFFaEQ7Ozs7O3NCQUdFLEtBQUssU0FBQyxTQUFTO29CQUNmLEtBQUs7Ozs7SUFETiwwQ0FBbUM7O0lBQ25DLHdDQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZ3VhLWxvYWRpbmctb3ZlcmxheScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2xvYWRpbmctb3ZlcmxheS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vbG9hZGluZy1vdmVybGF5LmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIExvYWRpbmdPdmVybGF5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBcclxuICBASW5wdXQoJ2xvYWRpbmcnKSBsb2FkaW5nOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGltYWdlOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgaWYodGhpcy5pbWFnZSl7XHJcbiAgICAgIHRoaXMuaW1hZ2UgPSBcImFzc2V0cy9pbWFnZS1sb2FkaW5nLmdpZlwiXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==