import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminindexComponent } from './adminindex/adminindex.component';
import { QuanlynguoidungComponent } from './quanlynguoidung/quanlynguoidung.component';
import { QuanlyphimComponent } from './quanlyphim/quanlyphim.component';
import { QuanlylichchieuComponent } from './quanlylichchieu/quanlylichchieu.component';
import { AdminlayoutComponent } from './adminlayout/adminlayout.component';
import { RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  exports: [AdminindexComponent, QuanlynguoidungComponent, QuanlyphimComponent, QuanlylichchieuComponent, AdminlayoutComponent],
  declarations: [AdminindexComponent, QuanlynguoidungComponent, QuanlyphimComponent, QuanlylichchieuComponent, AdminlayoutComponent],
  imports: [
    CommonModule,RouterModule,FormsModule, ReactiveFormsModule
  ]
})
export class AdminModule { }
