import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
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
  // ThemNguoiDung(nguoiDung:NguoiDung){
  //   let url = `http://sv2.myclass.vn/api/QuanLyNguoiDung/ThemNguoiDung`;
  //   let header = new HttpHeaders();
  //   header.append('Content-Type','application/json;charset=UTF-8');
  //   let Observe = this._http.post(url,nguoiDung,{headers:header});
  //   return Observe;
  // }
  DatVe(ve){
    let apiDatVe=`http://sv2.myclass.vn/api/QuanLyDatVe/DatVe`;
    let header = new HttpHeaders();
    header.append('Content-Type','application/json;charset=UTF-8');
    let Obser = this._http.post(apiDatVe,ve,{headers:header});
    return Obser;
  }
  
}
