import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loaitintuc',
  templateUrl: './loaitintuc.component.html',
  styleUrls: ['./loaitintuc.component.css']
})
export class LoaitintucComponent implements OnInit {
  loaitin:string='DienAnh';
  constructor() { }
  ChonLoaiTin(tin:string){
    this.loaitin = tin;
  }
  ngOnInit() {
  }

}
