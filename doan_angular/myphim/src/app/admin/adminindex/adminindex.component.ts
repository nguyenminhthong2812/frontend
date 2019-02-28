import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminindex',
  templateUrl: './adminindex.component.html',
  styleUrls: ['./adminindex.component.css']
})
export class AdminindexComponent implements OnInit {
  public quanly:string = 'nguoidung';
  constructor() { }

  ngOnInit() {
  }
  ChonLoaiQuanLy(val:string){
    this.quanly = val;
  }
}
