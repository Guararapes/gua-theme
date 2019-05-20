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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2d1YS10aGVtZS1saWIvIiwic291cmNlcyI6WyJsaWIvY2FyZC1saXN0L2NhcmQtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWlDLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVoRjtJQWFFO0lBQ0EsQ0FBQzs7OztJQUVELG9DQUFROzs7SUFBUjtJQUNBLENBQUM7O2dCQWpCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLHVkQUF5Qzs7aUJBRTFDOzs7Ozt3QkFHRSxLQUFLO3VCQUNMLEtBQUs7a0NBQ0wsS0FBSzt3QkFDTCxLQUFLO3lCQUNMLEtBQUs7O0lBT1Isd0JBQUM7Q0FBQSxBQWxCRCxJQWtCQztTQWJZLGlCQUFpQjs7O0lBRTVCLGtDQUF1Qjs7SUFDdkIsaUNBQTZCOztJQUM3Qiw0Q0FBaUM7O0lBQ2pDLGtDQUF1Qjs7SUFDdkIsbUNBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdDaGlsZCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLWNhcmQtbGlzdCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NhcmQtbGlzdC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY2FyZC1saXN0LmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIENhcmRMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZztcclxuICBASW5wdXQoKSBsaXN0OiBIVE1MRWxlbWVudFtdO1xyXG4gIEBJbnB1dCgpIGJhY2tncm91bmRDb2xvcjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHdpZHRoOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgaGVpZ2h0OiBzdHJpbmc7XHJcbiAgXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcbn1cclxuIl19