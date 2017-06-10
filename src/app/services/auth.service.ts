import { Injectable } from "@angular/core"
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { LoginModel } from '../pages/login/login.model';

@Injectable()
export class AuthService{

    loggedIn : boolean;

    constructor (private http: Http){
        
    }

    logIn(userLogin: LoginModel): Observable<any>{

        //localStorage.setItem("token","myToken");

        const headers: Headers = new Headers();
        //headers.append('Accept', 'application/json');
        headers.append('Content-type', 'application/x-www-form-urlencoded');

        const opts: RequestOptions = new RequestOptions();
        opts.headers = headers;

        return this.http.post(
        'http://localhost:54042/oauth/token',
        `username=${userLogin.Username}&password=${userLogin.Password}&grant_type=password`,opts);
    }

    logOut(): void{
        localStorage.removeItem("token");
    }

    isLoggedIn(): boolean{
        if(localStorage.getItem("token") !== null)
            return true;
        else
            return false;
    }
  
}