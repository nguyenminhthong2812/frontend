import { Component, OnInit, ViewChild } from '@angular/core';
import { PhimService } from 'src/app/services/phim.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-quanlyphim',
  templateUrl: './quanlyphim.component.html',
  styleUrls: ['./quanlyphim.component.css']
})
export class QuanlyphimComponent implements OnInit {
  @ViewChild('formPhim') formPhim:NgForm;
  public DanhSachPhim:any = [];
  public model:any;
  constructor(private phim:PhimService) { }

  ngOnInit() {
    this.model = new Date().toISOString().split('T')[0];
    this.phim.LayDanhSachPhim().subscribe(
      kq => {
        this.DanhSachPhim = kq;
        console.log(kq);
      },
      loi =>{
        alert(loi);
      }

    );
  }

  ThemPhim(phim){
    console.log(phim);
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
  }







}
