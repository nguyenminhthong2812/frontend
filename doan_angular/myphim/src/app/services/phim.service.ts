import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PhimService {

  constructor(private _http:HttpClient) { }

  LayDanhSachPhim():Observable<any>{
    let api = `http://sv2.myclass.vn/api/QuanLyPhim/LayDanhSachPhim?MaNhom=GP02`;
    let Observe = this._http.get(api);
    return Observe;
  }
  LayChiTietPhim(maPhim):Observable<any>{
    let api = `http://sv2.myclass.vn/api/QuanLyPhim/LayChiTietPhim?MaPhim=${maPhim}`;
    let Observe = this._http.get(api);
    return Observe;
  }
  ThemPhim(phim):Observable<any>{
    let api = `http://sv2.myclass.vn/api/QuanLyPhim/ThemPhimMoi`;
    let header = new HttpHeaders();
    header.append('Content-Type','application/json;charset=UTF-8');
    let Observe = this._http.post(api,phim,{headers:header});
    return Observe;
  }
  SuaPhim(phim):Observable<any>{
    let api = `http://sv2.myclass.vn/api/QuanLyPhim/CapNhatPhim`;
    let header = new HttpHeaders();
    header.append('Content-Type','application/json;charset=UTF-8');
    let Observe = this._http.post(api,phim,{headers:header});
    return Observe;
  }
  XoaPhim(maphim):Observable<any>{
    let api = `http://sv2.myclass.vn/api/QuanLyPhim/XoaPhim?MaPhim=${maphim}`;
    let Observe = this._http.delete(api);
    return Observe;
  }
  public uploadImage(image: File): Observable<any> {
    let api = `http://deworkarea.com/angapi/api/upload`;
    const formData = new FormData();
    formData.append('image', image);
    return this._http.post(api, formData);
  }


}
