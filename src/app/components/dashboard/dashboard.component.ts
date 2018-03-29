import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../../employee';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  canApprove = false;

  constructor(private router: Router) { }

  ngOnInit() {
    const employee: Employee = JSON.parse(localStorage.getItem('employee'));

    this.canApprove = employee.type > 1;
  }

  logOut() {
    localStorage.removeItem('employee');
    this.router.navigate(['/login']);
  }

}
