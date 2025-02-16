import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisionPhaseComponent } from 'src/about/vision-phase/vision-phase.component';
import { ContentManagementComponent } from 'src/admin-panel/content-management/content-management.component';
import { DashboardComponent } from 'src/admin-panel/dashboard/dashboard.component';
import { ProfileComponent } from 'src/admin-panel/profile/profile.component';
import { UserMangementComponent } from 'src/admin-panel/user-mangement/user-mangement.component';
import { BodyComponent } from 'src/home/body/body.component';
import { RegcontainerComponent } from 'src/signin/regcontainer/regcontainer.component';
import { UserprofileComponent } from 'src/signin/userprofile/userprofile.component';
import { ProductsComponent } from 'src/supports/products/products.component';

const routes: Routes = [
  {path:'home',component:BodyComponent},
  {path:'about',component:VisionPhaseComponent},
  {path:'supports',component:ProductsComponent},
  {path:'signin',component:RegcontainerComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'User-Management',component:UserMangementComponent},
  {path:'Content-Management',component:ContentManagementComponent},
  {path:'userprofile',component:UserprofileComponent},
  {
    path: 'profile', component: ProfileComponent 
  },
  {path:"",redirectTo:'home',pathMatch:"full"},
  {path:"**",redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
