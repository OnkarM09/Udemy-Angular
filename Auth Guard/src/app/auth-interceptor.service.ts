import { HttpEvent, HttpEventType, HttpHandler, HttpHeaders, HttpInterceptor, HttpParams, HttpRequest } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Observable, exhaustMap, take, tap } from "rxjs";
import { AuthService } from "./auth/auth.service";

@Injectable()
export class AuthInterceptorServie implements HttpInterceptor{

  constructor(private authServie : AuthService){
  }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return this.authServie.user.pipe(take(1),
    exhaustMap( user =>{
      if(!user){
        return next.handle(req);
      }
      console.log(user._token)
      const modifiedReq = req.clone({
        params: new HttpParams().set('auth',user._token)
      })
      return next.handle(modifiedReq)
    }))
  }
}
