import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentManagementComponent } from 'src/admin-panel/content-management/content-management.component';
import { DashboardComponent } from 'src/admin-panel/dashboard/dashboard.component';
import { ProfileComponent } from 'src/admin-panel/profile/profile.component';
import { UserMangementComponent } from 'src/admin-panel/user-mangement/user-mangement.component';

const routes: Routes = [
  {path:'dashboard',component:DashboardComponent},
  {path:'User-Management',component:UserMangementComponent},
  {path:'Content-Management',component:ContentManagementComponent},
  {
    path: 'Content-Management',
    component: ContentManagementComponent,
    children: [
      { path: 'profile', component: ProfileComponent },
    ]
  },
  {path:"",redirectTo:'dashboard',pathMatch:"full"},
  {path:"**",redirectTo:'dashboard'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
