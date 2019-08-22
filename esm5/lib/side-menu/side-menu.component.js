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
                    template: "<div class=\"menu-wrapper\" [style.margin-top]=\"marginTop\">\r\n  <ng-material-multilevel-menu [configuration]='config' [items]='appitems' (selectedItem)=\"selectedItem($event)\">\r\n  </ng-material-multilevel-menu>\r\n</div>\r\n\r\n",
                    styles: [":host{position:absolute;display:block;-webkit-transform:translateX(-100%);transform:translateX(-100%);-webkit-transition:-webkit-transform .5s;transition:transform .5s;transition:transform .5s,-webkit-transform .5s;width:100%;z-index:99}:host .menu-wrapper{box-shadow:0 2px 5px rgba(0,0,0,.2);color:transparent;font-size:14px;width:277px}:host .menu-wrapper ::ng-deep .mat-divider{display:none}:host .menu-wrapper ::ng-deep .mat-list-item-content:hover{background-color:rgba(0,0,0,.08)}@media (min-width:769px){:host .menu-wrapper ::ng-deep .level-1{position:absolute;top:0;left:262px;width:176px;min-height:100%;box-shadow:2px 2px 5px rgba(0,0,0,.2)}:host .menu-wrapper ::ng-deep .amml-icon-arrow-container .mat-icon{-webkit-transform:rotate(-90deg)!important;transform:rotate(-90deg)!important}}@media (max-width:768px){:host .menu-wrapper{width:100%}:host .menu-wrapper ::ng-deep .mat-divider{display:block}}:host.expanded{-webkit-transform:translateX(0);transform:translateX(0)}"]
                }] }
    ];
    /** @nocollapse */
    SideMenuComponent.ctorParameters = function () { return []; };
    SideMenuComponent.propDecorators = {
        itemClicked: [{ type: Output }],
        isSideMenuExpanded: [{ type: HostBinding, args: ['class.expanded',] }, { type: Input }],
        appitems: [{ type: Input }],
        marginTop: [{ type: Input }]
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
    SideMenuComponent.prototype.marginTop;
    /** @type {?} */
    SideMenuComponent.prototype.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZS1tZW51LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2d1YS10aGVtZS8iLCJzb3VyY2VzIjpbImxpYi9zaWRlLW1lbnUvc2lkZS1tZW51LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFVLFNBQVMsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHNUY7SUF3QkU7UUFoQlUsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBSzNDLFdBQU0sR0FBa0I7WUFDdEIsY0FBYyxFQUFFLElBQUk7WUFDcEIsU0FBUyxFQUFFLFdBQVc7WUFDdEIsbUJBQW1CLEVBQUUsb0JBQW9CO1lBQ3pDLFNBQVMsRUFBRSxvQkFBb0I7WUFDL0IsZUFBZSxFQUFFLG9CQUFvQjtZQUNyQyxxQkFBcUIsRUFBRSxtQkFBbUI7WUFDMUMsZ0JBQWdCLEVBQUUsSUFBSTtZQUN0QixrQkFBa0IsRUFBRSxJQUFJO1NBQ3pCLENBQUM7SUFJRixDQUFDOzs7O0lBR0Qsb0NBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFFBQVEsR0FBRztnQkFDZDtvQkFDRSxLQUFLLEVBQUUsVUFBVTtvQkFDakIsSUFBSSxFQUFFLEtBQUs7b0JBQ1gsS0FBSyxFQUFFO3dCQUNMOzRCQUNFLEtBQUssRUFBRSxVQUFVOzRCQUNqQixJQUFJLEVBQUUsV0FBVzt5QkFDbEI7d0JBQ0Q7NEJBQ0UsS0FBSyxFQUFFLFVBQVU7NEJBQ2pCLElBQUksRUFBRSxXQUFXO3lCQUNsQjt3QkFDRDs0QkFDRSxLQUFLLEVBQUUsVUFBVTs0QkFDakIsSUFBSSxFQUFFLFdBQVc7eUJBQ2xCO3dCQUNEOzRCQUNFLEtBQUssRUFBRSxVQUFVOzRCQUNqQixJQUFJLEVBQUUsV0FBVzt5QkFDbEI7d0JBQ0Q7NEJBQ0UsS0FBSyxFQUFFLFVBQVU7NEJBQ2pCLElBQUksRUFBRSxXQUFXO3lCQUNsQjt3QkFDRDs0QkFDRSxLQUFLLEVBQUUsVUFBVTs0QkFDakIsSUFBSSxFQUFFLFdBQVc7eUJBQ2xCO3FCQUNGO2lCQUNGO2dCQUNEO29CQUNFLEtBQUssRUFBRSxZQUFZO29CQUNuQixJQUFJLEVBQUUsT0FBTztvQkFDYixLQUFLLEVBQUU7d0JBQ0w7NEJBQ0UsS0FBSyxFQUFFLFVBQVU7NEJBQ2pCLElBQUksRUFBRSxXQUFXO3lCQUNsQjt3QkFDRDs0QkFDRSxLQUFLLEVBQUUsVUFBVTs0QkFDakIsSUFBSSxFQUFFLFdBQVc7eUJBQ2xCO3FCQUNGO2lCQUNGO2dCQUNEO29CQUNFLEtBQUssRUFBRSxTQUFTO29CQUNoQixJQUFJLEVBQUUsU0FBUztvQkFDZixJQUFJLEVBQUUsYUFBYTtpQkFDcEI7Z0JBQ0Q7b0JBQ0UsS0FBSyxFQUFFLFFBQVE7b0JBQ2YsSUFBSSxFQUFFLFNBQVM7b0JBQ2YsSUFBSSxFQUFFLFdBQVc7b0JBQ2pCLE1BQU0sRUFBRSxJQUFJO2lCQUNiO2FBQ0YsQ0FBQTtTQUNGO0lBQ0gsQ0FBQzs7Ozs7SUFHRCx3Q0FBWTs7OztJQUFaLFVBQWEsTUFBTTtRQUNqQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3RCLENBQUM7Ozs7O0lBRUQscUNBQVM7Ozs7SUFBVCxVQUFVLE1BQU07UUFDZCxJQUFJLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtZQUMzQixJQUFJLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDO1NBQ2pDO0lBQ0gsQ0FBQzs7Z0JBckdGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZUFBZTtvQkFDekIsc1BBQXlDOztpQkFFMUM7Ozs7OzhCQUlFLE1BQU07cUNBQ04sV0FBVyxTQUFDLGdCQUFnQixjQUM1QixLQUFLOzJCQUNMLEtBQUs7NEJBQ0wsS0FBSzs7SUEwRlIsd0JBQUM7Q0FBQSxBQXRHRCxJQXNHQztTQWpHWSxpQkFBaUI7OztJQUc1Qix3Q0FBMkM7O0lBQzNDLCtDQUM0Qjs7SUFDNUIscUNBQXFDOztJQUNyQyxzQ0FBMkI7O0lBQzNCLG1DQVNFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT25Jbml0LCBDb21wb25lbnQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgSG9zdEJpbmRpbmcgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29uZmlndXJhdGlvbiwgTXVsdGlsZXZlbE5vZGVzIH0gZnJvbSAnbmctbWF0ZXJpYWwtbXVsdGlsZXZlbC1tZW51JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLXNpZGUtbWVudScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3NpZGUtbWVudS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vc2lkZS1tZW51LmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFNpZGVNZW51Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcblxyXG4gIEBPdXRwdXQoKSBpdGVtQ2xpY2tlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmV4cGFuZGVkJylcclxuICBASW5wdXQoKSBpc1NpZGVNZW51RXhwYW5kZWQ7XHJcbiAgQElucHV0KCkgYXBwaXRlbXM6IE11bHRpbGV2ZWxOb2Rlc1tdO1xyXG4gIEBJbnB1dCgpIG1hcmdpblRvcDogc3RyaW5nO1xyXG4gIGNvbmZpZzogQ29uZmlndXJhdGlvbiA9IHtcclxuICAgIHBhZGRpbmdBdFN0YXJ0OiB0cnVlLFxyXG4gICAgY2xhc3NuYW1lOiAnc2lkZS1tZW51JyxcclxuICAgIGxpc3RCYWNrZ3JvdW5kQ29sb3I6ICdyZ2IoMjU1LCAyNTUsIDI1NSknLFxyXG4gICAgZm9udENvbG9yOiAncmdiKDExNywgMTE3LCAxMTcpJyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYigyNTUsIDI1NSwgMjU1KScsXHJcbiAgICBzZWxlY3RlZExpc3RGb250Q29sb3I6ICdyZ2IoMzksIDE0OSwgMjIzKScsXHJcbiAgICBjb2xsYXBzZU9uU2VsZWN0OiB0cnVlLFxyXG4gICAgaW50ZXJmYWNlV2l0aFJvdXRlOiB0cnVlXHJcbiAgfTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcblxyXG4gIH1cclxuXHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgaWYgKCF0aGlzLmFwcGl0ZW1zKSB7XHJcbiAgICAgIHRoaXMuYXBwaXRlbXMgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbGFiZWw6ICdNYWxoYXJpYScsXHJcbiAgICAgICAgICBpY29uOiAnYWRkJyxcclxuICAgICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBsYWJlbDogJ0l0ZW0gMS4xJyxcclxuICAgICAgICAgICAgICBsaW5rOiAnL2l0ZW0tMS0xJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGxhYmVsOiAnSXRlbSAxLjInLFxyXG4gICAgICAgICAgICAgIGxpbms6ICcvaXRlbS0xLTInLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgbGFiZWw6ICdJdGVtIDEuMScsXHJcbiAgICAgICAgICAgICAgbGluazogJy9pdGVtLTEtMScsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBsYWJlbDogJ0l0ZW0gMS4yJyxcclxuICAgICAgICAgICAgICBsaW5rOiAnL2l0ZW0tMS0yJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGxhYmVsOiAnSXRlbSAxLjEnLFxyXG4gICAgICAgICAgICAgIGxpbms6ICcvaXRlbS0xLTEnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgbGFiZWw6ICdJdGVtIDEuMicsXHJcbiAgICAgICAgICAgICAgbGluazogJy9pdGVtLTEtMicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBsYWJlbDogJ1RpbnR1cmFyaWEnLFxyXG4gICAgICAgICAgaWNvbjogJ2FsYXJtJyxcclxuICAgICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBsYWJlbDogJ0l0ZW0gMi4xJyxcclxuICAgICAgICAgICAgICBsaW5rOiAnL2l0ZW0tMi0xJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGxhYmVsOiAnSXRlbSAyLjInLFxyXG4gICAgICAgICAgICAgIGxpbms6ICcvaXRlbS0yLTInLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBsYWJlbDogJ0Nvc3R1cmEnLFxyXG4gICAgICAgICAgbGluazogJy9pdGVtLTMnLFxyXG4gICAgICAgICAgaWNvbjogJ29mZmxpbmVfcGluJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbGFiZWw6ICdJdGVtIDQnLFxyXG4gICAgICAgICAgbGluazogJy9pdGVtLTQnLFxyXG4gICAgICAgICAgaWNvbjogJ3N0YXJfcmF0ZScsXHJcbiAgICAgICAgICBoaWRkZW46IHRydWVcclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICBzZWxlY3RlZEl0ZW0oJGV2ZW50KSB7XHJcbiAgICB0aGlzLml0ZW1DbGlja2VkLmVtaXQoJGV2ZW50KTtcclxuICAgIGNvbnNvbGUubG9nKCRldmVudCk7XHJcbiAgfVxyXG5cclxuICBjbG9zZU1lbnUoJGV2ZW50KSB7XHJcbiAgICBpZiAodGhpcy5pc1NpZGVNZW51RXhwYW5kZWQpIHtcclxuICAgICAgdGhpcy5pc1NpZGVNZW51RXhwYW5kZWQgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19