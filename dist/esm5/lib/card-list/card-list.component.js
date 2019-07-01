/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var CardListComponent = /** @class */ (function () {
    function CardListComponent() {
    }
    /**
     * @return {?}
     */
    CardListComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    CardListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-card-list',
                    template: "<div *ngIf=\"list && list.length\" id=\"card-list\" fxFlex fxLayout=\"column\" [style.background-color]=\"backgroundColor\">\r\n  <div *ngIf=\"title\">\r\n     {{title}}\r\n  </div>\r\n  <div style=\"padding: 10px\" fxLayout=\"row wrap\">\r\n    <mat-card class=\"lista\" *ngFor=\"let html of list\" [innerHTML]=\"html\" [ngStyle.lt-md]=\"{'margin-bottom': '20px'}\" [style.width]=\"width\" [style.width]=\"height\">  \r\n    </mat-card>\r\n  </div>\r\n</div>",
                    styles: ["#card-list{width:100%;padding:10px;background-color:#f1f1f1;border-radius:4px}#card-list .lista{margin-left:20px;background-color:pink;width:100px;height:150px}"]
                }] }
    ];
    /** @nocollapse */
    CardListComponent.ctorParameters = function () { return []; };
    CardListComponent.propDecorators = {
        title: [{ type: Input }],
        list: [{ type: Input }],
        backgroundColor: [{ type: Input }],
        width: [{ type: Input }],
        height: [{ type: Input }]
    };
    return CardListComponent;
}());
export { CardListComponent };
if (false) {
    /** @type {?} */
    CardListComponent.prototype.title;
    /** @type {?} */
    CardListComponent.prototype.list;
    /** @type {?} */
    CardListComponent.prototype.backgroundColor;
    /** @type {?} */
    CardListComponent.prototype.width;
    /** @type {?} */
    CardListComponent.prototype.height;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2d1YS10aGVtZS8iLCJzb3VyY2VzIjpbImxpYi9jYXJkLWxpc3QvY2FyZC1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBaUMsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWhGO0lBYUU7SUFDQSxDQUFDOzs7O0lBRUQsb0NBQVE7OztJQUFSO0lBQ0EsQ0FBQzs7Z0JBakJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZUFBZTtvQkFDekIsdWRBQXlDOztpQkFFMUM7Ozs7O3dCQUdFLEtBQUs7dUJBQ0wsS0FBSztrQ0FDTCxLQUFLO3dCQUNMLEtBQUs7eUJBQ0wsS0FBSzs7SUFPUix3QkFBQztDQUFBLEFBbEJELElBa0JDO1NBYlksaUJBQWlCOzs7SUFFNUIsa0NBQXVCOztJQUN2QixpQ0FBNkI7O0lBQzdCLDRDQUFpQzs7SUFDakMsa0NBQXVCOztJQUN2QixtQ0FBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0NoaWxkLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtY2FyZC1saXN0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY2FyZC1saXN0LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jYXJkLWxpc3QuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2FyZExpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGxpc3Q6IEhUTUxFbGVtZW50W107XHJcbiAgQElucHV0KCkgYmFja2dyb3VuZENvbG9yOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgd2lkdGg6IHN0cmluZztcclxuICBASW5wdXQoKSBoZWlnaHQ6IHN0cmluZztcclxuICBcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxufVxyXG4iXX0=