import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PhimService } from 'src/app/services/phim.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-quanlyphim',
  templateUrl: './quanlyphim.component.html',
  styleUrls: ['./quanlyphim.component.css']
})
export class QuanlyphimComponent implements OnInit {
  @ViewChild('formPhim') formPhim:NgForm;
  @ViewChild('tieude') tieude:ElementRef;
  @ViewChild('btnluu') btnluu:ElementRef;
  @ViewChild('btnclose') btnclose:ElementRef;
  @ViewChild('maphim') maphim:ElementRef;
  @ViewChild('timkiem') timkiem:ElementRef;
  public DanhSachBanDau:any = [];
  public DanhSachPhim:any = [];  
  public statusThem:boolean = true;
  constructor(private phim:PhimService) { }

  ngOnInit() {   
    this.LayDanhSachPhim();
  }

  LayDanhSachPhim(){
    this.phim.LayDanhSachPhim().subscribe(
      kq => {
        this.DanhSachBanDau = kq
        this.DanhSachPhim = this.DanhSachBanDau;
        let key = this.timkiem.nativeElement.value.toUpperCase();
        if(key != ''){
          this.DanhSachPhim = [];
          for(let phim of this.DanhSachBanDau){
            if(phim.TenPhim.toUpperCase().includes(key)){
              this.DanhSachPhim.push(phim);
            }
          }
        }
        console.log(kq);
      },
      loi =>{
        alert(loi);
      }

    );
  }
  

  Open(btnopen){
    this.maphim.nativeElement.readOnly = false;
    this.formPhim.reset();
    btnopen.click();
  }
  ThemPhim(phim){
    if(this.statusThem){
      this.phim.ThemPhim(phim).subscribe(
        kq => {
          alert('Thêm phim thành công!');          
          alert(kq);
        },
        loi =>{
          alert(loi);
        }
      );
    }
    else{
      this.phim.SuaPhim(phim).subscribe(
        kq =>{
          this.tieude.nativeElement.innerHTML = 'Thêm phim mới';
          this.btnluu.nativeElement.innerHTML = 'Thêm phim';          
          this.statusThem = true;
          this.btnclose.nativeElement.click();          
          alert('Đã cập nhật phim');
          console.log(kq);
        },
        loi => {
          alert(loi);
        }
      );
    }
    this.formPhim.reset();
    this.LayDanhSachPhim();
  }

  SuaPhim(btnSuaPhim){
    let maphim = btnSuaPhim.getAttribute('data-MaPhim');
    let tenphim = btnSuaPhim.getAttribute('data-TenPhim');
    let trailer = btnSuaPhim.getAttribute('data-Trailer');
    let hinhanh = btnSuaPhim.getAttribute('data-HinhAnh');
    let mota = btnSuaPhim.getAttribute('data-MoTa');
    let manhom = btnSuaPhim.getAttribute('data-MaNhom');
    let ngaykhoichieu = btnSuaPhim.getAttribute('data-NgayKhoiChieu');
    let danhgia = btnSuaPhim.getAttribute('data-DanhGia');
    this.formPhim.setValue({
      MaPhim:maphim,
      TenPhim:tenphim,
      Trailer:trailer,
      HinhAnh:hinhanh,
      MoTa:mota,
      MaNhom:manhom,
      NgayKhoiChieu:ngaykhoichieu,
      DanhGia:danhgia
    });
    this.tieude.nativeElement.innerHTML = 'Cập nhật phim';
    this.btnluu.nativeElement.innerHTML = 'Cập nhật';
    this.maphim.nativeElement.readOnly = true;
    this.statusThem = false;
  }

  XoaPhim(maphim){
    if(confirm('Bạn có chắc chắn muốn xóa?')){
      this.phim.XoaPhim(maphim).subscribe(
        kq =>{
          alert(kq);
          this.LayDanhSachPhim();
        },
        loi => {
          alert(loi);
        }
      );
    }    
  }





}
