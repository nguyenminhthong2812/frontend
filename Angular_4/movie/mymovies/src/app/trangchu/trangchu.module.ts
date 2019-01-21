import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { LoaiphimComponent } from './loaiphim/loaiphim.component';
import { PhimdangchieuComponent } from './phimdangchieu/phimdangchieu.component';
import { PhimsapchieuComponent } from './phimsapchieu/phimsapchieu.component';
import { ItemphimComponent } from './itemphim/itemphim.component';
import { TintucComponent } from './tintuc/tintuc.component';
import { DienanhComponent } from './dienanh/dienanh.component';
import { ReviewComponent } from './review/review.component';
import { KhuyenmaiComponent } from './khuyenmai/khuyenmai.component';
import { LienheComponent } from './lienhe/lienhe.component';
import { FormlienheComponent } from './formlienhe/formlienhe.component';
import { ThongtinlienheComponent } from './thongtinlienhe/thongtinlienhe.component';

@NgModule({
  exports: [TrangchuComponent, HeaderComponent, SliderComponent, LoaiphimComponent, PhimdangchieuComponent, PhimsapchieuComponent, ItemphimComponent, TintucComponent, DienanhComponent, ReviewComponent, KhuyenmaiComponent, LienheComponent, FormlienheComponent, ThongtinlienheComponent],
  declarations: [TrangchuComponent, HeaderComponent, SliderComponent, LoaiphimComponent, PhimdangchieuComponent, PhimsapchieuComponent, ItemphimComponent, TintucComponent, DienanhComponent, ReviewComponent, KhuyenmaiComponent, LienheComponent, FormlienheComponent, ThongtinlienheComponent],
  imports: [
    CommonModule
  ]
})
export class TrangchuModule { }
