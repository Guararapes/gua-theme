/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
var InputSearchComponent = /** @class */ (function () {
    function InputSearchComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.isSearchExpanded = false;
        this.getValue = new EventEmitter();
    }
    /**
     * @return {?}
     */
    InputSearchComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.searchForm = this.formBuilder.group({
            keyword: [{ value: '', disabled: true }, Validators.required]
        });
    };
    /**
     * @return {?}
     */
    InputSearchComponent.prototype.onClickSearch = /**
     * @return {?}
     */
    function () {
        if (!this.isSearchExpanded) {
            this.expandSearch();
        }
        else {
            this.onSearchSubmit();
        }
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    InputSearchComponent.prototype.onBlurSearch = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        if (!this.searchForm.controls['keyword'].value) {
            this.retractSearch();
        }
    };
    /**
     * @return {?}
     */
    InputSearchComponent.prototype.expandSearch = /**
     * @return {?}
     */
    function () {
        this.searchForm.controls['keyword'].enable();
        this.isSearchExpanded = true;
    };
    /**
     * @return {?}
     */
    InputSearchComponent.prototype.retractSearch = /**
     * @return {?}
     */
    function () {
        this.searchForm.controls['keyword'].disable();
        this.isSearchExpanded = false;
    };
    /**
     * @return {?}
     */
    InputSearchComponent.prototype.onSearchSubmit = /**
     * @return {?}
     */
    function () {
        if (this.searchForm.valid) {
            this.getValue.emit(this.searchForm.value);
        }
    };
    InputSearchComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-input-search',
                    template: "<form [formGroup]=\"searchForm\" (ngSubmit)=\"onSearchSubmit()\">\r\n    <mat-form-field appearance=\"standard\" [style.width]=\"width\"\r\n      [style.height]=\"height\" fxLayoutAlign=\"center center\">\r\n      <div [class]=\"'flex flex-row input-search' + (isSearchExpanded ? ' input-search-open':' ')\">\r\n        <div class=\"flex-item\" style=\"padding-left: 5px;\">\r\n          <input matInput (blur)=\"onBlurSearch($event)\" formControlName=\"keyword\" placeholder=\"Pesquisar...\" />\r\n        </div>\r\n        <div #searchIcon class=\"flex-item\" (click)=\"onClickSearch()\">\r\n          <mat-icon class=\"font-size-24\">search</mat-icon>\r\n        </div>\r\n      </div>\r\n    </mat-form-field>\r\n  </form>\r\n  ",
                    styles: ["input{padding-top:5px}.input-search{background-color:transparent;height:25px;width:25px;float:right;padding:2px 10px 3px;border-radius:1.6rem;-webkit-transition:width .5s,padding .5s,color .5s,background-color .5s;transition:width .5s,padding .5s,color .5s,background-color .5s;border:.5px solid transparent;cursor:pointer}.input-search-open{background-color:#fff;color:#000;width:100%;border:.5px solid #000}::ng-deep .mat-form-field-appearance-standard .mat-form-field-underline{height:0!important}::ng-deep .mat-form-field-appearance-standard .mat-form-field-ripple{height:0!important}"]
                }] }
    ];
    /** @nocollapse */
    InputSearchComponent.ctorParameters = function () { return [
        { type: FormBuilder }
    ]; };
    InputSearchComponent.propDecorators = {
        height: [{ type: Input }],
        width: [{ type: Input }],
        getValue: [{ type: Output }]
    };
    return InputSearchComponent;
}());
export { InputSearchComponent };
if (false) {
    /** @type {?} */
    InputSearchComponent.prototype.isSearchExpanded;
    /** @type {?} */
    InputSearchComponent.prototype.searchForm;
    /** @type {?} */
    InputSearchComponent.prototype.height;
    /** @type {?} */
    InputSearchComponent.prototype.width;
    /** @type {?} */
    InputSearchComponent.prototype.getValue;
    /**
     * @type {?}
     * @private
     */
    InputSearchComponent.prototype.formBuilder;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtc2VhcmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2d1YS10aGVtZS8iLCJzb3VyY2VzIjpbImxpYi9pbnB1dC1zZWFyY2gvaW5wdXQtc2VhcmNoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQWEsV0FBVyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXBFO0lBYUUsOEJBQ1UsV0FBd0I7UUFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFSbEMscUJBQWdCLEdBQUcsS0FBSyxDQUFDO1FBS2YsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFJcEMsQ0FBQzs7OztJQUVMLHVDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUM7WUFDdkMsT0FBTyxFQUFFLENBQUMsRUFBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsRUFBRSxVQUFVLENBQUMsUUFBUSxDQUFDO1NBQzdELENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCw0Q0FBYTs7O0lBQWI7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQzFCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUNyQjthQUFNO1lBQ0wsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQ3ZCO0lBQ0gsQ0FBQzs7Ozs7SUFFRCwyQ0FBWTs7OztJQUFaLFVBQWEsTUFBTTtRQUNqQixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSyxFQUFFO1lBQzlDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUN0QjtJQUNILENBQUM7Ozs7SUFFRCwyQ0FBWTs7O0lBQVo7UUFDSSxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUM3QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO0lBQ2pDLENBQUM7Ozs7SUFDRCw0Q0FBYTs7O0lBQWI7UUFDSSxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUM5QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO0lBQ2xDLENBQUM7Ozs7SUFFRCw2Q0FBYzs7O0lBQWQ7UUFDRSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFO1lBQzFCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUE7U0FDekM7SUFDSCxDQUFDOztnQkFsREYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLHd1QkFBNEM7O2lCQUU3Qzs7OztnQkFObUIsV0FBVzs7O3lCQVc1QixLQUFLO3dCQUNMLEtBQUs7MkJBQ0wsTUFBTTs7SUF5Q1QsMkJBQUM7Q0FBQSxBQXBERCxJQW9EQztTQS9DWSxvQkFBb0I7OztJQUMvQixnREFBeUI7O0lBQ3pCLDBDQUFzQjs7SUFFdEIsc0NBQXdCOztJQUN4QixxQ0FBdUI7O0lBQ3ZCLHdDQUF3Qzs7Ozs7SUFHdEMsMkNBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtaW5wdXQtc2VhcmNoJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vaW5wdXQtc2VhcmNoLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9pbnB1dC1zZWFyY2guY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSW5wdXRTZWFyY2hDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIGlzU2VhcmNoRXhwYW5kZWQgPSBmYWxzZTtcclxuICBzZWFyY2hGb3JtOiBGb3JtR3JvdXA7XHJcblxyXG4gIEBJbnB1dCgpIGhlaWdodDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHdpZHRoOiBzdHJpbmc7XHJcbiAgQE91dHB1dCgpIGdldFZhbHVlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyXHJcbiAgKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLnNlYXJjaEZvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcclxuICAgICAga2V5d29yZDogW3t2YWx1ZTogJycsIGRpc2FibGVkOiB0cnVlIH0sIFZhbGlkYXRvcnMucmVxdWlyZWRdXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG9uQ2xpY2tTZWFyY2goKSB7XHJcbiAgICBpZiAoIXRoaXMuaXNTZWFyY2hFeHBhbmRlZCkge1xyXG4gICAgICB0aGlzLmV4cGFuZFNlYXJjaCgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5vblNlYXJjaFN1Ym1pdCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25CbHVyU2VhcmNoKCRldmVudCkge1xyXG4gICAgaWYgKCF0aGlzLnNlYXJjaEZvcm0uY29udHJvbHNbJ2tleXdvcmQnXS52YWx1ZSkge1xyXG4gICAgICB0aGlzLnJldHJhY3RTZWFyY2goKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGV4cGFuZFNlYXJjaCgpIHtcclxuICAgICAgdGhpcy5zZWFyY2hGb3JtLmNvbnRyb2xzWydrZXl3b3JkJ10uZW5hYmxlKCk7XHJcbiAgICAgIHRoaXMuaXNTZWFyY2hFeHBhbmRlZCA9IHRydWU7XHJcbiAgfVxyXG4gIHJldHJhY3RTZWFyY2goKSB7XHJcbiAgICAgIHRoaXMuc2VhcmNoRm9ybS5jb250cm9sc1sna2V5d29yZCddLmRpc2FibGUoKTtcclxuICAgICAgdGhpcy5pc1NlYXJjaEV4cGFuZGVkID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBvblNlYXJjaFN1Ym1pdCgpIHtcclxuICAgIGlmICh0aGlzLnNlYXJjaEZvcm0udmFsaWQpIHtcclxuICAgICB0aGlzLmdldFZhbHVlLmVtaXQodGhpcy5zZWFyY2hGb3JtLnZhbHVlKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuIl19