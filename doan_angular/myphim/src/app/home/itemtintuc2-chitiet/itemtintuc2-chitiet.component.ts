import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-itemtintuc2-chitiet',
  templateUrl: './itemtintuc2-chitiet.component.html',
  styleUrls: ['./itemtintuc2-chitiet.component.css']
})
export class Itemtintuc2ChitietComponent implements OnInit {
  @Input() tin;
  constructor() { }

  ngOnInit() {
  }

}
