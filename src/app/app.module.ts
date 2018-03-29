import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ModalModule } from 'ng-bootstrap/modal';
import { TabsModule } from 'ng-bootstrap/tabs';
import { LoginComponent } from './components/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationService } from './services/authentication.service';
import { MyRequestListComponent } from './components/my-request-list/my-request-list.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PendingRequestListComponent } from './components/pending-request-list/pending-request-list.component';
import { ComponentsModule } from './components/components.module';

const appRoutes: Routes = [

];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ModalModule.forRoot(),
    TabsModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    AppRoutingModule,
    ComponentsModule
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
