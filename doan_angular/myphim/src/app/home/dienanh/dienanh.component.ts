import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-dienanh',
  templateUrl: './dienanh.component.html',
  styleUrls: ['./dienanh.component.css']
})
export class DienanhComponent implements OnInit {
  DanhSachTinTuc1:Array<object>=[];
  DanhSachTinTuc2:Array<object>=[];
  DanhSachTinTuc3:Array<object>=[];
  @Input() tintuc;
  constructor() { }

  ngOnInit() {   
    
    for(let tin1 of this.tintuc[0]){
      this.DanhSachTinTuc1.push(tin1);
    }
    for(let tin2 of this.tintuc[1]){
      this.DanhSachTinTuc2.push(tin2);
    }
    for(let tin3 of this.tintuc[2]){
      this.DanhSachTinTuc3.push(tin3);
    }
    //console.log(this.DanhSachTinTuc1);
    //console.log(this.DanhSachTinTuc2);
    //console.log(this.DanhSachTinTuc3);
  }
  

}
