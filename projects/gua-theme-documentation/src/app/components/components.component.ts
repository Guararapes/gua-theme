import escape from 'lodash-es/escape';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ScrollbarComponent } from './scrollbar/scrollbar.component';

@Component({
  selector: 'gua-theme-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss']
})
export class ComponentsComponent implements OnInit {

  menuWidth = '250px';
  contentWidth = `calc(100% - ${this.menuWidth})`;

  autocompleteHTML: string = escape(`<app-page-title>erisson</app-page-title>`);

  constructor() {
  }

  ngOnInit() {
  }

  scrollTo(elem: string) {
    //this.layoutService.scrollbar.getScrollElement().scrollTo({ top: this[elem].nativeElement.offsetTop, left: 0, behavior: 'smooth' });
  }
}
