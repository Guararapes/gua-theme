import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  isSearchExpanded = false;
  searchForm: FormGroup;
  isSideMenuExpanded = false;
  placeHolderInput: string;

  constructor() { }

  ngOnInit() {

  }

  onClickMenu() {
    this.isSideMenuExpanded = !this.isSideMenuExpanded;
  }

  onCLick(event) {
    console.log(123)
  }

  onClose(event) {
    console.log(123)
  }


  closeMenu($event) {
    this.isSideMenuExpanded = false;
  }
}
