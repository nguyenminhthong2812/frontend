import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TrangchuComponent } from '../home/trangchu/trangchu.component';
import { ChitietphimComponent } from '../home/chitietphim/chitietphim.component';
import { HomelayoutComponent } from '../home/homelayout/homelayout.component';
import { DangnhapComponent } from '../home/dangnhap/dangnhap.component';

const routes:Routes = [
  {
     path: '',component:HomelayoutComponent,
    children:[
      {
        path:'',component:TrangchuComponent
      },
      {
        path:'chitiet/:maphim',component:ChitietphimComponent
      },
      {
        path:'dangnhap',component:DangnhapComponent
      }
    ]    
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
