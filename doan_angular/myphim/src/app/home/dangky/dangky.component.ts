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
  public DanhSachNguoiDung:any=[];
  @ViewChild('formDangKy') formDK:NgForm;
  @ViewChild('btnLuu') btnLuu:ElementRef;
  @ViewChild('taikhoan') inputTaiKhoan:ElementRef;
  constructor(private nguoidung:NguoidungService) { }

  ngOnInit() {
    this.nguoidung.LayDSNguoiDung().subscribe(
      data => {
        this.DanhSachNguoiDung = data;
        console.log(this.DanhSachNguoiDung);
      },
      loi =>{
        alert(loi);
      }
    );
  }
  Sua(btnSua){
    let taiKhoan = btnSua.getAttribute('data-TaiKhoan');
    let matKhau = btnSua.getAttribute('data-MatKhau');
    let hoTen = btnSua.getAttribute('data-HoTen');
    let maNhom = btnSua.getAttribute('data-MaNhom');
    let email = btnSua.getAttribute('data-Email');
    let sodt = btnSua.getAttribute('data-SoDT');
    let loaiNguoiDung = btnSua.getAttribute('data-LoaiNguoiDung');
    this.formDK.setValue({
      TaiKhoan:taiKhoan,
      MatKhau:matKhau,
      HoTen:hoTen,
      MaNhom:maNhom,
      Email:email,
      SoDT:sodt,
      LoaiNguoiDung:loaiNguoiDung
    });
    this.btnLuu.nativeElement.innerHTML = 'Cập nhật';
    this.inputTaiKhoan.nativeElement.readOnly = true;
  }
}
