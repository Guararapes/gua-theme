/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { distinctUntilChanged, filter, map } from 'rxjs/operators';
export class BreadcrumbComponent {
    /**
     * @param {?} activatedRoute
     * @param {?} router
     */
    constructor(activatedRoute, router) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.breadcrumbs$ = this.router.events.pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        event => event instanceof NavigationEnd)), distinctUntilChanged(), map((/**
         * @param {?} event
         * @return {?}
         */
        event => this.buildBreadCrumb(this.activatedRoute.root))));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} route
     * @param {?=} url
     * @param {?=} breadcrumbs
     * @return {?}
     */
    buildBreadCrumb(route, url = '', breadcrumbs = []) {
        /** @type {?} */
        const label = route.routeConfig ? route.routeConfig.data['breadcrumb'] : 'Inicio';
        /** @type {?} */
        const path = route.routeConfig ? route.routeConfig.path : '';
        /** @type {?} */
        const nextUrl = `${url}${path}/`;
        /** @type {?} */
        const breadcrumb = {
            label: label,
            url: nextUrl,
        };
        /** @type {?} */
        const newBreadcrumbs = [...breadcrumbs, breadcrumb];
        if (route.firstChild) {
            return this.buildBreadCrumb(route.firstChild, nextUrl, newBreadcrumbs);
        }
        return newBreadcrumbs;
    }
}
BreadcrumbComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-breadcrumb',
                template: "<ol class=\"breadcrumb\">\r\n  <li *ngFor=\"let breadcrumb of breadcrumbs$ | async; last as isLast;\"\r\n      class=\"breadcrumb-item\"\r\n      [ngClass]=\"{'active': isLast}\" aria-current=\"page\">\r\n    <a *ngIf=\"!isLast; else lastRoute\"\r\n        [routerLink]=\"[breadcrumb.url]\"\r\n        routerLinkActive=\"active\">\r\n      {{ breadcrumb.label }}\r\n    </a>\r\n    <ng-template #lastRoute>{{ breadcrumb.label }}</ng-template>\r\n  </li>\r\n</ol>",
                styles: [".breadcrumb li{display:inline}.breadcrumb li+li:before{content:'\\E5CC';font-family:'Material Icons';color:rgba(25,25,25,.32);padding-left:4px;padding-right:4px}.breadcrumb{font-size:14px;font-style:normal;font-weight:600}.breadcrumb a{color:rgba(25,25,25,.32);text-decoration:none}"]
            }] }
];
/** @nocollapse */
BreadcrumbComponent.ctorParameters = () => [
    { type: ActivatedRoute },
    { type: Router }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ndWEtdGhlbWUtbGliLyIsInNvdXJjZXMiOlsibGliL2JyZWFkY3J1bWIvYnJlYWRjcnVtYi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFDaEQsT0FBTyxFQUFDLGNBQWMsRUFBRSxhQUFhLEVBQUUsTUFBTSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFFdEUsT0FBTyxFQUFDLG9CQUFvQixFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQVFqRSxNQUFNLE9BQU8sbUJBQW1COzs7OztJQU85QixZQUFvQixjQUE4QixFQUM5QixNQUFjO1FBRGQsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFQbEMsaUJBQVksR0FBNkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUM5RCxNQUFNOzs7O1FBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLFlBQVksYUFBYSxFQUFFLEVBQ2hELG9CQUFvQixFQUFFLEVBQ3RCLEdBQUc7Ozs7UUFBQyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUM3RCxDQUFDO0lBSUYsQ0FBQzs7OztJQUVELFFBQVE7SUFDUixDQUFDOzs7Ozs7O0lBRUQsZUFBZSxDQUFDLEtBQXFCLEVBQUUsTUFBYyxFQUFFLEVBQ3ZDLGNBQWlDLEVBQUU7O2NBQzNDLEtBQUssR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUTs7Y0FDM0UsSUFBSSxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFOztjQUV0RCxPQUFPLEdBQUcsR0FBRyxHQUFHLEdBQUcsSUFBSSxHQUFHOztjQUMxQixVQUFVLEdBQUc7WUFDakIsS0FBSyxFQUFFLEtBQUs7WUFDWixHQUFHLEVBQUUsT0FBTztTQUNiOztjQUNLLGNBQWMsR0FBRyxDQUFDLEdBQUcsV0FBVyxFQUFFLFVBQVUsQ0FBQztRQUNuRCxJQUFJLEtBQUssQ0FBQyxVQUFVLEVBQUU7WUFDcEIsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsT0FBTyxFQUFFLGNBQWMsQ0FBQyxDQUFDO1NBQ3hFO1FBQ0QsT0FBTyxjQUFjLENBQUM7SUFDeEIsQ0FBQzs7O1lBbENGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQiwwZEFBMEM7O2FBRTNDOzs7O1lBVE8sY0FBYztZQUFpQixNQUFNOzs7O0lBVzNDLDJDQUlFOzs7OztJQUVVLDZDQUFzQzs7Ozs7SUFDdEMscUNBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7QWN0aXZhdGVkUm91dGUsIE5hdmlnYXRpb25FbmQsIFJvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHtCcmVhZENydW1ifSBmcm9tICcuL2JyZWFkY3J1bWInO1xyXG5pbXBvcnQge2Rpc3RpbmN0VW50aWxDaGFuZ2VkLCBmaWx0ZXIsIG1hcH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1icmVhZGNydW1iJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vYnJlYWRjcnVtYi5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vYnJlYWRjcnVtYi5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCcmVhZGNydW1iQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBicmVhZGNydW1icyQ6IE9ic2VydmFibGU8QnJlYWRDcnVtYltdPiA9IHRoaXMucm91dGVyLmV2ZW50cy5waXBlKFxyXG4gICAgZmlsdGVyKGV2ZW50ID0+IGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZCApLFxyXG4gICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcclxuICAgIG1hcChldmVudCA9PiB0aGlzLmJ1aWxkQnJlYWRDcnVtYih0aGlzLmFjdGl2YXRlZFJvdXRlLnJvb3QpKVxyXG4gICk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbiAgYnVpbGRCcmVhZENydW1iKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgdXJsOiBzdHJpbmcgPSAnJyxcclxuICAgICAgICAgICAgICAgICAgYnJlYWRjcnVtYnM6IEFycmF5PEJyZWFkQ3J1bWI+ID0gW10pOiBBcnJheTxCcmVhZENydW1iPiB7XHJcbiAgICBjb25zdCBsYWJlbCA9IHJvdXRlLnJvdXRlQ29uZmlnID8gcm91dGUucm91dGVDb25maWcuZGF0YVsnYnJlYWRjcnVtYiddIDogJ0luaWNpbyc7XHJcbiAgICBjb25zdCBwYXRoID0gcm91dGUucm91dGVDb25maWcgPyByb3V0ZS5yb3V0ZUNvbmZpZy5wYXRoIDogJyc7XHJcblxyXG4gICAgY29uc3QgbmV4dFVybCA9IGAke3VybH0ke3BhdGh9L2A7XHJcbiAgICBjb25zdCBicmVhZGNydW1iID0ge1xyXG4gICAgICBsYWJlbDogbGFiZWwsXHJcbiAgICAgIHVybDogbmV4dFVybCxcclxuICAgIH07XHJcbiAgICBjb25zdCBuZXdCcmVhZGNydW1icyA9IFsuLi5icmVhZGNydW1icywgYnJlYWRjcnVtYl07XHJcbiAgICBpZiAocm91dGUuZmlyc3RDaGlsZCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5idWlsZEJyZWFkQ3J1bWIocm91dGUuZmlyc3RDaGlsZCwgbmV4dFVybCwgbmV3QnJlYWRjcnVtYnMpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5ld0JyZWFkY3J1bWJzO1xyXG4gIH1cclxufVxyXG4iXX0=