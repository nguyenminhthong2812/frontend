import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public obHocSinh:any = {Email:'',Hoten:''};
  constructor() { }
  SubMit(obEmail,obHoTen){
    this.obHocSinh.Email = obEmail.value;
    this.obHocSinh.Hoten = obHoTen.value;
  }
  ngOnInit() {
  }

}
