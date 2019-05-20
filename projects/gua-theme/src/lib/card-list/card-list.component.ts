import { Component, ElementRef, OnInit, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {

  @Input() color: string;
  @Input() backgroundColor: string;
  @Input() height: string;
  
  constructor() {
  }

  ngOnInit() {
  }
}
