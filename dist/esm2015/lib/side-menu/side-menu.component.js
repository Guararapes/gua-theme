/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Output, EventEmitter, Input, HostBinding } from '@angular/core';
export class SideMenuComponent {
    constructor() {
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
    ngOnInit() {
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
    isSideMenuExpanded: [{ type: HostBinding, args: ['class.expanded',] }, { type: Input }],
    appitems: [{ type: Input }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZS1tZW51LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2d1YS10aGVtZS1saWIvIiwic291cmNlcyI6WyJsaWIvc2lkZS1tZW51L3NpZGUtbWVudS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBVSxTQUFTLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUTVGLE1BQU0sT0FBTyxpQkFBaUI7SUFrQjVCO1FBZlUsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBSTNDLFdBQU0sR0FBa0I7WUFDdEIsY0FBYyxFQUFFLElBQUk7WUFDcEIsU0FBUyxFQUFFLFdBQVc7WUFDdEIsbUJBQW1CLEVBQUUsb0JBQW9CO1lBQ3pDLFNBQVMsRUFBRSxvQkFBb0I7WUFDL0IsZUFBZSxFQUFFLG9CQUFvQjtZQUNyQyxxQkFBcUIsRUFBRSxtQkFBbUI7WUFDMUMsZ0JBQWdCLEVBQUUsSUFBSTtZQUN0QixrQkFBa0IsRUFBRSxJQUFJO1NBQ3pCLENBQUM7SUFJRixDQUFDOzs7O0lBR0QsUUFBUTtRQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxRQUFRLEdBQUc7Z0JBQ2Q7b0JBQ0UsS0FBSyxFQUFFLFVBQVU7b0JBQ2pCLElBQUksRUFBRSxLQUFLO29CQUNYLEtBQUssRUFBRTt3QkFDTDs0QkFDRSxLQUFLLEVBQUUsVUFBVTs0QkFDakIsSUFBSSxFQUFFLFdBQVc7eUJBQ2xCO3dCQUNEOzRCQUNFLEtBQUssRUFBRSxVQUFVOzRCQUNqQixJQUFJLEVBQUUsV0FBVzt5QkFDbEI7d0JBQ0Q7NEJBQ0UsS0FBSyxFQUFFLFVBQVU7NEJBQ2pCLElBQUksRUFBRSxXQUFXO3lCQUNsQjt3QkFDRDs0QkFDRSxLQUFLLEVBQUUsVUFBVTs0QkFDakIsSUFBSSxFQUFFLFdBQVc7eUJBQ2xCO3dCQUNEOzRCQUNFLEtBQUssRUFBRSxVQUFVOzRCQUNqQixJQUFJLEVBQUUsV0FBVzt5QkFDbEI7d0JBQ0Q7NEJBQ0UsS0FBSyxFQUFFLFVBQVU7NEJBQ2pCLElBQUksRUFBRSxXQUFXO3lCQUNsQjtxQkFDRjtpQkFDRjtnQkFDRDtvQkFDRSxLQUFLLEVBQUUsWUFBWTtvQkFDbkIsSUFBSSxFQUFFLE9BQU87b0JBQ2IsS0FBSyxFQUFFO3dCQUNMOzRCQUNFLEtBQUssRUFBRSxVQUFVOzRCQUNqQixJQUFJLEVBQUUsV0FBVzt5QkFDbEI7d0JBQ0Q7NEJBQ0UsS0FBSyxFQUFFLFVBQVU7NEJBQ2pCLElBQUksRUFBRSxXQUFXO3lCQUNsQjtxQkFDRjtpQkFDRjtnQkFDRDtvQkFDRSxLQUFLLEVBQUUsU0FBUztvQkFDaEIsSUFBSSxFQUFFLFNBQVM7b0JBQ2YsSUFBSSxFQUFFLGFBQWE7aUJBQ3BCO2dCQUNEO29CQUNFLEtBQUssRUFBRSxRQUFRO29CQUNmLElBQUksRUFBRSxTQUFTO29CQUNmLElBQUksRUFBRSxXQUFXO29CQUNqQixNQUFNLEVBQUUsSUFBSTtpQkFDYjthQUNGLENBQUE7U0FDRjtJQUNILENBQUM7Ozs7O0lBR0QsWUFBWSxDQUFDLE1BQU07UUFDakIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN0QixDQUFDOzs7OztJQUVELFNBQVMsQ0FBQyxNQUFNO1FBQ2QsSUFBSSxJQUFJLENBQUMsa0JBQWtCLEVBQUU7WUFDM0IsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEtBQUssQ0FBQztTQUNqQztJQUNILENBQUM7OztZQXBHRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLHNOQUF5Qzs7YUFFMUM7Ozs7OzBCQUlFLE1BQU07aUNBQ04sV0FBVyxTQUFDLGdCQUFnQixjQUM1QixLQUFLO3VCQUNMLEtBQUs7Ozs7SUFITix3Q0FBMkM7O0lBQzNDLCtDQUM0Qjs7SUFDNUIscUNBQXFDOztJQUNyQyxtQ0FTRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9uSW5pdCwgQ29tcG9uZW50LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIEhvc3RCaW5kaW5nIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbmZpZ3VyYXRpb24sIE11bHRpbGV2ZWxOb2RlcyB9IGZyb20gJ25nLW1hdGVyaWFsLW11bHRpbGV2ZWwtbWVudSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1zaWRlLW1lbnUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zaWRlLW1lbnUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3NpZGUtbWVudS5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaWRlTWVudUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG5cclxuICBAT3V0cHV0KCkgaXRlbUNsaWNrZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5leHBhbmRlZCcpXHJcbiAgQElucHV0KCkgaXNTaWRlTWVudUV4cGFuZGVkO1xyXG4gIEBJbnB1dCgpIGFwcGl0ZW1zOiBNdWx0aWxldmVsTm9kZXNbXTtcclxuICBjb25maWc6IENvbmZpZ3VyYXRpb24gPSB7XHJcbiAgICBwYWRkaW5nQXRTdGFydDogdHJ1ZSxcclxuICAgIGNsYXNzbmFtZTogJ3NpZGUtbWVudScsXHJcbiAgICBsaXN0QmFja2dyb3VuZENvbG9yOiAncmdiKDI1NSwgMjU1LCAyNTUpJyxcclxuICAgIGZvbnRDb2xvcjogJ3JnYigxMTcsIDExNywgMTE3KScsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2IoMjU1LCAyNTUsIDI1NSknLFxyXG4gICAgc2VsZWN0ZWRMaXN0Rm9udENvbG9yOiAncmdiKDM5LCAxNDksIDIyMyknLFxyXG4gICAgY29sbGFwc2VPblNlbGVjdDogdHJ1ZSxcclxuICAgIGludGVyZmFjZVdpdGhSb3V0ZTogdHJ1ZVxyXG4gIH07XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICB9XHJcblxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIGlmICghdGhpcy5hcHBpdGVtcykge1xyXG4gICAgICB0aGlzLmFwcGl0ZW1zID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGxhYmVsOiAnTWFsaGFyaWEnLFxyXG4gICAgICAgICAgaWNvbjogJ2FkZCcsXHJcbiAgICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgbGFiZWw6ICdJdGVtIDEuMScsXHJcbiAgICAgICAgICAgICAgbGluazogJy9pdGVtLTEtMScsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBsYWJlbDogJ0l0ZW0gMS4yJyxcclxuICAgICAgICAgICAgICBsaW5rOiAnL2l0ZW0tMS0yJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGxhYmVsOiAnSXRlbSAxLjEnLFxyXG4gICAgICAgICAgICAgIGxpbms6ICcvaXRlbS0xLTEnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgbGFiZWw6ICdJdGVtIDEuMicsXHJcbiAgICAgICAgICAgICAgbGluazogJy9pdGVtLTEtMicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBsYWJlbDogJ0l0ZW0gMS4xJyxcclxuICAgICAgICAgICAgICBsaW5rOiAnL2l0ZW0tMS0xJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGxhYmVsOiAnSXRlbSAxLjInLFxyXG4gICAgICAgICAgICAgIGxpbms6ICcvaXRlbS0xLTInLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbGFiZWw6ICdUaW50dXJhcmlhJyxcclxuICAgICAgICAgIGljb246ICdhbGFybScsXHJcbiAgICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgbGFiZWw6ICdJdGVtIDIuMScsXHJcbiAgICAgICAgICAgICAgbGluazogJy9pdGVtLTItMScsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBsYWJlbDogJ0l0ZW0gMi4yJyxcclxuICAgICAgICAgICAgICBsaW5rOiAnL2l0ZW0tMi0yJyxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbGFiZWw6ICdDb3N0dXJhJyxcclxuICAgICAgICAgIGxpbms6ICcvaXRlbS0zJyxcclxuICAgICAgICAgIGljb246ICdvZmZsaW5lX3BpbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGxhYmVsOiAnSXRlbSA0JyxcclxuICAgICAgICAgIGxpbms6ICcvaXRlbS00JyxcclxuICAgICAgICAgIGljb246ICdzdGFyX3JhdGUnLFxyXG4gICAgICAgICAgaGlkZGVuOiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICBdXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgc2VsZWN0ZWRJdGVtKCRldmVudCkge1xyXG4gICAgdGhpcy5pdGVtQ2xpY2tlZC5lbWl0KCRldmVudCk7XHJcbiAgICBjb25zb2xlLmxvZygkZXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgY2xvc2VNZW51KCRldmVudCkge1xyXG4gICAgaWYgKHRoaXMuaXNTaWRlTWVudUV4cGFuZGVkKSB7XHJcbiAgICAgIHRoaXMuaXNTaWRlTWVudUV4cGFuZGVkID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==