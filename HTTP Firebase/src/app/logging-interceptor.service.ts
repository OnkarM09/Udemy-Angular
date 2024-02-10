import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable, tap } from "rxjs";

export class LoggingInterceptorServie implements HttpInterceptor{
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log("One more interceptor");
      return next.handle(req).pipe(
        tap(event=>{
          if(event.type== HttpEventType.Response){
            console.log("response arrived");
          }
        })
      )
  }
}
