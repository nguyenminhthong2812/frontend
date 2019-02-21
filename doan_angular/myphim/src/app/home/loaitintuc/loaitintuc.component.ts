import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loaitintuc',
  templateUrl: './loaitintuc.component.html',
  styleUrls: ['./loaitintuc.component.css']
})
export class LoaitintucComponent implements OnInit {
  loaitin:string='DienAnh';
  dienAnh:number = 1;
  DanhSachTinTuc: Array<any> = [
    [
      [
        {
          TenPhim:'Cung Tâm Kế',
          HinhAnh: '../../../assets/imgs/tintuc1.jpg',
          MoTa: 'Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, plan and pull off a heist that will'
        },
        {
          TenPhim:'Bartel Angel',
          HinhAnh: '../../../assets/imgs/tintuc2.jpg',
          MoTa: 'Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, plan and pull off a heist that will'
        }
      ],
      [
        {
          TenPhim:'Cua lại vợ bầu',
          HinhAnh: '../../../assets/imgs/tintuc3.jpg',
          MoTa: 'Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, plan and pull off a heist that will'
        },        
        {
          TenPhim:'Nụ hôn đầu',
          HinhAnh: '../../../assets/imgs/tintuc4.jpg',
          MoTa: 'Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, plan and pull off a heist that will'
        }
      ],
      [        
        {
          TenPhim:'Cua lại vợ bầu',
          HinhAnh: '../../../assets/imgs/tintuc5.jpg',
          MoTa: 'Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, plan and pull off a heist that will'
        },        
        {
          TenPhim:'Nụ hôn đầu',
          HinhAnh: '../../../assets/imgs/tintuc1.jpg',
          MoTa: 'Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, plan and pull off a heist that will'
        },
        {
          TenPhim:'Cua lại vợ bầu',
          HinhAnh: '../../../assets/imgs/tintuc2.jpg',
          MoTa: 'Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, plan and pull off a heist that will'
        },        
        {
          TenPhim:'Nụ hôn đầu',
          HinhAnh: '../../../assets/imgs/tintuc3.jpg',
          MoTa: 'Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, plan and pull off a heist that will'
        }
      ]
    ],
    [
      [
        {
          TenPhim:'Cung Tâm Kế',
          HinhAnh: '../../../assets/imgs/tintuc4.jpg',
          MoTa: 'Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, plan and pull off a heist that will'
        },
        {
          TenPhim:'Bartel Angel',
          HinhAnh: '../../../assets/imgs/tintuc5.jpg',
          MoTa: 'Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, plan and pull off a heist that will'
        }
      ],
      [
        {
          TenPhim:'Cua lại vợ bầu',
          HinhAnh: '../../../assets/imgs/tintuc1.jpg',
          MoTa: 'Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, plan and pull off a heist that will'
        },        
        {
          TenPhim:'Nụ hôn đầu',
          HinhAnh: '../../../assets/imgs/owl-nu-hon-dau.jpg',
          MoTa: 'Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, plan and pull off a heist that will'
        }
      ],
      [        
        {
          TenPhim:'Cua lại vợ bầu',
          HinhAnh: '../../../assets/imgs/owl-cua-lai-vo-bau.jpg',
          MoTa: 'Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, plan and pull off a heist that will'
        },        
        {
          TenPhim:'Nụ hôn đầu',
          HinhAnh: '../../../assets/imgs/owl-nu-hon-dau.jpg',
          MoTa: 'Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, plan and pull off a heist that will'
        },
        {
          TenPhim:'Cua lại vợ bầu',
          HinhAnh: '../../../assets/imgs/owl-cua-lai-vo-bau.jpg',
          MoTa: 'Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, plan and pull off a heist that will'
        },        
        {
          TenPhim:'Nụ hôn đầu',
          HinhAnh: '../../../assets/imgs/owl-nu-hon-dau.jpg',
          MoTa: 'Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, plan and pull off a heist that will'
        }
      ]
    ],
    [
      [
        {
          TenPhim:'Cung Tâm Kế',
          HinhAnh: '../../../assets/imgs/owl-3d-cung-tam-ke-15482279337332.jpg',
          MoTa: 'Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, plan and pull off a heist that will'
        },
        {
          TenPhim:'Bartel Angel',
          HinhAnh: '../../../assets/imgs/owl-alita-battle-angel.jpg',
          MoTa: 'Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, plan and pull off a heist that will'
        }
      ],
      [
        {
          TenPhim:'Cua lại vợ bầu',
          HinhAnh: '../../../assets/imgs/owl-cua-lai-vo-bau.jpg',
          MoTa: 'Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, plan and pull off a heist that will'
        },        
        {
          TenPhim:'Nụ hôn đầu',
          HinhAnh: '../../../assets/imgs/owl-nu-hon-dau.jpg',
          MoTa: 'Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, plan and pull off a heist that will'
        }
      ],
      [        
        {
          TenPhim:'Cua lại vợ bầu',
          HinhAnh: '../../../assets/imgs/owl-cua-lai-vo-bau.jpg',
          MoTa: 'Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, plan and pull off a heist that will'
        },        
        {
          TenPhim:'Nụ hôn đầu',
          HinhAnh: '../../../assets/imgs/owl-nu-hon-dau.jpg',
          MoTa: 'Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, plan and pull off a heist that will'
        },
        {
          TenPhim:'Cua lại vợ bầu',
          HinhAnh: '../../../assets/imgs/owl-cua-lai-vo-bau.jpg',
          MoTa: 'Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, plan and pull off a heist that will'
        },        
        {
          TenPhim:'Nụ hôn đầu',
          HinhAnh: '../../../assets/imgs/owl-nu-hon-dau.jpg',
          MoTa: 'Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, plan and pull off a heist that will'
        }
      ]
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
