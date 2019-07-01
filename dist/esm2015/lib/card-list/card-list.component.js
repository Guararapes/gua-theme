/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class CardListComponent {
    constructor() {
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
CardListComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-card-list',
                template: "<div *ngIf=\"list && list.length\" id=\"card-list\" fxFlex fxLayout=\"column\" [style.background-color]=\"backgroundColor\">\r\n  <div *ngIf=\"title\">\r\n     {{title}}\r\n  </div>\r\n  <div style=\"padding: 10px\" fxLayout=\"row wrap\">\r\n    <mat-card class=\"lista\" *ngFor=\"let html of list\" [innerHTML]=\"html\" [ngStyle.lt-md]=\"{'margin-bottom': '20px'}\" [style.width]=\"width\" [style.width]=\"height\">  \r\n    </mat-card>\r\n  </div>\r\n</div>",
                styles: ["#card-list{width:100%;padding:10px;background-color:#f1f1f1;border-radius:4px}#card-list .lista{margin-left:20px;background-color:pink;width:100px;height:150px}"]
            }] }
];
/** @nocollapse */
CardListComponent.ctorParameters = () => [];
CardListComponent.propDecorators = {
    title: [{ type: Input }],
    list: [{ type: Input }],
    backgroundColor: [{ type: Input }],
    width: [{ type: Input }],
    height: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2d1YS10aGVtZS8iLCJzb3VyY2VzIjpbImxpYi9jYXJkLWxpc3QvY2FyZC1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBaUMsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBT2hGLE1BQU0sT0FBTyxpQkFBaUI7SUFRNUI7SUFDQSxDQUFDOzs7O0lBRUQsUUFBUTtJQUNSLENBQUM7OztZQWpCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLHVkQUF5Qzs7YUFFMUM7Ozs7O29CQUdFLEtBQUs7bUJBQ0wsS0FBSzs4QkFDTCxLQUFLO29CQUNMLEtBQUs7cUJBQ0wsS0FBSzs7OztJQUpOLGtDQUF1Qjs7SUFDdkIsaUNBQTZCOztJQUM3Qiw0Q0FBaUM7O0lBQ2pDLGtDQUF1Qjs7SUFDdkIsbUNBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdDaGlsZCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLWNhcmQtbGlzdCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NhcmQtbGlzdC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY2FyZC1saXN0LmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIENhcmRMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZztcclxuICBASW5wdXQoKSBsaXN0OiBIVE1MRWxlbWVudFtdO1xyXG4gIEBJbnB1dCgpIGJhY2tncm91bmRDb2xvcjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHdpZHRoOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgaGVpZ2h0OiBzdHJpbmc7XHJcbiAgXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcbn1cclxuIl19