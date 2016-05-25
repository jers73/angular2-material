import {Component } from '@angular/core';
import {Dir} from '@angular2-material/core/rtl/dir';
import {MdButton} from '@angular2-material/button/button';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav/sidenav';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list/list';
import {MdIcon} from '@angular2-material/icon/icon';
import {MdToolbar} from '@angular2-material/toolbar/toolbar';

@Component({
  moduleId: module.id,
  selector: 'rodolph-app',
  templateUrl: 'rodolph.component.html',
  styleUrls: ['rodolph.component.css'],
    directives: [
        Dir,
        MdButton,
        MdIcon,
        MD_SIDENAV_DIRECTIVES,
        MD_LIST_DIRECTIVES,
        MdToolbar
    ]

})
export class RodolphAppComponent {
  title = 'rodolph works!';
}
