import { Component, OnInit } from '@angular/core';
import { PhimService } from 'src/app/service/phim.service';
import { Phim } from 'src/app/models/phim';

@Component({
  selector: 'app-trangchu',
  templateUrl: './trangchu.component.html',
  styleUrls: ['./trangchu.component.css']
})
export class TrangchuComponent implements OnInit {
  public DanhSachPhim:Phim[] = [];
  constructor(private phim:PhimService) { }

  ngOnInit() {
    this.phim.LayDanhSachPhim().subscribe(
      data => {
        this.DanhSachPhim = data;
      },
      loi => {
        console.log(loi);
      }
      
    );
  }

}
