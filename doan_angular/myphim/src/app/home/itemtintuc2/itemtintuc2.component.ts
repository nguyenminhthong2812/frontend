import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-itemtintuc2',
  templateUrl: './itemtintuc2.component.html',
  styleUrls: ['./itemtintuc2.component.css']
})
export class Itemtintuc2Component implements OnInit {
  @Input() tintuc;
  constructor() { }

  ngOnInit() {
  }

}
