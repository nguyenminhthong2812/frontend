import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NguoidungService } from 'src/app/services/nguoidung.service';
@Component({
  selector: 'app-quanlynguoidung',
  templateUrl: './quanlynguoidung.component.html',
  styleUrls: ['./quanlynguoidung.component.css']
})
export class QuanlynguoidungComponent implements OnInit {
  public DanhSachNguoiDung:any;
  constructor(private nguoidung:NguoidungService) { }

  ngOnInit() {
    this.nguoidung.LayDSNguoiDung().subscribe(
      data => {
        this.DanhSachNguoiDung = data;
        console.log(this.DanhSachNguoiDung);
      },
      loi =>{
        alert(loi);
      }
    );
  }

}
