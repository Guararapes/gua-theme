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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy1vdmVybGF5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ndWEtdGhlbWUtbGliLyIsInNvdXJjZXMiOlsibGliL2xvYWRpbmctb3ZlcmxheS9sb2FkaW5nLW92ZXJsYXkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxNQUFNLE9BQU8scUJBQXFCO0lBRGxDO1FBRVksWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixlQUFVLEdBQUcsQ0FBQyxDQUFDO0lBNkIzQixDQUFDOzs7O0lBM0JHLFlBQVk7UUFDUixVQUFVOzs7UUFBQyxHQUFHLEVBQUU7WUFDWixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFCLENBQUMsR0FBRSxDQUFDLENBQUMsQ0FBQztJQUNWLENBQUM7Ozs7SUFFRCxVQUFVO1FBQ04sVUFBVTs7O1FBQUMsR0FBRyxFQUFFO1lBQ1osSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzQixDQUFDLEdBQUUsQ0FBQyxDQUFDLENBQUM7SUFDVixDQUFDOzs7Ozs7SUFFTyxVQUFVLENBQUMsSUFBYTtRQUM1QixJQUFJLElBQUksRUFBRTtZQUNOLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNsQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztTQUN2QjthQUFNO1lBQ0gsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ2xCLElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxDQUFDLEVBQUU7Z0JBQ3ZCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO2FBQ3hCO1NBQ0o7SUFDTCxDQUFDOzs7O0lBRUQsVUFBVTtRQUNOLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQTtJQUN2QixDQUFDOzs7WUEvQkosVUFBVTs7Ozs7OztJQUVQLHdDQUF3Qjs7Ozs7SUFDeEIsMkNBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTG9hZGluZ092ZXJsYXlTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgbG9hZGluZyA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBxdWFudGlkYWRlID0gMDtcclxuXHJcbiAgICBzdGFydExvYWRpbmcoKTogdm9pZCB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0TG9hZGluZyh0cnVlKTtcclxuICAgICAgICB9LCAxKTtcclxuICAgIH1cclxuXHJcbiAgICBlbmRMb2FkaW5nKCk6IHZvaWQge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIH0sIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0TG9hZGluZyhsb2FkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKGxvYWQpIHtcclxuICAgICAgICAgICAgdGhpcy5xdWFudGlkYWRlKys7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5xdWFudGlkYWRlLS07XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnF1YW50aWRhZGUgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldExvYWRpbmcoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubG9hZGluZ1xyXG4gICAgfVxyXG59Il19