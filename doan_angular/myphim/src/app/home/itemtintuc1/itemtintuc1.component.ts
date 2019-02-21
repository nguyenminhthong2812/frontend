import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-itemtintuc1',
  templateUrl: './itemtintuc1.component.html',
  styleUrls: ['./itemtintuc1.component.css']
})
export class Itemtintuc1Component implements OnInit {
  @Input() tintuc;
  constructor() { }

  ngOnInit() {
    console.log(this.tintuc);
  }

}
