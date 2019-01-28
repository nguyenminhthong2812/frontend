import { Component, OnInit } from '@angular/core';
import { TransformService } from 'src/app/service/transform.service';

@Component({
  selector: 'app-quanlysidebar',
  templateUrl: './quanlysidebar.component.html',
  styleUrls: ['./quanlysidebar.component.css']
})
export class QuanlysidebarComponent implements OnInit {
  status:boolean=false;
  constructor(private transform:TransformService) { }

  ngOnInit() {
    this.transform.asData.subscribe(
      kq =>{
        this.status = kq;
      }
    );
  }

}
