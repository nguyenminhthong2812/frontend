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
  public themStatus:boolean = true;
  @ViewChild('formDangKy') formDK:NgForm;
  @ViewChild('btnLuu') btnLuu:ElementRef;
  @ViewChild('taikhoan') inputTaiKhoan:ElementRef;
  constructor(private nguoidung:NguoidungService) { }

  ngOnInit() {
    this.LayDanhSachNguoiDung();
  }
  LayDanhSachNguoiDung(){
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
      MaLoaiNguoiDung:loaiNguoiDung
    });
    this.btnLuu.nativeElement.innerHTML = 'Cập nhật';
    this.inputTaiKhoan.nativeElement.readOnly = true;
    this.themStatus = false; // tắt cờ này để cập nhật nguoidung
  }
  LuuNguoiDung(nguoidung){
    if(this.themStatus){
      // thêm người dùng
      this.nguoidung.ThemNguoiDung(nguoidung).subscribe(
        kq => {
          alert('Lưu thành công!');
          this.LayDanhSachNguoiDung();
          this.formDK.reset();
        },
        loi => {
          alert(loi);
        }
      );
    }
    else{
      // cập nhật người dùng      
      this.nguoidung.CapNhatNguoiDung(nguoidung).subscribe(
        kq => {
          alert('Cập nhật thành công!');
          this.themStatus = true; // bật cờ lên để thêm dữ liệu
          this.inputTaiKhoan.nativeElement.readOnly = false;
          this.formDK.reset();
          this.LayDanhSachNguoiDung();
        },
        loi => {
          alert(loi);
        }
      );
    }
  }
  XoaNguoiDung(taiKhoan){
    //let taiKhoan = btnXoa.getAttribute('data-TaiKhoan');
    if(confirm('Bạn có chắc xóa người dùng này?')){
      this.nguoidung.XoaNguoiDung(taiKhoan).subscribe(
        kq => {
          alert('Xóa thành công!');
          this.LayDanhSachNguoiDung();
        },
        loi => {alert(loi);}
      );
    }
  }
  // ThemMoi(){
  //   this.formDK.reset();
  //   this.themStatus = true; // bật cờ lên để thêm dữ liệu
  //   this.inputTaiKhoan.nativeElement.readOnly = false;   
  //   console.log(this.themStatus); 
  // }
}
