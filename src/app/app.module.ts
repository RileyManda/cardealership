import {NgModule} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserModule} from '@angular/platform-browser';
// components
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './views/home/home.component';
import { LoaderComponent } from './components/loader/loader.component';
import { HeaderComponent } from './components/header/header.component';
import { DashheaderComponent } from './components/dashheader/dashheader.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { MatCardModule } from '@angular/material/card';
import { MatOptionModule } from '@angular/material/core';
import { MaterialModule } from './material-module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsertableComponent } from './components/usertable/usertable.component';
import { NotificationComponent } from './components/notification/notification.component';
import { AddSystemsAdminDialogComponent } from './components/add-systems-admin-dialog/add-systems-admin-dialog.component';
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

import { UploadFileComponent } from './components/upload-file/upload-file.component';
import { DealershipPrinscipleComponent } from './components/dealership-prinsciple/dealership-prinsciple.component';
import { TopGridComponent } from './components/top-grid/top-grid.component';
import { BottomGridComponent } from './components/bottom-grid/bottom-grid.component';

import { SalesHoursComponent } from './components/sales-hours/sales-hours.component';
import { ChangepasswordComponent } from './account/changepassword/changepassword.component';
import { OtpScreenComponent } from './account/otp-screen/otp-screen.component';
import { ModuleCheckboxesComponent } from './components/module-checkboxes/module-checkboxes.component';
import { ManageVehicleMakesComponent } from './views/manage-vehicle-makes/manage-vehicle-makes.component';
import { MainGridComponent } from './components/main-grid/main-grid.component';
import { ManageSystemsAdminsComponent } from './views/manage-systems-admins/manage-systems-admins.component';
import { TableAdminButtonsComponent } from './components/table-admin-buttons/table-admin-buttons.component';
import { ManageSystemsAdminTableComponent } from './components/manage-syst-admin-table/manage-syst-admin-table.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { EditAdminDialogComponent } from './components/edit-admin-dialog/edit-admin-dialog.component';

import { ManageSystemsAdministratorComponent } from './views/manage-systems-administrator/manage-systems-administrator.component';
import { VehicleMakesTableComponent } from './components/vehicle-makes-table/vehicle-makes-table.component';
import { VehicleMakesDialogComponent } from './components/vehicle-makes-dialog/vehicle-makes-dialog.component';
import { AddDealershipAdminDialogComponent } from './components/add-dealership-admin-dialog/add-dealership-admin-dialog.component';
import { AppLoaderComponent } from './components/app-loader/app-loader.component';


import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';


import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AlertComponent } from './components/alert/alert.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    LoaderComponent,
    HeaderComponent,
    DashheaderComponent,
    PageNotFoundComponent,
    UsertableComponent,
    NotificationComponent,
    AddSystemsAdminDialogComponent,
    AddDealershipComponent,
    FormGridComponent,
    SearchFormComponent,
    AdminCheckboxesComponent,
    AddChipComponent,
    UploadFileComponent,
    DealershipPrinscipleComponent,
    TopGridComponent,
    BottomGridComponent,
    MainGridComponent,
    SalesHoursComponent,
    ChangepasswordComponent,
    OtpScreenComponent,
    ModuleCheckboxesComponent,
    ManageVehicleMakesComponent,
    ManageSystemsAdminsComponent,
    TableAdminButtonsComponent,
    ManageSystemsAdminTableComponent,
    AvatarComponent,
    EditAdminDialogComponent,
    ManageSystemsAdministratorComponent,
    VehicleMakesTableComponent,
    VehicleMakesDialogComponent,
    AddDealershipAdminDialogComponent,
    AppLoaderComponent,


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
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider
],
bootstrap: [AppComponent]
})
export class AppModule { }
