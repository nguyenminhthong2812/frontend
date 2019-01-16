import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public name:string = 'Nguyễn văn a';
  public obHocVien:any = {Hoten:'nguyen minh thong', Tuoi:25};
  constructor() { }

  ChangeName(obInput:any){
    this.obHocVien.Hoten = obInput.getAttribute('inputName');
  }
  ngOnInit() {
  }

}
