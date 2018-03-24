import { Component, OnInit } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  login(event) {
    event.preventDefault();
    const email: string = event.target.elements[0].value;
    const password: string = event.target.elements[1].value;
    console.log(email, password);
  }
}
