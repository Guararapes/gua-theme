import { OnInit, EventEmitter, OnChanges } from '@angular/core';
import { MatDialog } from '@angular/material';
export declare class ImageGalleryComponent implements OnInit, OnChanges {
    dialog: MatDialog;
    images: string[];
    closeButtonColor: string;
    closeButtonBackground: string;
    panelClass: string;
    onAddImage: EventEmitter<{}>;
    proportion: boolean;
    height: string;
    disableClose: boolean;
    selectedImage: string;
    constructor(dialog: MatDialog);
    ngOnChanges(): void;
    ngOnInit(): void;
    openZoom(): void;
    onClick($event: any): void;
}
