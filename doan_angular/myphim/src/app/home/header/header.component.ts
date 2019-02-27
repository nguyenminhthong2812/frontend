import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public hoten:string;
  public statusTaiKhoan:boolean = false;
  constructor() { }

  ngOnInit() {
    let nguoiDung = JSON.parse(localStorage.getItem('NguoiDung'));
    if(nguoiDung){
      this.statusTaiKhoan = true;
      this.hoten = nguoiDung.HoTen;
    }
  }

  

  Logout(){    
    this.statusTaiKhoan = false;
    localStorage.removeItem('NguoiDung');
  }
}
