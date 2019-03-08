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
  public DanhSachBanDau:any = [];
  public DanhSachTimKiem : any = [];
  @ViewChild('formDangKy') formDK:NgForm;
  @ViewChild('btnLuu') btnLuu:ElementRef;
  @ViewChild('btnSua') btnSua:ElementRef;
  @ViewChild('tieude') tieude:ElementRef;
  @ViewChild('inputtaikhoan') inputTaiKhoan:ElementRef; 
  @ViewChild('btnclose') btnclose:ElementRef;   
  @ViewChild ('tukhoa') tukhoa:ElementRef;
  public themStatus:boolean = true;
  constructor(private nguoidung:NguoidungService) { }

  ngOnInit() {
    this.LayDanhSachNguoiDung();
  }
  LayDanhSachNguoiDung(){
    this.nguoidung.LayDSNguoiDung().subscribe(
      data => {
        this.DanhSachBanDau = data;
        this.DanhSachNguoiDung = this.DanhSachBanDau;
        let key = this.tukhoa.nativeElement.value.toUpperCase();        
        if(key != ''){
          this.DanhSachNguoiDung = [];
          for(let nguoidung of this.DanhSachBanDau){
            if(nguoidung.HoTen.toUpperCase().includes(key)){
              this.DanhSachNguoiDung.push(nguoidung);
            }
          }          
        }
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
          alert(kq);
          //alert('Đã thêm người dùng thành công.');          
          this.LayDanhSachNguoiDung();
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
          this.themStatus = true;
          this.LayDanhSachNguoiDung();
          this.btnclose.nativeElement.click();  
          this.btnLuu.nativeElement.innerHTML = 'Đăng ký';
          this.tieude.nativeElement.innerHTML = 'Thêm người dùng';    
        },
        loi => { 
          alert(loi);
        }
      );
    }
    this.formDK.reset();
  }

  
  XoaNguoiDung(taikhoan){
    if(confirm('Bạn chắc xóa người dùng này?')){
      this.nguoidung.XoaNguoiDung(taikhoan).subscribe(
        data => {
          alert(data);
          this.LayDanhSachNguoiDung();
        },
        loi =>{
          alert(loi);
        }
      );
    }
  }

  



}
