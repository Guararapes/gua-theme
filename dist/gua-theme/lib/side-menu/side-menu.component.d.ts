import { OnInit, EventEmitter } from '@angular/core';
import { Configuration, MultilevelNodes } from 'ng-material-multilevel-menu';
export declare class SideMenuComponent implements OnInit {
    itemClicked: EventEmitter<{}>;
    isSideMenuExpanded: boolean;
    appitems: MultilevelNodes[];
    config: Configuration;
    constructor();
    ngOnInit(): void;
    selectedItem($event: any): void;
    closeMenu($event: any): void;
}
