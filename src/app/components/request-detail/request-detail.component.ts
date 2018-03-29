import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../services/request.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Employee } from '../../employee';
import { Request } from '../../request';
import { Event } from '../../event';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent implements OnInit {

  reason?: string;
  rejected: boolean;
  request: Request;
  employee: Employee;
  event: Event;
  loading = false;

  constructor(
    private requestService: RequestService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    this.requestService.getRequest(Number(id))
      .subscribe(data => {
        this.request = data[0];
        this.event = data[1];
        this.employee = data[2];
        this.loading = true;
      });
  }

  acceptRequest() {
    this.requestService.acceptRequest(this.request.id).subscribe(data => {
      this.router.navigate(['/dashboard']);
    });
  }

  toggleRejected() {
    this.rejected = !this.rejected;
  }

  rejectRequest() {
    this.requestService.rejectRequest(this.request.id, this.reason).subscribe(data => {
      this.router.navigate(['/dashboard']);
    });
  }
}
