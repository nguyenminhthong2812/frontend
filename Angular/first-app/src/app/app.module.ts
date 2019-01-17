import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { HeaderComponent } from './trangchu/header/header.component';
import { IndexComponent } from './trangchu/index/index.component';
import { FooterComponent } from './trangchu/footer/footer.component';
import { SliderComponent } from './trangchu/index/slider/slider.component';
import { ContentComponent } from './trangchu/index/content/content.component';
import { ItemComponent } from './trangchu/index/content/item/item.component';
import { LayoutModuleModule } from './layout-module/layout-module.module';

@NgModule({
  declarations: [
    AppComponent,
    TrangchuComponent,
    HeaderComponent,
    IndexComponent,
    FooterComponent,
    SliderComponent,
    ContentComponent,
    ItemComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
