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
import { AuthComponent } from './auth/auth.component';
import { TodoItemsComponent } from './todo-items/todo-items.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    TodoItemsComponent,
    NotFoundComponent,
    LoadingSpinnerComponent
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
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
