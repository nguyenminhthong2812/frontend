import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminlayoutComponent } from './adminlayout/adminlayout.component';
import { QuanlynguoidungComponent } from './quanlynguoidung/quanlynguoidung.component';

@NgModule({
  declarations: [AdminlayoutComponent, QuanlynguoidungComponent],
  exports: [AdminlayoutComponent, QuanlynguoidungComponent],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
