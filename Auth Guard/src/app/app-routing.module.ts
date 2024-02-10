import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivateFn } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { TodoItemsComponent } from './todo-items/todo-items.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { authGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: 'login' , component: AuthComponent
  },
  {
    path: 'todo-list', component: TodoItemsComponent,  canActivate : [authGuard]
  },
  {
    path : '', redirectTo: '/login', pathMatch: 'full'
  },
  {
    path: '**', component : NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
