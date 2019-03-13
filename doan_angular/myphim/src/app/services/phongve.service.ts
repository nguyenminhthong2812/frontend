import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PhongveService {

  constructor(private _http:HttpClient) { }
  LayChiTietVe(malichchieu){
    let api = `http://svcy2.myclass.vn/api/QuanLyPhim/ChiTietPhongVe?MaLichChieu=${malichchieu}`;
    let Observe = this._http.get(api);
    return Observe;
  }
  DatGhe(ve){
    let api=`http://svcy2.myclass.vn/api/QuanLyDatVe/DatVe`;
    let header = new HttpHeaders();
    header.append('Content-Type','application/json;charset=UTF-8');
    let Observe = this._http.post(api,ve,{headers:header});
    return Observe;
  }
}
