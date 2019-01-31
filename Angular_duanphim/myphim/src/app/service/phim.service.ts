import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PhimService {

  constructor(private _http:HttpClient) { }

  LayDanhSachPhim():Observable<any>{
    let url = `http://sv2.myclass.vn/api/QuanLyPhim/LayDanhSachPhim?MaNhom=GP01`;
    let Observe = this._http.get(url);
    return Observe;
  }
  LayChiTietPhim(maPhim):Observable<any>{
    let url = `http://sv2.myclass.vn/api/QuanLyPhim/LayChiTietPhim?MaPhim=${maPhim}`;
    let Observe = this._http.get(url);
    return Observe;
  }
}
