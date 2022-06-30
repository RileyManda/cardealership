import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
// views
import { ResetComponent } from './account/reset/reset.component';
import { AddDealershipComponent } from './views/add-dealership/add-dealership.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { ChangepasswordComponent } from './account/changepassword/changepassword.component';
import { OtpScreenComponent } from './account/otp-screen/otp-screen.component';
import { ManageSystemsAdminsComponent } from './views/manage-systems-admins/manage-systems-admins.component';
import { ManageVehicleMakesComponent } from './views/manage-vehicle-makes/manage-vehicle-makes.component';
import { AuthGuard } from './_helpers';

const accountModule = () =>
  import('./account/account.module').then((x) => x.AccountModule);
const usersModule = () =>
  import('./users/users.module').then((x) => x.UsersModule);

// routes
const routes: Routes = [
  { path: '', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'users', loadChildren: usersModule, canActivate: [AuthGuard] },
  { path: 'account', loadChildren: accountModule },
  { path: 'add-dealership', component: AddDealershipComponent },
  { path: 'change-password', component: ChangepasswordComponent },
  { path: 'otp', component: OtpScreenComponent },
  { path: 'manage-admin', component: ManageSystemsAdminsComponent },
  { path: 'manage-vehicles', component: ManageVehicleMakesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
