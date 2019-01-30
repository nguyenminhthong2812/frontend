import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminlayoutComponent } from './adminlayout/adminlayout.component';
import { QuanlynguoidungComponent } from './quanlynguoidung/quanlynguoidung.component';
import { QuanlysidebarComponent } from './quanlysidebar/quanlysidebar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AdminlayoutComponent, QuanlynguoidungComponent, QuanlysidebarComponent],
  exports: [AdminlayoutComponent, QuanlynguoidungComponent,QuanlysidebarComponent],
  imports: [
    CommonModule,RouterModule
  ]
})
export class AdminModule { }
