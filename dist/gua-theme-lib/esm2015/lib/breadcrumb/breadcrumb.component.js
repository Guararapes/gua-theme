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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ndWEtdGhlbWUtbGliLyIsInNvdXJjZXMiOlsibGliL2JyZWFkY3J1bWIvYnJlYWRjcnVtYi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFDaEQsT0FBTyxFQUFDLGNBQWMsRUFBRSxhQUFhLEVBQUUsTUFBTSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFFdEUsT0FBTyxFQUFDLG9CQUFvQixFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQVFqRSxNQUFNLE9BQU8sbUJBQW1COzs7OztJQU85QixZQUFvQixjQUE4QixFQUM5QixNQUFjO1FBRGQsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFQbEMsaUJBQVksR0FBNkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUM5RCxNQUFNOzs7O1FBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLFlBQVksYUFBYSxFQUFFLEVBQ2hELG9CQUFvQixFQUFFLEVBQ3RCLEdBQUc7Ozs7UUFBQyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUM3RCxDQUFDO0lBSUYsQ0FBQzs7OztJQUVELFFBQVE7SUFDUixDQUFDOzs7Ozs7O0lBRUQsZUFBZSxDQUFDLEtBQXFCLEVBQUUsTUFBYyxFQUFFLEVBQ3ZDLGNBQWlDLEVBQUU7O2NBQzNDLEtBQUssR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUTs7Y0FDM0UsSUFBSSxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFOztjQUV0RCxPQUFPLEdBQUcsR0FBRyxHQUFHLEdBQUcsSUFBSSxHQUFHOztjQUMxQixVQUFVLEdBQUc7WUFDakIsS0FBSyxFQUFFLEtBQUs7WUFDWixHQUFHLEVBQUUsT0FBTztTQUNiOztjQUNLLGNBQWMsR0FBRyxDQUFDLEdBQUcsV0FBVyxFQUFFLFVBQVUsQ0FBQztRQUNuRCxJQUFJLEtBQUssQ0FBQyxVQUFVLEVBQUU7WUFDcEIsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsT0FBTyxFQUFFLGNBQWMsQ0FBQyxDQUFDO1NBQ3hFO1FBQ0QsT0FBTyxjQUFjLENBQUM7SUFDeEIsQ0FBQzs7O1lBbENGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQiw4Z0JBQTBDOzthQUUzQzs7OztZQVRPLGNBQWM7WUFBaUIsTUFBTTs7OztJQVczQywyQ0FJRTs7Ozs7SUFFVSw2Q0FBc0M7Ozs7O0lBQ3RDLHFDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0FjdGl2YXRlZFJvdXRlLCBOYXZpZ2F0aW9uRW5kLCBSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7QnJlYWRDcnVtYn0gZnJvbSAnLi9icmVhZGNydW1iJztcclxuaW1wb3J0IHtkaXN0aW5jdFVudGlsQ2hhbmdlZCwgZmlsdGVyLCBtYXB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtYnJlYWRjcnVtYicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2JyZWFkY3J1bWIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2JyZWFkY3J1bWIuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQnJlYWRjcnVtYkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgYnJlYWRjcnVtYnMkOiBPYnNlcnZhYmxlPEJyZWFkQ3J1bWJbXT4gPSB0aGlzLnJvdXRlci5ldmVudHMucGlwZShcclxuICAgIGZpbHRlcihldmVudCA9PiBldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQgKSxcclxuICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXHJcbiAgICBtYXAoZXZlbnQgPT4gdGhpcy5idWlsZEJyZWFkQ3J1bWIodGhpcy5hY3RpdmF0ZWRSb3V0ZS5yb290KSlcclxuICApO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG4gIGJ1aWxkQnJlYWRDcnVtYihyb3V0ZTogQWN0aXZhdGVkUm91dGUsIHVybDogc3RyaW5nID0gJycsXHJcbiAgICAgICAgICAgICAgICAgIGJyZWFkY3J1bWJzOiBBcnJheTxCcmVhZENydW1iPiA9IFtdKTogQXJyYXk8QnJlYWRDcnVtYj4ge1xyXG4gICAgY29uc3QgbGFiZWwgPSByb3V0ZS5yb3V0ZUNvbmZpZyA/IHJvdXRlLnJvdXRlQ29uZmlnLmRhdGFbJ2JyZWFkY3J1bWInXSA6ICdJbmljaW8nO1xyXG4gICAgY29uc3QgcGF0aCA9IHJvdXRlLnJvdXRlQ29uZmlnID8gcm91dGUucm91dGVDb25maWcucGF0aCA6ICcnO1xyXG5cclxuICAgIGNvbnN0IG5leHRVcmwgPSBgJHt1cmx9JHtwYXRofS9gO1xyXG4gICAgY29uc3QgYnJlYWRjcnVtYiA9IHtcclxuICAgICAgbGFiZWw6IGxhYmVsLFxyXG4gICAgICB1cmw6IG5leHRVcmwsXHJcbiAgICB9O1xyXG4gICAgY29uc3QgbmV3QnJlYWRjcnVtYnMgPSBbLi4uYnJlYWRjcnVtYnMsIGJyZWFkY3J1bWJdO1xyXG4gICAgaWYgKHJvdXRlLmZpcnN0Q2hpbGQpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuYnVpbGRCcmVhZENydW1iKHJvdXRlLmZpcnN0Q2hpbGQsIG5leHRVcmwsIG5ld0JyZWFkY3J1bWJzKTtcclxuICAgIH1cclxuICAgIHJldHVybiBuZXdCcmVhZGNydW1icztcclxuICB9XHJcbn1cclxuIl19