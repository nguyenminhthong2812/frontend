import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NguoiDung } from '../home/models/nguoidung';

@Injectable({
  providedIn: 'root'
})
export class NguoidungService {

  constructor(private _http:HttpClient) { }
  
  LayDSNguoiDung(){
    let api = `http://sv2.myclass.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01`;
    let Observe = this._http.get(api);
    return Observe;
  }
  ThemNguoiDung(nguoidung){
    let api = `http://sv2.myclass.vn/api/QuanLyNguoiDung/ThemNguoiDung`;
    let header = new HttpHeaders();
    header.append('Content-Type','application/json;charset=UTF-8');    
    let Observe = this._http.post(api,nguoidung,{headers:header});
    return Observe;
  }
  CapNhatNguoiDung(nguoidung){
    let api = `http://sv2.myclass.vn/api/QuanLyNguoiDung/CapNhatThongTin`;
    let header = new HttpHeaders();
    header.append('Content-Type','application/json;charset=UTF-8');
    let Observe = this._http.post(api,nguoidung,{headers:header});
    return Observe;
  }
  XoaNguoiDung(taikhoan){
    let api = `http://sv2.myclass.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taikhoan}`;
    let Observe = this._http.delete(api);
    return Observe;
  }
  DangNhap(taikhoan,matkhau){
    let api = `http://sv2.myclass.vn/api/QuanLyNguoiDung/DangNhap?taikhoan=${taikhoan}&matkhau=${matkhau}`;
    let header = new HttpHeaders();
    header.append('Content-Type','application/json;charset=UTF-8');
    let Observe = this._http.post(api,{headers:header});
    return Observe;
  }

  // hàm sử dụng cho guard
  IsLogged():boolean{
    let nguoiDung = JSON.parse(localStorage.getItem('NguoiDung'));
    if(nguoiDung)
      return true;
    else
      return false;
  }
  GetUser():any{
    let nguoiDung = JSON.parse(localStorage.getItem('NguoiDung'));
    if(nguoiDung)
      return nguoiDung;
  }
}
