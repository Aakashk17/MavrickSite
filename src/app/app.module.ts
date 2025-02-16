import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from 'src/shared/header/header.component';
import { FooterComponent } from 'src/shared/footer/footer.component';
import { HomeModule } from 'src/home/home.module';
import { AboutModule } from 'src/about/about.module';
import { SupportsModule } from 'src/supports/supports.module';
import { SigninModule } from 'src/signin/signin.module';
import { AdminPanelModule } from 'src/admin-panel/admin-panel.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from 'src/admin-panel/profile/profile.component';
import { DangerDirective } from './danger.directive';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DangerDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    AboutModule,
    SupportsModule,
    SigninModule,
    FormsModule,
    AdminPanelModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
