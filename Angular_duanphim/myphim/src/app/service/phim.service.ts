import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhimService {

  constructor(private _http:HttpClient) { }

  LayDanhSachPhim():Observable<any>{
    let url = `http://sv2.myclass.vn/api/QuanLyPhim/LayDanhSachPhim?MaNhom=GP02`;
    let Observe = this._http.get(url);
    return Observe;
  }
  LayChiTietPhim(maPhim):Observable<any>{
    let url = `http://sv2.myclass.vn/api/QuanLyPhim/LayChiTietPhim?MaPhim=${maPhim}`;
    let Observe = this._http.get(url);
    return Observe;
  }
  LayChiTietPhongVe(maLichChieu):Observable<any>{
    let apiChiTietPhongVe = `http://sv2.myclass.vn/api/QuanLyPhim/ChiTietPhongVe?MaLichChieu=${maLichChieu}`;
    let Obser = this._http.get(apiChiTietPhongVe);
    return Obser;
  }
}
