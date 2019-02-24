import { Component, OnInit,Input } from '@angular/core';
import { PhongveService } from 'src/app/services/phongve.service';
import { Ghe } from '../models/ghe';

@Component({
  selector: 'app-datve',
  templateUrl: './datve.component.html',
  styleUrls: ['./datve.component.css']
})
export class DatveComponent implements OnInit {
  @Input() malichchieu;
  public DanhSachGhe:Ghe[] = [];
  public ChiTietVe:any;
  public soGheDaDat:number = 0;
  public soGheConLai:number = 0;
  public DanhSachGheDaDat:Ghe[]=[];
  public tongTien:number = 0;
  constructor(private phongve:PhongveService) { }

  ngOnInit() {
    this.phongve.LayChiTietVe(this.malichchieu).subscribe(
      data => {        
        this.ChiTietVe = data;
        this.DanhSachGhe = this.ChiTietVe.DanhSachGhe;
        console.log(this.ChiTietVe.DanhSachGhe);
        // đếm số ghế đã đặt và còn lại
        for(let ghe of this.DanhSachGhe){
          if(ghe.DaDat)
            this.soGheDaDat++;
          else
            this.soGheConLai++;
        }        
      },
      loi => {
        alert(loi);      
      }
    );
  }
  ChonGheParent(status,ghe){
    if(status){
      this.soGheDaDat++;
      this.soGheConLai--;
      this.tongTien = this.tongTien + ghe.GiaVe;
      this.DanhSachGheDaDat.push(ghe);
    }
    else{
      this.soGheDaDat--;
      this.soGheConLai++;
      this.tongTien = this.tongTien - ghe.GiaVe;
      for(let item in this.DanhSachGheDaDat){
        if(ghe.MaGhe === this.DanhSachGheDaDat[item].MaGhe){
          this.DanhSachGheDaDat.splice(parseInt(item),1);
        }
      }
    }
    console.log(this.DanhSachGheDaDat);
  }
  DatGhe(){
    let taiKhoan:string = 'nguyenvana';
    let ve:{MaLichChieu:number,TaiKhoanNguoiDung:string,DanhSachVe:any[]}= {
          MaLichChieu:this.malichchieu,TaiKhoanNguoiDung:taiKhoan,DanhSachVe:this.DanhSachGheDaDat
        }
    this.phongve.DatGhe(ve).subscribe(
      data => {
        alert(data);
      },
      loi => {
        alert(loi);
      }
    );
  }




}
