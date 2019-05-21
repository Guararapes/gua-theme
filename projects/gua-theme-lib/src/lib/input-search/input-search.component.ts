import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.scss']
})
export class InputSearchComponent implements OnInit {
  isSearchExpanded = false;
  searchForm: FormGroup;

  @Input() height: string;
  @Input() width: string;
  @Output() getValue = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      keyword: [{value: '', disabled: true }, Validators.required]
    });
  }

  onClickSearch() {
    if (!this.isSearchExpanded) {
      this.expandSearch();
    } else {
      this.onSearchSubmit();
    }
  }

  onBlurSearch($event) {
    if (!this.searchForm.controls['keyword'].value) {
      this.retractSearch();
    }
  }

  expandSearch() {
      this.searchForm.controls['keyword'].enable();
      this.isSearchExpanded = true;
  }
  retractSearch() {
      this.searchForm.controls['keyword'].disable();
      this.isSearchExpanded = false;
  }

  onSearchSubmit() {
    if (this.searchForm.valid) {
     this.getValue.emit(this.searchForm.value)
    }
  }

}
