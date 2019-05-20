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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtc2VhcmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2d1YS10aGVtZS1saWIvIiwic291cmNlcyI6WyJsaWIvaW5wdXQtc2VhcmNoL2lucHV0LXNlYXJjaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFhLFdBQVcsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVwRTtJQVNFLDhCQUNVLFdBQXdCO1FBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBSmxDLHFCQUFnQixHQUFHLEtBQUssQ0FBQztJQUtyQixDQUFDOzs7O0lBRUwsdUNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQztZQUN2QyxPQUFPLEVBQUUsQ0FBQyxFQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUM7U0FDN0QsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELDRDQUFhOzs7SUFBYjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDMUIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3JCO2FBQU07WUFDTCxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7U0FDdkI7SUFDSCxDQUFDOzs7OztJQUVELDJDQUFZOzs7O0lBQVosVUFBYSxNQUFNO1FBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFLLEVBQUU7WUFDOUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUM3QixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDdEI7SUFDSCxDQUFDOzs7O0lBRUQsMkNBQVk7OztJQUFaO1FBQ0ksSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDN0MsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztJQUNqQyxDQUFDOzs7O0lBQ0QsNENBQWE7OztJQUFiO1FBQ0ksSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDOUMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztJQUNsQyxDQUFDOzs7O0lBRUQsNkNBQWM7OztJQUFkO1FBQ0UsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRTtZQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7U0FDL0I7SUFDSCxDQUFDOztnQkEvQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLHdwQkFBNEM7O2lCQUU3Qzs7OztnQkFObUIsV0FBVzs7SUFtRC9CLDJCQUFDO0NBQUEsQUFqREQsSUFpREM7U0E1Q1ksb0JBQW9COzs7SUFDL0IsZ0RBQXlCOztJQUN6QiwwQ0FBc0I7Ozs7O0lBR3BCLDJDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1pbnB1dC1zZWFyY2gnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9pbnB1dC1zZWFyY2guY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2lucHV0LXNlYXJjaC5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJbnB1dFNlYXJjaENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgaXNTZWFyY2hFeHBhbmRlZCA9IGZhbHNlO1xyXG4gIHNlYXJjaEZvcm06IEZvcm1Hcm91cDtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlclxyXG4gICkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5zZWFyY2hGb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XHJcbiAgICAgIGtleXdvcmQ6IFt7dmFsdWU6ICcnLCBkaXNhYmxlZDogdHJ1ZSB9LCBWYWxpZGF0b3JzLnJlcXVpcmVkXVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBvbkNsaWNrU2VhcmNoKCkge1xyXG4gICAgaWYgKCF0aGlzLmlzU2VhcmNoRXhwYW5kZWQpIHtcclxuICAgICAgdGhpcy5leHBhbmRTZWFyY2goKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMub25TZWFyY2hTdWJtaXQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uQmx1clNlYXJjaCgkZXZlbnQpIHtcclxuICAgIGlmICghdGhpcy5zZWFyY2hGb3JtLmNvbnRyb2xzWydrZXl3b3JkJ10udmFsdWUpIHtcclxuICAgICAgY29uc29sZS5sb2coJ0ZlY2hhciBzZWFyY2gnKTtcclxuICAgICAgdGhpcy5yZXRyYWN0U2VhcmNoKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBleHBhbmRTZWFyY2goKSB7XHJcbiAgICAgIHRoaXMuc2VhcmNoRm9ybS5jb250cm9sc1sna2V5d29yZCddLmVuYWJsZSgpO1xyXG4gICAgICB0aGlzLmlzU2VhcmNoRXhwYW5kZWQgPSB0cnVlO1xyXG4gIH1cclxuICByZXRyYWN0U2VhcmNoKCkge1xyXG4gICAgICB0aGlzLnNlYXJjaEZvcm0uY29udHJvbHNbJ2tleXdvcmQnXS5kaXNhYmxlKCk7XHJcbiAgICAgIHRoaXMuaXNTZWFyY2hFeHBhbmRlZCA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgb25TZWFyY2hTdWJtaXQoKSB7XHJcbiAgICBpZiAodGhpcy5zZWFyY2hGb3JtLnZhbGlkKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdTZW5kIHJlcXVlc3QuLicpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuIl19