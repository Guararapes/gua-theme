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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbGJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ndWEtdGhlbWUtbGliLyIsInNvdXJjZXMiOlsibGliL3Rvb2xiYXIvdG9vbGJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFRbEQsTUFBTSxPQUFPLGdCQUFnQjtJQU0zQjtRQUxBLHFCQUFnQixHQUFHLEtBQUssQ0FBQztRQUV6Qix1QkFBa0IsR0FBRyxLQUFLLENBQUM7SUFHWCxDQUFDOzs7O0lBRWpCLFFBQVE7SUFFUixDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxrQkFBa0IsR0FBRyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztJQUNyRCxDQUFDOzs7OztJQUVELE9BQU8sQ0FBQyxLQUFLO1FBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUNsQixDQUFDOzs7OztJQUVELE9BQU8sQ0FBQyxLQUFLO1FBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUNsQixDQUFDOzs7OztJQUdELFNBQVMsQ0FBQyxNQUFNO1FBQ2QsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEtBQUssQ0FBQztJQUNsQyxDQUFDOzs7WUFoQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2dCQUN2QixvNEJBQXVDOzthQUV4Qzs7Ozs7O0lBRUMsNENBQXlCOztJQUN6QixzQ0FBc0I7O0lBQ3RCLDhDQUEyQjs7SUFDM0IsNENBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtdG9vbGJhcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3Rvb2xiYXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3Rvb2xiYXIuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVG9vbGJhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgaXNTZWFyY2hFeHBhbmRlZCA9IGZhbHNlO1xyXG4gIHNlYXJjaEZvcm06IEZvcm1Hcm91cDtcclxuICBpc1NpZGVNZW51RXhwYW5kZWQgPSBmYWxzZTtcclxuICBwbGFjZUhvbGRlcklucHV0OiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG5cclxuICB9XHJcblxyXG4gIG9uQ2xpY2tNZW51KCkge1xyXG4gICAgdGhpcy5pc1NpZGVNZW51RXhwYW5kZWQgPSAhdGhpcy5pc1NpZGVNZW51RXhwYW5kZWQ7XHJcbiAgfVxyXG5cclxuICBvbkNMaWNrKGV2ZW50KSB7XHJcbiAgICBjb25zb2xlLmxvZygxMjMpXHJcbiAgfVxyXG5cclxuICBvbkNsb3NlKGV2ZW50KSB7XHJcbiAgICBjb25zb2xlLmxvZygxMjMpXHJcbiAgfVxyXG5cclxuXHJcbiAgY2xvc2VNZW51KCRldmVudCkge1xyXG4gICAgdGhpcy5pc1NpZGVNZW51RXhwYW5kZWQgPSBmYWxzZTtcclxuICB9XHJcbn1cclxuIl19