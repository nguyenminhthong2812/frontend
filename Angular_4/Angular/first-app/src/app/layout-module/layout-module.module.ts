import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderLayoutComponent } from './header-layout/header-layout.component';
import { FooterLayoutComponent } from './footer-layout/footer-layout.component';
import { MyDirectiveModule } from '../my-directive/my-directive.module';
@NgModule({
  exports: [HeaderLayoutComponent, FooterLayoutComponent],
  declarations: [HeaderLayoutComponent, FooterLayoutComponent],
  imports: [
    CommonModule,MyDirectiveModule
  ]
})
export class LayoutModuleModule { }
