import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsNavbarComponent } from './components/bs-navbar/bs-navbar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RouterModule } from '@angular/router';
import { NgbAlertModule, NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    BsNavbarComponent,
    HomeComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([]),
    NgbAlertModule,
    NgbPaginationModule,
    NgbModule,
  ],
  exports :[
    BsNavbarComponent

  ]
})
export class CoreModule { }
