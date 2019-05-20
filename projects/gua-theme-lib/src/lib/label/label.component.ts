import { Component, ElementRef, OnInit, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'app-label',
  templateUrl: `label.component.html`,
  styleUrls: ['./label.component.scss']
})
export class LabelComponent implements OnInit {

  @Input() color: string;
  @Input() title: string;
  @Input() height: string;
  @Input() fontSize: string;
  titleFontSize: string;
  bodyFontSize: string;

  constructor() {
  }

  ngOnInit() {
    if (this.fontSize.indexOf("px") > -1) {
      const fontSize = this.fontSize.replace("px", "");
      this.titleFontSize = `${(parseInt(fontSize) / 2)}px`;
    } else if (this.fontSize.indexOf("%") > -1) {
        const fontSize = this.fontSize.replace("%", "");
        this.titleFontSize = `${(parseInt(fontSize) / 2)}%`;
      }
  }
}
