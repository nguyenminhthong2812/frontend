import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhimService } from 'src/app/service/phim.service';

@Component({
  selector: 'app-trangchitiet',
  templateUrl: './trangchitiet.component.html',
  styleUrls: ['./trangchitiet.component.css']
})
export class TrangchitietComponent implements OnInit {
  public maPhim:string;
  public chiTietPhim:any;
  public trailer;
  constructor(private activeted:ActivatedRoute, private phim:PhimService) { }

  ngOnInit() {
    this.activeted.params.subscribe(
      kq => {
        this.maPhim = kq.maphim;
        this.phim.LayChiTietPhim(this.maPhim).subscribe(
          chiTiet =>{ 
            this.chiTietPhim = chiTiet;
            this.trailer = this.chiTietPhim.Trailer.replace('watch?v=','embed/');
            console.log(this.chiTietPhim);           
          }
        )
      }
    )
  }

}
