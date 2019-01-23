import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrangchuModule } from './trangchu/trangchu.module';
import { DatgheModule } from './datghe/datghe.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TrangchuModule,
    DatgheModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
