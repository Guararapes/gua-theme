/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { LoadingOverlayComponent } from "./loading-overlay.component";
import { SharedModule } from '../shared.module';
import { LoadingOverlayService } from './loading-overlay.service';
var LoadingOverlayModule = /** @class */ (function () {
    function LoadingOverlayModule() {
    }
    /**
     * @return {?}
     */
    LoadingOverlayModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: LoadingOverlayModule,
            providers: [LoadingOverlayService, LoadingOverlayComponent]
        };
    };
    LoadingOverlayModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        LoadingOverlayComponent
                    ],
                    imports: [
                        SharedModule
                    ],
                    exports: [
                        LoadingOverlayComponent
                    ],
                    providers: [
                        LoadingOverlayService
                    ]
                },] }
    ];
    return LoadingOverlayModule;
}());
export { LoadingOverlayModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy1vdmVybGF5Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2d1YS10aGVtZS1saWIvIiwic291cmNlcyI6WyJsaWIvbG9hZGluZy1vdmVybGF5L2xvYWRpbmctb3ZlcmxheS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUVsRTtJQUFBO0lBc0JBLENBQUM7Ozs7SUFQUSw0QkFBTzs7O0lBQWQ7UUFDRSxPQUFPO1lBQ0wsUUFBUSxFQUFFLG9CQUFvQjtZQUM5QixTQUFTLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRSx1QkFBdUIsQ0FBQztTQUM1RCxDQUFBO0lBQ0gsQ0FBQzs7Z0JBcEJGLFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1osdUJBQXVCO3FCQUN4QjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsWUFBWTtxQkFDYjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsdUJBQXVCO3FCQUN4QjtvQkFDRCxTQUFTLEVBQUU7d0JBQ1QscUJBQXFCO3FCQUN0QjtpQkFDRjs7SUFTRCwyQkFBQztDQUFBLEFBdEJELElBc0JDO1NBUlksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTG9hZGluZ092ZXJsYXlDb21wb25lbnQgfSBmcm9tIFwiLi9sb2FkaW5nLW92ZXJsYXkuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJy4uL3NoYXJlZC5tb2R1bGUnO1xyXG5pbXBvcnQgeyBMb2FkaW5nT3ZlcmxheVNlcnZpY2UgfSBmcm9tICcuL2xvYWRpbmctb3ZlcmxheS5zZXJ2aWNlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBMb2FkaW5nT3ZlcmxheUNvbXBvbmVudFxyXG4gIF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgU2hhcmVkTW9kdWxlXHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBMb2FkaW5nT3ZlcmxheUNvbXBvbmVudFxyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBMb2FkaW5nT3ZlcmxheVNlcnZpY2VcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMb2FkaW5nT3ZlcmxheU1vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogTG9hZGluZ092ZXJsYXlNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW0xvYWRpbmdPdmVybGF5U2VydmljZSwgTG9hZGluZ092ZXJsYXlDb21wb25lbnRdXHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=