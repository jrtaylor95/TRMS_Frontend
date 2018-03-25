import { Component, OnInit } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { LoginService } from '../login.service';
import { Employee } from '../employee';
import { Login } from '../login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  me: Employee;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  login(event) {
    event.preventDefault();
    const email: string = event.target.elements[0].value;
    const password: string = event.target.elements[1].value;

    this.loginService.login(email, password).subscribe(me => this.me = me);
    console.log(email, password);
  }
}
