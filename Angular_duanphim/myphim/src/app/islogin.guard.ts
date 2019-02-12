import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
// import { DangnhapComponent } from './home/dangnhap/dangnhap.component';
import { NguoidungService } from './service/nguoidung.service';

@Injectable({
  providedIn: 'root'
})
export class IsloginGuard implements CanActivate, CanActivateChild {

  constructor(private nguoidung:NguoidungService,private router:Router){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;
	  console.log('Url:'+ url);
    if(this.nguoidung.IsLogged())
    {
      console.log('có tài khoản');
      return true;          
    }    
    this.router.navigate([url]);  
    return false;
    
    
  }
  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let nguoiDung = this.nguoidung.GetUser();
    if(nguoiDung.MaLoaiNguoiDung == 'KhachHang')
      return true;
      else {
        console.log('Unauthorized to open link: '+ state.url);
        return false;
      }
    
  }
}
