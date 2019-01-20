import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {
  public SinhVien:Array<any>=[
    {maSV:'01',hoTen:'Nguyễn Văn A'},
    {maSV:'02',hoTen:'Nguyễn Văn B'},
    {maSV:'03',hoTen:'Nguyễn Văn C'}
  ];
  constructor() { }
  ThemSV(ma,ten){
    this.SinhVien.push({maSV:ma,hoTen:ten});
  }
  ngOnInit() {
  }

}
