import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NguoidungService } from 'src/app/service/nguoidung.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-dangnhap',
  templateUrl: './dangnhap.component.html',
  styleUrls: ['./dangnhap.component.css']
})
export class DangnhapComponent implements OnInit {
  formDangNhap:FormGroup;
  TaiKhoanKhongHopLe = ['user001','user002'];
  constructor(private nguoiDungSV:NguoidungService, private router:Router) { }
  DangNhap(){
    let nguoiDungDN = this.formDangNhap.value;
    this.nguoiDungSV.DangNhap(nguoiDungDN.TaiKhoan,nguoiDungDN.MatKhau).subscribe(
      data => {        
        if(typeof(data) == 'object'){
          localStorage.setItem('NguoiDung',JSON.stringify(data));
          this.router.navigate(['/']);
        }
        else
          alert('Vui long nhap lai');
      },
      error => {
        alert(error);
      }
    );
    
  }
  regex_username:string = '^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$';
  ngOnInit() {
    this.formDangNhap = new FormGroup(
      {
        'TaiKhoan':new FormControl(null,[Validators.required,Validators.pattern(this.regex_username),this.CheckHopLe.bind(this)]),
        'MatKhau':new FormControl(null,[Validators.required])
      }
    )
  }
  // tạo hàm validators riêng
  CheckHopLe(control:FormControl){
    for(let taikhoan of this.TaiKhoanKhongHopLe){
      if(taikhoan === control.value)
        return {'KhongHopLe':true};
    }
    return null;
  }
}
