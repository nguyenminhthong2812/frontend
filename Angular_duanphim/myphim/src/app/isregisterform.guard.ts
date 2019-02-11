import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { DangkyComponent } from './home/dangky/dangky.component';

@Injectable() 


  export class IsregisterformGuard implements CanDeactivate<DangkyComponent>{
    canDeactivate( component: DangkyComponent): boolean {
      if(!component.hasChanges())
          return confirm('Bạn chưa tạo tài khoản?');
      return true;
    }
  }         
