/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class LabelComponent {
    constructor() {
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.fontSize.indexOf("px") > -1) {
            /** @type {?} */
            const fontSize = this.fontSize.replace("px", "");
            this.titleFontSize = `${(parseInt(fontSize) / 2)}px`;
        }
        else if (this.fontSize.indexOf("%") > -1) {
            /** @type {?} */
            const fontSize = this.fontSize.replace("%", "");
            this.titleFontSize = `${(parseInt(fontSize) / 2)}%`;
        }
    }
}
LabelComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-label',
                template: "<div id=\"label\" [style.height]=\"height\">\r\n    <div id=\"title\" [style.font-size]=\"titleFontSize\">\r\n        {{title}}\r\n    </div>\r\n    <div id=\"body\" [style.font-size]=\"fontSize\">\r\n        <ng-content></ng-content>\r\n    </div>\r\n</div>",
                styles: ["#label{display:flex;flex-direction:column;justify-content:center;align-items:center}#label #title{font-size:10px;-ms-grid-row-align:center;align-self:center}#label #body{-ms-grid-row-align:center;align-self:center;font-size:20px;padding-left:10px;padding-right:10px}"]
            }] }
];
/** @nocollapse */
LabelComponent.ctorParameters = () => [];
LabelComponent.propDecorators = {
    color: [{ type: Input }],
    title: [{ type: Input }],
    height: [{ type: Input }],
    fontSize: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFiZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZ3VhLXRoZW1lLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9sYWJlbC9sYWJlbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWlDLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU9oRixNQUFNLE9BQU8sY0FBYztJQVN6QjtJQUNBLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTs7a0JBQzlCLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDO1lBQ2hELElBQUksQ0FBQyxhQUFhLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO1NBQ3REO2FBQU0sSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTs7a0JBQ2xDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDO1lBQy9DLElBQUksQ0FBQyxhQUFhLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDO1NBQ3JEO0lBQ0wsQ0FBQzs7O1lBekJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsV0FBVztnQkFDckIsOFFBQW1DOzthQUVwQzs7Ozs7b0JBR0UsS0FBSztvQkFDTCxLQUFLO3FCQUNMLEtBQUs7dUJBQ0wsS0FBSzs7OztJQUhOLCtCQUF1Qjs7SUFDdkIsK0JBQXVCOztJQUN2QixnQ0FBd0I7O0lBQ3hCLGtDQUEwQjs7SUFDMUIsdUNBQXNCOztJQUN0QixzQ0FBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0NoaWxkLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtbGFiZWwnLFxyXG4gIHRlbXBsYXRlVXJsOiBgbGFiZWwuY29tcG9uZW50Lmh0bWxgLFxyXG4gIHN0eWxlVXJsczogWycuL2xhYmVsLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIExhYmVsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgQElucHV0KCkgY29sb3I6IHN0cmluZztcclxuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGhlaWdodDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGZvbnRTaXplOiBzdHJpbmc7XHJcbiAgdGl0bGVGb250U2l6ZTogc3RyaW5nO1xyXG4gIGJvZHlGb250U2l6ZTogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgaWYgKHRoaXMuZm9udFNpemUuaW5kZXhPZihcInB4XCIpID4gLTEpIHtcclxuICAgICAgY29uc3QgZm9udFNpemUgPSB0aGlzLmZvbnRTaXplLnJlcGxhY2UoXCJweFwiLCBcIlwiKTtcclxuICAgICAgdGhpcy50aXRsZUZvbnRTaXplID0gYCR7KHBhcnNlSW50KGZvbnRTaXplKSAvIDIpfXB4YDtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5mb250U2l6ZS5pbmRleE9mKFwiJVwiKSA+IC0xKSB7XHJcbiAgICAgICAgY29uc3QgZm9udFNpemUgPSB0aGlzLmZvbnRTaXplLnJlcGxhY2UoXCIlXCIsIFwiXCIpO1xyXG4gICAgICAgIHRoaXMudGl0bGVGb250U2l6ZSA9IGAkeyhwYXJzZUludChmb250U2l6ZSkgLyAyKX0lYDtcclxuICAgICAgfVxyXG4gIH1cclxufVxyXG4iXX0=