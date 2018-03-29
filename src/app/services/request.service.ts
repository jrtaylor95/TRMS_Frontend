import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpParams } from '@angular/common/http';
import { RequestSummary } from '../request-summary';
import { Request } from '../request';
import { Event } from '../event';
import { Employee } from '../employee';

@Injectable()
export class RequestService {

  private requestUrl = 'http://localhost:8080/TRMS/request';

  constructor(private http: HttpClient) { }

  getMyRequests(): Observable<Array<RequestSummary>> {
    const body = new HttpParams().set('myId', JSON.parse(localStorage.getItem('employee')).id);
    return this.http.get<Array<RequestSummary>>(this.requestUrl + '?' + body.toString());
  }

  getPendingRequests(): Observable<Array<RequestSummary>> {
    const body = new HttpParams().set('employeeId', JSON.parse(localStorage.getItem('employee')).id);
    return this.http.get<Array<RequestSummary>>(this.requestUrl + '?' + body.toString());
  }

  getRequest(id: number): Observable<[Request, Event, Employee]> {
    return this.http.get<[Request, Event, Employee]>(this.requestUrl + '?requestId=' + id);
  }

  createRequest(request: Request, event: Event): Observable<any> {
    const body = new HttpParams()
      .set('request', JSON.stringify(request))
      .set('event', JSON.stringify(event));
    return this.http.post<Request>(this.requestUrl, body);
  }

  updateRequest(request: Request, event: Event) {
    const body = new HttpParams()
      .set('option', '1')
      .set('request', JSON.stringify(request))
      .set('event', JSON.stringify(Event));
    this.http.put<any>(this.requestUrl + '?' + body.toString(), '');
  }

  rejectRequest(id: number, reason: string): Observable<any> {
    const body = new HttpParams()
      .set('option', '2')
      .set('requestId', String(id))
      .set('reason', reason);
    return this.http.put<any>(this.requestUrl + '?' + body.toString(), '');
  }

  acceptRequest(id: number): Observable<any> {
    const employee: Employee = JSON.parse(localStorage.getItem('employee'));
    const option = employee.department === 4 && employee.type === 1 ? '4' : '3';
    const body = new HttpParams().set('option', option).set('requestId', String(id));
    return this.http.put<any>(this.requestUrl + '?' + body.toString(), '');
  }
}
