import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { PhimdangchieuComponent } from './phimdangchieu/phimdangchieu.component';
import { PhimsapchieuComponent } from './phimsapchieu/phimsapchieu.component';
import { ItemphimComponent } from './itemphim/itemphim.component';
import { LoaiphimComponent } from './loaiphim/loaiphim.component';
import { LoaitintucComponent } from './loaitintuc/loaitintuc.component';
import { DienanhComponent } from './dienanh/dienanh.component';
import { ReviewComponent } from './review/review.component';
import { KhuyenmaiComponent } from './khuyenmai/khuyenmai.component';
import { Itemtintuc1Component } from './itemtintuc1/itemtintuc1.component';
import { Itemtintuc2Component } from './itemtintuc2/itemtintuc2.component';
import { FooterComponent } from './footer/footer.component';
import { OwlModule } from 'ngx-owl-carousel';
@NgModule({
  exports: [TrangchuComponent, HeaderComponent, SliderComponent, PhimdangchieuComponent, PhimsapchieuComponent, ItemphimComponent, LoaiphimComponent, LoaitintucComponent, DienanhComponent, ReviewComponent, KhuyenmaiComponent, Itemtintuc1Component, Itemtintuc2Component, FooterComponent],
  declarations: [TrangchuComponent, HeaderComponent, SliderComponent, PhimdangchieuComponent, PhimsapchieuComponent, ItemphimComponent, LoaiphimComponent, LoaitintucComponent, DienanhComponent, ReviewComponent, KhuyenmaiComponent, Itemtintuc1Component, Itemtintuc2Component, FooterComponent],
  imports: [
    CommonModule,OwlModule
  ]
})
export class HomeModule { }
