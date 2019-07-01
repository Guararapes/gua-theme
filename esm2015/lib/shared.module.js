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
const ɵ0 = {};
/** @type {?} */
const fakeActivatedRoute = (/** @type {?} */ ({
    snapshot: { data: ɵ0 }
}));
const ɵ1 = fakeActivatedRoute, ɵ2 = fakeActivatedRoute;
export class SharedModule {
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
export { ɵ0, ɵ1, ɵ2 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2d1YS10aGVtZS8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZWQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN2RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO1dBR3ZELEVBQUU7O01BRGxCLGtCQUFrQixHQUFHLG1CQUFBO0lBQ3ZCLFFBQVEsRUFBRSxFQUFFLElBQUksSUFBSSxFQUFFO0NBQ3ZCLEVBQWtCO1dBYXdCLGtCQUFrQixPQUMxQixrQkFBa0I7QUFJdkQsTUFBTSxPQUFPLFlBQVk7OztZQWhCeEIsUUFBUSxTQUFDO2dCQUNOLE9BQU8sRUFBQztvQkFDSixZQUFZO29CQUNaLFlBQVk7b0JBQ1osY0FBYztvQkFDZCxXQUFXO29CQUNYLG1CQUFtQjtvQkFDbkIsOEJBQThCO29CQUM5Qix1QkFBdUI7aUJBQzFCO2dCQUNELFNBQVMsRUFBRTtvQkFDUCxFQUFFLE9BQU8sRUFBRSxjQUFjLEVBQUUsUUFBUSxJQUFvQixFQUFFO29CQUN6RCxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsUUFBUSxJQUFvQixFQUFFO2lCQUVwRDthQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL2FuaW1hdGlvbnMnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBNYXRlcmlhbE1vZHVsZSB9IGZyb20gJy4vbWF0ZXJpYWwubW9kdWxlJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IE5nTWF0ZXJpYWxNdWx0aWxldmVsTWVudU1vZHVsZSB9IGZyb20gJ25nLW1hdGVyaWFsLW11bHRpbGV2ZWwtbWVudSc7XHJcblxyXG5jb25zdCBmYWtlQWN0aXZhdGVkUm91dGUgPSB7XHJcbiAgICBzbmFwc2hvdDogeyBkYXRhOiB7fSB9XHJcbiAgfSBhcyBBY3RpdmF0ZWRSb3V0ZTtcclxuICBcclxuQE5nTW9kdWxlKHtcclxuICAgIGV4cG9ydHM6W1xyXG4gICAgICAgIENvbW1vbk1vZHVsZSxcclxuICAgICAgICBSb3V0ZXJNb2R1bGUsXHJcbiAgICAgICAgTWF0ZXJpYWxNb2R1bGUsICAgICAgICBcclxuICAgICAgICBGb3Jtc01vZHVsZSxcclxuICAgICAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG4gICAgICAgIE5nTWF0ZXJpYWxNdWx0aWxldmVsTWVudU1vZHVsZSxcclxuICAgICAgICBCcm93c2VyQW5pbWF0aW9uc01vZHVsZVxyXG4gICAgXSxcclxuICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIHsgcHJvdmlkZTogQWN0aXZhdGVkUm91dGUsIHVzZVZhbHVlOiBmYWtlQWN0aXZhdGVkUm91dGUgfSxcclxuICAgICAgICB7IHByb3ZpZGU6IFJvdXRlciwgdXNlVmFsdWU6IGZha2VBY3RpdmF0ZWRSb3V0ZSB9LFxyXG5cclxuICAgIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaGFyZWRNb2R1bGUgeyB9XHJcbiJdfQ==