import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Employee } from '../employee';


@Injectable()
export class AuthenticationService {

  private loginUrl = 'http://localhost:8080/TRMS/login';

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    const body = new HttpParams().set('email', email).set('password', password);
    return this.http.post<any>(this.loginUrl, body);
  }
}
