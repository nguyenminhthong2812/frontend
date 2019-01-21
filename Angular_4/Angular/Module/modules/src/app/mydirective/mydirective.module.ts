import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HoverDirective } from './hover.directive';

@NgModule({
  exports: [HoverDirective],
  declarations: [HoverDirective],
  imports: [
    CommonModule
  ]
})
export class MydirectiveModule { }
