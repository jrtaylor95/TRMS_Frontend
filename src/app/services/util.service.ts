import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UtilService {

  requestUrl = 'http://localhost:8080/TRMS/util';

  constructor(private http: HttpClient) { }

  getReimbursements(): Observable<Object> {
    return this.http.get(this.requestUrl);
  }
}
