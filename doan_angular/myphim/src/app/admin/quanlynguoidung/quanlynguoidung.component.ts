import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NguoidungService } from 'src/app/services/nguoidung.service';



@Component({
  selector: 'app-quanlynguoidung',
  templateUrl: './quanlynguoidung.component.html',
  styleUrls: ['./quanlynguoidung.component.css']
})
export class QuanlynguoidungComponent implements OnInit {
  public DanhSachNguoiDung : any = [];
  @ViewChild('formDangKy') formDK:NgForm;
  @ViewChild('btnLuu') btnLuu:ElementRef;
  @ViewChild('btnSua') btnSua:ElementRef;
  @ViewChild('tieude') tieude:ElementRef;
  @ViewChild('taikhoan') inputTaiKhoan:ElementRef;  
  public display:string = 'none';  
  public themStatus:boolean = true;
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
      MaLoaiNguoiDung:loaiNguoiDung
    });
    this.btnLuu.nativeElement.innerHTML = 'Cập nhật';
    this.tieude.nativeElement.innerHTML = 'Cập nhật thông tin người dùng';
    this.inputTaiKhoan.nativeElement.readOnly = true;
    this.themStatus = false; // tắt cờ này để cập nhật nguoidung
  }
  LuuNguoiDung(nguoidung){
    if(this.themStatus){      
      // thêm người dùng
      this.nguoidung.ThemNguoiDung(nguoidung).subscribe(
        kq => {
          alert('Đã thêm người dùng thành công.');
          this.formDK.reset();
          this.DanhSachNguoiDung.push(nguoidung);
        },
        loi => {
          alert(loi);
        }
      );
    }
    else{      
      this.nguoidung.CapNhatNguoiDung(nguoidung).subscribe(
        kq => {          
          this.inputTaiKhoan.nativeElement.readOnly = false;
          this.formDK.reset();
          this.themStatus = true;
          for(let index in this.DanhSachNguoiDung){
            if(nguoidung.TaiKhoan == this.DanhSachNguoiDung[index].TaiKhoan){
              this.DanhSachNguoiDung.splice(index,1,nguoidung);
            }
          }   
          this.display = 'none';       
        },
        loi => { 
          alert(loi);
        }
      );
    }
    








  
  }














}
