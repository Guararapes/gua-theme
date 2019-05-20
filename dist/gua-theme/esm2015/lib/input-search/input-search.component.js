/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
export class InputSearchComponent {
    /**
     * @param {?} formBuilder
     */
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.isSearchExpanded = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.searchForm = this.formBuilder.group({
            keyword: [{ value: '', disabled: true }, Validators.required]
        });
    }
    /**
     * @return {?}
     */
    onClickSearch() {
        if (!this.isSearchExpanded) {
            this.expandSearch();
        }
        else {
            this.onSearchSubmit();
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onBlurSearch($event) {
        if (!this.searchForm.controls['keyword'].value) {
            console.log('Fechar search');
            this.retractSearch();
        }
    }
    /**
     * @return {?}
     */
    expandSearch() {
        this.searchForm.controls['keyword'].enable();
        this.isSearchExpanded = true;
    }
    /**
     * @return {?}
     */
    retractSearch() {
        this.searchForm.controls['keyword'].disable();
        this.isSearchExpanded = false;
    }
    /**
     * @return {?}
     */
    onSearchSubmit() {
        if (this.searchForm.valid) {
            console.log('Send request..');
        }
    }
}
InputSearchComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-input-search',
                template: "<form [formGroup]=\"searchForm\" (ngSubmit)=\"onSearchSubmit()\">\r\n    <mat-form-field appearance=\"standard\">\r\n      <div [class]=\"'flex flex-row input-search' + (isSearchExpanded ? ' input-search-open':' ')\">\r\n          <div class=\"flex-item\" style=\"padding-left: 5px;\">\r\n              <input matInput (blur)=\"onBlurSearch($event)\" formControlName=\"keyword\" placeholder=\"Pesquisar...\"/>\r\n          </div>\r\n          <div #searchIcon class=\"flex-item\" (click)=\"onClickSearch()\">\r\n              <mat-icon class=\"font-size-24\">search</mat-icon>\r\n          </div>\r\n      </div>\r\n    </mat-form-field>\r\n</form>\r\n",
                styles: ["input{padding-top:5px}.input-search{background-color:transparent;height:25px;width:25px;float:right;padding:2px 10px 3px;border-radius:1.6rem;transition:width .5s,padding .5s,color .5s,background-color .5s;border:.5px solid transparent;cursor:pointer}.input-search-open{background-color:#fff;color:#000;width:100%;border:.5px solid #000}::ng-deep .mat-form-field-appearance-standard .mat-form-field-underline{height:0!important}::ng-deep .mat-form-field-appearance-standard .mat-form-field-ripple{height:0!important}"]
            }] }
];
/** @nocollapse */
InputSearchComponent.ctorParameters = () => [
    { type: FormBuilder }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtc2VhcmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2d1YS10aGVtZS8iLCJzb3VyY2VzIjpbImxpYi9pbnB1dC1zZWFyY2gvaW5wdXQtc2VhcmNoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQWEsV0FBVyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBT3BFLE1BQU0sT0FBTyxvQkFBb0I7Ozs7SUFJL0IsWUFDVSxXQUF3QjtRQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUpsQyxxQkFBZ0IsR0FBRyxLQUFLLENBQUM7SUFLckIsQ0FBQzs7OztJQUVMLFFBQVE7UUFDTixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDO1lBQ3ZDLE9BQU8sRUFBRSxDQUFDLEVBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQztTQUM3RCxDQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsYUFBYTtRQUNYLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDMUIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3JCO2FBQU07WUFDTCxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7U0FDdkI7SUFDSCxDQUFDOzs7OztJQUVELFlBQVksQ0FBQyxNQUFNO1FBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFLLEVBQUU7WUFDOUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUM3QixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDdEI7SUFDSCxDQUFDOzs7O0lBRUQsWUFBWTtRQUNSLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQzdDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7SUFDakMsQ0FBQzs7OztJQUNELGFBQWE7UUFDVCxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUM5QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO0lBQ2xDLENBQUM7Ozs7SUFFRCxjQUFjO1FBQ1osSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRTtZQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7U0FDL0I7SUFDSCxDQUFDOzs7WUEvQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLHdwQkFBNEM7O2FBRTdDOzs7O1lBTm1CLFdBQVc7Ozs7SUFRN0IsZ0RBQXlCOztJQUN6QiwwQ0FBc0I7Ozs7O0lBR3BCLDJDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1pbnB1dC1zZWFyY2gnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9pbnB1dC1zZWFyY2guY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2lucHV0LXNlYXJjaC5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJbnB1dFNlYXJjaENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgaXNTZWFyY2hFeHBhbmRlZCA9IGZhbHNlO1xyXG4gIHNlYXJjaEZvcm06IEZvcm1Hcm91cDtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlclxyXG4gICkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5zZWFyY2hGb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XHJcbiAgICAgIGtleXdvcmQ6IFt7dmFsdWU6ICcnLCBkaXNhYmxlZDogdHJ1ZSB9LCBWYWxpZGF0b3JzLnJlcXVpcmVkXVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBvbkNsaWNrU2VhcmNoKCkge1xyXG4gICAgaWYgKCF0aGlzLmlzU2VhcmNoRXhwYW5kZWQpIHtcclxuICAgICAgdGhpcy5leHBhbmRTZWFyY2goKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMub25TZWFyY2hTdWJtaXQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uQmx1clNlYXJjaCgkZXZlbnQpIHtcclxuICAgIGlmICghdGhpcy5zZWFyY2hGb3JtLmNvbnRyb2xzWydrZXl3b3JkJ10udmFsdWUpIHtcclxuICAgICAgY29uc29sZS5sb2coJ0ZlY2hhciBzZWFyY2gnKTtcclxuICAgICAgdGhpcy5yZXRyYWN0U2VhcmNoKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBleHBhbmRTZWFyY2goKSB7XHJcbiAgICAgIHRoaXMuc2VhcmNoRm9ybS5jb250cm9sc1sna2V5d29yZCddLmVuYWJsZSgpO1xyXG4gICAgICB0aGlzLmlzU2VhcmNoRXhwYW5kZWQgPSB0cnVlO1xyXG4gIH1cclxuICByZXRyYWN0U2VhcmNoKCkge1xyXG4gICAgICB0aGlzLnNlYXJjaEZvcm0uY29udHJvbHNbJ2tleXdvcmQnXS5kaXNhYmxlKCk7XHJcbiAgICAgIHRoaXMuaXNTZWFyY2hFeHBhbmRlZCA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgb25TZWFyY2hTdWJtaXQoKSB7XHJcbiAgICBpZiAodGhpcy5zZWFyY2hGb3JtLnZhbGlkKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdTZW5kIHJlcXVlc3QuLicpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuIl19