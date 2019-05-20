/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var LabelComponent = /** @class */ (function () {
    function LabelComponent() {
    }
    /**
     * @return {?}
     */
    LabelComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.fontSize.indexOf("px") > -1) {
            /** @type {?} */
            var fontSize = this.fontSize.replace("px", "");
            this.titleFontSize = (parseInt(fontSize) / 2) + "px";
        }
        else if (this.fontSize.indexOf("%") > -1) {
            /** @type {?} */
            var fontSize = this.fontSize.replace("%", "");
            this.titleFontSize = (parseInt(fontSize) / 2) + "%";
        }
    };
    LabelComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-label',
                    template: "<div id=\"label\" [style.height]=\"height\">\r\n    <div id=\"title\" [style.font-size]=\"titleFontSize\">\r\n        {{title}}\r\n    </div>\r\n    <div id=\"body\" [style.font-size]=\"fontSize\">\r\n        <ng-content></ng-content>\r\n    </div>\r\n</div>",
                    styles: ["#label{display:flex;flex-direction:column;justify-content:center;align-items:center}#label #title{font-size:10px;-ms-grid-row-align:center;align-self:center}#label #body{-ms-grid-row-align:center;align-self:center;font-size:20px;padding-left:10px;padding-right:10px}"]
                }] }
    ];
    /** @nocollapse */
    LabelComponent.ctorParameters = function () { return []; };
    LabelComponent.propDecorators = {
        color: [{ type: Input }],
        title: [{ type: Input }],
        height: [{ type: Input }],
        fontSize: [{ type: Input }]
    };
    return LabelComponent;
}());
export { LabelComponent };
if (false) {
    /** @type {?} */
    LabelComponent.prototype.color;
    /** @type {?} */
    LabelComponent.prototype.title;
    /** @type {?} */
    LabelComponent.prototype.height;
    /** @type {?} */
    LabelComponent.prototype.fontSize;
    /** @type {?} */
    LabelComponent.prototype.titleFontSize;
    /** @type {?} */
    LabelComponent.prototype.bodyFontSize;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFiZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZ3VhLXRoZW1lLyIsInNvdXJjZXMiOlsibGliL2xhYmVsL2xhYmVsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBaUMsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWhGO0lBY0U7SUFDQSxDQUFDOzs7O0lBRUQsaUNBQVE7OztJQUFSO1FBQ0UsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTs7Z0JBQzlCLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDO1lBQ2hELElBQUksQ0FBQyxhQUFhLEdBQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQUksQ0FBQztTQUN0RDthQUFNLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7O2dCQUNsQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQztZQUMvQyxJQUFJLENBQUMsYUFBYSxHQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFHLENBQUM7U0FDckQ7SUFDTCxDQUFDOztnQkF6QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxXQUFXO29CQUNyQiw4UUFBbUM7O2lCQUVwQzs7Ozs7d0JBR0UsS0FBSzt3QkFDTCxLQUFLO3lCQUNMLEtBQUs7MkJBQ0wsS0FBSzs7SUFnQlIscUJBQUM7Q0FBQSxBQTFCRCxJQTBCQztTQXJCWSxjQUFjOzs7SUFFekIsK0JBQXVCOztJQUN2QiwrQkFBdUI7O0lBQ3ZCLGdDQUF3Qjs7SUFDeEIsa0NBQTBCOztJQUMxQix1Q0FBc0I7O0lBQ3RCLHNDQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1sYWJlbCcsXHJcbiAgdGVtcGxhdGVVcmw6IGBsYWJlbC5jb21wb25lbnQuaHRtbGAsXHJcbiAgc3R5bGVVcmxzOiBbJy4vbGFiZWwuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGFiZWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBASW5wdXQoKSBjb2xvcjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgaGVpZ2h0OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgZm9udFNpemU6IHN0cmluZztcclxuICB0aXRsZUZvbnRTaXplOiBzdHJpbmc7XHJcbiAgYm9keUZvbnRTaXplOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBpZiAodGhpcy5mb250U2l6ZS5pbmRleE9mKFwicHhcIikgPiAtMSkge1xyXG4gICAgICBjb25zdCBmb250U2l6ZSA9IHRoaXMuZm9udFNpemUucmVwbGFjZShcInB4XCIsIFwiXCIpO1xyXG4gICAgICB0aGlzLnRpdGxlRm9udFNpemUgPSBgJHsocGFyc2VJbnQoZm9udFNpemUpIC8gMil9cHhgO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmZvbnRTaXplLmluZGV4T2YoXCIlXCIpID4gLTEpIHtcclxuICAgICAgICBjb25zdCBmb250U2l6ZSA9IHRoaXMuZm9udFNpemUucmVwbGFjZShcIiVcIiwgXCJcIik7XHJcbiAgICAgICAgdGhpcy50aXRsZUZvbnRTaXplID0gYCR7KHBhcnNlSW50KGZvbnRTaXplKSAvIDIpfSVgO1xyXG4gICAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==