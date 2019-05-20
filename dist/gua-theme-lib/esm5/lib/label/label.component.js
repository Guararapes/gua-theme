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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFiZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZ3VhLXRoZW1lLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9sYWJlbC9sYWJlbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWlDLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVoRjtJQWNFO0lBQ0EsQ0FBQzs7OztJQUVELGlDQUFROzs7SUFBUjtRQUNFLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7O2dCQUM5QixRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQztZQUNoRCxJQUFJLENBQUMsYUFBYSxHQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFJLENBQUM7U0FDdEQ7YUFBTSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFOztnQkFDbEMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUM7WUFDL0MsSUFBSSxDQUFDLGFBQWEsR0FBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBRyxDQUFDO1NBQ3JEO0lBQ0wsQ0FBQzs7Z0JBekJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsV0FBVztvQkFDckIsOFFBQW1DOztpQkFFcEM7Ozs7O3dCQUdFLEtBQUs7d0JBQ0wsS0FBSzt5QkFDTCxLQUFLOzJCQUNMLEtBQUs7O0lBZ0JSLHFCQUFDO0NBQUEsQUExQkQsSUEwQkM7U0FyQlksY0FBYzs7O0lBRXpCLCtCQUF1Qjs7SUFDdkIsK0JBQXVCOztJQUN2QixnQ0FBd0I7O0lBQ3hCLGtDQUEwQjs7SUFDMUIsdUNBQXNCOztJQUN0QixzQ0FBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0NoaWxkLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtbGFiZWwnLFxyXG4gIHRlbXBsYXRlVXJsOiBgbGFiZWwuY29tcG9uZW50Lmh0bWxgLFxyXG4gIHN0eWxlVXJsczogWycuL2xhYmVsLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIExhYmVsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgQElucHV0KCkgY29sb3I6IHN0cmluZztcclxuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGhlaWdodDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGZvbnRTaXplOiBzdHJpbmc7XHJcbiAgdGl0bGVGb250U2l6ZTogc3RyaW5nO1xyXG4gIGJvZHlGb250U2l6ZTogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgaWYgKHRoaXMuZm9udFNpemUuaW5kZXhPZihcInB4XCIpID4gLTEpIHtcclxuICAgICAgY29uc3QgZm9udFNpemUgPSB0aGlzLmZvbnRTaXplLnJlcGxhY2UoXCJweFwiLCBcIlwiKTtcclxuICAgICAgdGhpcy50aXRsZUZvbnRTaXplID0gYCR7KHBhcnNlSW50KGZvbnRTaXplKSAvIDIpfXB4YDtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5mb250U2l6ZS5pbmRleE9mKFwiJVwiKSA+IC0xKSB7XHJcbiAgICAgICAgY29uc3QgZm9udFNpemUgPSB0aGlzLmZvbnRTaXplLnJlcGxhY2UoXCIlXCIsIFwiXCIpO1xyXG4gICAgICAgIHRoaXMudGl0bGVGb250U2l6ZSA9IGAkeyhwYXJzZUludChmb250U2l6ZSkgLyAyKX0lYDtcclxuICAgICAgfVxyXG4gIH1cclxufVxyXG4iXX0=