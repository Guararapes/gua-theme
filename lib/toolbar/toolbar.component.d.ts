import { OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
export declare class ToolbarComponent implements OnInit {
    isSearchExpanded: boolean;
    searchForm: FormGroup;
    isSideMenuExpanded: boolean;
    placeHolderInput: string;
    constructor();
    ngOnInit(): void;
    onClickMenu(): void;
    onCLick(event: any): void;
    onClose(event: any): void;
    closeMenu($event: any): void;
}
