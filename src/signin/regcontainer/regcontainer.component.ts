import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';
import { ApicallService } from 'src/admin-panel/apicall.service';
import { AuthService } from 'src/shared/auth.service';

@Component({
  selector: 'app-regcontainer',
  templateUrl: './regcontainer.component.html',
  styleUrls: ['./regcontainer.component.css']
})

export class RegcontainerComponent {

  fg: FormGroup;
  sign: FormGroup;
  errorMessage: string | null = null;
  mesage: any;


  constructor(@Inject(DOCUMENT) document: Document, private route: Router, private fb: FormBuilder, private service: ApicallService, private authService: AuthService) {

    setTimeout(function () {
      const signUpButton = document.getElementById('signUp');
      const signInButton = document.getElementById('signIn');
      const container = document.getElementById('container');
      signUpButton?.addEventListener('click', () => {
        container?.classList.add("right-panel-active");
      });

      signInButton?.addEventListener('click', () => {
        container?.classList.remove("right-panel-active");
      });
    }), 5000

    this.fg = this.fb.group({
      username: this.fb.control('', [Validators.required, Validators.minLength(2)]),
      email: this.fb.control('', [Validators.required]),
      password: this.fb.control('', [Validators.required]),
      Admin: this.fb.control('user')
    });

    this.sign = this.fb.group({
      email: this.fb.control('', [Validators.required]),
      password: this.fb.control('', [Validators.required])
    });
  }

  login() {
    const jsonString = JSON.stringify(this.sign.value);
    console.log(jsonString);
    this.service.getlogindetails(jsonString).subscribe(
      (response: any) => {
        console.log('Response from service:', response);
        if (response) {
          console.log('Message:', response.message);
          const role = response.roles;
          if (role === 'admin') {
            console.log('User is an admin.');
            this.route.navigateByUrl('/dashboard');
          } else {
            console.log('User is not an admin.');
            this.authService.login();
            this.authService.setuserId(response.userId);
            this.route.navigateByUrl('/userprofile');
          }
        }
      },
      (error) => {
        console.error('Error:', error);
        this.errorMessage = 'Login failed. Email or Password are Invalid.';
      }
    );
  }

  OnSumbit() {
    console.log('value ', this.fg.value);
    const jsonString = JSON.stringify(this.fg.value);
    console.log(jsonString);
    this.service.addusers(jsonString).subscribe(res => {
      console.log(res.toString());
    });
    this.mesage = 'account created successfully';
  }

  sub() {

  }

  NavigatePage() {
    this.route.navigateByUrl("/dashboard");
  }
  gotopage() {
    this.route.navigateByUrl('/dashboard');
  }


}
