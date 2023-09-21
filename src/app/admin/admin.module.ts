import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { FormsModule } from '@angular/forms';

import { AdminLoginComponent } from "./adminlogin.component";
import { AdminService } from "./admin.service";
import { AdminRegistrationComponent } from "./adminregistration.component";
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { InventoryComponent } from './admindashboard/inventory/inventory.component';
import { PopularbooksComponent } from './admindashboard/popularbooks/popularbooks.component';


@NgModule({

    declarations:[AdminLoginComponent,AdminRegistrationComponent, AdmindashboardComponent,AdmindashboardComponent, InventoryComponent, PopularbooksComponent],
    imports:[ CommonModule, RouterModule,FormsModule],
    exports:[AdminLoginComponent,AdminRegistrationComponent,AdmindashboardComponent],
    providers:[AdminService]

})

export class AdminModule{

}