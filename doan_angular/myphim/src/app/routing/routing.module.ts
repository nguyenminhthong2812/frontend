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
import { AdminlayoutComponent } from '../admin/adminlayout/adminlayout.component';
import { AdminindexComponent } from '../admin/adminindex/adminindex.component';
import { LoginadminGuard } from '../guards/loginadmin.guard';

const routes:Routes = [
  {
     path: '',component:HomelayoutComponent,
    children:[
      {
        path:'',component:TrangchuComponent
      },
      {
        path:'chitiet/:maphim',component:ChitietphimComponent,canDeactivate:[DatveGuard],canActivate:[IsLogginGuard]
      },
      {
        path:'dangnhap',component:DangnhapComponent
      },
      {
        path:'dangky',component:DangkyComponent
      }
    ]    
  },
  {
    path:'admin',component:AdminindexComponent,canActivate:[LoginadminGuard]
  }
]

@NgModule({
  providers:[IsLogginGuard,DatveGuard,LoginadminGuard],
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
