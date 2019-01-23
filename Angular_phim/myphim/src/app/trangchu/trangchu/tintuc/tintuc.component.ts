import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tintuc',
  templateUrl: './tintuc.component.html',
  styleUrls: ['./tintuc.component.css']
})
export class TintucComponent implements OnInit {
  loaiTin:string = 'DienAnh';
  constructor() { }
  ChonLoaiTin(val:string){
    this.loaiTin = val;
  }
  ngOnInit() {
  }

}
