import { Component, OnInit,Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-dienanh',
  templateUrl: './dienanh.component.html',
  styleUrls: ['./dienanh.component.css']
})
export class DienanhComponent implements OnInit,AfterViewInit {
  DanhSachTinTuc1:Array<object>=[];
  DanhSachTinTuc2:Array<object>=[];
  DanhSachTinTuc3:Array<object>=[];
  @Input() tintuc;
  constructor() { }

  ngOnInit() {    
    
  }
  ngAfterViewInit(){
    for(let tin of this.tintuc){
      if(this.DanhSachTinTuc1.length < 3){                
        this.DanhSachTinTuc1.push(tin);        
      }
      else{   
        if(this.DanhSachTinTuc2.length < 3) {
          this.DanhSachTinTuc2.push(tin);
        } 
        else{
          this.DanhSachTinTuc3.push(tin);
        }
      }      
    }
    console.log(this.DanhSachTinTuc1);
    console.log(this.DanhSachTinTuc2);
    console.log(this.DanhSachTinTuc3);
  }

}
