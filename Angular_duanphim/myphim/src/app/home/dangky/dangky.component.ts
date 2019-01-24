import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-dangky',
  templateUrl: './dangky.component.html',
  styleUrls: ['./dangky.component.css']
})
export class DangkyComponent implements OnInit {
  @ViewChild('formDangKy') formDK:NgForm;
  @ViewChild('btnLuu') btnLuu:ElementRef;
  @ViewChild('inputTK') inputTaiKhoan:ElementRef;
  DanhSachTaiKhoan = [];

  constructor() { }

  ngOnInit() {
  }
  DangKy(value){
    let ktr = 0;
    for(let index in this.DanhSachTaiKhoan){
      if(this.DanhSachTaiKhoan[index].TaiKhoan === value.TaiKhoan){
        this.DanhSachTaiKhoan[index] = value;
        this.btnLuu.nativeElement.innerHTML = 'Đăng ký';
        this.inputTaiKhoan.nativeElement.readOnly = false;
        this.formDK.reset();
        ktr = 1;
      }
    }
    if(ktr == 0)
      this.DanhSachTaiKhoan.push(value);
    // this.formDK.reset();
  }
  // load dữ liệu từ bảng lên để sửa
  Sua(btnSua){
    let taiKhoan = btnSua.getAttribute('data-taikhoan');
    let matKhau = btnSua.getAttribute('data-matkhau');
    let hoTen = btnSua.getAttribute('data-hoten');
    let email = btnSua.getAttribute('data-email');
    let soDT = btnSua.getAttribute('data-sodt');
    let loaiNguoiDung = btnSua.getAttribute('data-loainguoidung');
    this.formDK.setValue({
      TaiKhoan:taiKhoan,
      MatKhau:matKhau,
      HoTen: hoTen,
      Email:email,
      SoDT:soDT,
      LoaiNguoiDung:loaiNguoiDung
    });
    this.btnLuu.nativeElement.innerHTML = 'Cập nhật';
    this.inputTaiKhoan.nativeElement.readOnly = true;
  }
  // Xóa dữ liệu
  Xoa(btnXoa){
    let taiKhoan = btnXoa.getAttribute('data-taikhoan');
    for(let index in this.DanhSachTaiKhoan){
      if(this.DanhSachTaiKhoan[index].TaiKhoan === taiKhoan)
        this.DanhSachTaiKhoan.splice(parseInt(index),1);
    }
  }



}
