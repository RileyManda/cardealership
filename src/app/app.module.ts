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
import { AdminCheckboxesComponent } from './components/admin-checkboxes/admin-checkboxes.component';
import { AddChipComponent } from './components/add-chip/add-chip.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { DashComponent } from './views/dash/dash.component';
import { UploadFileComponent } from './components/upload-file/upload-file.component';
import { DealershipPrinscipleComponent } from './components/dealership-prinsciple/dealership-prinsciple.component';
import { TopGridComponent } from './components/top-grid/top-grid.component';
import { BottomGridComponent } from './components/bottom-grid/bottom-grid.component';
import { MidGridComponent } from './components/mid-grid/mid-grid.component';
import { SalesHoursComponent } from './components/sales-hours/sales-hours.component';





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
    SearchFormComponent,
    AdminCheckboxesComponent,
    AddChipComponent,
    DashComponent,
    UploadFileComponent,
    DealershipPrinscipleComponent,
    TopGridComponent,
    BottomGridComponent,
    MidGridComponent,
    SalesHoursComponent

  ],
  imports: [
    AppRoutingModule,
    MaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
