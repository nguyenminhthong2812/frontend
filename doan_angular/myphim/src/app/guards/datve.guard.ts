import { Injectable } from '@angular/core';
import { CanDeactivate, CanActivateChild, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DatveComponent } from '../home/datve/datve.component';
import { DangkyComponent } from '../home/dangky/dangky.component';
import { ChitietphimComponent } from '../home/chitietphim/chitietphim.component';

@Injectable({
  providedIn: 'root'
})
export class DatveGuard implements CanDeactivate<ChitietphimComponent> {
  canDeactivate(component:ChitietphimComponent):boolean{ 
    console.log(component.GetStatusDatVe())   
    if(!component.GetStatusDatVe())
      return confirm('Bạn chưa đặt vé! bạn có muốn rời trang không?')    
    return true;
  }
}
