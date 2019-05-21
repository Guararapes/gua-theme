/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
export class InputSearchComponent {
    /**
     * @param {?} formBuilder
     */
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.isSearchExpanded = false;
        this.getValue = new EventEmitter();
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
            this.getValue.emit(this.searchForm.value);
        }
    }
}
InputSearchComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-input-search',
                template: "<form [formGroup]=\"searchForm\" (ngSubmit)=\"onSearchSubmit()\">\r\n    <mat-form-field appearance=\"standard\" [style.height]=\"height\">\r\n      <div [class]=\"'flex flex-row input-search' + (isSearchExpanded ? ' input-search-open':' ')\">\r\n          <div class=\"flex-item\" style=\"padding-left: 5px;\">\r\n              <input matInput (blur)=\"onBlurSearch($event)\" formControlName=\"keyword\" placeholder=\"Pesquisar...\"/>\r\n          </div>\r\n          <div #searchIcon class=\"flex-item\" (click)=\"onClickSearch()\">\r\n              <mat-icon class=\"font-size-24\">search</mat-icon>\r\n          </div>\r\n      </div>\r\n    </mat-form-field>\r\n</form>\r\n",
                styles: ["input{padding-top:5px}.input-search{background-color:transparent;height:25px;width:25px;float:right;padding:2px 10px 3px;border-radius:1.6rem;transition:width .5s,padding .5s,color .5s,background-color .5s;border:.5px solid transparent;cursor:pointer}.input-search-open{background-color:#fff;color:#000;width:100%;border:.5px solid #000}::ng-deep .mat-form-field-appearance-standard .mat-form-field-underline{height:0!important}::ng-deep .mat-form-field-appearance-standard .mat-form-field-ripple{height:0!important}"]
            }] }
];
/** @nocollapse */
InputSearchComponent.ctorParameters = () => [
    { type: FormBuilder }
];
InputSearchComponent.propDecorators = {
    height: [{ type: Input }],
    getValue: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    InputSearchComponent.prototype.isSearchExpanded;
    /** @type {?} */
    InputSearchComponent.prototype.searchForm;
    /** @type {?} */
    InputSearchComponent.prototype.height;
    /** @type {?} */
    InputSearchComponent.prototype.getValue;
    /**
     * @type {?}
     * @private
     */
    InputSearchComponent.prototype.formBuilder;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtc2VhcmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2d1YS10aGVtZS1saWIvIiwic291cmNlcyI6WyJsaWIvaW5wdXQtc2VhcmNoL2lucHV0LXNlYXJjaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFhLFdBQVcsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQU9wRSxNQUFNLE9BQU8sb0JBQW9COzs7O0lBTy9CLFlBQ1UsV0FBd0I7UUFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFQbEMscUJBQWdCLEdBQUcsS0FBSyxDQUFDO1FBSWYsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFJcEMsQ0FBQzs7OztJQUVMLFFBQVE7UUFDTixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDO1lBQ3ZDLE9BQU8sRUFBRSxDQUFDLEVBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQztTQUM3RCxDQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsYUFBYTtRQUNYLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDMUIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3JCO2FBQU07WUFDTCxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7U0FDdkI7SUFDSCxDQUFDOzs7OztJQUVELFlBQVksQ0FBQyxNQUFNO1FBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFLLEVBQUU7WUFDOUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3RCO0lBQ0gsQ0FBQzs7OztJQUVELFlBQVk7UUFDUixJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUM3QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO0lBQ2pDLENBQUM7Ozs7SUFDRCxhQUFhO1FBQ1QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDOUMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztJQUNsQyxDQUFDOzs7O0lBRUQsY0FBYztRQUNaLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUU7WUFDMUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQTtTQUN6QztJQUNILENBQUM7OztZQWpERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsa3JCQUE0Qzs7YUFFN0M7Ozs7WUFObUIsV0FBVzs7O3FCQVc1QixLQUFLO3VCQUNMLE1BQU07Ozs7SUFKUCxnREFBeUI7O0lBQ3pCLDBDQUFzQjs7SUFFdEIsc0NBQXdCOztJQUN4Qix3Q0FBd0M7Ozs7O0lBR3RDLDJDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLWlucHV0LXNlYXJjaCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2lucHV0LXNlYXJjaC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vaW5wdXQtc2VhcmNoLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIElucHV0U2VhcmNoQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBpc1NlYXJjaEV4cGFuZGVkID0gZmFsc2U7XHJcbiAgc2VhcmNoRm9ybTogRm9ybUdyb3VwO1xyXG5cclxuICBASW5wdXQoKSBoZWlnaHQ6IHN0cmluZztcclxuICBAT3V0cHV0KCkgZ2V0VmFsdWUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXJcclxuICApIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuc2VhcmNoRm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xyXG4gICAgICBrZXl3b3JkOiBbe3ZhbHVlOiAnJywgZGlzYWJsZWQ6IHRydWUgfSwgVmFsaWRhdG9ycy5yZXF1aXJlZF1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb25DbGlja1NlYXJjaCgpIHtcclxuICAgIGlmICghdGhpcy5pc1NlYXJjaEV4cGFuZGVkKSB7XHJcbiAgICAgIHRoaXMuZXhwYW5kU2VhcmNoKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLm9uU2VhcmNoU3VibWl0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkJsdXJTZWFyY2goJGV2ZW50KSB7XHJcbiAgICBpZiAoIXRoaXMuc2VhcmNoRm9ybS5jb250cm9sc1sna2V5d29yZCddLnZhbHVlKSB7XHJcbiAgICAgIHRoaXMucmV0cmFjdFNlYXJjaCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZXhwYW5kU2VhcmNoKCkge1xyXG4gICAgICB0aGlzLnNlYXJjaEZvcm0uY29udHJvbHNbJ2tleXdvcmQnXS5lbmFibGUoKTtcclxuICAgICAgdGhpcy5pc1NlYXJjaEV4cGFuZGVkID0gdHJ1ZTtcclxuICB9XHJcbiAgcmV0cmFjdFNlYXJjaCgpIHtcclxuICAgICAgdGhpcy5zZWFyY2hGb3JtLmNvbnRyb2xzWydrZXl3b3JkJ10uZGlzYWJsZSgpO1xyXG4gICAgICB0aGlzLmlzU2VhcmNoRXhwYW5kZWQgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIG9uU2VhcmNoU3VibWl0KCkge1xyXG4gICAgaWYgKHRoaXMuc2VhcmNoRm9ybS52YWxpZCkge1xyXG4gICAgIHRoaXMuZ2V0VmFsdWUuZW1pdCh0aGlzLnNlYXJjaEZvcm0udmFsdWUpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=