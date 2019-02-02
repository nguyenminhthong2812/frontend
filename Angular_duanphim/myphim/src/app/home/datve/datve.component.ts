import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PhimService } from 'src/app/service/phim.service';
import { PhongveService } from 'src/app/service/phongve.service';

@Component({
  selector: 'app-datve',
  templateUrl: './datve.component.html',
  styleUrls: ['./datve.component.css']
})
export class DatveComponent implements OnInit {
  public maLichChieu:string;
  constructor(private act:ActivatedRoute, private phongve:PhongveService) { }

  ngOnInit() {
    this.act.params.subscribe(
      kq => {
        this.maLichChieu = kq.malichchieu;
        console.log(this.maLichChieu);
        this.phongve.LayChiTietPhongVe(this.maLichChieu).subscribe(
          result => {
            console.log(result);
          }
        );
      },
      errors => {
        console.log(errors);
      }
    );
  }

}
