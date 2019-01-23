import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GheComponent } from './ghe/ghe.component';
import { DanhsachgheComponent } from './danhsachghe/danhsachghe.component';
import { EditgheComponent } from './editghe/editghe.component';

@NgModule({
  exports: [GheComponent, DanhsachgheComponent,EditgheComponent],
  declarations: [GheComponent, DanhsachgheComponent, EditgheComponent],
  imports: [
    CommonModule
  ]
})
export class DatgheModule { }
