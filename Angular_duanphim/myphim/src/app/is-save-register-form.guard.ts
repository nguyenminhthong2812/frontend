import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { CanDeactivate } from '@angular/router';
import { DangkyComponent } from './home/dangky/dangky.component';

@Injectable({
  providedIn: 'root'
})
export class IsSaveRegisterForm implements CanDeactivate<DangkyComponent> {
  //constructor(private permissions: Permissions, private currentUser: UserToken) {}
 
  canDeactivate(
    component: DangkyComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot
  ): boolean {
    console.log(component.CheckInputForm);
    if(component.CheckInputForm == true)
      return true;
    else
      return false;
  }
}

