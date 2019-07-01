import { Component, ElementRef, OnInit, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {

  @Input() title: string;
  @Input() list: HTMLElement[];
  @Input() backgroundColor: string;
  @Input() width: string;
  @Input() height: string;
  
  constructor() {
  }

  ngOnInit() {
  }
}
