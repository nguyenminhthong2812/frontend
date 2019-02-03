import { Component, OnInit, Input, OnChanges, SimpleChanges, Output,EventEmitter } from '@angular/core';
import { Ghe } from 'src/app/models/ghe';


@Component({
  selector: 'app-danhsachghe',
  templateUrl: './danhsachghe.component.html',
  styleUrls: ['./danhsachghe.component.css']
})
export class DanhsachgheComponent implements OnInit, OnChanges {
  @Input() DanhSachGhe:Ghe[] = [];
  @Output() emitStatus = new EventEmitter();
  soGheDaDat:number = 0;
  soGheConLai:number = 0;
  DanhSachGheDaDat = [];
  constructor() { 
    
  }
  DatGheParent(status,ghe){
    let ve:{MaGhe:string,GiaVe:number} = {MaGhe:ghe.MaGhe,GiaVe:ghe.GiaVe};
    if(status){    
      this.soGheDaDat++;
      this.soGheConLai--;
      this.DanhSachGheDaDat.push(ve);
    }
    else{
      this.soGheDaDat--;
      this.soGheConLai++;
      for(let index in this.DanhSachGheDaDat){
        if(this.DanhSachGheDaDat[index].MaGhe == ghe.MaGhe){
          this.DanhSachGheDaDat.splice(parseInt(index),1);
        }
      }
    }    
    this.emitStatus.emit(this.DanhSachGheDaDat);    
  }
  ThemGhe(gheMoi){
    this.DanhSachGhe.push(gheMoi);
  }
  ngOnInit() {
  }
  ngOnChanges(changes:SimpleChanges){
    for(let ghe of this.DanhSachGhe){      
      if(!ghe.DaDat)
        this.soGheConLai++;
      else
        this.soGheDaDat++;
    }
  }
}