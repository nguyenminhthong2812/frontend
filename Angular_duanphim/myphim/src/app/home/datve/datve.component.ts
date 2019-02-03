import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PhimService } from 'src/app/service/phim.service';
import { PhongveService } from 'src/app/service/phongve.service';
import { Ghe } from 'src/app/models/ghe';

@Component({
  selector: 'app-datve',
  templateUrl: './datve.component.html',
  styleUrls: ['./datve.component.css']
})
export class DatveComponent implements OnInit {
  public maLichChieu:number;
  public danhSachGhe:Ghe[] = [];
  public danhSachGheDaDat:any = [];
  constructor(private act:ActivatedRoute, private phongve:PhongveService) { }

  ngOnInit() {
    this.act.params.subscribe(
      kq => {
        this.maLichChieu = kq.malichchieu;
        //console.log(this.maLichChieu);
        this.phongve.LayChiTietPhongVe(this.maLichChieu).subscribe(
          result => {
            this.danhSachGhe = result.DanhSachGhe;
            //console.log(this.danhSachGhe);
          }
        );
      },
      errors => {
        console.log(errors);
      }
    );
  }
  LayTaiKhoanNguoiDung(){
    let nguoiDung = JSON.parse(localStorage.getItem('NguoiDung'));
    if(nguoiDung != null)
      return nguoiDung.TaiKhoan;
    else{
      alert('Vui lòng đăng nhập để đặt vé.');
      return false;
    }

  }
  LayDanhSachGhe(danhSachGhe){ 
    this.danhSachGheDaDat = danhSachGhe;   
    console.log(this.danhSachGheDaDat);
  }
  DatVe(){
    let taiKhoan:string;
    taiKhoan = this.LayTaiKhoanNguoiDung();
    let ve:{MaLichChieu:number,TaiKhoanNguoiDung:string,DanhSachVe:any[]} = 
      {MaLichChieu:this.maLichChieu,TaiKhoanNguoiDung:taiKhoan,DanhSachVe:this.danhSachGheDaDat};
      console.log(ve);
    this.phongve.DatVe(ve).subscribe(
      kq => {
        console.log(kq);
      },
      loi => {
        console.log(loi);
      }
    );
  }

}
