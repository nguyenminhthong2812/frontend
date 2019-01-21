import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { DienanhComponent } from './trangchu/dienanh/dienanh.component';
import { FormlienheComponent } from './trangchu/formlienhe/formlienhe.component';
import { LienheComponent } from './trangchu/lienhe/lienhe.component';
import { HeaderComponent } from './trangchu/header/header.component';
import { KhuyenmaiComponent } from './trangchu/khuyenmai/khuyenmai.component';
import { LoaiphimComponent } from './trangchu/loaiphim/loaiphim.component';
import { PhimdangchieuComponent } from './trangchu/phimdangchieu/phimdangchieu.component';
import { PhimsapchieuComponent } from './trangchu/phimsapchieu/phimsapchieu.component';
import { ReviewComponent } from './trangchu/review/review.component';
import { SliderComponent } from './trangchu/slider/slider.component';
import { ThongtinlienheComponent } from './trangchu/thongtinlienhe/thongtinlienhe.component';
import { TintucComponent } from './trangchu/tintuc/tintuc.component';
import { ItemtintucComponent } from './trangchu/itemtintuc/itemtintuc.component';
import { ItemphimComponent } from './trangchu/itemphim/itemphim.component';

@NgModule({
  exports: [TrangchuComponent, DienanhComponent, FormlienheComponent, LienheComponent, HeaderComponent, KhuyenmaiComponent, LoaiphimComponent, PhimdangchieuComponent, PhimsapchieuComponent, ReviewComponent, SliderComponent, ThongtinlienheComponent, TintucComponent, ItemtintucComponent,ItemphimComponent],
  declarations: [TrangchuComponent, DienanhComponent, FormlienheComponent, LienheComponent, HeaderComponent, KhuyenmaiComponent, LoaiphimComponent, PhimdangchieuComponent, PhimsapchieuComponent, ReviewComponent, SliderComponent, ThongtinlienheComponent, TintucComponent, ItemtintucComponent, ItemphimComponent],
  imports: [
    CommonModule
  ]
})
export class TrangchuModule { }
