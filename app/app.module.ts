import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';
import { AddUserDetailsComponent } from './user/add-user-details/add-user-details.component';
import { EditUserDetailsComponent } from './user/edit-user-details/edit-user-details.component';
import { ViewUserDetailsComponent } from './user/view-user-details/view-user-details.component';
import { AppRoutingModule } from './/app-routing.module';
import { CreateModalPopupComponent } from './create-modal-popup/create-modal-popup.component';
import { CustomerDashboardComponent } from './customer/customer-dashboard/customer-dashboard.component';
import { AddCustomerComponent } from './customer/add-customer/add-customer.component';
import { ViewCustomerDetailsComponent } from './customer/view-customer-details/view-customer-details.component';
import { EditCustomerDetailsComponent } from './customer/edit-customer-details/edit-customer-details.component';
import { DriverDashboardComponent } from './driver/driver-dashboard/driver-dashboard.component';
import { CreateCmodalPopupComponent } from './customer/create-cmodal-popup/create-cmodal-popup.component';
import { AddDriverDetailsComponent } from './driver/add-driver-details/add-driver-details.component';
import { EditDriverDetailsComponent } from './driver/edit-driver-details/edit-driver-details.component';
import { SelectModalComponent } from './driver/select-modal/select-modal.component';
import { EditSelectedComponent } from './driver/edit-selected/edit-selected.component';
import { DeadlinecompComponent } from './deadline/deadlinecomp/deadlinecomp.component';
import { EditDeadlineComponent } from './deadline/edit-deadline/edit-deadline.component';
import { CreateDeadlineComponent } from './deadline/create-deadline/create-deadline.component';


@NgModule({
  declarations: [
    AppComponent,
    UserDashboardComponent,
    AddUserDetailsComponent,
    EditUserDetailsComponent,
    ViewUserDetailsComponent,
    CreateModalPopupComponent,
    CustomerDashboardComponent,
    AddCustomerComponent,
    ViewCustomerDetailsComponent,
    EditCustomerDetailsComponent,
    DriverDashboardComponent,
    CreateCmodalPopupComponent,
    AddDriverDetailsComponent,
    EditDriverDetailsComponent,
    SelectModalComponent,
    EditSelectedComponent,
    DeadlinecompComponent,
    EditDeadlineComponent,
    CreateDeadlineComponent,
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
