/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from "@angular/core";
export class LoadingOverlayService {
    constructor() {
        this.loading = false;
        this.quantidade = 0;
    }
    /**
     * @return {?}
     */
    startLoading() {
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.setLoading(true);
        }), 1);
    }
    /**
     * @return {?}
     */
    endLoading() {
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.setLoading(false);
        }), 1);
    }
    /**
     * @private
     * @param {?} load
     * @return {?}
     */
    setLoading(load) {
        if (load) {
            this.quantidade++;
            this.loading = true;
        }
        else {
            this.quantidade--;
            if (this.quantidade === 0) {
                this.loading = false;
            }
        }
    }
    /**
     * @return {?}
     */
    getLoading() {
        return this.loading;
    }
}
LoadingOverlayService.decorators = [
    { type: Injectable }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    LoadingOverlayService.prototype.loading;
    /**
     * @type {?}
     * @private
     */
    LoadingOverlayService.prototype.quantidade;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy1vdmVybGF5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ndWEtdGhlbWUvIiwic291cmNlcyI6WyJsaWIvbG9hZGluZy1vdmVybGF5L2xvYWRpbmctb3ZlcmxheS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE1BQU0sT0FBTyxxQkFBcUI7SUFEbEM7UUFFWSxZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLGVBQVUsR0FBRyxDQUFDLENBQUM7SUE2QjNCLENBQUM7Ozs7SUEzQkcsWUFBWTtRQUNSLFVBQVU7OztRQUFDLEdBQUcsRUFBRTtZQUNaLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUIsQ0FBQyxHQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ1YsQ0FBQzs7OztJQUVELFVBQVU7UUFDTixVQUFVOzs7UUFBQyxHQUFHLEVBQUU7WUFDWixJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNCLENBQUMsR0FBRSxDQUFDLENBQUMsQ0FBQztJQUNWLENBQUM7Ozs7OztJQUVPLFVBQVUsQ0FBQyxJQUFhO1FBQzVCLElBQUksSUFBSSxFQUFFO1lBQ04sSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ2xCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1NBQ3ZCO2FBQU07WUFDSCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDbEIsSUFBSSxJQUFJLENBQUMsVUFBVSxLQUFLLENBQUMsRUFBRTtnQkFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7YUFDeEI7U0FDSjtJQUNMLENBQUM7Ozs7SUFFRCxVQUFVO1FBQ04sT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFBO0lBQ3ZCLENBQUM7OztZQS9CSixVQUFVOzs7Ozs7O0lBRVAsd0NBQXdCOzs7OztJQUN4QiwyQ0FBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBMb2FkaW5nT3ZlcmxheVNlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSBsb2FkaW5nID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIHF1YW50aWRhZGUgPSAwO1xyXG5cclxuICAgIHN0YXJ0TG9hZGluZygpOiB2b2lkIHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgICAgIH0sIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIGVuZExvYWRpbmcoKTogdm9pZCB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgfSwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRMb2FkaW5nKGxvYWQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgICAgICBpZiAobG9hZCkge1xyXG4gICAgICAgICAgICB0aGlzLnF1YW50aWRhZGUrKztcclxuICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnF1YW50aWRhZGUtLTtcclxuICAgICAgICAgICAgaWYgKHRoaXMucXVhbnRpZGFkZSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TG9hZGluZygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5sb2FkaW5nXHJcbiAgICB9XHJcbn0iXX0=