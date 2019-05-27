import { OnInit, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
export declare class ImageGalleryComponent implements OnInit {
    dialog: MatDialog;
    images: string[];
    closeButtonColor: string;
    panelClass: string;
    onAddImage: EventEmitter<{}>;
    proportion: boolean;
    height: string;
    selectedImage: string;
    constructor(dialog: MatDialog);
    ngOnInit(): void;
    openZoom(): void;
    onClick($event: any): void;
}
