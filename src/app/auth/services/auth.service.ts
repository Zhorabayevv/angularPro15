import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { HttpClient } from "@angular/common/http";

import { RegisterRequestInterface } from "src/app/auth/types/registerRequest.interface";
import { CurrentUserInterface } from "src/app/shared/types/currentUser.interface";
import { AuthResponseInterface } from 'src/app/auth/types/authResponse.interface';
import { LoginRequestInterface } from 'src/app/auth/types/loginRequest.interface';


@Injectable()

export class AuthService{

  constructor(
    private http: HttpClient
  ) {}

  getUser(response: AuthResponseInterface): CurrentUserInterface{
    return response.user;
  }

  register(data: RegisterRequestInterface): Observable<CurrentUserInterface>{
    const url = 'https://conduit.productionready.io/api/users';
    return this.http.post<AuthResponseInterface>(url, data).pipe(map(this.getUser));
  }

  login(data: LoginRequestInterface): Observable<CurrentUserInterface>{
    const url = 'https://conduit.productionready.io/api/users/login';
    return this.http.post<AuthResponseInterface>(url, data).pipe(map(this.getUser));
  }

  getCurrentUser(): Observable<CurrentUserInterface>{
    const url = 'https://conduit.productionready.io/api/user';
    return this.http.get(url).pipe(map(this.getUser));
  }
}
