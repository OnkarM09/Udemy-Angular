import { Injectable, inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { map, take, tap } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  return authService.user.pipe(
    take(1),
    map (user => {
      console.log(user);
      console.log(!!user);
    return !!user;
  }), tap(auth =>{
    console.log(auth);
    if(!auth){
      router.navigate(['/login']);
    }
  }))
};
