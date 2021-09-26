import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface IUser {
  clientPrincipal: object | null
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  getUser$() {
    return this.httpClient.get<IUser>('localhost:4280/.auth/me');
  }

  getHello$(name:string) {
    return this.httpClient.post(`api/HelloWorld`,{});
    // return this.httpClient.get(`api/HelloWorld?name=Hello`, {responseType: 'text'});

  }
}
