import { OnInit, Component, Output, EventEmitter, Input, HostBinding } from '@angular/core';
import { Configuration, MultilevelNodes } from 'ng-material-multilevel-menu';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {


  @Output() itemClicked = new EventEmitter();
  @HostBinding('class.expanded')
  @Input() isSideMenuExpanded = true;
  @Input() appitems: MultilevelNodes[];
  config: Configuration = {
    paddingAtStart: true,
    classname: 'side-menu',
    listBackgroundColor: 'rgb(255, 255, 255)',
    fontColor: 'rgb(117, 117, 117)',
    backgroundColor: 'rgb(255, 255, 255)',
    selectedListFontColor: 'rgb(39, 149, 223)',
    collapseOnSelect: true,
    interfaceWithRoute: true
  };

  constructor() {

  }


  ngOnInit() {
    if (!this.appitems) {
      this.appitems = [
        {
          label: 'Malharia',
          icon: 'add',
          items: [
            {
              label: 'Item 1.1',
              link: '/item-1-1',
            },
            {
              label: 'Item 1.2',
              link: '/item-1-2',
            },
            {
              label: 'Item 1.1',
              link: '/item-1-1',
            },
            {
              label: 'Item 1.2',
              link: '/item-1-2',
            },
            {
              label: 'Item 1.1',
              link: '/item-1-1',
            },
            {
              label: 'Item 1.2',
              link: '/item-1-2',
            },
          ]
        },
        {
          label: 'Tinturaria',
          icon: 'alarm',
          items: [
            {
              label: 'Item 2.1',
              link: '/item-2-1',
            },
            {
              label: 'Item 2.2',
              link: '/item-2-2',
            }
          ]
        },
        {
          label: 'Costura',
          link: '/item-3',
          icon: 'offline_pin'
        },
        {
          label: 'Item 4',
          link: '/item-4',
          icon: 'star_rate',
          hidden: true
        }
      ]
    }
  }


  selectedItem($event) {
    this.itemClicked.emit($event);
    console.log($event);
  }

  closeMenu($event) {
    if (this.isSideMenuExpanded) {
      this.isSideMenuExpanded = false;
    }
  }
}
