/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var LoadingOverlayComponent = /** @class */ (function () {
    function LoadingOverlayComponent() {
    }
    /**
     * @return {?}
     */
    LoadingOverlayComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (!this.image) {
            this.image = "assets/image-loading.gif";
        }
    };
    LoadingOverlayComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gua-loading-overlay',
                    template: "<div class=\"loading-overlay\" style=\"display: flex; align-items: center; justify-content: center;\" [class.show]=\"loading\">\r\n  <img class=\"image-loading\" [src]=\"image\">\r\n</div>",
                    styles: [".loading-overlay{background-color:rgba(255,255,255,.7);position:fixed;top:0;left:0;width:100%;height:100%;z-index:10;-webkit-transition:.25s ease-in-out;transition:.25s ease-in-out;opacity:0;visibility:hidden}.loading-overlay.show{opacity:1;visibility:visible}.image-loading{height:128px}"]
                }] }
    ];
    /** @nocollapse */
    LoadingOverlayComponent.ctorParameters = function () { return []; };
    LoadingOverlayComponent.propDecorators = {
        loading: [{ type: Input, args: ['loading',] }],
        image: [{ type: Input }]
    };
    return LoadingOverlayComponent;
}());
export { LoadingOverlayComponent };
if (false) {
    /** @type {?} */
    LoadingOverlayComponent.prototype.loading;
    /** @type {?} */
    LoadingOverlayComponent.prototype.image;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy1vdmVybGF5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2d1YS10aGVtZS8iLCJzb3VyY2VzIjpbImxpYi9sb2FkaW5nLW92ZXJsYXkvbG9hZGluZy1vdmVybGF5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBVSxLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFdkQ7SUFVRTtJQUFnQixDQUFDOzs7O0lBRWpCLDBDQUFROzs7SUFBUjtRQUNFLElBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFDO1lBQ2IsSUFBSSxDQUFDLEtBQUssR0FBRywwQkFBMEIsQ0FBQTtTQUN4QztJQUNILENBQUM7O2dCQWhCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtvQkFDL0Isd01BQStDOztpQkFFaEQ7Ozs7OzBCQUdFLEtBQUssU0FBQyxTQUFTO3dCQUNmLEtBQUs7O0lBU1IsOEJBQUM7Q0FBQSxBQWpCRCxJQWlCQztTQVpZLHVCQUF1Qjs7O0lBRWxDLDBDQUFtQzs7SUFDbkMsd0NBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdndWEtbG9hZGluZy1vdmVybGF5JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbG9hZGluZy1vdmVybGF5LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9sb2FkaW5nLW92ZXJsYXkuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9hZGluZ092ZXJsYXlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIFxyXG4gIEBJbnB1dCgnbG9hZGluZycpIGxvYWRpbmc6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgaW1hZ2U6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBpZighdGhpcy5pbWFnZSl7XHJcbiAgICAgIHRoaXMuaW1hZ2UgPSBcImFzc2V0cy9pbWFnZS1sb2FkaW5nLmdpZlwiXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==