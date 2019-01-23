import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loaiphim',
  templateUrl: './loaiphim.component.html',
  styleUrls: ['./loaiphim.component.css']
})
export class LoaiphimComponent implements OnInit {
  dangChieuStatus:boolean = true;
  constructor() { }
  HienPhim(status:boolean){
    this.dangChieuStatus = status;
  }
  ngOnInit() {
  }

}
