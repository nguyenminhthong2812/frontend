import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NguoidungService } from 'src/app/services/nguoidung.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dangnhap',
  templateUrl: './dangnhap.component.html',
  styleUrls: ['./dangnhap.component.css']
})
export class DangnhapComponent implements OnInit {
  formDangNhap:FormGroup;
  constructor(private nguoidung:NguoidungService, private router: Router) { }
  regex_username:string = '^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$';
  ngOnInit() {
    this.formDangNhap = new FormGroup(
      {
        'TaiKhoanDN': new FormControl(null,[Validators.required,Validators.pattern(this.regex_username)]),
        'MatKhauDN': new FormControl(null,[Validators.required])
      }
    );
    // xóa người dùng cũ
    localStorage.removeItem('NguoiDung');
  }
  DangNhap(){
    let nguoiDungDN = this.formDangNhap.value;    
    this.nguoidung.DangNhap(nguoiDungDN.TaiKhoanDN,nguoiDungDN.MatKhauDN).subscribe(
      kq => {
        if(typeof(kq) == 'object'){
          localStorage.setItem('NguoiDung',JSON.stringify(kq));
          this.router.navigate(['/']);
        }
        else{
          alert('Vui lòng đăng nhập lại');
        }
      },
      loi => {
        alert(loi);
      }
    );
  }
}
