import {NgModule} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserModule} from '@angular/platform-browser';
// components
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { LoaderComponent } from './components/loader/loader.component';
import { HeaderComponent } from './components/header/header.component';
import { DashheaderComponent } from './components/dashheader/dashheader.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { MatCardModule } from '@angular/material/card';
import { MatOptionModule } from '@angular/material/core';
import { MaterialModule } from './material-module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsertableComponent } from './components/usertable/usertable.component';
import { ResetComponent } from './views/reset/reset.component';
import { NotificationComponent } from './components/notification/notification.component';
import { AddAdminDialogComponent } from './components/add-admin-dialog/add-admin-dialog.component';
import { AddDealershipComponent } from './views/add-dealership/add-dealership.component';
import { FormGridComponent } from './components/form-grid/form-grid.component';
import { SearchFormComponent } from './components/search-form/search-form.component';





@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    LoaderComponent,
    HeaderComponent,
    DashheaderComponent,
    PageNotFoundComponent,
    DashboardComponent,
    UsertableComponent,
    ResetComponent,
    NotificationComponent,
    AddAdminDialogComponent,
    AddDealershipComponent,
    FormGridComponent,
    SearchFormComponent

  ],
  imports: [
    AppRoutingModule,
    MaterialModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
