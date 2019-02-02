import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomelayoutComponent } from './homelayout/homelayout.component';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { TrangchitietComponent } from './trangchitiet/trangchitiet.component';
import { TrangdatgheComponent } from './trangdatghe/trangdatghe.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PhimComponent } from './phim/phim.component';
import { DangkyComponent } from './dangky/dangky.component';
import { DangnhapComponent } from './dangnhap/dangnhap.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PipeModule } from '../pipe/pipe.module';
import { DatveComponent } from './datve/datve.component';

@NgModule({
  declarations: [HomelayoutComponent, TrangchuComponent, 
    TrangchitietComponent, TrangdatgheComponent,
     HeaderComponent, FooterComponent, PhimComponent, 
     DangkyComponent, DangnhapComponent, DatveComponent],
  exports: [HomelayoutComponent, TrangchuComponent, 
    TrangchitietComponent, TrangdatgheComponent, 
    HeaderComponent, FooterComponent, PhimComponent,
    DangkyComponent, DangnhapComponent],
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule,RouterModule,PipeModule
  ]
})
export class HomeModule { }
