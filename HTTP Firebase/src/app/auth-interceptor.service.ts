import { HttpEvent, HttpEventType, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable, tap } from "rxjs";

export class AuthInterceptorServie implements HttpInterceptor{
  intercept(req: HttpRequest<any>, next: HttpHandler) {
      const modieFiedReq = req.clone({
        headers : new HttpHeaders({
          'genericHeader' : "Ho"
        })
      })
      return next.handle(modieFiedReq)
  }
}
