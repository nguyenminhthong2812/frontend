import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { PhimdangchieuComponent } from './phimdangchieu/phimdangchieu.component';
import { PhimsapchieuComponent } from './phimsapchieu/phimsapchieu.component';
import { ItemphimComponent } from './itemphim/itemphim.component';
import { LoaiphimComponent } from './loaiphim/loaiphim.component';

@NgModule({
  declarations: [TrangchuComponent, HeaderComponent, SliderComponent, PhimdangchieuComponent, PhimsapchieuComponent, ItemphimComponent, LoaiphimComponent],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
