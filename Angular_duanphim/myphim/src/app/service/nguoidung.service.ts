import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { NguoiDung } from '../models/NguoiDung';
@Injectable({
  providedIn: 'root'
})
export class NguoidungService {

  constructor(private _http:HttpClient) { }

  LayDanhSach():Observable<any>{
    let url = `http://sv2.myclass.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01`;
    let Observe = this._http.get(url);
    return Observe;
  }
  ThemNguoiDung(nguoiDung:NguoiDung){
    let url = `http://sv2.myclass.vn/api/QuanLyNguoiDung/ThemNguoiDung`;
    let header = new HttpHeaders();
    header.append('Content-Type','application/json;charset=UTF-8');
    let Observe = this._http.post(url,nguoiDung,{headers:header});
    return Observe;
  }
  DangNhap(taiKhoan,matKhau){
    let url = `http://sv2.myclass.vn/api/QuanLyNguoiDung/DangNhap?taikhoan=${taiKhoan}&matkhau=${matKhau}`;
    let header = new Headers();
    header.append('Content-Type','application/json;charset=UTF-8');
    let Observe = this._http.post(url,{headers:header});
    return Observe;
  }
}
