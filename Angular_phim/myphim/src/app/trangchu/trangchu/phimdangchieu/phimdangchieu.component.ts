import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-phimdangchieu',
    templateUrl: './phimdangchieu.component.html',
    styleUrls: ['./phimdangchieu.component.css']
})
export class PhimdangchieuComponent implements OnInit {
    DanhSachPhimDangChieu = [
        { TenPhim: "The Walking Dead", HinhAnh: '../../../assets/img/sinh-nhat-chet-choc-happy-death-day-c16-15089876590397.jpg' },
        { TenPhim: "Ferdinand", HinhAnh: '../../../assets/img/ferdinand.jpg' },
        { TenPhim: "Ngắm Pháo Hoa", HinhAnh: '../../../assets/img/phao-hoa-nen-ngam-tu-duoi-hay-ben-canh-15088436147700.jpg' },
        { TenPhim: "Nhóc Ma Siêu Quậy", HinhAnh: '../../../assets/img/nhoc-ma-sieu-quay-the-little-vampire-3d-15090331183157.jpg' },
        { TenPhim: "Trải nghiệm điểm chết", HinhAnh: '../../../assets/img/trai-nghiem-diem-chet-flatliners-15093522963475.jpg' },
    ]
    mySlideOptions={items: 4, dots: false, nav: true, loop:true,margin:10};
    constructor() { }
    ngOnInit() {
    }
    

}
