import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyRequestListComponent } from './my-request-list/my-request-list.component';
import { PendingRequestListComponent } from './pending-request-list/pending-request-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RequestService } from '../services/request.service';
import { RequestDetailComponent } from './request-detail/request-detail.component';
import { NewRequestComponent } from './new-request/new-request.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UtilService } from '../services/util.service';

@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot(),
    FormsModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    LoginComponent,
    DashboardComponent,
    MyRequestListComponent,
    PendingRequestListComponent
  ],
  declarations: [
    LoginComponent,
    DashboardComponent,
    MyRequestListComponent,
    PendingRequestListComponent,
    RequestDetailComponent,
    NewRequestComponent
  ],
  providers: [
    RequestService,
    UtilService
  ]
})
export class ComponentsModule { }
