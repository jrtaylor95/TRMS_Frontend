import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Login } from './login';
@Injectable()
export class LoginService {

  constructor(private http: HttpClient) { }

  getLogin(): Observable<Login> {
    return this.http.get<Login>('login');
  }
}
