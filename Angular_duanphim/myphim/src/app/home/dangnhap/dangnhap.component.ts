import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-dangnhap',
  templateUrl: './dangnhap.component.html',
  styleUrls: ['./dangnhap.component.css']
})
export class DangnhapComponent implements OnInit {
  formDangNhap:FormGroup;
  TaiKhoanKhongHopLe = ['user001','user002'];
  constructor() { }
  DangNhap(){
    console.log(this.formDangNhap.value);
  }
  regex_username:string = '^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$';
  ngOnInit() {
    this.formDangNhap = new FormGroup(
      {
        'TaiKhoan':new FormControl(null,[Validators.required,Validators.pattern(this.regex_username),this.CheckHopLe.bind(this)]),
        'MatKhau':new FormControl(null,[Validators.required,Validators.minLength(5)])
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
