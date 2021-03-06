import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PhimService } from 'src/app/services/phim.service';

@Component({
  selector: 'app-chitietphim',
  templateUrl: './chitietphim.component.html',
  styleUrls: ['./chitietphim.component.css']
})
export class ChitietphimComponent implements OnInit {
  public chitietphim:any;
  public danhgia:string = '';
  public trailer:string = '';
  public maPhim:number;
  public statusLichChieu:boolean = true;
  public malichchieu:number;
  @ViewChild ('star') star:ElementRef; 
  public statusDatVe:boolean = false;
  constructor(private phim:PhimService, private act:ActivatedRoute) { }

  ngOnInit() {
    this.act.params.subscribe(
      kq => {        
        this.maPhim = kq.maphim;        
        this.phim.LayChiTietPhim(this.maPhim).subscribe(
          data => {        
            this.chitietphim = data;        
            let f = this.chitietphim.DanhGia;
            // Lấy số sao đánh giá
            for(let i = 0; i < parseInt(f); i++){
              this.danhgia += `<i class="fa fa-star"></i>`;
            }
            if(parseInt(f) < parseFloat(f)){
              this.danhgia += `<i class="fa fa-star-half-o"></i>`;
              for(let i = 0; i < 5 - (parseInt(f) + 1); i++){
                this.danhgia += `<i class="fa fa-star-o"></i>`;
              }
            }
            else{
              for(let i = 0; i < 5 - parseInt(f); i++){
                this.danhgia += `<i class="fa fa-star-o"></i>`;
              }
            }
            this.star.nativeElement.innerHTML = this.danhgia;
    
            // lấy trailer
            this.trailer = this.chitietphim.Trailer.replace('watch?v=','embed/');
            //console.log(this.chitietphim);
          },
          loi => {
            alert(loi);
          }
        );
      },
      loi => {
        alert(loi);
      }
    );
  }
  XemLichChieu(){
    this.statusLichChieu = true;    
  }
  DatVeParent(val:boolean,malichchieu:number){
    this.statusLichChieu = !val;
    this.malichchieu = malichchieu;
  }
  DatGheParent(val:boolean){
    this.statusDatVe = val;
    console.log(this.statusDatVe);
  }

  GetStatusDatVe(){
    return this.statusDatVe;
  }
}
