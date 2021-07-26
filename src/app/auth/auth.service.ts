import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  getUser$() {
    return this.httpClient.get('.auth/me');
  }

  getHello$(name:string) {
    return this.httpClient.get(`${environment.endpoint}/api/HelloWorld?name=${name}`);
  }
}
