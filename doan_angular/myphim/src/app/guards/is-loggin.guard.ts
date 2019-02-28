import { Injectable } from '@angular/core';
import { CanActivate,ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { NguoidungService } from '../services/nguoidung.service';


@Injectable({
  providedIn: 'root'
})
export class IsLogginGuard implements CanActivate,CanActivateChild {
  constructor(private router:Router, private nguoidung:NguoidungService){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {    
    if(this.nguoidung.IsLogged())
    {      
      return true;
    }
    this.router.navigate(['/dangnhap']);  
    return false;
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean { 
    let nguoidung = this.nguoidung.GetUser();   
    if(nguoidung.MaLoaiNguoiDung == 'QuanTri')
    {      
      return true;
    }
    alert('Vui lòng đăng nhập quyền admin!')
    this.router.navigate(['/dangnhap']);  
    return false;
  }
}
