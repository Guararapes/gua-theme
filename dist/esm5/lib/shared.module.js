/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgMaterialMultilevelMenuModule } from 'ng-material-multilevel-menu';
var ɵ0 = {};
/** @type {?} */
var fakeActivatedRoute = (/** @type {?} */ ({
    snapshot: { data: ɵ0 }
}));
var ɵ1 = fakeActivatedRoute, ɵ2 = fakeActivatedRoute;
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule.decorators = [
        { type: NgModule, args: [{
                    exports: [
                        CommonModule,
                        RouterModule,
                        MaterialModule,
                        FormsModule,
                        ReactiveFormsModule,
                        NgMaterialMultilevelMenuModule,
                        BrowserAnimationsModule
                    ],
                    providers: [
                        { provide: ActivatedRoute, useValue: ɵ1 },
                        { provide: Router, useValue: ɵ2 },
                    ],
                },] }
    ];
    return SharedModule;
}());
export { SharedModule };
export { ɵ0, ɵ1, ɵ2 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2d1YS10aGVtZS1saWIvIiwic291cmNlcyI6WyJsaWIvc2hhcmVkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUMvRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDdkUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztTQUd2RCxFQUFFOztJQURsQixrQkFBa0IsR0FBRyxtQkFBQTtJQUN2QixRQUFRLEVBQUUsRUFBRSxJQUFJLElBQUksRUFBRTtDQUN2QixFQUFrQjtTQWF3QixrQkFBa0IsT0FDMUIsa0JBQWtCO0FBWnZEO0lBQUE7SUFnQjRCLENBQUM7O2dCQWhCNUIsUUFBUSxTQUFDO29CQUNOLE9BQU8sRUFBQzt3QkFDSixZQUFZO3dCQUNaLFlBQVk7d0JBQ1osY0FBYzt3QkFDZCxXQUFXO3dCQUNYLG1CQUFtQjt3QkFDbkIsOEJBQThCO3dCQUM5Qix1QkFBdUI7cUJBQzFCO29CQUNELFNBQVMsRUFBRTt3QkFDUCxFQUFFLE9BQU8sRUFBRSxjQUFjLEVBQUUsUUFBUSxJQUFvQixFQUFFO3dCQUN6RCxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsUUFBUSxJQUFvQixFQUFFO3FCQUVwRDtpQkFDSjs7SUFDMkIsbUJBQUM7Q0FBQSxBQWhCN0IsSUFnQjZCO1NBQWhCLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9ucyc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSwgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IE1hdGVyaWFsTW9kdWxlIH0gZnJvbSAnLi9tYXRlcmlhbC5tb2R1bGUnO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgTmdNYXRlcmlhbE11bHRpbGV2ZWxNZW51TW9kdWxlIH0gZnJvbSAnbmctbWF0ZXJpYWwtbXVsdGlsZXZlbC1tZW51JztcclxuXHJcbmNvbnN0IGZha2VBY3RpdmF0ZWRSb3V0ZSA9IHtcclxuICAgIHNuYXBzaG90OiB7IGRhdGE6IHt9IH1cclxuICB9IGFzIEFjdGl2YXRlZFJvdXRlO1xyXG4gIFxyXG5ATmdNb2R1bGUoe1xyXG4gICAgZXhwb3J0czpbXHJcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgICAgIFJvdXRlck1vZHVsZSxcclxuICAgICAgICBNYXRlcmlhbE1vZHVsZSwgICAgICAgIFxyXG4gICAgICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcbiAgICAgICAgTmdNYXRlcmlhbE11bHRpbGV2ZWxNZW51TW9kdWxlLFxyXG4gICAgICAgIEJyb3dzZXJBbmltYXRpb25zTW9kdWxlXHJcbiAgICBdLFxyXG4gICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgeyBwcm92aWRlOiBBY3RpdmF0ZWRSb3V0ZSwgdXNlVmFsdWU6IGZha2VBY3RpdmF0ZWRSb3V0ZSB9LFxyXG4gICAgICAgIHsgcHJvdmlkZTogUm91dGVyLCB1c2VWYWx1ZTogZmFrZUFjdGl2YXRlZFJvdXRlIH0sXHJcblxyXG4gICAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFNoYXJlZE1vZHVsZSB7IH1cclxuIl19