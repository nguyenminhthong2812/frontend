import { Component, OnInit } from '@angular/core';
import { PhimService } from 'src/app/services/phim.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  slideImg = ['../../../assets/imgs/alita-thien-than-chien-binh.jpg',
              '../../../assets/imgs/bi-kip-luyen-rong-3-vung-dat-bi-an.jpg',
              '../../../assets/imgs/cua-lai-vo-bau.jpg',
              '../../../assets/imgs/sinh-nhat-chet-choc-2.jpg'];
  // slideImg:Array<string> = [];
  constructor(private phim:PhimService) { }

  ngOnInit() {
    // this.phim.LayDanhSachPhim().subscribe(
    //   data => {
    //     for(let phim of data){
    //       this.slideImg.push(phim.HinhAnh);
    //       console.log(this.slideImg);
    //     }
    //   },
    //   loi => {
    //     alert(loi);
    //   }
    // );
  }

}
