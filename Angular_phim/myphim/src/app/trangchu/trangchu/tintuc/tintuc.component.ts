import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tintuc',
  templateUrl: './tintuc.component.html',
  styleUrls: ['./tintuc.component.css']
})
export class TintucComponent implements OnInit {
  loaiTinTuc:string = 'DienAnh';
  constructor() { }
  ChonLoaiTin(loaitin:string){
    this.loaiTinTuc = loaitin;
  }
  ngOnInit() {
  }

}
