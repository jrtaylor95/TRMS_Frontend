import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../services/request.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Request } from '../../request';
import { Event } from '../../event';
import { Router } from '@angular/router';
import { Employee } from '../../employee';
import { UtilService } from '../../services/util.service';

@Component({
  selector: 'app-new-request',
  templateUrl: './new-request.component.html',
  styleUrls: ['./new-request.component.css']
})
export class NewRequestComponent implements OnInit {

  employee: Employee;

  employeeEmail?: string;
  employeeFirstName?: string;
  employeeLastName?: string;
  requestJustification?: string;
  requestHoursMissed?: number;
  eventType?: string;
  eventDate?: Date;
  eventTime?: string;
  eventLocation?: string;
  eventDescription?: string;
  eventCost?: string;
  eventGradeFormat?: string;
  eventPassingGrade?: string;


  reimbursementPercentages: Object;
  availableReimbursementAmount: number;

  constructor(
    private requestService: RequestService,
    private http: HttpClient,
    private router: Router,
    private utilService: UtilService
  ) { }

  ngOnInit() {
    this.employee = JSON.parse(localStorage.getItem('employee'));
    this.employeeEmail = this.employee.email;
    this.employeeFirstName = this.employee.firstName;
    this.employeeLastName = this.employee.lastName;

    this.getReimbursements();
  }

  getReimbursements() {
    this.utilService.getReimbursements().subscribe(data => {
      this.reimbursementPercentages = data;
    });
  }

  updateReimbursementAmount() {
    if (this.eventType !== undefined) {
      this.availableReimbursementAmount = Number(this.eventCost) * (this.reimbursementPercentages[this.eventType] / 100);
    }
  }

  submitRequest() {
    const request = {
      'id': -1,
      'employeeId': this.employee.id,
      'workJustification' : this.requestJustification,
      'hoursMissed' : this.requestHoursMissed,
      'submittedDate': new Date(Date.now()),
      'status': 2,
      'grade': '',
      'reason': '',
      'reimbursementAmount': 0
    };

    const event = {
      'id': -1,
      'type' : Number(this.eventType),
      'date' : new Date(this.eventDate),
      'time' : this.eventTime,
      'location' : this.eventLocation,
      'description' : this.eventDescription,
      'cost' : Number(this.eventCost),
      'gradingFormat' :  this.eventGradeFormat,
      'passingGrade' : this.eventPassingGrade
    };

    this.requestService.createRequest(request, event).subscribe( data => {
      this.router.navigate(['/dashboard']);
    });
  }
}
