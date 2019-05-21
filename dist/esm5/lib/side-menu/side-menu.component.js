/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Output, EventEmitter, Input, HostBinding } from '@angular/core';
var SideMenuComponent = /** @class */ (function () {
    function SideMenuComponent() {
        this.itemClicked = new EventEmitter();
        this.config = {
            paddingAtStart: true,
            classname: 'side-menu',
            listBackgroundColor: 'rgb(255, 255, 255)',
            fontColor: 'rgb(117, 117, 117)',
            backgroundColor: 'rgb(255, 255, 255)',
            selectedListFontColor: 'rgb(39, 149, 223)',
            collapseOnSelect: true,
            interfaceWithRoute: true
        };
    }
    /**
     * @return {?}
     */
    SideMenuComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (!this.appitems) {
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
        }
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
        isSideMenuExpanded: [{ type: HostBinding, args: ['class.expanded',] }, { type: Input }],
        appitems: [{ type: Input }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZS1tZW51LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2d1YS10aGVtZS1saWIvIiwic291cmNlcyI6WyJsaWIvc2lkZS1tZW51L3NpZGUtbWVudS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBVSxTQUFTLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzVGO0lBdUJFO1FBZlUsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBSTNDLFdBQU0sR0FBa0I7WUFDdEIsY0FBYyxFQUFFLElBQUk7WUFDcEIsU0FBUyxFQUFFLFdBQVc7WUFDdEIsbUJBQW1CLEVBQUUsb0JBQW9CO1lBQ3pDLFNBQVMsRUFBRSxvQkFBb0I7WUFDL0IsZUFBZSxFQUFFLG9CQUFvQjtZQUNyQyxxQkFBcUIsRUFBRSxtQkFBbUI7WUFDMUMsZ0JBQWdCLEVBQUUsSUFBSTtZQUN0QixrQkFBa0IsRUFBRSxJQUFJO1NBQ3pCLENBQUM7SUFJRixDQUFDOzs7O0lBR0Qsb0NBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFFBQVEsR0FBRztnQkFDZDtvQkFDRSxLQUFLLEVBQUUsVUFBVTtvQkFDakIsSUFBSSxFQUFFLEtBQUs7b0JBQ1gsS0FBSyxFQUFFO3dCQUNMOzRCQUNFLEtBQUssRUFBRSxVQUFVOzRCQUNqQixJQUFJLEVBQUUsV0FBVzt5QkFDbEI7d0JBQ0Q7NEJBQ0UsS0FBSyxFQUFFLFVBQVU7NEJBQ2pCLElBQUksRUFBRSxXQUFXO3lCQUNsQjt3QkFDRDs0QkFDRSxLQUFLLEVBQUUsVUFBVTs0QkFDakIsSUFBSSxFQUFFLFdBQVc7eUJBQ2xCO3dCQUNEOzRCQUNFLEtBQUssRUFBRSxVQUFVOzRCQUNqQixJQUFJLEVBQUUsV0FBVzt5QkFDbEI7d0JBQ0Q7NEJBQ0UsS0FBSyxFQUFFLFVBQVU7NEJBQ2pCLElBQUksRUFBRSxXQUFXO3lCQUNsQjt3QkFDRDs0QkFDRSxLQUFLLEVBQUUsVUFBVTs0QkFDakIsSUFBSSxFQUFFLFdBQVc7eUJBQ2xCO3FCQUNGO2lCQUNGO2dCQUNEO29CQUNFLEtBQUssRUFBRSxZQUFZO29CQUNuQixJQUFJLEVBQUUsT0FBTztvQkFDYixLQUFLLEVBQUU7d0JBQ0w7NEJBQ0UsS0FBSyxFQUFFLFVBQVU7NEJBQ2pCLElBQUksRUFBRSxXQUFXO3lCQUNsQjt3QkFDRDs0QkFDRSxLQUFLLEVBQUUsVUFBVTs0QkFDakIsSUFBSSxFQUFFLFdBQVc7eUJBQ2xCO3FCQUNGO2lCQUNGO2dCQUNEO29CQUNFLEtBQUssRUFBRSxTQUFTO29CQUNoQixJQUFJLEVBQUUsU0FBUztvQkFDZixJQUFJLEVBQUUsYUFBYTtpQkFDcEI7Z0JBQ0Q7b0JBQ0UsS0FBSyxFQUFFLFFBQVE7b0JBQ2YsSUFBSSxFQUFFLFNBQVM7b0JBQ2YsSUFBSSxFQUFFLFdBQVc7b0JBQ2pCLE1BQU0sRUFBRSxJQUFJO2lCQUNiO2FBQ0YsQ0FBQTtTQUNGO0lBQ0gsQ0FBQzs7Ozs7SUFHRCx3Q0FBWTs7OztJQUFaLFVBQWEsTUFBTTtRQUNqQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3RCLENBQUM7Ozs7O0lBRUQscUNBQVM7Ozs7SUFBVCxVQUFVLE1BQU07UUFDZCxJQUFJLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtZQUMzQixJQUFJLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDO1NBQ2pDO0lBQ0gsQ0FBQzs7Z0JBcEdGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZUFBZTtvQkFDekIsc05BQXlDOztpQkFFMUM7Ozs7OzhCQUlFLE1BQU07cUNBQ04sV0FBVyxTQUFDLGdCQUFnQixjQUM1QixLQUFLOzJCQUNMLEtBQUs7O0lBMEZSLHdCQUFDO0NBQUEsQUFyR0QsSUFxR0M7U0FoR1ksaUJBQWlCOzs7SUFHNUIsd0NBQTJDOztJQUMzQywrQ0FDNEI7O0lBQzVCLHFDQUFxQzs7SUFDckMsbUNBU0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPbkluaXQsIENvbXBvbmVudCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIElucHV0LCBIb3N0QmluZGluZyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb25maWd1cmF0aW9uLCBNdWx0aWxldmVsTm9kZXMgfSBmcm9tICduZy1tYXRlcmlhbC1tdWx0aWxldmVsLW1lbnUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtc2lkZS1tZW51JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vc2lkZS1tZW51LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9zaWRlLW1lbnUuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2lkZU1lbnVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuXHJcbiAgQE91dHB1dCgpIGl0ZW1DbGlja2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBIb3N0QmluZGluZygnY2xhc3MuZXhwYW5kZWQnKVxyXG4gIEBJbnB1dCgpIGlzU2lkZU1lbnVFeHBhbmRlZDtcclxuICBASW5wdXQoKSBhcHBpdGVtczogTXVsdGlsZXZlbE5vZGVzW107XHJcbiAgY29uZmlnOiBDb25maWd1cmF0aW9uID0ge1xyXG4gICAgcGFkZGluZ0F0U3RhcnQ6IHRydWUsXHJcbiAgICBjbGFzc25hbWU6ICdzaWRlLW1lbnUnLFxyXG4gICAgbGlzdEJhY2tncm91bmRDb2xvcjogJ3JnYigyNTUsIDI1NSwgMjU1KScsXHJcbiAgICBmb250Q29sb3I6ICdyZ2IoMTE3LCAxMTcsIDExNyknLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAncmdiKDI1NSwgMjU1LCAyNTUpJyxcclxuICAgIHNlbGVjdGVkTGlzdEZvbnRDb2xvcjogJ3JnYigzOSwgMTQ5LCAyMjMpJyxcclxuICAgIGNvbGxhcHNlT25TZWxlY3Q6IHRydWUsXHJcbiAgICBpbnRlcmZhY2VXaXRoUm91dGU6IHRydWVcclxuICB9O1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuXHJcbiAgfVxyXG5cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBpZiAoIXRoaXMuYXBwaXRlbXMpIHtcclxuICAgICAgdGhpcy5hcHBpdGVtcyA9IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBsYWJlbDogJ01hbGhhcmlhJyxcclxuICAgICAgICAgIGljb246ICdhZGQnLFxyXG4gICAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGxhYmVsOiAnSXRlbSAxLjEnLFxyXG4gICAgICAgICAgICAgIGxpbms6ICcvaXRlbS0xLTEnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgbGFiZWw6ICdJdGVtIDEuMicsXHJcbiAgICAgICAgICAgICAgbGluazogJy9pdGVtLTEtMicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBsYWJlbDogJ0l0ZW0gMS4xJyxcclxuICAgICAgICAgICAgICBsaW5rOiAnL2l0ZW0tMS0xJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGxhYmVsOiAnSXRlbSAxLjInLFxyXG4gICAgICAgICAgICAgIGxpbms6ICcvaXRlbS0xLTInLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgbGFiZWw6ICdJdGVtIDEuMScsXHJcbiAgICAgICAgICAgICAgbGluazogJy9pdGVtLTEtMScsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBsYWJlbDogJ0l0ZW0gMS4yJyxcclxuICAgICAgICAgICAgICBsaW5rOiAnL2l0ZW0tMS0yJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGxhYmVsOiAnVGludHVyYXJpYScsXHJcbiAgICAgICAgICBpY29uOiAnYWxhcm0nLFxyXG4gICAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGxhYmVsOiAnSXRlbSAyLjEnLFxyXG4gICAgICAgICAgICAgIGxpbms6ICcvaXRlbS0yLTEnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgbGFiZWw6ICdJdGVtIDIuMicsXHJcbiAgICAgICAgICAgICAgbGluazogJy9pdGVtLTItMicsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGxhYmVsOiAnQ29zdHVyYScsXHJcbiAgICAgICAgICBsaW5rOiAnL2l0ZW0tMycsXHJcbiAgICAgICAgICBpY29uOiAnb2ZmbGluZV9waW4nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBsYWJlbDogJ0l0ZW0gNCcsXHJcbiAgICAgICAgICBsaW5rOiAnL2l0ZW0tNCcsXHJcbiAgICAgICAgICBpY29uOiAnc3Rhcl9yYXRlJyxcclxuICAgICAgICAgIGhpZGRlbjogdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIHNlbGVjdGVkSXRlbSgkZXZlbnQpIHtcclxuICAgIHRoaXMuaXRlbUNsaWNrZWQuZW1pdCgkZXZlbnQpO1xyXG4gICAgY29uc29sZS5sb2coJGV2ZW50KTtcclxuICB9XHJcblxyXG4gIGNsb3NlTWVudSgkZXZlbnQpIHtcclxuICAgIGlmICh0aGlzLmlzU2lkZU1lbnVFeHBhbmRlZCkge1xyXG4gICAgICB0aGlzLmlzU2lkZU1lbnVFeHBhbmRlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=