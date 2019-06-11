import { Component, ViewChild, ElementRef, OnInit, NgZone, AfterViewInit } from '@angular/core';
import escape from 'lodash-es/escape';
import SimpleBar from 'simplebar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {

  @ViewChild('code') code: ElementRef

  scrollbar: SimpleBar

  
  @ViewChild('scrollContainer') scrollContainer: ElementRef;

  flatButtonsHTML: string =
    escape(`<button mat-button>Button</button>
<button mat-button color="primary">Primary</button>
<button mat-button color="accent">Accent</button>
<button mat-button color="warn">Warn</button>
<button mat-button disabled="true">Disabled</button>`);

  title = 'gua-theme-documentation';

  constructor(private zone: NgZone) {
}


  ngAfterViewInit() {

    
  }

  ngOnInit() {
    
  }

}
