import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HightlightDirective } from './hightlight.directive';

@NgModule({
  exports: [HightlightDirective],
  declarations: [HightlightDirective],
  imports: [
    CommonModule
  ]
})
export class MyDirectiveModule { }
