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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2d1YS10aGVtZS8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZWQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN2RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO1NBR3ZELEVBQUU7O0lBRGxCLGtCQUFrQixHQUFHLG1CQUFBO0lBQ3ZCLFFBQVEsRUFBRSxFQUFFLElBQUksSUFBSSxFQUFFO0NBQ3ZCLEVBQWtCO1NBYXdCLGtCQUFrQixPQUMxQixrQkFBa0I7QUFadkQ7SUFBQTtJQWdCNEIsQ0FBQzs7Z0JBaEI1QixRQUFRLFNBQUM7b0JBQ04sT0FBTyxFQUFDO3dCQUNKLFlBQVk7d0JBQ1osWUFBWTt3QkFDWixjQUFjO3dCQUNkLFdBQVc7d0JBQ1gsbUJBQW1CO3dCQUNuQiw4QkFBOEI7d0JBQzlCLHVCQUF1QjtxQkFDMUI7b0JBQ0QsU0FBUyxFQUFFO3dCQUNQLEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxRQUFRLElBQW9CLEVBQUU7d0JBQ3pELEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLElBQW9CLEVBQUU7cUJBRXBEO2lCQUNKOztJQUMyQixtQkFBQztDQUFBLEFBaEI3QixJQWdCNkI7U0FBaEIsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJyb3dzZXJBbmltYXRpb25zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgTWF0ZXJpYWxNb2R1bGUgfSBmcm9tICcuL21hdGVyaWFsLm1vZHVsZSc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBOZ01hdGVyaWFsTXVsdGlsZXZlbE1lbnVNb2R1bGUgfSBmcm9tICduZy1tYXRlcmlhbC1tdWx0aWxldmVsLW1lbnUnO1xyXG5cclxuY29uc3QgZmFrZUFjdGl2YXRlZFJvdXRlID0ge1xyXG4gICAgc25hcHNob3Q6IHsgZGF0YToge30gfVxyXG4gIH0gYXMgQWN0aXZhdGVkUm91dGU7XHJcbiAgXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBleHBvcnRzOltcclxuICAgICAgICBDb21tb25Nb2R1bGUsXHJcbiAgICAgICAgUm91dGVyTW9kdWxlLFxyXG4gICAgICAgIE1hdGVyaWFsTW9kdWxlLCAgICAgICAgXHJcbiAgICAgICAgRm9ybXNNb2R1bGUsXHJcbiAgICAgICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcclxuICAgICAgICBOZ01hdGVyaWFsTXVsdGlsZXZlbE1lbnVNb2R1bGUsXHJcbiAgICAgICAgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGVcclxuICAgIF0sXHJcbiAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICB7IHByb3ZpZGU6IEFjdGl2YXRlZFJvdXRlLCB1c2VWYWx1ZTogZmFrZUFjdGl2YXRlZFJvdXRlIH0sXHJcbiAgICAgICAgeyBwcm92aWRlOiBSb3V0ZXIsIHVzZVZhbHVlOiBmYWtlQWN0aXZhdGVkUm91dGUgfSxcclxuXHJcbiAgICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2hhcmVkTW9kdWxlIHsgfVxyXG4iXX0=