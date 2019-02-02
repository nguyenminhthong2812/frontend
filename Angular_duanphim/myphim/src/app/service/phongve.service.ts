import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhongveService {

  constructor(private _http:HttpClient) { }
  LayChiTietPhongVe(maLichChieu):Observable<any>{
    let apiChiTietPhongVe = `http://sv2.myclass.vn/api/QuanLyPhim/ChiTietPhongVe?MaLichChieu=${maLichChieu}`;
    let Obser = this._http.get(apiChiTietPhongVe);
    return Obser;
  }
}
