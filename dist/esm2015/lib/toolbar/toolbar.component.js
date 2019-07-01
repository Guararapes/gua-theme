/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
export class ToolbarComponent {
    constructor() {
        this.isSearchExpanded = false;
        this.isSideMenuExpanded = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    onClickMenu() {
        this.isSideMenuExpanded = !this.isSideMenuExpanded;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onCLick(event) {
        console.log(123);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onClose(event) {
        console.log(123);
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    closeMenu($event) {
        this.isSideMenuExpanded = false;
    }
}
ToolbarComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-toolbar',
                template: "<app-navbar>\r\n  <div [class]=\"'navbar-tool navbar-icon flex-item navbar-menu ' + (isSideMenuExpanded ? ' navbar-icon-selected':'')\"\r\n    (click)=\"onClickMenu()\">\r\n    <mat-icon class=\"font-size-24\">menu</mat-icon>\r\n  </div>\r\n  <div class=\"navbar-tool flex-item\">\r\n    <p class=\"navbar-title\">PCP</p>\r\n  </div>\r\n  <span class=\"flex-item\"></span>\r\n  <div class=\"navbar-tool flex-item\">\r\n  </div>\r\n  <app-navbar-item>\r\n    <app-input-search></app-input-search>\r\n  </app-navbar-item>\r\n  <app-navbar-item>\r\n    <app-button icon=\"apps\" (click)=\"onCLick($event)\"></app-button>\r\n  </app-navbar-item>\r\n  <app-navbar-item>\r\n    <div class=\"navbar-avatar\">\r\n      T\r\n    </div>\r\n  </app-navbar-item>\r\n</app-navbar>\r\n<app-side-menu (itemClicked)=\"closeMenu($event)\" [(isSideMenuExpanded)]=\"isSideMenuExpanded\"></app-side-menu>\r\n",
                styles: [".navbar-tool{padding-left:12px;padding-right:12px;line-height:66px;-webkit-transform:translateY(-2px);transform:translateY(-2px);text-align:center}.navbar-tool .navbar-title{font-family:'Avenir LT Std 85 Heavy';text-transform:uppercase;font-size:34px;margin:0;-webkit-transform:translateY(2px);transform:translateY(2px)}.navbar-menu{font-style:normal;font-weight:400;font-size:14px;width:66px;padding:0}.navbar-icon mat-icon{vertical-align:middle}.navbar-icon-selected{background-color:#232323}.navbar-icon-avatar{padding-left:12px}.navbar-avatar{height:38px;width:38px;line-height:38px;background-color:#2795df;border-radius:50%;display:inline-block;text-align:center;vertical-align:middle}::ng-deep .mat-form-field-appearance-standard .mat-form-field-flex{padding-top:0!important}"]
            }] }
];
/** @nocollapse */
ToolbarComponent.ctorParameters = () => [];
if (false) {
    /** @type {?} */
    ToolbarComponent.prototype.isSearchExpanded;
    /** @type {?} */
    ToolbarComponent.prototype.searchForm;
    /** @type {?} */
    ToolbarComponent.prototype.isSideMenuExpanded;
    /** @type {?} */
    ToolbarComponent.prototype.placeHolderInput;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbGJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ndWEtdGhlbWUvIiwic291cmNlcyI6WyJsaWIvdG9vbGJhci90b29sYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQVFsRCxNQUFNLE9BQU8sZ0JBQWdCO0lBTTNCO1FBTEEscUJBQWdCLEdBQUcsS0FBSyxDQUFDO1FBRXpCLHVCQUFrQixHQUFHLEtBQUssQ0FBQztJQUdYLENBQUM7Ozs7SUFFakIsUUFBUTtJQUVSLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLGtCQUFrQixHQUFHLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDO0lBQ3JELENBQUM7Ozs7O0lBRUQsT0FBTyxDQUFDLEtBQUs7UUFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQ2xCLENBQUM7Ozs7O0lBRUQsT0FBTyxDQUFDLEtBQUs7UUFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQ2xCLENBQUM7Ozs7O0lBR0QsU0FBUyxDQUFDLE1BQU07UUFDZCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDO0lBQ2xDLENBQUM7OztZQWhDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLG80QkFBdUM7O2FBRXhDOzs7Ozs7SUFFQyw0Q0FBeUI7O0lBQ3pCLHNDQUFzQjs7SUFDdEIsOENBQTJCOztJQUMzQiw0Q0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC10b29sYmFyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vdG9vbGJhci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vdG9vbGJhci5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUb29sYmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBpc1NlYXJjaEV4cGFuZGVkID0gZmFsc2U7XHJcbiAgc2VhcmNoRm9ybTogRm9ybUdyb3VwO1xyXG4gIGlzU2lkZU1lbnVFeHBhbmRlZCA9IGZhbHNlO1xyXG4gIHBsYWNlSG9sZGVySW5wdXQ6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcblxyXG4gIH1cclxuXHJcbiAgb25DbGlja01lbnUoKSB7XHJcbiAgICB0aGlzLmlzU2lkZU1lbnVFeHBhbmRlZCA9ICF0aGlzLmlzU2lkZU1lbnVFeHBhbmRlZDtcclxuICB9XHJcblxyXG4gIG9uQ0xpY2soZXZlbnQpIHtcclxuICAgIGNvbnNvbGUubG9nKDEyMylcclxuICB9XHJcblxyXG4gIG9uQ2xvc2UoZXZlbnQpIHtcclxuICAgIGNvbnNvbGUubG9nKDEyMylcclxuICB9XHJcblxyXG5cclxuICBjbG9zZU1lbnUoJGV2ZW50KSB7XHJcbiAgICB0aGlzLmlzU2lkZU1lbnVFeHBhbmRlZCA9IGZhbHNlO1xyXG4gIH1cclxufVxyXG4iXX0=