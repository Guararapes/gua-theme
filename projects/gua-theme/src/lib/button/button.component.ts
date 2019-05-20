import { Component, OnInit, Input } from '@angular/core';
import { NgContentAst } from '@angular/compiler';
import { NgContentDef, directiveDef } from '@angular/core/src/view';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit{

  @Input() label: string;
  @Input() icon: string;

  constructor() { }

  ngOnInit() {
  }

}
