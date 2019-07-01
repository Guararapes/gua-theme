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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy1vdmVybGF5Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2d1YS10aGVtZS8iLCJzb3VyY2VzIjpbImxpYi9sb2FkaW5nLW92ZXJsYXkvbG9hZGluZy1vdmVybGF5Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDdEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRWxFO0lBQUE7SUFzQkEsQ0FBQzs7OztJQVBRLDRCQUFPOzs7SUFBZDtRQUNFLE9BQU87WUFDTCxRQUFRLEVBQUUsb0JBQW9CO1lBQzlCLFNBQVMsRUFBRSxDQUFDLHFCQUFxQixFQUFFLHVCQUF1QixDQUFDO1NBQzVELENBQUE7SUFDSCxDQUFDOztnQkFwQkYsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWix1QkFBdUI7cUJBQ3hCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxZQUFZO3FCQUNiO29CQUNELE9BQU8sRUFBRTt3QkFDUCx1QkFBdUI7cUJBQ3hCO29CQUNELFNBQVMsRUFBRTt3QkFDVCxxQkFBcUI7cUJBQ3RCO2lCQUNGOztJQVNELDJCQUFDO0NBQUEsQUF0QkQsSUFzQkM7U0FSWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBMb2FkaW5nT3ZlcmxheUNvbXBvbmVudCB9IGZyb20gXCIuL2xvYWRpbmctb3ZlcmxheS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSAnLi4vc2hhcmVkLm1vZHVsZSc7XHJcbmltcG9ydCB7IExvYWRpbmdPdmVybGF5U2VydmljZSB9IGZyb20gJy4vbG9hZGluZy1vdmVybGF5LnNlcnZpY2UnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIExvYWRpbmdPdmVybGF5Q29tcG9uZW50XHJcbiAgXSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBTaGFyZWRNb2R1bGVcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIExvYWRpbmdPdmVybGF5Q29tcG9uZW50XHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIExvYWRpbmdPdmVybGF5U2VydmljZVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIExvYWRpbmdPdmVybGF5TW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBMb2FkaW5nT3ZlcmxheU1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbTG9hZGluZ092ZXJsYXlTZXJ2aWNlLCBMb2FkaW5nT3ZlcmxheUNvbXBvbmVudF1cclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcbiJdfQ==