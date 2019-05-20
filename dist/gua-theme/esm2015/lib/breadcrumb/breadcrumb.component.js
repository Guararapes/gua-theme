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
                template: "<ol class=\"breadcrumb\">\r\n  <li *ngFor=\"let breadcrumb of breadcrumbs$ | async; last as isLast;\"\r\n      class=\"breadcrumb-item\"\r\n      [ngClass]=\"{'active': isLast}\" aria-current=\"page\">\r\n    <a *ngIf=\"!isLast; else lastRoute\"\r\n        [routerLink]=\"[breadcrumb.url]\"\r\n        routerLinkActive=\"active\">\r\n      {{ breadcrumb.label }}\r\n    </a>\r\n    <ng-template #lastRoute>{{ breadcrumb.label }}</ng-template>\r\n  </li>\r\n</ol>\r\n<mat-icon class=\"font-size-24\">apps</mat-icon>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ndWEtdGhlbWUvIiwic291cmNlcyI6WyJsaWIvYnJlYWRjcnVtYi9icmVhZGNydW1iLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUNoRCxPQUFPLEVBQUMsY0FBYyxFQUFFLGFBQWEsRUFBRSxNQUFNLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUV0RSxPQUFPLEVBQUMsb0JBQW9CLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBUWpFLE1BQU0sT0FBTyxtQkFBbUI7Ozs7O0lBTzlCLFlBQW9CLGNBQThCLEVBQzlCLE1BQWM7UUFEZCxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQVBsQyxpQkFBWSxHQUE2QixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQzlELE1BQU07Ozs7UUFBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssWUFBWSxhQUFhLEVBQUUsRUFDaEQsb0JBQW9CLEVBQUUsRUFDdEIsR0FBRzs7OztRQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFDLENBQzdELENBQUM7SUFJRixDQUFDOzs7O0lBRUQsUUFBUTtJQUNSLENBQUM7Ozs7Ozs7SUFFRCxlQUFlLENBQUMsS0FBcUIsRUFBRSxNQUFjLEVBQUUsRUFDdkMsY0FBaUMsRUFBRTs7Y0FDM0MsS0FBSyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFROztjQUMzRSxJQUFJLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUU7O2NBRXRELE9BQU8sR0FBRyxHQUFHLEdBQUcsR0FBRyxJQUFJLEdBQUc7O2NBQzFCLFVBQVUsR0FBRztZQUNqQixLQUFLLEVBQUUsS0FBSztZQUNaLEdBQUcsRUFBRSxPQUFPO1NBQ2I7O2NBQ0ssY0FBYyxHQUFHLENBQUMsR0FBRyxXQUFXLEVBQUUsVUFBVSxDQUFDO1FBQ25ELElBQUksS0FBSyxDQUFDLFVBQVUsRUFBRTtZQUNwQixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxPQUFPLEVBQUUsY0FBYyxDQUFDLENBQUM7U0FDeEU7UUFDRCxPQUFPLGNBQWMsQ0FBQztJQUN4QixDQUFDOzs7WUFsQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLDhnQkFBMEM7O2FBRTNDOzs7O1lBVE8sY0FBYztZQUFpQixNQUFNOzs7O0lBVzNDLDJDQUlFOzs7OztJQUVVLDZDQUFzQzs7Ozs7SUFDdEMscUNBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7QWN0aXZhdGVkUm91dGUsIE5hdmlnYXRpb25FbmQsIFJvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHtCcmVhZENydW1ifSBmcm9tICcuL2JyZWFkY3J1bWInO1xyXG5pbXBvcnQge2Rpc3RpbmN0VW50aWxDaGFuZ2VkLCBmaWx0ZXIsIG1hcH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1icmVhZGNydW1iJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vYnJlYWRjcnVtYi5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vYnJlYWRjcnVtYi5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCcmVhZGNydW1iQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBicmVhZGNydW1icyQ6IE9ic2VydmFibGU8QnJlYWRDcnVtYltdPiA9IHRoaXMucm91dGVyLmV2ZW50cy5waXBlKFxyXG4gICAgZmlsdGVyKGV2ZW50ID0+IGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZCApLFxyXG4gICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcclxuICAgIG1hcChldmVudCA9PiB0aGlzLmJ1aWxkQnJlYWRDcnVtYih0aGlzLmFjdGl2YXRlZFJvdXRlLnJvb3QpKVxyXG4gICk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbiAgYnVpbGRCcmVhZENydW1iKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgdXJsOiBzdHJpbmcgPSAnJyxcclxuICAgICAgICAgICAgICAgICAgYnJlYWRjcnVtYnM6IEFycmF5PEJyZWFkQ3J1bWI+ID0gW10pOiBBcnJheTxCcmVhZENydW1iPiB7XHJcbiAgICBjb25zdCBsYWJlbCA9IHJvdXRlLnJvdXRlQ29uZmlnID8gcm91dGUucm91dGVDb25maWcuZGF0YVsnYnJlYWRjcnVtYiddIDogJ0luaWNpbyc7XHJcbiAgICBjb25zdCBwYXRoID0gcm91dGUucm91dGVDb25maWcgPyByb3V0ZS5yb3V0ZUNvbmZpZy5wYXRoIDogJyc7XHJcblxyXG4gICAgY29uc3QgbmV4dFVybCA9IGAke3VybH0ke3BhdGh9L2A7XHJcbiAgICBjb25zdCBicmVhZGNydW1iID0ge1xyXG4gICAgICBsYWJlbDogbGFiZWwsXHJcbiAgICAgIHVybDogbmV4dFVybCxcclxuICAgIH07XHJcbiAgICBjb25zdCBuZXdCcmVhZGNydW1icyA9IFsuLi5icmVhZGNydW1icywgYnJlYWRjcnVtYl07XHJcbiAgICBpZiAocm91dGUuZmlyc3RDaGlsZCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5idWlsZEJyZWFkQ3J1bWIocm91dGUuZmlyc3RDaGlsZCwgbmV4dFVybCwgbmV3QnJlYWRjcnVtYnMpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5ld0JyZWFkY3J1bWJzO1xyXG4gIH1cclxufVxyXG4iXX0=