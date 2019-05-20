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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZS1tZW51LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2d1YS10aGVtZS8iLCJzb3VyY2VzIjpbImxpYi9zaWRlLW1lbnUvc2lkZS1tZW51LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFVLFNBQVMsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHNUY7SUE4RUU7UUF0RVUsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ0gsdUJBQWtCLEdBQUcsSUFBSSxDQUFDO1FBRWxFLGFBQVEsR0FBc0I7WUFDNUI7Z0JBQ0UsS0FBSyxFQUFFLFVBQVU7Z0JBQ2pCLElBQUksRUFBRSxLQUFLO2dCQUNYLEtBQUssRUFBRTtvQkFDTDt3QkFDRSxLQUFLLEVBQUUsVUFBVTt3QkFDakIsSUFBSSxFQUFFLFdBQVc7cUJBQ2xCO29CQUNEO3dCQUNFLEtBQUssRUFBRSxVQUFVO3dCQUNqQixJQUFJLEVBQUUsV0FBVztxQkFDbEI7b0JBQ0Q7d0JBQ0UsS0FBSyxFQUFFLFVBQVU7d0JBQ2pCLElBQUksRUFBRSxXQUFXO3FCQUNsQjtvQkFDRDt3QkFDRSxLQUFLLEVBQUUsVUFBVTt3QkFDakIsSUFBSSxFQUFFLFdBQVc7cUJBQ2xCO29CQUNEO3dCQUNFLEtBQUssRUFBRSxVQUFVO3dCQUNqQixJQUFJLEVBQUUsV0FBVztxQkFDbEI7b0JBQ0Q7d0JBQ0UsS0FBSyxFQUFFLFVBQVU7d0JBQ2pCLElBQUksRUFBRSxXQUFXO3FCQUNsQjtpQkFDRjthQUNGO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLFlBQVk7Z0JBQ25CLElBQUksRUFBRSxPQUFPO2dCQUNiLEtBQUssRUFBRTtvQkFDTDt3QkFDRSxLQUFLLEVBQUUsVUFBVTt3QkFDakIsSUFBSSxFQUFFLFdBQVc7cUJBQ2xCO29CQUNEO3dCQUNFLEtBQUssRUFBRSxVQUFVO3dCQUNqQixJQUFJLEVBQUUsV0FBVztxQkFDbEI7aUJBQ0Y7YUFDRjtZQUNEO2dCQUNFLEtBQUssRUFBRSxTQUFTO2dCQUNoQixJQUFJLEVBQUUsU0FBUztnQkFDZixJQUFJLEVBQUUsYUFBYTthQUNwQjtZQUNEO2dCQUNFLEtBQUssRUFBRSxRQUFRO2dCQUNmLElBQUksRUFBRSxTQUFTO2dCQUNmLElBQUksRUFBRSxXQUFXO2dCQUNqQixNQUFNLEVBQUUsSUFBSTthQUNiO1NBQ0YsQ0FBQztRQUNGLFdBQU0sR0FBa0I7WUFDdEIsY0FBYyxFQUFFLElBQUk7WUFDcEIsU0FBUyxFQUFFLFdBQVc7WUFDdEIsbUJBQW1CLEVBQUUsb0JBQW9CO1lBQ3pDLFNBQVMsRUFBRSxvQkFBb0I7WUFDL0IsZUFBZSxFQUFFLG9CQUFvQjtZQUNyQyxxQkFBcUIsRUFBRSxtQkFBbUI7WUFDMUMsZ0JBQWdCLEVBQUUsSUFBSTtTQUN2QixDQUFDO0lBSUYsQ0FBQzs7OztJQUVELG9DQUFROzs7SUFBUjtJQUVBLENBQUM7Ozs7O0lBR0Qsd0NBQVk7Ozs7SUFBWixVQUFhLE1BQU07UUFDakIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN0QixDQUFDOzs7OztJQUVELHFDQUFTOzs7O0lBQVQsVUFBVSxNQUFNO1FBQ2QsSUFBSSxJQUFJLENBQUMsa0JBQWtCLEVBQUU7WUFDM0IsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEtBQUssQ0FBQztTQUNqQztJQUNILENBQUM7O2dCQWhHRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLHNOQUF5Qzs7aUJBRTFDOzs7Ozs4QkFJRSxNQUFNO3FDQUNOLFdBQVcsU0FBQyxnQkFBZ0IsY0FBRyxLQUFLOztJQXdGdkMsd0JBQUM7Q0FBQSxBQWpHRCxJQWlHQztTQTVGWSxpQkFBaUI7OztJQUc1Qix3Q0FBMkM7O0lBQzNDLCtDQUFrRTs7SUFFbEUscUNBd0RFOztJQUNGLG1DQVFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT25Jbml0LCBDb21wb25lbnQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgSG9zdEJpbmRpbmcgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29uZmlndXJhdGlvbiwgTXVsdGlsZXZlbE5vZGVzIH0gZnJvbSAnbmctbWF0ZXJpYWwtbXVsdGlsZXZlbC1tZW51JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLXNpZGUtbWVudScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3NpZGUtbWVudS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vc2lkZS1tZW51LmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFNpZGVNZW51Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcblxyXG4gIEBPdXRwdXQoKSBpdGVtQ2xpY2tlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmV4cGFuZGVkJykgQElucHV0KCkgaXNTaWRlTWVudUV4cGFuZGVkID0gdHJ1ZTtcclxuXHJcbiAgYXBwaXRlbXM6IE11bHRpbGV2ZWxOb2Rlc1tdID0gW1xyXG4gICAge1xyXG4gICAgICBsYWJlbDogJ01hbGhhcmlhJyxcclxuICAgICAgaWNvbjogJ2FkZCcsXHJcbiAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbGFiZWw6ICdJdGVtIDEuMScsXHJcbiAgICAgICAgICBsaW5rOiAnL2l0ZW0tMS0xJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGxhYmVsOiAnSXRlbSAxLjInLFxyXG4gICAgICAgICAgbGluazogJy9pdGVtLTEtMicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBsYWJlbDogJ0l0ZW0gMS4xJyxcclxuICAgICAgICAgIGxpbms6ICcvaXRlbS0xLTEnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbGFiZWw6ICdJdGVtIDEuMicsXHJcbiAgICAgICAgICBsaW5rOiAnL2l0ZW0tMS0yJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGxhYmVsOiAnSXRlbSAxLjEnLFxyXG4gICAgICAgICAgbGluazogJy9pdGVtLTEtMScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBsYWJlbDogJ0l0ZW0gMS4yJyxcclxuICAgICAgICAgIGxpbms6ICcvaXRlbS0xLTInLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGxhYmVsOiAnVGludHVyYXJpYScsXHJcbiAgICAgIGljb246ICdhbGFybScsXHJcbiAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbGFiZWw6ICdJdGVtIDIuMScsXHJcbiAgICAgICAgICBsaW5rOiAnL2l0ZW0tMi0xJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGxhYmVsOiAnSXRlbSAyLjInLFxyXG4gICAgICAgICAgbGluazogJy9pdGVtLTItMicsXHJcbiAgICAgICAgfVxyXG4gICAgICBdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBsYWJlbDogJ0Nvc3R1cmEnLFxyXG4gICAgICBsaW5rOiAnL2l0ZW0tMycsXHJcbiAgICAgIGljb246ICdvZmZsaW5lX3BpbidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGxhYmVsOiAnSXRlbSA0JyxcclxuICAgICAgbGluazogJy9pdGVtLTQnLFxyXG4gICAgICBpY29uOiAnc3Rhcl9yYXRlJyxcclxuICAgICAgaGlkZGVuOiB0cnVlXHJcbiAgICB9XHJcbiAgXTtcclxuICBjb25maWc6IENvbmZpZ3VyYXRpb24gPSB7XHJcbiAgICBwYWRkaW5nQXRTdGFydDogdHJ1ZSxcclxuICAgIGNsYXNzbmFtZTogJ3NpZGUtbWVudScsXHJcbiAgICBsaXN0QmFja2dyb3VuZENvbG9yOiAncmdiKDI1NSwgMjU1LCAyNTUpJyxcclxuICAgIGZvbnRDb2xvcjogJ3JnYigxMTcsIDExNywgMTE3KScsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2IoMjU1LCAyNTUsIDI1NSknLFxyXG4gICAgc2VsZWN0ZWRMaXN0Rm9udENvbG9yOiAncmdiKDM5LCAxNDksIDIyMyknLFxyXG4gICAgY29sbGFwc2VPblNlbGVjdDogdHJ1ZVxyXG4gIH07XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG5cclxuICB9XHJcblxyXG5cclxuICBzZWxlY3RlZEl0ZW0oJGV2ZW50KSB7XHJcbiAgICB0aGlzLml0ZW1DbGlja2VkLmVtaXQoJGV2ZW50KTtcclxuICAgIGNvbnNvbGUubG9nKCRldmVudCk7XHJcbiAgfVxyXG5cclxuICBjbG9zZU1lbnUoJGV2ZW50KSB7XHJcbiAgICBpZiAodGhpcy5pc1NpZGVNZW51RXhwYW5kZWQpIHtcclxuICAgICAgdGhpcy5pc1NpZGVNZW51RXhwYW5kZWQgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19