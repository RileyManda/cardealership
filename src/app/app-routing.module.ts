import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
// views
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { ResetComponent } from './views/reset/reset.component';
import { AddDealershipComponent } from './views/add-dealership/add-dealership.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';




// routes
const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: "full" },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'reset', component: ResetComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'add-dealership', component: AddDealershipComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
