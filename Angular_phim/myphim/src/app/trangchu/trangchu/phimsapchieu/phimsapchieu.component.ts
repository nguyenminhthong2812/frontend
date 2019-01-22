import { Component, OnInit } from '@angular/core';
import $ from 'jquery';
declare var $: any;

@Component({
    selector: 'app-phimsapchieu',
    templateUrl: './phimsapchieu.component.html',
    styleUrls: ['./phimsapchieu.component.css']
})
export class PhimsapchieuComponent implements OnInit {
    DanhSachPhimSapChieu = [
        { TenPhim: "Thor: Ragnarok", HinhAnh: '../../../assets/img/thor-ragnarok-15088151416399.jpg' },
        { TenPhim: "Ferdinand", HinhAnh: '../../../assets/img/pokemon-to-chon-cau-pokemon-i-choose-you-15095249219579.jpg' },
        { TenPhim: "Trùm Hương Cảng", HinhAnh: '../../../assets/img/trum-huong-cang-chasing-the-dragon-15088270130890.jpg' },
        { TenPhim: "Ferdinand", HinhAnh: '../../../assets/img/ferdinand.jpg' },
        { TenPhim: "Trải nghiệm điểm chết", HinhAnh: '../../../assets/img/trai-nghiem-diem-chet-flatliners-15093522963475.jpg' },
    ];
    mySlideOptions={items: 4, dots: false, nav: true, loop:true,margin:10};
    constructor() { }

    ngOnInit() {
        
    }    
}
