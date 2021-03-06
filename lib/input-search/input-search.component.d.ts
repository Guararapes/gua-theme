import { OnInit, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
export declare class InputSearchComponent implements OnInit {
    private formBuilder;
    isSearchExpanded: boolean;
    searchForm: FormGroup;
    height: string;
    width: string;
    getValue: EventEmitter<{}>;
    constructor(formBuilder: FormBuilder);
    ngOnInit(): void;
    onClickSearch(): void;
    onBlurSearch($event: any): void;
    expandSearch(): void;
    retractSearch(): void;
    onSearchSubmit(): void;
}
