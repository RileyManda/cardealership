import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { LayoutComponent } from './layout.component';
import { DashboardComponent } from '../views/dashboard/dashboard.component';
import { MaterialModule } from '../material-module';
import { MainHeaderComponent } from '../components/main-header/main-header.component';
import { UsertableComponent } from '../components/usertable/usertable.component';
import { AddDealershipComponent } from '../views/add-dealership/add-dealership.component';
import { FormGridComponent } from '../components/form-grid/form-grid.component';


// app components
import { FooterComponent } from '../components/footer/footer.component';
import { HomeComponent } from '../views/home/home.component';
import { LoaderComponent } from '../components/loader/loader.component';
import { HeaderComponent } from '../components/header/header.component';
import { PageNotFoundComponent } from '../views/page-not-found/page-not-found.component';
import { NotificationComponent } from '../components/notification/notification.component';
import { AddSystemsAdminDialogComponent } from '../components/add-systems-admin-dialog/add-systems-admin-dialog.component';
import { SearchFormComponent } from '../components/search-form/search-form.component';
import { AdminCheckboxesComponent } from '../components/admin-checkboxes/admin-checkboxes.component';
import { AddChipComponent } from '../components/add-chip/add-chip.component';
import { UploadFileComponent } from '../components/upload-file/upload-file.component';
import { DealershipPrinscipleComponent } from '../components/dealership-prinsciple/dealership-prinsciple.component';
import { TopGridComponent } from '../components/top-grid/top-grid.component';
import { BottomGridComponent } from '../components/bottom-grid/bottom-grid.component';
import { SalesHoursComponent } from '../components/sales-hours/sales-hours.component';
import { ChangepasswordComponent } from '../account/changepassword/changepassword.component';
import { OtpScreenComponent } from '../account/otp-screen/otp-screen.component';
import { ManageVehicleMakesComponent } from '../views/manage-vehicle-makes/manage-vehicle-makes.component';
import { MainGridComponent } from '../components/main-grid/main-grid.component';
import { ManageSystemsAdminsComponent } from '../views/manage-systems-admins/manage-systems-admins.component';
import { TableAdminButtonsComponent } from '../components/table-admin-buttons/table-admin-buttons.component';
import { ManageSystemsAdminTableComponent } from '../components/manage-syst-admin-table/manage-syst-admin-table.component';
import { AvatarComponent } from '../components/avatar/avatar.component';
import { EditAdminDialogComponent } from '../components/edit-admin-dialog/edit-admin-dialog.component';
import { ManageSystemsAdministratorComponent } from '../views/manage-systems-administrator/manage-systems-administrator.component';
import { VehicleMakesTableComponent } from '../components/vehicle-makes-table/vehicle-makes-table.component';
import { VehicleMakesDialogComponent } from '../components/vehicle-makes-dialog/vehicle-makes-dialog.component';
import { AddDealershipAdminDialogComponent } from '../components/add-dealership-admin-dialog/add-dealership-admin-dialog.component';
import { ModuleCheckboxesComponent } from '../components/module-checkboxes/module-checkboxes.component';
import { AppLoaderComponent } from '../components/app-loader/app-loader.component';
import { AlertComponent } from '../components/alerts/alert.component';


@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        UsersRoutingModule,
        MaterialModule,
    ],
    declarations: [
        LayoutComponent,
        DashboardComponent,
        MainHeaderComponent,
        UsertableComponent,
        AddDealershipComponent,
        FormGridComponent,
        FooterComponent,
        HomeComponent,
        LoaderComponent,
        HeaderComponent,
        PageNotFoundComponent,
        NotificationComponent,
        AddSystemsAdminDialogComponent,
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
        AlertComponent,




    ]
})
export class UsersModule { }
