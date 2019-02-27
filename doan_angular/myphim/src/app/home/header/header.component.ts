import { Component, OnInit } from '@angular/core';
import { NguoidungService } from 'src/app/services/nguoidung.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  get taikhoan():any{
    return this.nguoidung.GetUser();    
  }
  constructor(private nguoidung:NguoidungService) {         
  }

  ngOnInit() {
    //console.log(this.taikhoan);
    // let nguoiDung = JSON.parse(localStorage.getItem('NguoiDung'));
    // if(nguoiDung){
    //   this.statusTaiKhoan = true;
    //   this.hoten = nguoiDung.HoTen;
    // }
  }

  

  Logout(){        
    localStorage.removeItem('NguoiDung');
  }
}
