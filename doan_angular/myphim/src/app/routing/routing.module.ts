import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TrangchuComponent } from '../home/trangchu/trangchu.component';
import { ChitietphimComponent } from '../home/chitietphim/chitietphim.component';
import { HomelayoutComponent } from '../home/homelayout/homelayout.component';
import { DangnhapComponent } from '../home/dangnhap/dangnhap.component';
import { DangkyComponent } from '../home/dangky/dangky.component';
import { IsLogginGuard } from '../guards/is-loggin.guard';
import { DatveGuard } from '../guards/datve.guard';

const routes:Routes = [
  {
     path: '',component:HomelayoutComponent,
    children:[
      {
        path:'',component:TrangchuComponent,canActivate:[IsLogginGuard]
      },
      {
        path:'chitiet/:maphim',component:ChitietphimComponent,canDeactivate:[DatveGuard]
      },
      {
        path:'dangnhap',component:DangnhapComponent
      },
      {
        path:'dangky',component:DangkyComponent
      }
    ]    
  }
]

@NgModule({
  providers:[IsLogginGuard,DatveGuard],
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
