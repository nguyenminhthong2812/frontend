import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { NguoidungService } from '../services/nguoidung.service';

@Injectable({
  providedIn: 'root'
})
export class LoginadminGuard implements CanActivate {

  constructor(private router:Router, private nguoidung:NguoidungService){}
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean { 
    let nguoidung = this.nguoidung.GetUser();   
    if(nguoidung){
      if(nguoidung.MaLoaiNguoiDung == 'QuanTri')
      {      
        return true;
      }
      else{
        alert('Vui lòng đăng nhập quyền admin!')
        this.router.navigate(['/dangnhap']);  
        return false;
      }
    }    
    alert('Vui lòng đăng nhập!')
    this.router.navigate(['/dangnhap']);  
    return false;
  }
  
}
