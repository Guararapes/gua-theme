import { __spread } from 'tslib';
import { distinctUntilChanged, filter, map } from 'rxjs/operators';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, NavigationEnd, Router, RouterModule } from '@angular/router';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatAutocompleteModule, MatBadgeModule, MatBottomSheetModule, MatButtonModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule, MatDialogModule, MatDividerModule, MatExpansionModule, MatGridListModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatNativeDateModule, MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule, MatRippleModule, MatSelectModule, MatSidenavModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule, MatStepperModule, MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule, MatTreeModule } from '@angular/material';
import { NgMaterialMultilevelMenuModule } from 'ng-material-multilevel-menu';
import { FormsModule, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Injectable, NgModule, Component, Input, Output, EventEmitter, HostBinding, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var GuaThemeService = /** @class */ (function () {
    function GuaThemeService() {
    }
    GuaThemeService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    GuaThemeService.ctorParameters = function () { return []; };
    /** @nocollapse */ GuaThemeService.ngInjectableDef = defineInjectable({ factory: function GuaThemeService_Factory() { return new GuaThemeService(); }, token: GuaThemeService, providedIn: "root" });
    return GuaThemeService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var GuaThemeComponent = /** @class */ (function () {
    function GuaThemeComponent() {
    }
    /**
     * @return {?}
     */
    GuaThemeComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    GuaThemeComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-gua-theme',
                    template: "\n    <p>\n      gua-theme works!\n    </p>\n  "
                }] }
    ];
    /** @nocollapse */
    GuaThemeComponent.ctorParameters = function () { return []; };
    return GuaThemeComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BreadcrumbComponent = /** @class */ (function () {
    function BreadcrumbComponent(activatedRoute, router) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.breadcrumbs$ = this.router.events.pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return event instanceof NavigationEnd; })), distinctUntilChanged(), map((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this.buildBreadCrumb(_this.activatedRoute.root); })));
    }
    /**
     * @return {?}
     */
    BreadcrumbComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} route
     * @param {?=} url
     * @param {?=} breadcrumbs
     * @return {?}
     */
    BreadcrumbComponent.prototype.buildBreadCrumb = /**
     * @param {?} route
     * @param {?=} url
     * @param {?=} breadcrumbs
     * @return {?}
     */
    function (route, url, breadcrumbs) {
        if (url === void 0) { url = ''; }
        if (breadcrumbs === void 0) { breadcrumbs = []; }
        /** @type {?} */
        var label = route.routeConfig ? route.routeConfig.data['breadcrumb'] : 'Inicio';
        /** @type {?} */
        var path = route.routeConfig ? route.routeConfig.path : '';
        /** @type {?} */
        var nextUrl = "" + url + path + "/";
        /** @type {?} */
        var breadcrumb = {
            label: label,
            url: nextUrl,
        };
        /** @type {?} */
        var newBreadcrumbs = __spread(breadcrumbs, [breadcrumb]);
        if (route.firstChild) {
            return this.buildBreadCrumb(route.firstChild, nextUrl, newBreadcrumbs);
        }
        return newBreadcrumbs;
    };
    BreadcrumbComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-breadcrumb',
                    template: "<ol class=\"breadcrumb\">\r\n  <li *ngFor=\"let breadcrumb of breadcrumbs$ | async; last as isLast;\"\r\n      class=\"breadcrumb-item\"\r\n      [ngClass]=\"{'active': isLast}\" aria-current=\"page\">\r\n    <a *ngIf=\"!isLast; else lastRoute\"\r\n        [routerLink]=\"[breadcrumb.url]\"\r\n        routerLinkActive=\"active\">\r\n      {{ breadcrumb.label }}\r\n    </a>\r\n    <ng-template #lastRoute>{{ breadcrumb.label }}</ng-template>\r\n  </li>\r\n</ol>",
                    styles: [".breadcrumb li{display:inline}.breadcrumb li+li:before{content:'\\E5CC';font-family:'Material Icons';color:rgba(25,25,25,.32);padding-left:4px;padding-right:4px}.breadcrumb{font-size:14px;font-style:normal;font-weight:600}.breadcrumb a{color:rgba(25,25,25,.32);text-decoration:none}"]
                }] }
    ];
    /** @nocollapse */
    BreadcrumbComponent.ctorParameters = function () { return [
        { type: ActivatedRoute },
        { type: Router }
    ]; };
    return BreadcrumbComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule.decorators = [
        { type: NgModule, args: [{
                    exports: [
                        CdkTableModule,
                        CdkTreeModule,
                        DragDropModule,
                        MatAutocompleteModule,
                        MatBadgeModule,
                        MatBottomSheetModule,
                        MatButtonModule,
                        MatButtonToggleModule,
                        MatCardModule,
                        MatCheckboxModule,
                        MatChipsModule,
                        MatStepperModule,
                        MatDatepickerModule,
                        MatDialogModule,
                        MatDividerModule,
                        MatExpansionModule,
                        MatGridListModule,
                        MatIconModule,
                        MatInputModule,
                        MatListModule,
                        MatMenuModule,
                        MatNativeDateModule,
                        MatPaginatorModule,
                        MatProgressBarModule,
                        MatProgressSpinnerModule,
                        MatRadioModule,
                        MatRippleModule,
                        MatSelectModule,
                        MatSidenavModule,
                        MatSliderModule,
                        MatSlideToggleModule,
                        MatSnackBarModule,
                        MatSortModule,
                        MatTableModule,
                        MatTabsModule,
                        MatToolbarModule,
                        MatTooltipModule,
                        MatTreeModule,
                        ScrollingModule,
                        FlexLayoutModule
                    ]
                },] }
    ];
    return MaterialModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ɵ0 = {};
/** @type {?} */
var fakeActivatedRoute = (/** @type {?} */ ({
    snapshot: { data: ɵ0 }
}));
var ɵ1 = fakeActivatedRoute, ɵ2 = fakeActivatedRoute;
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule.decorators = [
        { type: NgModule, args: [{
                    exports: [
                        CommonModule,
                        RouterModule,
                        MaterialModule,
                        FormsModule,
                        ReactiveFormsModule,
                        NgMaterialMultilevelMenuModule,
                        BrowserAnimationsModule
                    ],
                    providers: [
                        { provide: ActivatedRoute, useValue: ɵ1 },
                        { provide: Router, useValue: ɵ2 },
                    ],
                },] }
    ];
    return SharedModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BreadcrumbModule = /** @class */ (function () {
    function BreadcrumbModule() {
    }
    BreadcrumbModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [BreadcrumbComponent],
                    imports: [
                        SharedModule
                    ],
                    exports: [BreadcrumbComponent]
                },] }
    ];
    return BreadcrumbModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var InputSearchComponent = /** @class */ (function () {
    function InputSearchComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.isSearchExpanded = false;
        this.getValue = new EventEmitter();
    }
    /**
     * @return {?}
     */
    InputSearchComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.searchForm = this.formBuilder.group({
            keyword: [{ value: '', disabled: true }, Validators.required]
        });
    };
    /**
     * @return {?}
     */
    InputSearchComponent.prototype.onClickSearch = /**
     * @return {?}
     */
    function () {
        if (!this.isSearchExpanded) {
            this.expandSearch();
        }
        else {
            this.onSearchSubmit();
        }
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    InputSearchComponent.prototype.onBlurSearch = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        if (!this.searchForm.controls['keyword'].value) {
            this.retractSearch();
        }
    };
    /**
     * @return {?}
     */
    InputSearchComponent.prototype.expandSearch = /**
     * @return {?}
     */
    function () {
        this.searchForm.controls['keyword'].enable();
        this.isSearchExpanded = true;
    };
    /**
     * @return {?}
     */
    InputSearchComponent.prototype.retractSearch = /**
     * @return {?}
     */
    function () {
        this.searchForm.controls['keyword'].disable();
        this.isSearchExpanded = false;
    };
    /**
     * @return {?}
     */
    InputSearchComponent.prototype.onSearchSubmit = /**
     * @return {?}
     */
    function () {
        if (this.searchForm.valid) {
            this.getValue.emit(this.searchForm.value);
        }
    };
    InputSearchComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-input-search',
                    template: "<form [formGroup]=\"searchForm\" (ngSubmit)=\"onSearchSubmit()\">\r\n    <mat-form-field appearance=\"standard\" [style.width]=\"width\"\r\n      [style.height]=\"height\" fxLayoutAlign=\"center center\">\r\n      <div [class]=\"'flex flex-row input-search' + (isSearchExpanded ? ' input-search-open':' ')\">\r\n        <div class=\"flex-item\" style=\"padding-left: 5px;\">\r\n          <input matInput (blur)=\"onBlurSearch($event)\" formControlName=\"keyword\" placeholder=\"Pesquisar...\" />\r\n        </div>\r\n        <div #searchIcon class=\"flex-item\" (click)=\"onClickSearch()\">\r\n          <mat-icon class=\"font-size-24\">search</mat-icon>\r\n        </div>\r\n      </div>\r\n    </mat-form-field>\r\n  </form>\r\n  ",
                    styles: [":host{position:absolute;display:block;-webkit-transform:translateX(-100%);transform:translateX(-100%);transition:transform .5s;transition:transform .5s,-webkit-transform .5s;width:100%;z-index:99}:host .menu-wrapper{box-shadow:0 2px 5px rgba(0,0,0,.2);color:transparent;font-size:14px;width:277px}:host .menu-wrapper ::ng-deep .mat-divider{display:none}:host .menu-wrapper ::ng-deep .mat-list-item-content:hover{background-color:rgba(0,0,0,.08)}@media (min-width:769px){:host .menu-wrapper ::ng-deep .level-1{position:absolute;top:0;left:262px;width:176px;min-height:100%;box-shadow:2px 2px 5px rgba(0,0,0,.2)}:host .menu-wrapper ::ng-deep .amml-icon-arrow-container .mat-icon{-webkit-transform:rotate(-90deg)!important;transform:rotate(-90deg)!important}}@media (max-width:768px){:host .menu-wrapper{width:100%}:host .menu-wrapper ::ng-deep .mat-divider{display:block}}:host.expanded{-webkit-transform:translateX(0);transform:translateX(0)}"]
                }] }
    ];
    /** @nocollapse */
    InputSearchComponent.ctorParameters = function () { return [
        { type: FormBuilder }
    ]; };
    InputSearchComponent.propDecorators = {
        height: [{ type: Input }],
        width: [{ type: Input }],
        getValue: [{ type: Output }]
    };
    return InputSearchComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var InputSearchModule = /** @class */ (function () {
    function InputSearchModule() {
    }
    InputSearchModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [InputSearchComponent],
                    imports: [
                        SharedModule
                    ],
                    exports: [InputSearchComponent]
                },] }
    ];
    return InputSearchModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
                    styles: [":host{position:absolute;display:block;-webkit-transform:translateX(-100%);transform:translateX(-100%);transition:transform .5s;transition:transform .5s,-webkit-transform .5s;width:100%;z-index:99}:host .menu-wrapper{box-shadow:0 2px 5px rgba(0,0,0,.2);color:transparent;font-size:14px;width:277px}:host .menu-wrapper ::ng-deep .mat-divider{display:none}:host .menu-wrapper ::ng-deep .mat-list-item-content:hover{background-color:rgba(0,0,0,.08)}@media (min-width:769px){:host .menu-wrapper ::ng-deep .level-1{position:absolute;top:0;left:262px;width:176px;min-height:100%;box-shadow:2px 2px 5px rgba(0,0,0,.2)}:host .menu-wrapper ::ng-deep .amml-icon-arrow-container .mat-icon{-webkit-transform:rotate(-90deg)!important;transform:rotate(-90deg)!important}}@media (max-width:768px){:host .menu-wrapper{width:100%}:host .menu-wrapper ::ng-deep .mat-divider{display:block}}:host.expanded{-webkit-transform:translateX(0);transform:translateX(0)}"]
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SideMenuModule = /** @class */ (function () {
    function SideMenuModule() {
    }
    SideMenuModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [SideMenuComponent],
                    imports: [
                        SharedModule,
                    ],
                    exports: [SideMenuComponent]
                },] }
    ];
    return SideMenuModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    /**
     * @return {?}
     */
    NavbarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    NavbarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-navbar',
                    template: "<nav class=\"navbar\" [style.color]=\"color\" [style.background-color]=\"backgroundColor\" [style.height]=\"height\">\r\n  <div class=\"navbar-container\">\r\n    <div class=\"flex flex-row\">\r\n      <ng-content></ng-content>\r\n    </div>\r\n  </div>\r\n</nav>\r\n",
                    styles: ["nav{color:#fff;width:100%}.navbar{background-color:#363636;height:66px;align-items:center}.navbar-container{position:relative;height:100%}.navbar-container div.flex{height:100%}"]
                }] }
    ];
    /** @nocollapse */
    NavbarComponent.ctorParameters = function () { return []; };
    NavbarComponent.propDecorators = {
        color: [{ type: Input }],
        backgroundColor: [{ type: Input }],
        height: [{ type: Input }]
    };
    return NavbarComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NavBarItemComponent = /** @class */ (function () {
    function NavBarItemComponent() {
    }
    /**
     * @return {?}
     */
    NavBarItemComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    NavBarItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-navbar-item',
                    template: "<div class=\"navbar-tool navbar-icon flex-item\" [style.line-height]=\"lineHeight\">\r\n    <ng-content></ng-content>\r\n</div>",
                    styles: [".navbar-tool{padding-left:12px;padding-right:12px;line-height:66px;-webkit-transform:translateY(-2px);transform:translateY(-2px);text-align:center}.navbar-tool .navbar-title{font-family:'Avenir LT Std 85 Heavy';text-transform:uppercase;font-size:34px;margin:0;-webkit-transform:translateY(2px);transform:translateY(2px)}.navbar-menu{font-style:normal;font-weight:400;font-size:14px;width:66px;padding:0}.navbar-icon mat-icon{vertical-align:middle}.navbar-icon-selected{background-color:#232323}.navbar-icon-avatar{padding-left:12px}.navbar-avatar{height:38px;width:38px;line-height:38px;background-color:#2795df;border-radius:50%;display:inline-block;text-align:center;vertical-align:middle}::ng-deep .mat-form-field-appearance-standard .mat-form-field-flex{padding-top:0}"]
                }] }
    ];
    /** @nocollapse */
    NavBarItemComponent.ctorParameters = function () { return []; };
    NavBarItemComponent.propDecorators = {
        color: [{ type: Input }],
        backgroundColor: [{ type: Input }],
        lineHeight: [{ type: Input }]
    };
    return NavBarItemComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NavBarItemModule = /** @class */ (function () {
    function NavBarItemModule() {
    }
    NavBarItemModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        SharedModule
                    ],
                    declarations: [
                        NavBarItemComponent,
                    ],
                    exports: [NavBarItemComponent]
                },] }
    ];
    return NavBarItemModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NavbarModule = /** @class */ (function () {
    function NavbarModule() {
    }
    NavbarModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        SharedModule,
                        NavBarItemModule,
                    ],
                    declarations: [
                        NavbarComponent,
                    ],
                    exports: [NavbarComponent, NavBarItemModule]
                },] }
    ];
    return NavbarModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ButtonComponent = /** @class */ (function () {
    function ButtonComponent() {
    }
    /**
     * @return {?}
     */
    ButtonComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    ButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-button',
                    template: "<button mat-button>\r\n  <mat-icon *ngIf=\"icon\">{{icon}}</mat-icon>\r\n  <label *ngIf=\"label\">{{label}}></label>\r\n</button>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    ButtonComponent.ctorParameters = function () { return []; };
    ButtonComponent.propDecorators = {
        label: [{ type: Input }],
        icon: [{ type: Input }]
    };
    return ButtonComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ButtonModule = /** @class */ (function () {
    function ButtonModule() {
    }
    ButtonModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [ButtonComponent],
                    imports: [
                        SharedModule
                    ],
                    exports: [ButtonComponent]
                },] }
    ];
    return ButtonModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PageTitleComponent = /** @class */ (function () {
    function PageTitleComponent() {
    }
    /**
     * @return {?}
     */
    PageTitleComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    PageTitleComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-page-title',
                    template: "<div><ng-content></ng-content></div>\r\n",
                    styles: ["div{font-size:32px;font-weight:600;font-style:normal}"]
                }] }
    ];
    /** @nocollapse */
    PageTitleComponent.ctorParameters = function () { return []; };
    return PageTitleComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PageTitleModule = /** @class */ (function () {
    function PageTitleModule() {
    }
    PageTitleModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [PageTitleComponent],
                    imports: [
                        SharedModule,
                        SideMenuModule,
                        InputSearchModule
                    ],
                    exports: [PageTitleComponent]
                },] }
    ];
    return PageTitleModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ToolbarComponent = /** @class */ (function () {
    function ToolbarComponent() {
        this.isSearchExpanded = false;
        this.isSideMenuExpanded = false;
    }
    /**
     * @return {?}
     */
    ToolbarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    ToolbarComponent.prototype.onClickMenu = /**
     * @return {?}
     */
    function () {
        this.isSideMenuExpanded = !this.isSideMenuExpanded;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ToolbarComponent.prototype.onCLick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        console.log(123);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ToolbarComponent.prototype.onClose = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        console.log(123);
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    ToolbarComponent.prototype.closeMenu = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.isSideMenuExpanded = false;
    };
    ToolbarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-toolbar',
                    template: "<app-navbar>\r\n  <div [class]=\"'navbar-tool navbar-icon flex-item navbar-menu ' + (isSideMenuExpanded ? ' navbar-icon-selected':'')\"\r\n    (click)=\"onClickMenu()\">\r\n    <mat-icon class=\"font-size-24\">menu</mat-icon>\r\n  </div>\r\n  <div class=\"navbar-tool flex-item\">\r\n    <p class=\"navbar-title\">PCP</p>\r\n  </div>\r\n  <span class=\"flex-item\"></span>\r\n  <div class=\"navbar-tool flex-item\">\r\n  </div>\r\n  <app-navbar-item>\r\n    <app-input-search></app-input-search>\r\n  </app-navbar-item>\r\n  <app-navbar-item>\r\n    <app-button icon=\"apps\" (click)=\"onCLick($event)\"></app-button>\r\n  </app-navbar-item>\r\n  <app-navbar-item>\r\n    <div class=\"navbar-avatar\">\r\n      T\r\n    </div>\r\n  </app-navbar-item>\r\n</app-navbar>\r\n<app-side-menu (itemClicked)=\"closeMenu($event)\" [(isSideMenuExpanded)]=\"isSideMenuExpanded\"></app-side-menu>\r\n",
                    styles: [".navbar-tool{padding-left:12px;padding-right:12px;line-height:66px;-webkit-transform:translateY(-2px);transform:translateY(-2px);text-align:center}.navbar-tool .navbar-title{font-family:'Avenir LT Std 85 Heavy';text-transform:uppercase;font-size:34px;margin:0;-webkit-transform:translateY(2px);transform:translateY(2px)}.navbar-menu{font-style:normal;font-weight:400;font-size:14px;width:66px;padding:0}.navbar-icon mat-icon{vertical-align:middle}.navbar-icon-selected{background-color:#232323}.navbar-icon-avatar{padding-left:12px}.navbar-avatar{height:38px;width:38px;line-height:38px;background-color:#2795df;border-radius:50%;display:inline-block;text-align:center;vertical-align:middle}::ng-deep .mat-form-field-appearance-standard .mat-form-field-flex{padding-top:0!important}"]
                }] }
    ];
    /** @nocollapse */
    ToolbarComponent.ctorParameters = function () { return []; };
    return ToolbarComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ToolbarModule = /** @class */ (function () {
    function ToolbarModule() {
    }
    ToolbarModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [ToolbarComponent],
                    imports: [
                        SharedModule,
                        NavbarModule,
                        InputSearchModule,
                        SideMenuModule,
                        ButtonModule
                    ],
                    exports: [
                        ToolbarComponent
                    ]
                },] }
    ];
    return ToolbarModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LabelModule = /** @class */ (function () {
    function LabelModule() {
    }
    LabelModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        SharedModule,
                    ],
                    declarations: [
                        LabelComponent,
                    ],
                    exports: [LabelComponent]
                },] }
    ];
    return LabelModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CardListComponent = /** @class */ (function () {
    function CardListComponent() {
    }
    /**
     * @return {?}
     */
    CardListComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    CardListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-card-list',
                    template: "<div *ngIf=\"list && list.length\" id=\"card-list\" fxFlex fxLayout=\"column\" [style.background-color]=\"backgroundColor\">\r\n  <div *ngIf=\"title\">\r\n     {{title}}\r\n  </div>\r\n  <div style=\"padding: 10px\" fxLayout=\"row wrap\">\r\n    <mat-card class=\"lista\" *ngFor=\"let html of list\" [innerHTML]=\"html\" [ngStyle.lt-md]=\"{'margin-bottom': '20px'}\" [style.width]=\"width\" [style.width]=\"height\">  \r\n    </mat-card>\r\n  </div>\r\n</div>",
                    styles: ["#card-list{width:100%;padding:10px;background-color:#f1f1f1;border-radius:4px}#card-list .lista{margin-left:20px;background-color:pink;width:100px;height:150px}"]
                }] }
    ];
    /** @nocollapse */
    CardListComponent.ctorParameters = function () { return []; };
    CardListComponent.propDecorators = {
        title: [{ type: Input }],
        list: [{ type: Input }],
        backgroundColor: [{ type: Input }],
        width: [{ type: Input }],
        height: [{ type: Input }]
    };
    return CardListComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CardListModule = /** @class */ (function () {
    function CardListModule() {
    }
    CardListModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        SharedModule,
                    ],
                    declarations: [
                        CardListComponent,
                    ],
                    exports: [CardListComponent]
                },] }
    ];
    return CardListModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var GuaThemeModule = /** @class */ (function () {
    function GuaThemeModule() {
    }
    GuaThemeModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [GuaThemeComponent],
                    exports: [
                        GuaThemeComponent,
                        BreadcrumbModule,
                        InputSearchModule,
                        SideMenuModule,
                        NavbarModule,
                        ButtonModule,
                        PageTitleModule,
                        ToolbarModule,
                        LabelModule,
                        CardListModule
                    ]
                },] }
    ];
    return GuaThemeModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { GuaThemeService, GuaThemeComponent, GuaThemeModule, BreadcrumbComponent as ɵb, BreadcrumbModule as ɵa, ButtonComponent as ɵn, ButtonModule as ɵm, CardListComponent as ɵv, CardListModule as ɵu, InputSearchComponent as ɵf, InputSearchModule as ɵe, LabelComponent as ɵt, LabelModule as ɵs, MaterialModule as ɵd, NavBarItemComponent as ɵk, NavBarItemModule as ɵj, NavbarComponent as ɵl, NavbarModule as ɵi, PageTitleComponent as ɵp, PageTitleModule as ɵo, SharedModule as ɵc, SideMenuComponent as ɵh, SideMenuModule as ɵg, ToolbarComponent as ɵr, ToolbarModule as ɵq };

//# sourceMappingURL=gua-theme-lib.js.map