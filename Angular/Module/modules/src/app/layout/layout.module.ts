import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgForComponent } from './ng-for/ng-for.component';

@NgModule({
  exports:[HeaderComponent,FooterComponent,NgIfComponent,NgForComponent],
  declarations: [HeaderComponent, FooterComponent, NgIfComponent, NgForComponent],
  imports: [
    CommonModule,FormsModule
  ]
})
export class LayoutModule { }
