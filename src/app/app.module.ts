import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {FetchService} from './services/fetch.service';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
      HttpClientModule
  ],
  providers: [FetchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
