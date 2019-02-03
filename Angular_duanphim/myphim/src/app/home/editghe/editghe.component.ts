import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DanhsachgheComponent } from '../danhsachghe/danhsachghe.component';

@Component({
  selector: 'app-editghe',
  templateUrl: './editghe.component.html',
  styleUrls: ['./editghe.component.css']
})
export class EditgheComponent implements OnInit {
  @ViewChild(DanhsachgheComponent) Danhsachghe;
  // @ViewChild('h2') h2:ElementRef;
  constructor() { }
  ThemGheParent(...thamso:any){
    let gheMoi={
      SoGhe:thamso[0],
      TenGhe:thamso[1],
      Gia:thamso[2],
      TrangThai:false
    };    
    this.Danhsachghe.ThemGhe(gheMoi);
    // this.h2.nativeElement.innerHTML = 'Đã thêm';
  }
  ngOnInit() {
  }

}
