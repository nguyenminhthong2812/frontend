import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
}
