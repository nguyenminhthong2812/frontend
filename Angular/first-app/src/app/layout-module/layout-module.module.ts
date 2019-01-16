import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderLayoutComponent } from './header-layout/header-layout.component';
import { FooterLayoutComponent } from './footer-layout/footer-layout.component';

@NgModule({
  declarations: [HeaderLayoutComponent, FooterLayoutComponent],
  imports: [
    CommonModule
  ]
})
export class LayoutModuleModule { }
