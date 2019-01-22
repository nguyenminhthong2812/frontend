import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-itemtintuc',
  templateUrl: './itemtintuc.component.html',
  styleUrls: ['./itemtintuc.component.css']
})
export class ItemtintucComponent implements OnInit {
  @Input() Tin;
  constructor() { }

  ngOnInit() {
  }

}
