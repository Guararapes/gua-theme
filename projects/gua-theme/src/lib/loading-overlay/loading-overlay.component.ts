import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'gua-loading-overlay',
  templateUrl: './loading-overlay.component.html',
  styleUrls: ['./loading-overlay.component.scss']
})
export class LoadingOverlayComponent implements OnInit {
  
  @Input('loading') loading: boolean;
  @Input() image: string;

  constructor() { }

  ngOnInit() {
    if(!this.image){
      this.image = "assets/image-loading.gif"
    }
  }
}
