import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar-item',
  templateUrl: './navbar-item.component.html',
  styleUrls: ['./navbar-item.component.scss']
})
export class NavBarItemComponent implements OnInit {

  @Input() color: string;
  @Input() backgroundColor: string;
  @Input() lineHeight: string;
  
  constructor() {
  }

  ngOnInit() {
  }
}
