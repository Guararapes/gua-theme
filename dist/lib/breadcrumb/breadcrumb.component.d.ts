import { OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BreadCrumb } from './breadcrumb';
import { Observable } from 'rxjs';
export declare class BreadcrumbComponent implements OnInit {
    private activatedRoute;
    private router;
    breadcrumbs$: Observable<BreadCrumb[]>;
    constructor(activatedRoute: ActivatedRoute, router: Router);
    ngOnInit(): void;
    buildBreadCrumb(route: ActivatedRoute, url?: string, breadcrumbs?: Array<BreadCrumb>): Array<BreadCrumb>;
}
