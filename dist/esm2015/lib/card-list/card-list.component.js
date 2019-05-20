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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2d1YS10aGVtZS1saWIvIiwic291cmNlcyI6WyJsaWIvY2FyZC1saXN0L2NhcmQtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWlDLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU9oRixNQUFNLE9BQU8saUJBQWlCO0lBUTVCO0lBQ0EsQ0FBQzs7OztJQUVELFFBQVE7SUFDUixDQUFDOzs7WUFqQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2dCQUN6Qix1ZEFBeUM7O2FBRTFDOzs7OztvQkFHRSxLQUFLO21CQUNMLEtBQUs7OEJBQ0wsS0FBSztvQkFDTCxLQUFLO3FCQUNMLEtBQUs7Ozs7SUFKTixrQ0FBdUI7O0lBQ3ZCLGlDQUE2Qjs7SUFDN0IsNENBQWlDOztJQUNqQyxrQ0FBdUI7O0lBQ3ZCLG1DQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1jYXJkLWxpc3QnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jYXJkLWxpc3QuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2NhcmQtbGlzdC5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDYXJkTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbGlzdDogSFRNTEVsZW1lbnRbXTtcclxuICBASW5wdXQoKSBiYWNrZ3JvdW5kQ29sb3I6IHN0cmluZztcclxuICBASW5wdXQoKSB3aWR0aDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGhlaWdodDogc3RyaW5nO1xyXG4gIFxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG59XHJcbiJdfQ==