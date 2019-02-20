import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loaiphim',
  templateUrl: './loaiphim.component.html',
  styleUrls: ['./loaiphim.component.css']
})
export class LoaiphimComponent implements OnInit {
  dangChieu:boolean = true;  
  constructor() { }

  ngOnInit() {
  }

  HienPhim(status:boolean){
    this.dangChieu = status;
  }

  
}
