import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomelayoutComponent } from './home/homelayout/homelayout.component';
import { TrangchuComponent } from './home/trangchu/trangchu.component';
import { TrangchitietComponent } from './home/trangchitiet/trangchitiet.component';
import { AdminlayoutComponent } from './admin/adminlayout/adminlayout.component';
import { QuanlynguoidungComponent } from './admin/quanlynguoidung/quanlynguoidung.component';
import { QuanlysidebarComponent } from './admin/quanlysidebar/quanlysidebar.component';
import { DangnhapComponent } from './home/dangnhap/dangnhap.component';
import { DatveComponent } from './home/datve/datve.component';
import { DangkyComponent } from './home/dangky/dangky.component';
import { IsregisterformGuard } from './isregisterform.guard';
import { IsloginGuard } from './islogin.guard';


const routes: Routes = [
  {path:'', component:HomelayoutComponent, 
	children:[
		{path:'',component:TrangchuComponent,canActivate:[IsloginGuard]},
		{path:'chitiet/:maphim',component:TrangchitietComponent},
		{path:'datve/:malichchieu',component:DatveComponent},
		{path:'dangnhap',component:DangnhapComponent},
		{path:'dangky',component:DangkyComponent, canDeactivate:[IsregisterformGuard]}
	  ]},
  {
    path:'admin',
    component:AdminlayoutComponent,  
    canActivate:[IsloginGuard],   
    children:[
      {
        path:'',
        canActivateChild:[IsloginGuard],
        children:[
          {path:'quanlynguoidung',component:QuanlynguoidungComponent},
          {path:'quanlysidebar',component:QuanlysidebarComponent}
        ]
      }
    ]
    
  }
];

@NgModule({
  providers: [IsregisterformGuard,IsloginGuard],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
