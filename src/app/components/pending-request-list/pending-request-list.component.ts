import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../services/request.service';
import { RequestSummary } from '../../request-summary';
@Component({
  selector: 'app-pending-request-list',
  templateUrl: './pending-request-list.component.html',
  styleUrls: ['./pending-request-list.component.css']
})
export class PendingRequestListComponent implements OnInit {

  private requests: Array<RequestSummary>;

  constructor(private requestService: RequestService) { }

  ngOnInit() {
    this.requestService.getPendingRequests().subscribe(requests => this.requests = requests);
  }

}
