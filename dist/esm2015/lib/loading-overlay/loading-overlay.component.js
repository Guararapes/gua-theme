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
                styles: [".loading-overlay{background-color:rgba(255,255,255,.7);position:fixed;top:0;left:0;width:100%;height:100%;z-index:10;-webkit-transition:.25s ease-in-out;transition:.25s ease-in-out;opacity:0;visibility:hidden}.loading-overlay.show{opacity:1;visibility:visible}.image-loading{height:128px}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy1vdmVybGF5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2d1YS10aGVtZS8iLCJzb3VyY2VzIjpbImxpYi9sb2FkaW5nLW92ZXJsYXkvbG9hZGluZy1vdmVybGF5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBVSxLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFPdkQsTUFBTSxPQUFPLHVCQUF1QjtJQUtsQyxnQkFBZ0IsQ0FBQzs7OztJQUVqQixRQUFRO1FBQ04sSUFBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUM7WUFDYixJQUFJLENBQUMsS0FBSyxHQUFHLDBCQUEwQixDQUFBO1NBQ3hDO0lBQ0gsQ0FBQzs7O1lBaEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQix3TUFBK0M7O2FBRWhEOzs7OztzQkFHRSxLQUFLLFNBQUMsU0FBUztvQkFDZixLQUFLOzs7O0lBRE4sMENBQW1DOztJQUNuQyx3Q0FBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2d1YS1sb2FkaW5nLW92ZXJsYXknLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9sb2FkaW5nLW92ZXJsYXkuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2xvYWRpbmctb3ZlcmxheS5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMb2FkaW5nT3ZlcmxheUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgXHJcbiAgQElucHV0KCdsb2FkaW5nJykgbG9hZGluZzogYm9vbGVhbjtcclxuICBASW5wdXQoKSBpbWFnZTogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIGlmKCF0aGlzLmltYWdlKXtcclxuICAgICAgdGhpcy5pbWFnZSA9IFwiYXNzZXRzL2ltYWdlLWxvYWRpbmcuZ2lmXCJcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19