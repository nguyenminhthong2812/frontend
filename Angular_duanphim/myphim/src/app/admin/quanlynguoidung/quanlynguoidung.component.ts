import { Component, OnInit } from '@angular/core';
import { TransformService } from 'src/app/service/transform.service';

@Component({
  selector: 'app-quanlynguoidung',
  templateUrl: './quanlynguoidung.component.html',
  styleUrls: ['./quanlynguoidung.component.css']
})
export class QuanlynguoidungComponent implements OnInit {
  statusSideBar:boolean = false;
  constructor(private transform:TransformService) { }

  ngOnInit() {
  }
  Toggle(){
    this.statusSideBar == false ? this.statusSideBar = true : this.statusSideBar = false;
    this.transform.transformData(this.statusSideBar);    
  }
}
