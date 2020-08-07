import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Model } from './model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  private currentUserSubject: BehaviorSubject<Model>;
    public currentUser: Observable<Model>;

    constructor(private http: HttpClient) {}

    public login(userInfo: Model){
      localStorage.setItem('AUTH_TOKEN', "access_token");
    }
  
    public isLoggedIn(){
      return localStorage.getItem('AUTH_TOKEN') !== null;
  
    }
  
    public logout(){
      localStorage.removeItem('AUTH_TOKEN');
    }
  
}
