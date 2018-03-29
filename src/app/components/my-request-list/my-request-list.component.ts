import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../services/request.service';
import { RequestSummary } from '../../request-summary';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-my-request-list',
  templateUrl: './my-request-list.component.html',
  styleUrls: ['./my-request-list.component.css']
})
export class MyRequestListComponent implements OnInit {

  loading = true;
  private myRequests: Array<RequestSummary>;

  constructor(private requestService: RequestService, private router: RouterModule) { }

  ngOnInit() {
    this.getMyRequests();
    this.loading = false;
  }

  getMyRequests() {
    this.requestService.getMyRequests().subscribe(requests => this.myRequests = requests);
  }

}
