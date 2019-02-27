import { Injectable } from '@angular/core';
import { CanActivate,ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { NguoidungService } from '../services/nguoidung.service';


@Injectable({
  providedIn: 'root'
})
export class IsLogginGuard implements CanActivate {
  constructor(private router:Router, private nguoidung:NguoidungService){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {    
    if(this.nguoidung.IsLogged())
    {      
      return true;
    }
    this.router.navigate(['/dangnhap']);  
    return false;
  }
}
