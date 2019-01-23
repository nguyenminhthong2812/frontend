import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomelayoutComponent } from './homelayout/homelayout.component';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { TrangchitietComponent } from './trangchitiet/trangchitiet.component';
import { TrangdatgheComponent } from './trangdatghe/trangdatghe.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PhimComponent } from './phim/phim.component';

@NgModule({
  declarations: [HomelayoutComponent, TrangchuComponent, TrangchitietComponent, TrangdatgheComponent, HeaderComponent, FooterComponent, PhimComponent],
  exports: [HomelayoutComponent, TrangchuComponent, TrangchitietComponent, TrangdatgheComponent, HeaderComponent, FooterComponent, PhimComponent],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
