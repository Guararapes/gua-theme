/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Output, EventEmitter, Input, HostBinding } from '@angular/core';
export class SideMenuComponent {
    constructor() {
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
    ngOnInit() {
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    selectedItem($event) {
        this.itemClicked.emit($event);
        console.log($event);
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    closeMenu($event) {
        if (this.isSideMenuExpanded) {
            this.isSideMenuExpanded = false;
        }
    }
}
SideMenuComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-side-menu',
                template: "<div class=\"menu-wrapper\" >\r\n  <ng-material-multilevel-menu [configuration]='config' [items]='appitems' (selectedItem)=\"selectedItem($event)\">\r\n  </ng-material-multilevel-menu>\r\n</div>\r\n\r\n",
                styles: [":host{position:absolute;display:block;-webkit-transform:translateX(-100%);transform:translateX(-100%);transition:transform .5s;transition:transform .5s,-webkit-transform .5s;width:100%;z-index:99}:host .menu-wrapper{box-shadow:0 2px 5px rgba(0,0,0,.2);color:transparent;font-size:14px;width:277px}:host .menu-wrapper ::ng-deep .mat-divider{display:none}:host .menu-wrapper ::ng-deep .mat-list-item-content:hover{background-color:rgba(0,0,0,.08)}@media (min-width:769px){:host .menu-wrapper ::ng-deep .level-1{position:absolute;top:0;left:262px;width:176px;min-height:100%;box-shadow:2px 2px 5px rgba(0,0,0,.2)}:host .menu-wrapper ::ng-deep .amml-icon-arrow-container .mat-icon{-webkit-transform:rotate(-90deg)!important;transform:rotate(-90deg)!important}}@media (max-width:768px){:host .menu-wrapper{width:100%}:host .menu-wrapper ::ng-deep .mat-divider{display:block}}:host.expanded{-webkit-transform:translateX(0);transform:translateX(0)}"]
            }] }
];
/** @nocollapse */
SideMenuComponent.ctorParameters = () => [];
SideMenuComponent.propDecorators = {
    itemClicked: [{ type: Output }],
    isSideMenuExpanded: [{ type: HostBinding, args: ['class.expanded',] }, { type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZS1tZW51LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2d1YS10aGVtZS8iLCJzb3VyY2VzIjpbImxpYi9zaWRlLW1lbnUvc2lkZS1tZW51LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFVLFNBQVMsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFRNUYsTUFBTSxPQUFPLGlCQUFpQjtJQXlFNUI7UUF0RVUsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ0gsdUJBQWtCLEdBQUcsSUFBSSxDQUFDO1FBRWxFLGFBQVEsR0FBc0I7WUFDNUI7Z0JBQ0UsS0FBSyxFQUFFLFVBQVU7Z0JBQ2pCLElBQUksRUFBRSxLQUFLO2dCQUNYLEtBQUssRUFBRTtvQkFDTDt3QkFDRSxLQUFLLEVBQUUsVUFBVTt3QkFDakIsSUFBSSxFQUFFLFdBQVc7cUJBQ2xCO29CQUNEO3dCQUNFLEtBQUssRUFBRSxVQUFVO3dCQUNqQixJQUFJLEVBQUUsV0FBVztxQkFDbEI7b0JBQ0Q7d0JBQ0UsS0FBSyxFQUFFLFVBQVU7d0JBQ2pCLElBQUksRUFBRSxXQUFXO3FCQUNsQjtvQkFDRDt3QkFDRSxLQUFLLEVBQUUsVUFBVTt3QkFDakIsSUFBSSxFQUFFLFdBQVc7cUJBQ2xCO29CQUNEO3dCQUNFLEtBQUssRUFBRSxVQUFVO3dCQUNqQixJQUFJLEVBQUUsV0FBVztxQkFDbEI7b0JBQ0Q7d0JBQ0UsS0FBSyxFQUFFLFVBQVU7d0JBQ2pCLElBQUksRUFBRSxXQUFXO3FCQUNsQjtpQkFDRjthQUNGO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLFlBQVk7Z0JBQ25CLElBQUksRUFBRSxPQUFPO2dCQUNiLEtBQUssRUFBRTtvQkFDTDt3QkFDRSxLQUFLLEVBQUUsVUFBVTt3QkFDakIsSUFBSSxFQUFFLFdBQVc7cUJBQ2xCO29CQUNEO3dCQUNFLEtBQUssRUFBRSxVQUFVO3dCQUNqQixJQUFJLEVBQUUsV0FBVztxQkFDbEI7aUJBQ0Y7YUFDRjtZQUNEO2dCQUNFLEtBQUssRUFBRSxTQUFTO2dCQUNoQixJQUFJLEVBQUUsU0FBUztnQkFDZixJQUFJLEVBQUUsYUFBYTthQUNwQjtZQUNEO2dCQUNFLEtBQUssRUFBRSxRQUFRO2dCQUNmLElBQUksRUFBRSxTQUFTO2dCQUNmLElBQUksRUFBRSxXQUFXO2dCQUNqQixNQUFNLEVBQUUsSUFBSTthQUNiO1NBQ0YsQ0FBQztRQUNGLFdBQU0sR0FBa0I7WUFDdEIsY0FBYyxFQUFFLElBQUk7WUFDcEIsU0FBUyxFQUFFLFdBQVc7WUFDdEIsbUJBQW1CLEVBQUUsb0JBQW9CO1lBQ3pDLFNBQVMsRUFBRSxvQkFBb0I7WUFDL0IsZUFBZSxFQUFFLG9CQUFvQjtZQUNyQyxxQkFBcUIsRUFBRSxtQkFBbUI7WUFDMUMsZ0JBQWdCLEVBQUUsSUFBSTtTQUN2QixDQUFDO0lBSUYsQ0FBQzs7OztJQUVELFFBQVE7SUFFUixDQUFDOzs7OztJQUdELFlBQVksQ0FBQyxNQUFNO1FBQ2pCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzlCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdEIsQ0FBQzs7Ozs7SUFFRCxTQUFTLENBQUMsTUFBTTtRQUNkLElBQUksSUFBSSxDQUFDLGtCQUFrQixFQUFFO1lBQzNCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLENBQUM7U0FDakM7SUFDSCxDQUFDOzs7WUFoR0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2dCQUN6QixzTkFBeUM7O2FBRTFDOzs7OzswQkFJRSxNQUFNO2lDQUNOLFdBQVcsU0FBQyxnQkFBZ0IsY0FBRyxLQUFLOzs7O0lBRHJDLHdDQUEyQzs7SUFDM0MsK0NBQWtFOztJQUVsRSxxQ0F3REU7O0lBQ0YsbUNBUUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPbkluaXQsIENvbXBvbmVudCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIElucHV0LCBIb3N0QmluZGluZyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb25maWd1cmF0aW9uLCBNdWx0aWxldmVsTm9kZXMgfSBmcm9tICduZy1tYXRlcmlhbC1tdWx0aWxldmVsLW1lbnUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtc2lkZS1tZW51JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vc2lkZS1tZW51LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9zaWRlLW1lbnUuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2lkZU1lbnVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuXHJcbiAgQE91dHB1dCgpIGl0ZW1DbGlja2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBIb3N0QmluZGluZygnY2xhc3MuZXhwYW5kZWQnKSBASW5wdXQoKSBpc1NpZGVNZW51RXhwYW5kZWQgPSB0cnVlO1xyXG5cclxuICBhcHBpdGVtczogTXVsdGlsZXZlbE5vZGVzW10gPSBbXHJcbiAgICB7XHJcbiAgICAgIGxhYmVsOiAnTWFsaGFyaWEnLFxyXG4gICAgICBpY29uOiAnYWRkJyxcclxuICAgICAgaXRlbXM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBsYWJlbDogJ0l0ZW0gMS4xJyxcclxuICAgICAgICAgIGxpbms6ICcvaXRlbS0xLTEnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbGFiZWw6ICdJdGVtIDEuMicsXHJcbiAgICAgICAgICBsaW5rOiAnL2l0ZW0tMS0yJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGxhYmVsOiAnSXRlbSAxLjEnLFxyXG4gICAgICAgICAgbGluazogJy9pdGVtLTEtMScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBsYWJlbDogJ0l0ZW0gMS4yJyxcclxuICAgICAgICAgIGxpbms6ICcvaXRlbS0xLTInLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbGFiZWw6ICdJdGVtIDEuMScsXHJcbiAgICAgICAgICBsaW5rOiAnL2l0ZW0tMS0xJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGxhYmVsOiAnSXRlbSAxLjInLFxyXG4gICAgICAgICAgbGluazogJy9pdGVtLTEtMicsXHJcbiAgICAgICAgfSxcclxuICAgICAgXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbGFiZWw6ICdUaW50dXJhcmlhJyxcclxuICAgICAgaWNvbjogJ2FsYXJtJyxcclxuICAgICAgaXRlbXM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBsYWJlbDogJ0l0ZW0gMi4xJyxcclxuICAgICAgICAgIGxpbms6ICcvaXRlbS0yLTEnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbGFiZWw6ICdJdGVtIDIuMicsXHJcbiAgICAgICAgICBsaW5rOiAnL2l0ZW0tMi0yJyxcclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGxhYmVsOiAnQ29zdHVyYScsXHJcbiAgICAgIGxpbms6ICcvaXRlbS0zJyxcclxuICAgICAgaWNvbjogJ29mZmxpbmVfcGluJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbGFiZWw6ICdJdGVtIDQnLFxyXG4gICAgICBsaW5rOiAnL2l0ZW0tNCcsXHJcbiAgICAgIGljb246ICdzdGFyX3JhdGUnLFxyXG4gICAgICBoaWRkZW46IHRydWVcclxuICAgIH1cclxuICBdO1xyXG4gIGNvbmZpZzogQ29uZmlndXJhdGlvbiA9IHtcclxuICAgIHBhZGRpbmdBdFN0YXJ0OiB0cnVlLFxyXG4gICAgY2xhc3NuYW1lOiAnc2lkZS1tZW51JyxcclxuICAgIGxpc3RCYWNrZ3JvdW5kQ29sb3I6ICdyZ2IoMjU1LCAyNTUsIDI1NSknLFxyXG4gICAgZm9udENvbG9yOiAncmdiKDExNywgMTE3LCAxMTcpJyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYigyNTUsIDI1NSwgMjU1KScsXHJcbiAgICBzZWxlY3RlZExpc3RGb250Q29sb3I6ICdyZ2IoMzksIDE0OSwgMjIzKScsXHJcbiAgICBjb2xsYXBzZU9uU2VsZWN0OiB0cnVlXHJcbiAgfTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcblxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcblxyXG4gIH1cclxuXHJcblxyXG4gIHNlbGVjdGVkSXRlbSgkZXZlbnQpIHtcclxuICAgIHRoaXMuaXRlbUNsaWNrZWQuZW1pdCgkZXZlbnQpO1xyXG4gICAgY29uc29sZS5sb2coJGV2ZW50KTtcclxuICB9XHJcblxyXG4gIGNsb3NlTWVudSgkZXZlbnQpIHtcclxuICAgIGlmICh0aGlzLmlzU2lkZU1lbnVFeHBhbmRlZCkge1xyXG4gICAgICB0aGlzLmlzU2lkZU1lbnVFeHBhbmRlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=