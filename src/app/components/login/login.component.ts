import { Component, OnInit } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { AuthenticationService } from '../../services/authentication.service';
import { Route, Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password; string;
  returnUrl: string;

  constructor(
    private authenticationService: AuthenticationService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/dashboard';
    if (localStorage.getItem('employee') !== null) {
      this.router.navigate([this.returnUrl]);
    }
  }

  login() {

    this.authenticationService.login(this.email, this.password).subscribe(data => {
      localStorage.setItem('employee', JSON.stringify(data));
      this.router.navigate([this.returnUrl]);
    });

  }
}
