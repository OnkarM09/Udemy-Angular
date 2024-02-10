import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AssignmentFormComponent } from './assignment-form/assignment-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveAssignmentComponent } from './reactive-assignment/reactive-assignment.component';

@NgModule({
  declarations: [
    AppComponent,
    AssignmentFormComponent,
    ReactiveFormComponent,
    ReactiveAssignmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
