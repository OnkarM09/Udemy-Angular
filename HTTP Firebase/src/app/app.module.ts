import { HttpInterceptor } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { PostService } from './post.service';
import { AuthInterceptorServie } from './auth-interceptor.service';
import { LoggingInterceptorServie } from './logging-interceptor.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [PostService ,
  {
    provide : HTTP_INTERCEPTORS,
    useClass : AuthInterceptorServie,
    multi : true
  },{
    provide: HTTP_INTERCEPTORS,
    useClass : LoggingInterceptorServie,
    multi : true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
