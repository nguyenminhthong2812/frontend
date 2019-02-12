import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminindexComponent } from './adminindex/adminindex.component';
import { QuanlynguoidungComponent } from './quanlynguoidung/quanlynguoidung.component';
import { QuanlyphimComponent } from './quanlyphim/quanlyphim.component';
import { QuanlylichchieuComponent } from './quanlylichchieu/quanlylichchieu.component';

@NgModule({
  exports: [AdminindexComponent, QuanlynguoidungComponent, QuanlyphimComponent, QuanlylichchieuComponent],
  declarations: [AdminindexComponent, QuanlynguoidungComponent, QuanlyphimComponent, QuanlylichchieuComponent],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
