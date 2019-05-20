import { Component, ElementRef, OnInit, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() color: string;
  @Input() backgroundColor: string;
  @Input() height: string;
  
  constructor() {
  }

  ngOnInit() {
  }
}
