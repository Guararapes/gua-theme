(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('rxjs/operators'), require('@angular/platform-browser/animations'), require('@angular/common'), require('@angular/router'), require('@angular/cdk/drag-drop'), require('@angular/cdk/scrolling'), require('@angular/cdk/table'), require('@angular/cdk/tree'), require('@angular/flex-layout'), require('@angular/material'), require('ng-material-multilevel-menu'), require('@angular/forms'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('gua-theme-lib', ['exports', 'rxjs/operators', '@angular/platform-browser/animations', '@angular/common', '@angular/router', '@angular/cdk/drag-drop', '@angular/cdk/scrolling', '@angular/cdk/table', '@angular/cdk/tree', '@angular/flex-layout', '@angular/material', 'ng-material-multilevel-menu', '@angular/forms', '@angular/core'], factory) :
    (factory((global['gua-theme-lib'] = {}),global.rxjs.operators,global.ng.platformBrowser.animations,global.ng.common,global.ng.router,global.ng.cdk['drag-drop'],global.ng.cdk.scrolling,global.ng.cdk.table,global.ng.cdk.tree,global.ng['flex-layout'],global.ng.material,global.ngMaterialMultilevelMenu,global.ng.forms,global.ng.core));
}(this, (function (exports,operators,animations,common,router,dragDrop,scrolling,table,tree,flexLayout,material,ngMaterialMultilevelMenu,forms,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GuaThemeService = /** @class */ (function () {
        function GuaThemeService() {
        }
        GuaThemeService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        GuaThemeService.ctorParameters = function () { return []; };
        /** @nocollapse */ GuaThemeService.ngInjectableDef = i0.defineInjectable({ factory: function GuaThemeService_Factory() { return new GuaThemeService(); }, token: GuaThemeService, providedIn: "root" });
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
            { type: i0.Component, args: [{
                        selector: 'lib-gua-theme',
                        template: "\n    <p>\n      gua-theme works!\n    </p>\n  "
                    }] }
        ];
        /** @nocollapse */
        GuaThemeComponent.ctorParameters = function () { return []; };
        return GuaThemeComponent;
    }());

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BreadcrumbComponent = /** @class */ (function () {
        function BreadcrumbComponent(activatedRoute, router$$1) {
            var _this = this;
            this.activatedRoute = activatedRoute;
            this.router = router$$1;
            this.breadcrumbs$ = this.router.events.pipe(operators.filter(( /**
             * @param {?} event
             * @return {?}
             */function (event) { return event instanceof router.NavigationEnd; })), operators.distinctUntilChanged(), operators.map(( /**
             * @param {?} event
             * @return {?}
             */function (event) { return _this.buildBreadCrumb(_this.activatedRoute.root); })));
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
                if (url === void 0) {
                    url = '';
                }
                if (breadcrumbs === void 0) {
                    breadcrumbs = [];
                }
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
            { type: i0.Component, args: [{
                        selector: 'app-breadcrumb',
                        template: "<ol class=\"breadcrumb\">\r\n  <li *ngFor=\"let breadcrumb of breadcrumbs$ | async; last as isLast;\"\r\n      class=\"breadcrumb-item\"\r\n      [ngClass]=\"{'active': isLast}\" aria-current=\"page\">\r\n    <a *ngIf=\"!isLast; else lastRoute\"\r\n        [routerLink]=\"[breadcrumb.url]\"\r\n        routerLinkActive=\"active\">\r\n      {{ breadcrumb.label }}\r\n    </a>\r\n    <ng-template #lastRoute>{{ breadcrumb.label }}</ng-template>\r\n  </li>\r\n</ol>",
                        styles: [".breadcrumb li{display:inline}.breadcrumb li+li:before{content:'\\E5CC';font-family:'Material Icons';color:rgba(25,25,25,.32);padding-left:4px;padding-right:4px}.breadcrumb{font-size:14px;font-style:normal;font-weight:600}.breadcrumb a{color:rgba(25,25,25,.32);text-decoration:none}"]
                    }] }
        ];
        /** @nocollapse */
        BreadcrumbComponent.ctorParameters = function () {
            return [
                { type: router.ActivatedRoute },
                { type: router.Router }
            ];
        };
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
            { type: i0.NgModule, args: [{
                        exports: [
                            table.CdkTableModule,
                            tree.CdkTreeModule,
                            dragDrop.DragDropModule,
                            material.MatAutocompleteModule,
                            material.MatBadgeModule,
                            material.MatBottomSheetModule,
                            material.MatButtonModule,
                            material.MatButtonToggleModule,
                            material.MatCardModule,
                            material.MatCheckboxModule,
                            material.MatChipsModule,
                            material.MatStepperModule,
                            material.MatDatepickerModule,
                            material.MatDialogModule,
                            material.MatDividerModule,
                            material.MatExpansionModule,
                            material.MatGridListModule,
                            material.MatIconModule,
                            material.MatInputModule,
                            material.MatListModule,
                            material.MatMenuModule,
                            material.MatNativeDateModule,
                            material.MatPaginatorModule,
                            material.MatProgressBarModule,
                            material.MatProgressSpinnerModule,
                            material.MatRadioModule,
                            material.MatRippleModule,
                            material.MatSelectModule,
                            material.MatSidenavModule,
                            material.MatSliderModule,
                            material.MatSlideToggleModule,
                            material.MatSnackBarModule,
                            material.MatSortModule,
                            material.MatTableModule,
                            material.MatTabsModule,
                            material.MatToolbarModule,
                            material.MatTooltipModule,
                            material.MatTreeModule,
                            scrolling.ScrollingModule,
                            flexLayout.FlexLayoutModule
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
    var fakeActivatedRoute = ( /** @type {?} */({
        snapshot: { data: ɵ0 }
    }));
    var ɵ1 = fakeActivatedRoute, ɵ2 = fakeActivatedRoute;
    var SharedModule = /** @class */ (function () {
        function SharedModule() {
        }
        SharedModule.decorators = [
            { type: i0.NgModule, args: [{
                        exports: [
                            common.CommonModule,
                            router.RouterModule,
                            MaterialModule,
                            forms.FormsModule,
                            forms.ReactiveFormsModule,
                            ngMaterialMultilevelMenu.NgMaterialMultilevelMenuModule,
                            animations.BrowserAnimationsModule
                        ],
                        providers: [
                            { provide: router.ActivatedRoute, useValue: ɵ1 },
                            { provide: router.Router, useValue: ɵ2 },
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
            { type: i0.NgModule, args: [{
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
            this.getValue = new i0.EventEmitter();
        }
        /**
         * @return {?}
         */
        InputSearchComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.searchForm = this.formBuilder.group({
                    keyword: [{ value: '', disabled: true }, forms.Validators.required]
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
            { type: i0.Component, args: [{
                        selector: 'app-input-search',
                        template: "<form [formGroup]=\"searchForm\" (ngSubmit)=\"onSearchSubmit()\">\r\n    <mat-form-field appearance=\"standard\" [style.width]=\"width\"\r\n      [style.height]=\"height\" fxLayoutAlign=\"center center\">\r\n      <div [class]=\"'flex flex-row input-search' + (isSearchExpanded ? ' input-search-open':' ')\">\r\n        <div class=\"flex-item\" style=\"padding-left: 5px;\">\r\n          <input matInput (blur)=\"onBlurSearch($event)\" formControlName=\"keyword\" placeholder=\"Pesquisar...\" />\r\n        </div>\r\n        <div #searchIcon class=\"flex-item\" (click)=\"onClickSearch()\">\r\n          <mat-icon class=\"font-size-24\">search</mat-icon>\r\n        </div>\r\n      </div>\r\n    </mat-form-field>\r\n  </form>\r\n  ",
                        styles: ["input{padding-top:5px}.input-search{background-color:transparent;height:25px;width:25px;float:right;padding:2px 10px 3px;border-radius:1.6rem;transition:width .5s,padding .5s,color .5s,background-color .5s;border:.5px solid transparent;cursor:pointer}.input-search-open{background-color:#fff;color:#000;width:100%;border:.5px solid #000}::ng-deep .mat-form-field-appearance-standard .mat-form-field-underline{height:0!important}::ng-deep .mat-form-field-appearance-standard .mat-form-field-ripple{height:0!important}"]
                    }] }
        ];
        /** @nocollapse */
        InputSearchComponent.ctorParameters = function () {
            return [
                { type: forms.FormBuilder }
            ];
        };
        InputSearchComponent.propDecorators = {
            height: [{ type: i0.Input }],
            width: [{ type: i0.Input }],
            getValue: [{ type: i0.Output }]
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
            { type: i0.NgModule, args: [{
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
            this.itemClicked = new i0.EventEmitter();
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
            { type: i0.Component, args: [{
                        selector: 'app-side-menu',
                        template: "<div class=\"menu-wrapper\" >\r\n  <ng-material-multilevel-menu [configuration]='config' [items]='appitems' (selectedItem)=\"selectedItem($event)\">\r\n  </ng-material-multilevel-menu>\r\n</div>\r\n\r\n",
                        styles: [":host{position:absolute;display:block;-webkit-transform:translateX(-100%);transform:translateX(-100%);transition:transform .5s;transition:transform .5s,-webkit-transform .5s;width:100%;z-index:99}:host .menu-wrapper{box-shadow:0 2px 5px rgba(0,0,0,.2);color:transparent;font-size:14px;width:277px}:host .menu-wrapper ::ng-deep .mat-divider{display:none}:host .menu-wrapper ::ng-deep .mat-list-item-content:hover{background-color:rgba(0,0,0,.08)}@media (min-width:769px){:host .menu-wrapper ::ng-deep .level-1{position:absolute;top:0;left:262px;width:176px;min-height:100%;box-shadow:2px 2px 5px rgba(0,0,0,.2)}:host .menu-wrapper ::ng-deep .amml-icon-arrow-container .mat-icon{-webkit-transform:rotate(-90deg)!important;transform:rotate(-90deg)!important}}@media (max-width:768px){:host .menu-wrapper{width:100%}:host .menu-wrapper ::ng-deep .mat-divider{display:block}}:host.expanded{-webkit-transform:translateX(0);transform:translateX(0)}"]
                    }] }
        ];
        /** @nocollapse */
        SideMenuComponent.ctorParameters = function () { return []; };
        SideMenuComponent.propDecorators = {
            itemClicked: [{ type: i0.Output }],
            isSideMenuExpanded: [{ type: i0.HostBinding, args: ['class.expanded',] }, { type: i0.Input }]
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
            { type: i0.NgModule, args: [{
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
            { type: i0.Component, args: [{
                        selector: 'app-navbar',
                        template: "<nav class=\"navbar\" [style.color]=\"color\" [style.background-color]=\"backgroundColor\" [style.height]=\"height\">\r\n  <div class=\"navbar-container\">\r\n    <div class=\"flex flex-row\">\r\n      <ng-content></ng-content>\r\n    </div>\r\n  </div>\r\n</nav>\r\n",
                        styles: ["nav{color:#fff;width:100%}.navbar{background-color:#363636;height:66px;align-items:center}.navbar-container{position:relative;height:100%}.navbar-container div.flex{height:100%}"]
                    }] }
        ];
        /** @nocollapse */
        NavbarComponent.ctorParameters = function () { return []; };
        NavbarComponent.propDecorators = {
            color: [{ type: i0.Input }],
            backgroundColor: [{ type: i0.Input }],
            height: [{ type: i0.Input }]
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
            { type: i0.Component, args: [{
                        selector: 'app-navbar-item',
                        template: "<div class=\"navbar-tool navbar-icon flex-item\" [style.line-height]=\"lineHeight\">\r\n    <ng-content></ng-content>\r\n</div>",
                        styles: [".navbar-tool{padding-left:12px;padding-right:12px;line-height:66px;-webkit-transform:translateY(-2px);transform:translateY(-2px);text-align:center}.navbar-tool .navbar-title{font-family:'Avenir LT Std 85 Heavy';text-transform:uppercase;font-size:34px;margin:0;-webkit-transform:translateY(2px);transform:translateY(2px)}.navbar-menu{font-style:normal;font-weight:400;font-size:14px;width:66px;padding:0}.navbar-icon mat-icon{vertical-align:middle}.navbar-icon-selected{background-color:#232323}.navbar-icon-avatar{padding-left:12px}.navbar-avatar{height:38px;width:38px;line-height:38px;background-color:#2795df;border-radius:50%;display:inline-block;text-align:center;vertical-align:middle}::ng-deep .mat-form-field-appearance-standard .mat-form-field-flex{padding-top:0}"]
                    }] }
        ];
        /** @nocollapse */
        NavBarItemComponent.ctorParameters = function () { return []; };
        NavBarItemComponent.propDecorators = {
            color: [{ type: i0.Input }],
            backgroundColor: [{ type: i0.Input }],
            lineHeight: [{ type: i0.Input }]
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
            { type: i0.NgModule, args: [{
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
            { type: i0.NgModule, args: [{
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
            { type: i0.Component, args: [{
                        selector: 'app-button',
                        template: "<button mat-button>\r\n  <mat-icon *ngIf=\"icon\">{{icon}}</mat-icon>\r\n  <label *ngIf=\"label\">{{label}}></label>\r\n</button>",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        ButtonComponent.ctorParameters = function () { return []; };
        ButtonComponent.propDecorators = {
            label: [{ type: i0.Input }],
            icon: [{ type: i0.Input }]
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
            { type: i0.NgModule, args: [{
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
            { type: i0.Component, args: [{
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
            { type: i0.NgModule, args: [{
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
            { type: i0.Component, args: [{
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
            { type: i0.NgModule, args: [{
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
            { type: i0.Component, args: [{
                        selector: 'app-label',
                        template: "<div id=\"label\" [style.height]=\"height\">\r\n    <div id=\"title\" [style.font-size]=\"titleFontSize\">\r\n        {{title}}\r\n    </div>\r\n    <div id=\"body\" [style.font-size]=\"fontSize\">\r\n        <ng-content></ng-content>\r\n    </div>\r\n</div>",
                        styles: ["#label{display:flex;flex-direction:column;justify-content:center;align-items:center}#label #title{font-size:10px;-ms-grid-row-align:center;align-self:center}#label #body{-ms-grid-row-align:center;align-self:center;font-size:20px;padding-left:10px;padding-right:10px}"]
                    }] }
        ];
        /** @nocollapse */
        LabelComponent.ctorParameters = function () { return []; };
        LabelComponent.propDecorators = {
            color: [{ type: i0.Input }],
            title: [{ type: i0.Input }],
            height: [{ type: i0.Input }],
            fontSize: [{ type: i0.Input }]
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
            { type: i0.NgModule, args: [{
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
            { type: i0.Component, args: [{
                        selector: 'app-card-list',
                        template: "<div *ngIf=\"list && list.length\" id=\"card-list\" fxFlex fxLayout=\"column\" [style.background-color]=\"backgroundColor\">\r\n  <div *ngIf=\"title\">\r\n     {{title}}\r\n  </div>\r\n  <div style=\"padding: 10px\" fxLayout=\"row wrap\">\r\n    <mat-card class=\"lista\" *ngFor=\"let html of list\" [innerHTML]=\"html\" [ngStyle.lt-md]=\"{'margin-bottom': '20px'}\" [style.width]=\"width\" [style.width]=\"height\">  \r\n    </mat-card>\r\n  </div>\r\n</div>",
                        styles: ["#card-list{width:100%;padding:10px;background-color:#f1f1f1;border-radius:4px}#card-list .lista{margin-left:20px;background-color:pink;width:100px;height:150px}"]
                    }] }
        ];
        /** @nocollapse */
        CardListComponent.ctorParameters = function () { return []; };
        CardListComponent.propDecorators = {
            title: [{ type: i0.Input }],
            list: [{ type: i0.Input }],
            backgroundColor: [{ type: i0.Input }],
            width: [{ type: i0.Input }],
            height: [{ type: i0.Input }]
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
            { type: i0.NgModule, args: [{
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
            { type: i0.NgModule, args: [{
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

    exports.GuaThemeService = GuaThemeService;
    exports.GuaThemeComponent = GuaThemeComponent;
    exports.GuaThemeModule = GuaThemeModule;
    exports.ɵb = BreadcrumbComponent;
    exports.ɵa = BreadcrumbModule;
    exports.ɵn = ButtonComponent;
    exports.ɵm = ButtonModule;
    exports.ɵv = CardListComponent;
    exports.ɵu = CardListModule;
    exports.ɵf = InputSearchComponent;
    exports.ɵe = InputSearchModule;
    exports.ɵt = LabelComponent;
    exports.ɵs = LabelModule;
    exports.ɵd = MaterialModule;
    exports.ɵk = NavBarItemComponent;
    exports.ɵj = NavBarItemModule;
    exports.ɵl = NavbarComponent;
    exports.ɵi = NavbarModule;
    exports.ɵp = PageTitleComponent;
    exports.ɵo = PageTitleModule;
    exports.ɵc = SharedModule;
    exports.ɵh = SideMenuComponent;
    exports.ɵg = SideMenuModule;
    exports.ɵr = ToolbarComponent;
    exports.ɵq = ToolbarModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=gua-theme-lib.umd.js.map