import { Component, OnInit, ViewChild } from '@angular/core';
import { PhimService } from 'src/app/services/phim.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-quanlyphim',
  templateUrl: './quanlyphim.component.html',
  styleUrls: ['./quanlyphim.component.css']
})
export class QuanlyphimComponent implements OnInit {
  @ViewChild('formPhim') formPhim:NgForm;
  public DanhSachPhim:any = [];
  public model:any;
  constructor(private phim:PhimService) { }

  ngOnInit() {
    this.model = new Date().toISOString().split('T')[0];
    this.phim.LayDanhSachPhim().subscribe(
      kq => {
        this.DanhSachPhim = kq;
        console.log(kq);
      },
      loi =>{
        alert(loi);
      }

    );
  }

  ThemPhim(phim){
    console.log(phim);
  }

}
