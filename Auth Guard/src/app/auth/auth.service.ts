import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {AuthResponse} from './auth.model'
import { BehaviorSubject, Observable, Subject, catchError, tap, throwError } from "rxjs";
import { User } from "./user.model";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiKey : string = 'AIzaSyCz9C-1Wfx7gOnz0x0uea8VdaibBBzZvaA';

  user = new BehaviorSubject<any>(null);
  private tokenExpireTimer! : any;

  constructor(private http : HttpClient,
    private router : Router) {

  }
  signUpReq(userData : any){
    let headersOptions = new HttpHeaders();
    headersOptions = headersOptions.append('Access-Control-Allow-Origin', '*')
    return this.http.post<AuthResponse>(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.apiKey}`, {
      email : userData.userEmail,
      password : userData.userPassword,
      returnSecureToken : true
    },{
      headers : {
        'Access-Control-Allow-Origin' : '*'
      }
    }).pipe(
      catchError(this.handleError),
      tap(resData =>{
        this.hanldeAuthUser(resData)
      })
    )
  }

  loginReq(userData : any){
    return this.http.post<AuthResponse>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.apiKey}`,{
      email : userData.userEmail,
      password : userData.userPassword,
      returnSecureToken : true
    }).pipe(catchError(this.handleError),
    tap(resData =>{
      this.hanldeAuthUser(resData)
    }))
  }

  private handleError (errorRes : HttpErrorResponse){
    let errorMsg = errorRes.error.error.message;
    return throwError(errorMsg);
  }

  private hanldeAuthUser(resData : any){
    const expirationDate = new Date(new Date().getTime() +  +resData.expiresIn  * 1000);
    const user = new User(resData.email , resData.localId,resData.idToken, expirationDate);
    this.user.next(user);
    this.autoLogout(+resData.expiresIn * 1000)
    localStorage.setItem('userData', JSON.stringify(user));
  }

  logout(){
    this.user.next(null);
    this.router.navigate(['/login']);
    localStorage.removeItem('userData');
    if(this.tokenExpireTimer){
      clearTimeout(this.tokenExpireTimer);
      this.tokenExpireTimer = null;
    }
  }

  autoLogin(){
    const userData : any = localStorage.getItem('userData');
    const user = JSON.parse(userData);
    console.log(user);
    if(!user) {
      return;
    }else{
      const loadUser = new User(user.email, user.id, user._token, new Date(user._tokenExpireDate));
      console.log(loadUser);
      if(loadUser.token){
        this.user.next(loadUser);
        const expireTime = new Date(user._tokenExpireDate).getTime() - new Date().getTime();
        console.log(expireTime);
        this.autoLogout(expireTime);
        console.log('loaded user ', loadUser);
      }
    }
  }

  autoLogout(expirationDuration : number){
    this.tokenExpireTimer = setTimeout(()=>{
      this.logout();
    }, expirationDuration);
  }
}
