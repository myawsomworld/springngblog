import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {RegisterPayload} from "./register-payload";
import {Observable} from 'rxjs';
import {LoginPayload} from "./login-Payload";
import {LocalStorageService} from "ngx-webstorage";
import {map} from "rxjs/operators";
import {JwtAutResponse} from "./Jwt-aut-reponse";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = 'http://localhost:8080/';

  constructor(private httpClient:HttpClient, private localStorageService: LocalStorageService) { }

  register(registerPayload: RegisterPayload):Observable<any>{
    return this.httpClient.post(this.url + 'api/auth/signup', registerPayload);
}

  login(loginPayload:LoginPayload):Observable<boolean> {

    return this.httpClient.post<JwtAutResponse>(this.url + 'api/auth/login', loginPayload).pipe(map((data) => {
      console.log(data.authenticationToken);
      this.localStorageService.store('authenticationToken', data.authenticationToken);
      this.localStorageService.store('username',data.username);

      return true;
      }
    ));
  }
}
