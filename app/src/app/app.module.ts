import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewVideoComponent } from './view-video/view-video.component';
import { ApiService } from './service/api.service';

import { MatToolbarModule } from '@angular/material/toolbar';

import { VimeModule } from '@vime/angular';

@NgModule({
  declarations: [
    AppComponent,
    ViewVideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    VimeModule,
    MatToolbarModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
