import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NguoidungService } from 'src/app/services/nguoidung.service';
import { NguoiDung } from '../models/nguoidung';


@Component({
  selector: 'app-dangky',
  templateUrl: './dangky.component.html',
  styleUrls: ['./dangky.component.css']
})
export class DangkyComponent implements OnInit { 
  
  @ViewChild('formDangKy') formDK:NgForm;  
  constructor(private nguoidung:NguoidungService) { }

  ngOnInit() {    
  }
  
  
  LuuNguoiDung(nguoidung){
    this.nguoidung.ThemNguoiDung(nguoidung).subscribe(
      kq => {
        alert('Đăng ký thành công!');          
        this.formDK.reset();
      },
      loi => {
        alert(loi);
      }
    );
  }
  

  hasChanges(){
    return true;
  }
  
}
