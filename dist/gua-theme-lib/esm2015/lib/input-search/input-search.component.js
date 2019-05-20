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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtc2VhcmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2d1YS10aGVtZS1saWIvIiwic291cmNlcyI6WyJsaWIvaW5wdXQtc2VhcmNoL2lucHV0LXNlYXJjaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFhLFdBQVcsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQU9wRSxNQUFNLE9BQU8sb0JBQW9COzs7O0lBSS9CLFlBQ1UsV0FBd0I7UUFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFKbEMscUJBQWdCLEdBQUcsS0FBSyxDQUFDO0lBS3JCLENBQUM7Ozs7SUFFTCxRQUFRO1FBQ04sSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQztZQUN2QyxPQUFPLEVBQUUsQ0FBQyxFQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUM7U0FDN0QsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELGFBQWE7UUFDWCxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQzFCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUNyQjthQUFNO1lBQ0wsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQ3ZCO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxZQUFZLENBQUMsTUFBTTtRQUNqQixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSyxFQUFFO1lBQzlDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDN0IsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3RCO0lBQ0gsQ0FBQzs7OztJQUVELFlBQVk7UUFDUixJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUM3QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO0lBQ2pDLENBQUM7Ozs7SUFDRCxhQUFhO1FBQ1QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDOUMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztJQUNsQyxDQUFDOzs7O0lBRUQsY0FBYztRQUNaLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUU7WUFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1NBQy9CO0lBQ0gsQ0FBQzs7O1lBL0NGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1Qix3cEJBQTRDOzthQUU3Qzs7OztZQU5tQixXQUFXOzs7O0lBUTdCLGdEQUF5Qjs7SUFDekIsMENBQXNCOzs7OztJQUdwQiwyQ0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtaW5wdXQtc2VhcmNoJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vaW5wdXQtc2VhcmNoLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9pbnB1dC1zZWFyY2guY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSW5wdXRTZWFyY2hDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIGlzU2VhcmNoRXhwYW5kZWQgPSBmYWxzZTtcclxuICBzZWFyY2hGb3JtOiBGb3JtR3JvdXA7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXJcclxuICApIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuc2VhcmNoRm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xyXG4gICAgICBrZXl3b3JkOiBbe3ZhbHVlOiAnJywgZGlzYWJsZWQ6IHRydWUgfSwgVmFsaWRhdG9ycy5yZXF1aXJlZF1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb25DbGlja1NlYXJjaCgpIHtcclxuICAgIGlmICghdGhpcy5pc1NlYXJjaEV4cGFuZGVkKSB7XHJcbiAgICAgIHRoaXMuZXhwYW5kU2VhcmNoKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLm9uU2VhcmNoU3VibWl0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkJsdXJTZWFyY2goJGV2ZW50KSB7XHJcbiAgICBpZiAoIXRoaXMuc2VhcmNoRm9ybS5jb250cm9sc1sna2V5d29yZCddLnZhbHVlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdGZWNoYXIgc2VhcmNoJyk7XHJcbiAgICAgIHRoaXMucmV0cmFjdFNlYXJjaCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZXhwYW5kU2VhcmNoKCkge1xyXG4gICAgICB0aGlzLnNlYXJjaEZvcm0uY29udHJvbHNbJ2tleXdvcmQnXS5lbmFibGUoKTtcclxuICAgICAgdGhpcy5pc1NlYXJjaEV4cGFuZGVkID0gdHJ1ZTtcclxuICB9XHJcbiAgcmV0cmFjdFNlYXJjaCgpIHtcclxuICAgICAgdGhpcy5zZWFyY2hGb3JtLmNvbnRyb2xzWydrZXl3b3JkJ10uZGlzYWJsZSgpO1xyXG4gICAgICB0aGlzLmlzU2VhcmNoRXhwYW5kZWQgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIG9uU2VhcmNoU3VibWl0KCkge1xyXG4gICAgaWYgKHRoaXMuc2VhcmNoRm9ybS52YWxpZCkge1xyXG4gICAgICBjb25zb2xlLmxvZygnU2VuZCByZXF1ZXN0Li4nKTtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcbiJdfQ==