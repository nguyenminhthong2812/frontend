import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent implements OnInit {
  private status:boolean = true;
  public thongbao:string = 'Chào mừng đến với angular';
  constructor() { }
  DangXuat(){
    this.status = false;
    this.thongbao = 'Đã đăng xuất thành công';
  }
  DangNhap(email,pass){
    if(email === 'abc@gmail.com.vn' && pass === '123456'){
      this.status = true;
      this.thongbao = 'Đăng nhập thành công';
    }
    else{
      this.status = false;
      this.thongbao = 'Email hoặc mật khẩu không đúng.'
    }
  }
  ngOnInit() {
  }

}
