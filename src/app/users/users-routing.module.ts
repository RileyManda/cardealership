import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddDealershipComponent } from '../views/add-dealership/add-dealership.component';
import { DashboardComponent } from '../views/dashboard/dashboard.component';

import { LayoutComponent } from './layout.component';



const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: '', component: DashboardComponent },
           

        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsersRoutingModule { }
