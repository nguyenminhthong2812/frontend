import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-itemphim',
  templateUrl: './itemphim.component.html',
  styleUrls: ['./itemphim.component.css']
})
export class ItemphimComponent implements OnInit {
  @Input() phim;
  constructor() { }

  ngOnInit() {
  }

}
