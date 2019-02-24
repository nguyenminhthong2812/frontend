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
import { Itemtintuc2ChitietComponent } from './itemtintuc2-chitiet/itemtintuc2-chitiet.component';
import { ChitietphimComponent } from './chitietphim/chitietphim.component';
import { PipeModule } from '../pipe/pipe.module';
import { RouterModule } from '@angular/router';
import { HomelayoutComponent } from './homelayout/homelayout.component';
import { DangnhapComponent } from './dangnhap/dangnhap.component';
import { LichchieuComponent } from './lichchieu/lichchieu.component';
import { DatveComponent } from './datve/datve.component';
import { GheComponent } from './ghe/ghe.component';
import { DangkyComponent } from './dangky/dangky.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  exports: [HomelayoutComponent,TrangchuComponent, HeaderComponent, SliderComponent, PhimdangchieuComponent, PhimsapchieuComponent, ItemphimComponent, LoaiphimComponent, LoaitintucComponent, DienanhComponent, ReviewComponent, KhuyenmaiComponent, Itemtintuc1Component, Itemtintuc2Component, FooterComponent,Itemtintuc2ChitietComponent,ChitietphimComponent, DangnhapComponent,LichchieuComponent, DatveComponent, GheComponent,DangkyComponent],
  declarations: [HomelayoutComponent,TrangchuComponent, HeaderComponent, SliderComponent, PhimdangchieuComponent, PhimsapchieuComponent, ItemphimComponent, LoaiphimComponent, LoaitintucComponent, DienanhComponent, ReviewComponent, KhuyenmaiComponent, Itemtintuc1Component, Itemtintuc2Component, FooterComponent, Itemtintuc2ChitietComponent, ChitietphimComponent,  DangnhapComponent, LichchieuComponent, DatveComponent, GheComponent, DangkyComponent],
  imports: [
    CommonModule,OwlModule,PipeModule,RouterModule,FormsModule,ReactiveFormsModule
  ]
})
export class HomeModule { }
