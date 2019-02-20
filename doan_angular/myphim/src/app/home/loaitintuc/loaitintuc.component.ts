import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loaitintuc',
  templateUrl: './loaitintuc.component.html',
  styleUrls: ['./loaitintuc.component.css']
})
export class LoaitintucComponent implements OnInit {
  loaitin:string='DienAnh';
  dienAnh:number = 1;
  DanhSachTinTuc = [
    [
      {
        TenPhim:'Ant-Man',
        HinhAnh: 'http://sv2.myclass.vn/hinhanh/phim/antman.jpg',
        MoTa: 'Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, plan and pull off a heist that will'
      },
      {
        TenPhim:'Ant-Man',
        HinhAnh: 'http://sv2.myclass.vn/hinhanh/phim/fantasticfour.jpg',
        MoTa: 'Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, plan and pull off a heist that will'
      },
      ,
      {
        TenPhim:'Ant-Man',
        HinhAnh: 'http://sv2.myclass.vn/hinhanh/phim/fantasticfour.jpg',
        MoTa: 'Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, plan and pull off a heist that will'
      },
      ,
      {
        TenPhim:'Ant-Man',
        HinhAnh: 'http://sv2.myclass.vn/hinhanh/phim/fantasticfour.jpg',
        MoTa: 'Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, plan and pull off a heist that will'
      },
      ,
      {
        TenPhim:'Ant-Man',
        HinhAnh: 'http://sv2.myclass.vn/hinhanh/phim/fantasticfour.jpg',
        MoTa: 'Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, plan and pull off a heist that will'
      },
      ,
      {
        TenPhim:'Ant-Man',
        HinhAnh: 'http://sv2.myclass.vn/hinhanh/phim/fantasticfour.jpg',
        MoTa: 'Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, plan and pull off a heist that will'
      },
      ,
      {
        TenPhim:'Ant-Man',
        HinhAnh: 'http://sv2.myclass.vn/hinhanh/phim/fantasticfour.jpg',
        MoTa: 'Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, plan and pull off a heist that will'
      },
      ,
      {
        TenPhim:'Ant-Man',
        HinhAnh: 'http://sv2.myclass.vn/hinhanh/phim/fantasticfour.jpg',
        MoTa: 'Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, plan and pull off a heist that will'
      },
    ],
    [
      {
        TenPhim:'Ant-Man',
        HinhAnh: 'http://sv2.myclass.vn/hinhanh/phim/antman.jpg',
        MoTa: 'Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, plan and pull off a heist that will'
      },
      {
        TenPhim:'Ant-Man',
        HinhAnh: 'http://sv2.myclass.vn/hinhanh/phim/fantasticfour.jpg',
        MoTa: 'Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, plan and pull off a heist that will'
      },
      ,
      {
        TenPhim:'Ant-Man',
        HinhAnh: 'http://sv2.myclass.vn/hinhanh/phim/fantasticfour.jpg',
        MoTa: 'Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, plan and pull off a heist that will'
      },
      ,
      {
        TenPhim:'Ant-Man',
        HinhAnh: 'http://sv2.myclass.vn/hinhanh/phim/fantasticfour.jpg',
        MoTa: 'Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, plan and pull off a heist that will'
      },
      ,
      {
        TenPhim:'Ant-Man',
        HinhAnh: 'http://sv2.myclass.vn/hinhanh/phim/fantasticfour.jpg',
        MoTa: 'Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, plan and pull off a heist that will'
      },
      ,
      {
        TenPhim:'Ant-Man',
        HinhAnh: 'http://sv2.myclass.vn/hinhanh/phim/fantasticfour.jpg',
        MoTa: 'Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, plan and pull off a heist that will'
      },
      ,
      {
        TenPhim:'Ant-Man',
        HinhAnh: 'http://sv2.myclass.vn/hinhanh/phim/fantasticfour.jpg',
        MoTa: 'Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, plan and pull off a heist that will'
      },
      ,
      {
        TenPhim:'Ant-Man',
        HinhAnh: 'http://sv2.myclass.vn/hinhanh/phim/fantasticfour.jpg',
        MoTa: 'Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, plan and pull off a heist that will'
      },
    ],
    [
      {
        TenPhim:'Ant-Man',
        HinhAnh: 'http://sv2.myclass.vn/hinhanh/phim/antman.jpg',
        MoTa: 'Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, plan and pull off a heist that will'
      },
      {
        TenPhim:'Ant-Man',
        HinhAnh: 'http://sv2.myclass.vn/hinhanh/phim/fantasticfour.jpg',
        MoTa: 'Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, plan and pull off a heist that will'
      },
      ,
      {
        TenPhim:'Ant-Man',
        HinhAnh: 'http://sv2.myclass.vn/hinhanh/phim/fantasticfour.jpg',
        MoTa: 'Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, plan and pull off a heist that will'
      },
      ,
      {
        TenPhim:'Ant-Man',
        HinhAnh: 'http://sv2.myclass.vn/hinhanh/phim/fantasticfour.jpg',
        MoTa: 'Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, plan and pull off a heist that will'
      },
      ,
      {
        TenPhim:'Ant-Man',
        HinhAnh: 'http://sv2.myclass.vn/hinhanh/phim/fantasticfour.jpg',
        MoTa: 'Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, plan and pull off a heist that will'
      },
      ,
      {
        TenPhim:'Ant-Man',
        HinhAnh: 'http://sv2.myclass.vn/hinhanh/phim/fantasticfour.jpg',
        MoTa: 'Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, plan and pull off a heist that will'
      },
      ,
      {
        TenPhim:'Ant-Man',
        HinhAnh: 'http://sv2.myclass.vn/hinhanh/phim/fantasticfour.jpg',
        MoTa: 'Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, plan and pull off a heist that will'
      },
      ,
      {
        TenPhim:'Ant-Man',
        HinhAnh: 'http://sv2.myclass.vn/hinhanh/phim/fantasticfour.jpg',
        MoTa: 'Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, plan and pull off a heist that will'
      },
    ]
  ];

  constructor() { }
  ChonLoaiTin(tin:string){
    this.loaitin = tin;
  }
  ngOnInit() {
  }
  XemThem(){
    this.dienAnh++;
  }
}
