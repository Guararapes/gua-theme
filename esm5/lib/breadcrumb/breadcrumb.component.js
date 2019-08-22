/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { distinctUntilChanged, filter, map } from 'rxjs/operators';
var BreadcrumbComponent = /** @class */ (function () {
    function BreadcrumbComponent(activatedRoute, router) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.breadcrumbs$ = this.router.events.pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return event instanceof NavigationEnd; })), distinctUntilChanged(), map((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this.buildBreadCrumb(_this.activatedRoute.root); })));
    }
    /**
     * @return {?}
     */
    BreadcrumbComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} route
     * @param {?=} url
     * @param {?=} breadcrumbs
     * @return {?}
     */
    BreadcrumbComponent.prototype.buildBreadCrumb = /**
     * @param {?} route
     * @param {?=} url
     * @param {?=} breadcrumbs
     * @return {?}
     */
    function (route, url, breadcrumbs) {
        if (url === void 0) { url = ''; }
        if (breadcrumbs === void 0) { breadcrumbs = []; }
        /** @type {?} */
        var label = route.routeConfig ? route.routeConfig.data['breadcrumb'] : 'Inicio';
        /** @type {?} */
        var path = route.routeConfig ? route.routeConfig.path : '';
        /** @type {?} */
        var nextUrl = "" + url + path + "/";
        /** @type {?} */
        var breadcrumb = {
            label: label,
            url: nextUrl,
        };
        /** @type {?} */
        var newBreadcrumbs = tslib_1.__spread(breadcrumbs, [breadcrumb]);
        if (route.firstChild) {
            return this.buildBreadCrumb(route.firstChild, nextUrl, newBreadcrumbs);
        }
        return newBreadcrumbs;
    };
    BreadcrumbComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-breadcrumb',
                    template: "<ol class=\"breadcrumb\">\r\n  <li *ngFor=\"let breadcrumb of breadcrumbs$ | async; last as isLast;\"\r\n      class=\"breadcrumb-item\"\r\n      [ngClass]=\"{'active': isLast}\" aria-current=\"page\">\r\n    <a *ngIf=\"!isLast; else lastRoute\"\r\n        [routerLink]=\"[breadcrumb.url]\"\r\n        routerLinkActive=\"active\">\r\n      {{ breadcrumb.label }}\r\n    </a>\r\n    <ng-template #lastRoute>{{ breadcrumb.label }}</ng-template>\r\n  </li>\r\n</ol>",
                    styles: [".breadcrumb li{display:inline}.breadcrumb li+li:before{content:'\\E5CC';font-family:'Material Icons';color:rgba(25,25,25,.32);padding-left:4px;padding-right:4px}.breadcrumb{font-size:14px;font-style:normal;font-weight:600}.breadcrumb a{color:rgba(25,25,25,.32);text-decoration:none}"]
                }] }
    ];
    /** @nocollapse */
    BreadcrumbComponent.ctorParameters = function () { return [
        { type: ActivatedRoute },
        { type: Router }
    ]; };
    return BreadcrumbComponent;
}());
export { BreadcrumbComponent };
if (false) {
    /** @type {?} */
    BreadcrumbComponent.prototype.breadcrumbs$;
    /**
     * @type {?}
     * @private
     */
    BreadcrumbComponent.prototype.activatedRoute;
    /**
     * @type {?}
     * @private
     */
    BreadcrumbComponent.prototype.router;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ndWEtdGhlbWUvIiwic291cmNlcyI6WyJsaWIvYnJlYWRjcnVtYi9icmVhZGNydW1iLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFDaEQsT0FBTyxFQUFDLGNBQWMsRUFBRSxhQUFhLEVBQUUsTUFBTSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFFdEUsT0FBTyxFQUFDLG9CQUFvQixFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUdqRTtJQVlFLDZCQUFvQixjQUE4QixFQUM5QixNQUFjO1FBRGxDLGlCQUVDO1FBRm1CLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBUGxDLGlCQUFZLEdBQTZCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FDOUQsTUFBTTs7OztRQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxZQUFZLGFBQWEsRUFBOUIsQ0FBOEIsRUFBRSxFQUNoRCxvQkFBb0IsRUFBRSxFQUN0QixHQUFHOzs7O1FBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsZUFBZSxDQUFDLEtBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQTlDLENBQThDLEVBQUMsQ0FDN0QsQ0FBQztJQUlGLENBQUM7Ozs7SUFFRCxzQ0FBUTs7O0lBQVI7SUFDQSxDQUFDOzs7Ozs7O0lBRUQsNkNBQWU7Ozs7OztJQUFmLFVBQWdCLEtBQXFCLEVBQUUsR0FBZ0IsRUFDdkMsV0FBbUM7UUFEWixvQkFBQSxFQUFBLFFBQWdCO1FBQ3ZDLDRCQUFBLEVBQUEsZ0JBQW1DOztZQUMzQyxLQUFLLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVE7O1lBQzNFLElBQUksR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRTs7WUFFdEQsT0FBTyxHQUFHLEtBQUcsR0FBRyxHQUFHLElBQUksTUFBRzs7WUFDMUIsVUFBVSxHQUFHO1lBQ2pCLEtBQUssRUFBRSxLQUFLO1lBQ1osR0FBRyxFQUFFLE9BQU87U0FDYjs7WUFDSyxjQUFjLG9CQUFPLFdBQVcsR0FBRSxVQUFVLEVBQUM7UUFDbkQsSUFBSSxLQUFLLENBQUMsVUFBVSxFQUFFO1lBQ3BCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLE9BQU8sRUFBRSxjQUFjLENBQUMsQ0FBQztTQUN4RTtRQUNELE9BQU8sY0FBYyxDQUFDO0lBQ3hCLENBQUM7O2dCQWxDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsMGRBQTBDOztpQkFFM0M7Ozs7Z0JBVE8sY0FBYztnQkFBaUIsTUFBTTs7SUF3QzdDLDBCQUFDO0NBQUEsQUFuQ0QsSUFtQ0M7U0E5QlksbUJBQW1COzs7SUFDOUIsMkNBSUU7Ozs7O0lBRVUsNkNBQXNDOzs7OztJQUN0QyxxQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtBY3RpdmF0ZWRSb3V0ZSwgTmF2aWdhdGlvbkVuZCwgUm91dGVyfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQge0JyZWFkQ3J1bWJ9IGZyb20gJy4vYnJlYWRjcnVtYic7XHJcbmltcG9ydCB7ZGlzdGluY3RVbnRpbENoYW5nZWQsIGZpbHRlciwgbWFwfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLWJyZWFkY3J1bWInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9icmVhZGNydW1iLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9icmVhZGNydW1iLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEJyZWFkY3J1bWJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIGJyZWFkY3J1bWJzJDogT2JzZXJ2YWJsZTxCcmVhZENydW1iW10+ID0gdGhpcy5yb3V0ZXIuZXZlbnRzLnBpcGUoXHJcbiAgICBmaWx0ZXIoZXZlbnQgPT4gZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kICksXHJcbiAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxyXG4gICAgbWFwKGV2ZW50ID0+IHRoaXMuYnVpbGRCcmVhZENydW1iKHRoaXMuYWN0aXZhdGVkUm91dGUucm9vdCkpXHJcbiAgKTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxuICBidWlsZEJyZWFkQ3J1bWIocm91dGU6IEFjdGl2YXRlZFJvdXRlLCB1cmw6IHN0cmluZyA9ICcnLFxyXG4gICAgICAgICAgICAgICAgICBicmVhZGNydW1iczogQXJyYXk8QnJlYWRDcnVtYj4gPSBbXSk6IEFycmF5PEJyZWFkQ3J1bWI+IHtcclxuICAgIGNvbnN0IGxhYmVsID0gcm91dGUucm91dGVDb25maWcgPyByb3V0ZS5yb3V0ZUNvbmZpZy5kYXRhWydicmVhZGNydW1iJ10gOiAnSW5pY2lvJztcclxuICAgIGNvbnN0IHBhdGggPSByb3V0ZS5yb3V0ZUNvbmZpZyA/IHJvdXRlLnJvdXRlQ29uZmlnLnBhdGggOiAnJztcclxuXHJcbiAgICBjb25zdCBuZXh0VXJsID0gYCR7dXJsfSR7cGF0aH0vYDtcclxuICAgIGNvbnN0IGJyZWFkY3J1bWIgPSB7XHJcbiAgICAgIGxhYmVsOiBsYWJlbCxcclxuICAgICAgdXJsOiBuZXh0VXJsLFxyXG4gICAgfTtcclxuICAgIGNvbnN0IG5ld0JyZWFkY3J1bWJzID0gWy4uLmJyZWFkY3J1bWJzLCBicmVhZGNydW1iXTtcclxuICAgIGlmIChyb3V0ZS5maXJzdENoaWxkKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmJ1aWxkQnJlYWRDcnVtYihyb3V0ZS5maXJzdENoaWxkLCBuZXh0VXJsLCBuZXdCcmVhZGNydW1icyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbmV3QnJlYWRjcnVtYnM7XHJcbiAgfVxyXG59XHJcbiJdfQ==