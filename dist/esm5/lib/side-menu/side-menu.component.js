/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Output, EventEmitter, Input, HostBinding } from '@angular/core';
var SideMenuComponent = /** @class */ (function () {
    function SideMenuComponent() {
        this.itemClicked = new EventEmitter();
        this.isSideMenuExpanded = true;
        this.appitems = [
            {
                label: 'Malharia',
                icon: 'add',
                items: [
                    {
                        label: 'Item 1.1',
                        link: '/item-1-1',
                    },
                    {
                        label: 'Item 1.2',
                        link: '/item-1-2',
                    },
                    {
                        label: 'Item 1.1',
                        link: '/item-1-1',
                    },
                    {
                        label: 'Item 1.2',
                        link: '/item-1-2',
                    },
                    {
                        label: 'Item 1.1',
                        link: '/item-1-1',
                    },
                    {
                        label: 'Item 1.2',
                        link: '/item-1-2',
                    },
                ]
            },
            {
                label: 'Tinturaria',
                icon: 'alarm',
                items: [
                    {
                        label: 'Item 2.1',
                        link: '/item-2-1',
                    },
                    {
                        label: 'Item 2.2',
                        link: '/item-2-2',
                    }
                ]
            },
            {
                label: 'Costura',
                link: '/item-3',
                icon: 'offline_pin'
            },
            {
                label: 'Item 4',
                link: '/item-4',
                icon: 'star_rate',
                hidden: true
            }
        ];
        this.config = {
            paddingAtStart: true,
            classname: 'side-menu',
            listBackgroundColor: 'rgb(255, 255, 255)',
            fontColor: 'rgb(117, 117, 117)',
            backgroundColor: 'rgb(255, 255, 255)',
            selectedListFontColor: 'rgb(39, 149, 223)',
            collapseOnSelect: true
        };
    }
    /**
     * @return {?}
     */
    SideMenuComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    SideMenuComponent.prototype.selectedItem = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.itemClicked.emit($event);
        console.log($event);
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    SideMenuComponent.prototype.closeMenu = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        if (this.isSideMenuExpanded) {
            this.isSideMenuExpanded = false;
        }
    };
    SideMenuComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-side-menu',
                    template: "<div class=\"menu-wrapper\" >\r\n  <ng-material-multilevel-menu [configuration]='config' [items]='appitems' (selectedItem)=\"selectedItem($event)\">\r\n  </ng-material-multilevel-menu>\r\n</div>\r\n\r\n",
                    styles: [":host{position:absolute;display:block;-webkit-transform:translateX(-100%);transform:translateX(-100%);transition:transform .5s;transition:transform .5s,-webkit-transform .5s;width:100%;z-index:99}:host .menu-wrapper{box-shadow:0 2px 5px rgba(0,0,0,.2);color:transparent;font-size:14px;width:277px}:host .menu-wrapper ::ng-deep .mat-divider{display:none}:host .menu-wrapper ::ng-deep .mat-list-item-content:hover{background-color:rgba(0,0,0,.08)}@media (min-width:769px){:host .menu-wrapper ::ng-deep .level-1{position:absolute;top:0;left:262px;width:176px;min-height:100%;box-shadow:2px 2px 5px rgba(0,0,0,.2)}:host .menu-wrapper ::ng-deep .amml-icon-arrow-container .mat-icon{-webkit-transform:rotate(-90deg)!important;transform:rotate(-90deg)!important}}@media (max-width:768px){:host .menu-wrapper{width:100%}:host .menu-wrapper ::ng-deep .mat-divider{display:block}}:host.expanded{-webkit-transform:translateX(0);transform:translateX(0)}"]
                }] }
    ];
    /** @nocollapse */
    SideMenuComponent.ctorParameters = function () { return []; };
    SideMenuComponent.propDecorators = {
        itemClicked: [{ type: Output }],
        isSideMenuExpanded: [{ type: HostBinding, args: ['class.expanded',] }, { type: Input }]
    };
    return SideMenuComponent;
}());
export { SideMenuComponent };
if (false) {
    /** @type {?} */
    SideMenuComponent.prototype.itemClicked;
    /** @type {?} */
    SideMenuComponent.prototype.isSideMenuExpanded;
    /** @type {?} */
    SideMenuComponent.prototype.appitems;
    /** @type {?} */
    SideMenuComponent.prototype.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZS1tZW51LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2d1YS10aGVtZS1saWIvIiwic291cmNlcyI6WyJsaWIvc2lkZS1tZW51L3NpZGUtbWVudS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBVSxTQUFTLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzVGO0lBOEVFO1FBdEVVLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNILHVCQUFrQixHQUFHLElBQUksQ0FBQztRQUVsRSxhQUFRLEdBQXNCO1lBQzVCO2dCQUNFLEtBQUssRUFBRSxVQUFVO2dCQUNqQixJQUFJLEVBQUUsS0FBSztnQkFDWCxLQUFLLEVBQUU7b0JBQ0w7d0JBQ0UsS0FBSyxFQUFFLFVBQVU7d0JBQ2pCLElBQUksRUFBRSxXQUFXO3FCQUNsQjtvQkFDRDt3QkFDRSxLQUFLLEVBQUUsVUFBVTt3QkFDakIsSUFBSSxFQUFFLFdBQVc7cUJBQ2xCO29CQUNEO3dCQUNFLEtBQUssRUFBRSxVQUFVO3dCQUNqQixJQUFJLEVBQUUsV0FBVztxQkFDbEI7b0JBQ0Q7d0JBQ0UsS0FBSyxFQUFFLFVBQVU7d0JBQ2pCLElBQUksRUFBRSxXQUFXO3FCQUNsQjtvQkFDRDt3QkFDRSxLQUFLLEVBQUUsVUFBVTt3QkFDakIsSUFBSSxFQUFFLFdBQVc7cUJBQ2xCO29CQUNEO3dCQUNFLEtBQUssRUFBRSxVQUFVO3dCQUNqQixJQUFJLEVBQUUsV0FBVztxQkFDbEI7aUJBQ0Y7YUFDRjtZQUNEO2dCQUNFLEtBQUssRUFBRSxZQUFZO2dCQUNuQixJQUFJLEVBQUUsT0FBTztnQkFDYixLQUFLLEVBQUU7b0JBQ0w7d0JBQ0UsS0FBSyxFQUFFLFVBQVU7d0JBQ2pCLElBQUksRUFBRSxXQUFXO3FCQUNsQjtvQkFDRDt3QkFDRSxLQUFLLEVBQUUsVUFBVTt3QkFDakIsSUFBSSxFQUFFLFdBQVc7cUJBQ2xCO2lCQUNGO2FBQ0Y7WUFDRDtnQkFDRSxLQUFLLEVBQUUsU0FBUztnQkFDaEIsSUFBSSxFQUFFLFNBQVM7Z0JBQ2YsSUFBSSxFQUFFLGFBQWE7YUFDcEI7WUFDRDtnQkFDRSxLQUFLLEVBQUUsUUFBUTtnQkFDZixJQUFJLEVBQUUsU0FBUztnQkFDZixJQUFJLEVBQUUsV0FBVztnQkFDakIsTUFBTSxFQUFFLElBQUk7YUFDYjtTQUNGLENBQUM7UUFDRixXQUFNLEdBQWtCO1lBQ3RCLGNBQWMsRUFBRSxJQUFJO1lBQ3BCLFNBQVMsRUFBRSxXQUFXO1lBQ3RCLG1CQUFtQixFQUFFLG9CQUFvQjtZQUN6QyxTQUFTLEVBQUUsb0JBQW9CO1lBQy9CLGVBQWUsRUFBRSxvQkFBb0I7WUFDckMscUJBQXFCLEVBQUUsbUJBQW1CO1lBQzFDLGdCQUFnQixFQUFFLElBQUk7U0FDdkIsQ0FBQztJQUlGLENBQUM7Ozs7SUFFRCxvQ0FBUTs7O0lBQVI7SUFFQSxDQUFDOzs7OztJQUdELHdDQUFZOzs7O0lBQVosVUFBYSxNQUFNO1FBQ2pCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzlCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdEIsQ0FBQzs7Ozs7SUFFRCxxQ0FBUzs7OztJQUFULFVBQVUsTUFBTTtRQUNkLElBQUksSUFBSSxDQUFDLGtCQUFrQixFQUFFO1lBQzNCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLENBQUM7U0FDakM7SUFDSCxDQUFDOztnQkFoR0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxlQUFlO29CQUN6QixzTkFBeUM7O2lCQUUxQzs7Ozs7OEJBSUUsTUFBTTtxQ0FDTixXQUFXLFNBQUMsZ0JBQWdCLGNBQUcsS0FBSzs7SUF3RnZDLHdCQUFDO0NBQUEsQUFqR0QsSUFpR0M7U0E1RlksaUJBQWlCOzs7SUFHNUIsd0NBQTJDOztJQUMzQywrQ0FBa0U7O0lBRWxFLHFDQXdERTs7SUFDRixtQ0FRRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9uSW5pdCwgQ29tcG9uZW50LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIEhvc3RCaW5kaW5nIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbmZpZ3VyYXRpb24sIE11bHRpbGV2ZWxOb2RlcyB9IGZyb20gJ25nLW1hdGVyaWFsLW11bHRpbGV2ZWwtbWVudSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1zaWRlLW1lbnUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zaWRlLW1lbnUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3NpZGUtbWVudS5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaWRlTWVudUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG5cclxuICBAT3V0cHV0KCkgaXRlbUNsaWNrZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5leHBhbmRlZCcpIEBJbnB1dCgpIGlzU2lkZU1lbnVFeHBhbmRlZCA9IHRydWU7XHJcblxyXG4gIGFwcGl0ZW1zOiBNdWx0aWxldmVsTm9kZXNbXSA9IFtcclxuICAgIHtcclxuICAgICAgbGFiZWw6ICdNYWxoYXJpYScsXHJcbiAgICAgIGljb246ICdhZGQnLFxyXG4gICAgICBpdGVtczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGxhYmVsOiAnSXRlbSAxLjEnLFxyXG4gICAgICAgICAgbGluazogJy9pdGVtLTEtMScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBsYWJlbDogJ0l0ZW0gMS4yJyxcclxuICAgICAgICAgIGxpbms6ICcvaXRlbS0xLTInLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbGFiZWw6ICdJdGVtIDEuMScsXHJcbiAgICAgICAgICBsaW5rOiAnL2l0ZW0tMS0xJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGxhYmVsOiAnSXRlbSAxLjInLFxyXG4gICAgICAgICAgbGluazogJy9pdGVtLTEtMicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBsYWJlbDogJ0l0ZW0gMS4xJyxcclxuICAgICAgICAgIGxpbms6ICcvaXRlbS0xLTEnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbGFiZWw6ICdJdGVtIDEuMicsXHJcbiAgICAgICAgICBsaW5rOiAnL2l0ZW0tMS0yJyxcclxuICAgICAgICB9LFxyXG4gICAgICBdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBsYWJlbDogJ1RpbnR1cmFyaWEnLFxyXG4gICAgICBpY29uOiAnYWxhcm0nLFxyXG4gICAgICBpdGVtczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGxhYmVsOiAnSXRlbSAyLjEnLFxyXG4gICAgICAgICAgbGluazogJy9pdGVtLTItMScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBsYWJlbDogJ0l0ZW0gMi4yJyxcclxuICAgICAgICAgIGxpbms6ICcvaXRlbS0yLTInLFxyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbGFiZWw6ICdDb3N0dXJhJyxcclxuICAgICAgbGluazogJy9pdGVtLTMnLFxyXG4gICAgICBpY29uOiAnb2ZmbGluZV9waW4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBsYWJlbDogJ0l0ZW0gNCcsXHJcbiAgICAgIGxpbms6ICcvaXRlbS00JyxcclxuICAgICAgaWNvbjogJ3N0YXJfcmF0ZScsXHJcbiAgICAgIGhpZGRlbjogdHJ1ZVxyXG4gICAgfVxyXG4gIF07XHJcbiAgY29uZmlnOiBDb25maWd1cmF0aW9uID0ge1xyXG4gICAgcGFkZGluZ0F0U3RhcnQ6IHRydWUsXHJcbiAgICBjbGFzc25hbWU6ICdzaWRlLW1lbnUnLFxyXG4gICAgbGlzdEJhY2tncm91bmRDb2xvcjogJ3JnYigyNTUsIDI1NSwgMjU1KScsXHJcbiAgICBmb250Q29sb3I6ICdyZ2IoMTE3LCAxMTcsIDExNyknLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAncmdiKDI1NSwgMjU1LCAyNTUpJyxcclxuICAgIHNlbGVjdGVkTGlzdEZvbnRDb2xvcjogJ3JnYigzOSwgMTQ5LCAyMjMpJyxcclxuICAgIGNvbGxhcHNlT25TZWxlY3Q6IHRydWVcclxuICB9O1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuXHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuXHJcbiAgfVxyXG5cclxuXHJcbiAgc2VsZWN0ZWRJdGVtKCRldmVudCkge1xyXG4gICAgdGhpcy5pdGVtQ2xpY2tlZC5lbWl0KCRldmVudCk7XHJcbiAgICBjb25zb2xlLmxvZygkZXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgY2xvc2VNZW51KCRldmVudCkge1xyXG4gICAgaWYgKHRoaXMuaXNTaWRlTWVudUV4cGFuZGVkKSB7XHJcbiAgICAgIHRoaXMuaXNTaWRlTWVudUV4cGFuZGVkID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==