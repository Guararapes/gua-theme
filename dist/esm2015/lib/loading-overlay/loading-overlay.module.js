/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { LoadingOverlayComponent } from "./loading-overlay.component";
import { SharedModule } from '../shared.module';
import { LoadingOverlayService } from './loading-overlay.service';
export class LoadingOverlayModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: LoadingOverlayModule,
            providers: [LoadingOverlayService, LoadingOverlayComponent]
        };
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy1vdmVybGF5Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2d1YS10aGVtZS8iLCJzb3VyY2VzIjpbImxpYi9sb2FkaW5nLW92ZXJsYXkvbG9hZGluZy1vdmVybGF5Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDdEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBZ0JsRSxNQUFNLE9BQU8sb0JBQW9COzs7O0lBQy9CLE1BQU0sQ0FBQyxPQUFPO1FBQ1osT0FBTztZQUNMLFFBQVEsRUFBRSxvQkFBb0I7WUFDOUIsU0FBUyxFQUFFLENBQUMscUJBQXFCLEVBQUUsdUJBQXVCLENBQUM7U0FDNUQsQ0FBQTtJQUNILENBQUM7OztZQXBCRixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFO29CQUNaLHVCQUF1QjtpQkFDeEI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLFlBQVk7aUJBQ2I7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLHVCQUF1QjtpQkFDeEI7Z0JBQ0QsU0FBUyxFQUFFO29CQUNULHFCQUFxQjtpQkFDdEI7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IExvYWRpbmdPdmVybGF5Q29tcG9uZW50IH0gZnJvbSBcIi4vbG9hZGluZy1vdmVybGF5LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tICcuLi9zaGFyZWQubW9kdWxlJztcclxuaW1wb3J0IHsgTG9hZGluZ092ZXJsYXlTZXJ2aWNlIH0gZnJvbSAnLi9sb2FkaW5nLW92ZXJsYXkuc2VydmljZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgTG9hZGluZ092ZXJsYXlDb21wb25lbnRcclxuICBdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIFNoYXJlZE1vZHVsZVxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgTG9hZGluZ092ZXJsYXlDb21wb25lbnRcclxuICBdLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgTG9hZGluZ092ZXJsYXlTZXJ2aWNlXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9hZGluZ092ZXJsYXlNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IExvYWRpbmdPdmVybGF5TW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtMb2FkaW5nT3ZlcmxheVNlcnZpY2UsIExvYWRpbmdPdmVybGF5Q29tcG9uZW50XVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuIl19