import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


import { AddUserDetailsComponent }      from './user/add-user-details/add-user-details.component';
import { UserDashboardComponent }  from './user/user-dashboard/user-dashboard.component';
import { ViewUserDetailsComponent }  from './user/view-user-details/view-user-details.component';
import { EditUserDetailsComponent }  from './user/edit-user-details/edit-user-details.component';
import { CustomerDashboardComponent } from './customer/customer-dashboard/customer-dashboard.component';
import { AddCustomerComponent } from './customer/add-customer/add-customer.component';
import { EditCustomerDetailsComponent } from './customer/edit-customer-details/edit-customer-details.component';
import { ViewCustomerDetailsComponent } from './customer/view-customer-details/view-customer-details.component';
import { DriverDashboardComponent } from './driver/driver-dashboard/driver-dashboard.component';
import { AddDriverDetailsComponent } from './driver/add-driver-details/add-driver-details.component';
import { SelectModalComponent } from './driver/select-modal/select-modal.Component';
import { EditSelectedComponent } from './driver/edit-selected/edit-selected.component';
import { DeadlinecompComponent } from './deadline/deadlinecomp/deadlinecomp.component';
import { EditDeadlineComponent } from './deadline/edit-deadline/edit-deadline.component';
import { CreateDeadlineComponent } from './deadline/create-deadline/create-deadline.component';
const routes: Routes = [
  { path: '', redirectTo: '/Userdashboard', pathMatch: 'full' },
  { path: 'Userdashboard', component: UserDashboardComponent },
  { path: 'Customerdashboard', component: CustomerDashboardComponent },
  { path: 'Driverdashboard', component: DriverDashboardComponent },
  { path: 'Deadline', component: DeadlinecompComponent }
  // { path: 'Userdashboard/edit', component: EditUserDetailsComponent },
  // { path: 'Userdashboard/add', component: AddUserDetailsComponent },
  // { path: 'Userdashboard/view', component: ViewUserDetailsComponent },

  
];



 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
