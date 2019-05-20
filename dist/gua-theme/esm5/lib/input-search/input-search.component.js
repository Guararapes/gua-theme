/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
var InputSearchComponent = /** @class */ (function () {
    function InputSearchComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.isSearchExpanded = false;
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
            console.log('Fechar search');
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
            console.log('Send request..');
        }
    };
    InputSearchComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-input-search',
                    template: "<form [formGroup]=\"searchForm\" (ngSubmit)=\"onSearchSubmit()\">\r\n    <mat-form-field appearance=\"standard\">\r\n      <div [class]=\"'flex flex-row input-search' + (isSearchExpanded ? ' input-search-open':' ')\">\r\n          <div class=\"flex-item\" style=\"padding-left: 5px;\">\r\n              <input matInput (blur)=\"onBlurSearch($event)\" formControlName=\"keyword\" placeholder=\"Pesquisar...\"/>\r\n          </div>\r\n          <div #searchIcon class=\"flex-item\" (click)=\"onClickSearch()\">\r\n              <mat-icon class=\"font-size-24\">search</mat-icon>\r\n          </div>\r\n      </div>\r\n    </mat-form-field>\r\n</form>\r\n",
                    styles: ["input{padding-top:5px}.input-search{background-color:transparent;height:25px;width:25px;float:right;padding:2px 10px 3px;border-radius:1.6rem;transition:width .5s,padding .5s,color .5s,background-color .5s;border:.5px solid transparent;cursor:pointer}.input-search-open{background-color:#fff;color:#000;width:100%;border:.5px solid #000}::ng-deep .mat-form-field-appearance-standard .mat-form-field-underline{height:0!important}::ng-deep .mat-form-field-appearance-standard .mat-form-field-ripple{height:0!important}"]
                }] }
    ];
    /** @nocollapse */
    InputSearchComponent.ctorParameters = function () { return [
        { type: FormBuilder }
    ]; };
    return InputSearchComponent;
}());
export { InputSearchComponent };
if (false) {
    /** @type {?} */
    InputSearchComponent.prototype.isSearchExpanded;
    /** @type {?} */
    InputSearchComponent.prototype.searchForm;
    /**
     * @type {?}
     * @private
     */
    InputSearchComponent.prototype.formBuilder;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtc2VhcmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2d1YS10aGVtZS8iLCJzb3VyY2VzIjpbImxpYi9pbnB1dC1zZWFyY2gvaW5wdXQtc2VhcmNoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQWEsV0FBVyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXBFO0lBU0UsOEJBQ1UsV0FBd0I7UUFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFKbEMscUJBQWdCLEdBQUcsS0FBSyxDQUFDO0lBS3JCLENBQUM7Ozs7SUFFTCx1Q0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDO1lBQ3ZDLE9BQU8sRUFBRSxDQUFDLEVBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQztTQUM3RCxDQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsNENBQWE7OztJQUFiO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtZQUMxQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDckI7YUFBTTtZQUNMLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUN2QjtJQUNILENBQUM7Ozs7O0lBRUQsMkNBQVk7Ozs7SUFBWixVQUFhLE1BQU07UUFDakIsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQUssRUFBRTtZQUM5QyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQzdCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUN0QjtJQUNILENBQUM7Ozs7SUFFRCwyQ0FBWTs7O0lBQVo7UUFDSSxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUM3QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO0lBQ2pDLENBQUM7Ozs7SUFDRCw0Q0FBYTs7O0lBQWI7UUFDSSxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUM5QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO0lBQ2xDLENBQUM7Ozs7SUFFRCw2Q0FBYzs7O0lBQWQ7UUFDRSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFO1lBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztTQUMvQjtJQUNILENBQUM7O2dCQS9DRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsd3BCQUE0Qzs7aUJBRTdDOzs7O2dCQU5tQixXQUFXOztJQW1EL0IsMkJBQUM7Q0FBQSxBQWpERCxJQWlEQztTQTVDWSxvQkFBb0I7OztJQUMvQixnREFBeUI7O0lBQ3pCLDBDQUFzQjs7Ozs7SUFHcEIsMkNBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLWlucHV0LXNlYXJjaCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2lucHV0LXNlYXJjaC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vaW5wdXQtc2VhcmNoLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIElucHV0U2VhcmNoQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBpc1NlYXJjaEV4cGFuZGVkID0gZmFsc2U7XHJcbiAgc2VhcmNoRm9ybTogRm9ybUdyb3VwO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyXHJcbiAgKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLnNlYXJjaEZvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcclxuICAgICAga2V5d29yZDogW3t2YWx1ZTogJycsIGRpc2FibGVkOiB0cnVlIH0sIFZhbGlkYXRvcnMucmVxdWlyZWRdXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG9uQ2xpY2tTZWFyY2goKSB7XHJcbiAgICBpZiAoIXRoaXMuaXNTZWFyY2hFeHBhbmRlZCkge1xyXG4gICAgICB0aGlzLmV4cGFuZFNlYXJjaCgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5vblNlYXJjaFN1Ym1pdCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25CbHVyU2VhcmNoKCRldmVudCkge1xyXG4gICAgaWYgKCF0aGlzLnNlYXJjaEZvcm0uY29udHJvbHNbJ2tleXdvcmQnXS52YWx1ZSkge1xyXG4gICAgICBjb25zb2xlLmxvZygnRmVjaGFyIHNlYXJjaCcpO1xyXG4gICAgICB0aGlzLnJldHJhY3RTZWFyY2goKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGV4cGFuZFNlYXJjaCgpIHtcclxuICAgICAgdGhpcy5zZWFyY2hGb3JtLmNvbnRyb2xzWydrZXl3b3JkJ10uZW5hYmxlKCk7XHJcbiAgICAgIHRoaXMuaXNTZWFyY2hFeHBhbmRlZCA9IHRydWU7XHJcbiAgfVxyXG4gIHJldHJhY3RTZWFyY2goKSB7XHJcbiAgICAgIHRoaXMuc2VhcmNoRm9ybS5jb250cm9sc1sna2V5d29yZCddLmRpc2FibGUoKTtcclxuICAgICAgdGhpcy5pc1NlYXJjaEV4cGFuZGVkID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBvblNlYXJjaFN1Ym1pdCgpIHtcclxuICAgIGlmICh0aGlzLnNlYXJjaEZvcm0udmFsaWQpIHtcclxuICAgICAgY29uc29sZS5sb2coJ1NlbmQgcmVxdWVzdC4uJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=