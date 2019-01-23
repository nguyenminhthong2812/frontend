import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-danhsachghe',
  templateUrl: './danhsachghe.component.html',
  styleUrls: ['./danhsachghe.component.css']
})
export class DanhsachgheComponent implements OnInit {
  DanhSachGhe = [
    {SoGhe:1,TenGhe:"Số 1",Gia:100,TrangThai:false},
    {SoGhe:2,TenGhe:"Số 2",Gia:100,TrangThai:false},
    {SoGhe:3,TenGhe:"Số 3",Gia:100,TrangThai:false},
    {SoGhe:4,TenGhe:"Số 4",Gia:100,TrangThai:false},
    {SoGhe:5,TenGhe:"Số 5",Gia:100,TrangThai:false},
    {SoGhe:6,TenGhe:"Số 6",Gia:100,TrangThai:false},
    {SoGhe:7,TenGhe:"Số 7",Gia:100,TrangThai:false},
    {SoGhe:8,TenGhe:"Số 8",Gia:100,TrangThai:false},
    {SoGhe:9,TenGhe:"Số 9",Gia:100,TrangThai:false},
    {SoGhe:10,TenGhe:"Số 10",Gia:100,TrangThai:false},
    {SoGhe:11,TenGhe:"Số 11",Gia:100,TrangThai:false},
    {SoGhe:12,TenGhe:"Số 12",Gia:100,TrangThai:false},
    {SoGhe:13,TenGhe:"Số 13",Gia:100,TrangThai:false},
    {SoGhe:14,TenGhe:"Số 14",Gia:100,TrangThai:false},
    {SoGhe:15,TenGhe:"Số 15",Gia:100,TrangThai:false},
    {SoGhe:16,TenGhe:"Số 16",Gia:100,TrangThai:false},
    {SoGhe:17,TenGhe:"Số 17",Gia:100,TrangThai:false},
    {SoGhe:18,TenGhe:"Số 18",Gia:100,TrangThai:false},
    {SoGhe:19,TenGhe:"Số 19",Gia:100,TrangThai:false},
    {SoGhe:20,TenGhe:"Số 20",Gia:100,TrangThai:false},
    {SoGhe:21,TenGhe:"Số 21",Gia:100,TrangThai:false},
    {SoGhe:22,TenGhe:"Số 22",Gia:100,TrangThai:false},
    {SoGhe:23,TenGhe:"Số 23",Gia:100,TrangThai:false},
    {SoGhe:24,TenGhe:"Số 24",Gia:100,TrangThai:false},
    {SoGhe:25,TenGhe:"Số 25",Gia:100,TrangThai:false},
    {SoGhe:26,TenGhe:"Số 26",Gia:100,TrangThai:false},
    {SoGhe:27,TenGhe:"Số 27",Gia:100,TrangThai:false},
    {SoGhe:28,TenGhe:"Số 28",Gia:100,TrangThai:true},
    {SoGhe:29,TenGhe:"Số 29",Gia:100,TrangThai:true},
    {SoGhe:30,TenGhe:"Số 30",Gia:100,TrangThai:true},
  ];
  soGheDaDat:number = 0;
  soGheConLai:number = 0;
  DanhSachGheDaDat = [];
  constructor() { 
    for(let ghe of this.DanhSachGhe){
      if(!ghe.TrangThai)
        this.soGheConLai++;
      else
        this.soGheDaDat++;
    }
  }
  DatGheParent(status,ghe){
    if(status){    
      this.soGheDaDat++;
      this.soGheConLai--;
      this.DanhSachGheDaDat.push(ghe);
    }
    else{
      this.soGheDaDat--;
      this.soGheConLai++;
      for(let index in this.DanhSachGheDaDat){
        if(this.DanhSachGheDaDat[index].SoGhe == ghe.SoGhe){
          this.DanhSachGheDaDat.splice(parseInt(index),1);
        }
      }
    }
    console.log(this.DanhSachGheDaDat);
  }
  ThemGhe(gheMoi){
    this.DanhSachGhe.push(gheMoi);
  }
  ngOnInit() {
  }

}
