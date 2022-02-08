import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
// views
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { ResetComponent } from './views/reset/reset.component';
import { AddDealershipComponent } from './views/add-dealership/add-dealership.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { ChangepasswordComponent } from './views/changepassword/changepassword.component';
import { OtpScreenComponent } from './views/otp-screen/otp-screen.component';
import { ManageSystemsAdminsComponent } from './views/manage-systems-admins/manage-systems-admins.component';
import { ManageVehicleMakesComponent } from './views/manage-vehicle-makes/manage-vehicle-makes.component';




// routes
const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: "full" },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'reset', component: ResetComponent },
  { path: 'change-password', component: ChangepasswordComponent },
  { path: 'otp-screen', component: OtpScreenComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'add-dealership', component: AddDealershipComponent },
  { path: 'manage-admin', component: ManageSystemsAdminsComponent },
  { path: 'manage-vehicle-makes', component: ManageVehicleMakesComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
