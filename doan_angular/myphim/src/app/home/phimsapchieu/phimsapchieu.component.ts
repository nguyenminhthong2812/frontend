import { Component, OnInit } from '@angular/core';
import { PhimService } from 'src/app/services/phim.service';

@Component({
  selector: 'app-phimsapchieu',
  templateUrl: './phimsapchieu.component.html',
  styleUrls: ['./phimsapchieu.component.css']
})
export class PhimsapchieuComponent implements OnInit {

//   DanhSachPhimDangChieu = [
//     { TenPhim: "3D Cung Tâm Kế", HinhAnh: '../../../assets/imgs/owl-3d-cung-tam-ke-15482279337332.jpg' },
//     { TenPhim: "Bartel Angel", HinhAnh: '../../../assets/imgs/owl-alita-battle-angel.jpg' },
//     { TenPhim: "Cua lại vợ bầu", HinhAnh: '../../../assets/imgs/owl-cua-lai-vo-bau.jpg' },
//     { TenPhim: "Nụ hôn đầu", HinhAnh: '../../../assets/imgs/owl-nu-hon-dau.jpg' },
//     { TenPhim: "Sinh nhật chết chóc", HinhAnh: '../../../assets/imgs/owl-sinh-nhat-chet-choc-2.jpg' },
//     { TenPhim: "Tân vua hài kịch", HinhAnh: '../../../assets/imgs/owl-tan-vua-hai-kich-15483150484283.jpg' },
//     { TenPhim: "Tình đầu thơ ngây", HinhAnh: '../../../assets/imgs/owl-tinh-dau-tho-ngay-.jpg' },
//     { TenPhim: "Trạng quỳnh", HinhAnh: '../../../assets/imgs/owl-trang-quynh-15404406651091_370x490.jpg' },
// ]
DanhSachPhimSapChieu = [];
Options={items: 5, dots: false, 
    nav: true, loop:true,
    margin: 15,    
    navText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>']
    };
  constructor(private phim:PhimService) { }

  ngOnInit() {
    this.phim.LayDanhSachPhim().subscribe(
      data => {
        this.DanhSachPhimSapChieu = data;
      },
      loi => {
        alert(loi);
        console.log(loi);
      }
    );
  }

}
