import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { LayoutComponent } from './layout.component';
import { DashboardComponent } from '../views/dashboard/dashboard.component';
import { MaterialModule } from '../material-module';

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

    ]
})
export class UsersModule { }
