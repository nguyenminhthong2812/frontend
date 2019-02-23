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
  @ViewChild ('star') star:ElementRef; 
  constructor(private phim:PhimService, private act:ActivatedRoute) { }

  ngOnInit() {
    this.act.params.subscribe(
      kq => {        
        this.maPhim = kq.maphim;
        console.log(this.maPhim);
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

}
