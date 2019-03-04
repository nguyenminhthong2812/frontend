import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminindexComponent } from './adminindex/adminindex.component';
import { QuanlynguoidungComponent } from './quanlynguoidung/quanlynguoidung.component';
import { QuanlyphimComponent } from './quanlyphim/quanlyphim.component';
import { QuanlylichchieuComponent } from './quanlylichchieu/quanlylichchieu.component';
import { AdminlayoutComponent } from './adminlayout/adminlayout.component';
import { RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PipeModule } from '../pipe/pipe.module';
import {  MatFormFieldModule,MatDatepickerModule, MatInputModule, MatNativeDateModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Cài đặt 2 cái này để format datepicker (https://francescopantisano.it/angularjs-6-material-matdatepicker-italian-format-dd-mm-yyyy/)
//npm i @angular/material-moment-adapter
//npm add moment
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material';
import { MomentDateModule, MomentDateAdapter } from '@angular/material-moment-adapter';


//create our cost var with the information about the format that we want
export const MY_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MM YYYY',
    dateA11yLabel: 'DD/MM/YYYY',
    monthYearA11yLabel: 'MM YYYY',
  },
};

@NgModule({
  exports: [AdminindexComponent, QuanlynguoidungComponent, QuanlyphimComponent, QuanlylichchieuComponent, AdminlayoutComponent,
             MatDatepickerModule, MatInputModule, MatNativeDateModule,MatFormFieldModule,BrowserAnimationsModule],
  declarations: [AdminindexComponent, QuanlynguoidungComponent, QuanlyphimComponent, QuanlylichchieuComponent, AdminlayoutComponent],
  imports: [
    CommonModule,RouterModule,FormsModule, ReactiveFormsModule,PipeModule,
    MatDatepickerModule, MatInputModule, MatNativeDateModule,MatFormFieldModule,BrowserAnimationsModule
  ],
  providers:[
    // sử dụng cho format dd/MM/yyyy material datepicker
    { provide: MAT_DATE_LOCALE, useValue: 'it' }, //you can change useValue
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS }

  ]
})
export class AdminModule { }
