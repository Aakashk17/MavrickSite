import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApicallService } from 'src/admin-panel/apicall.service';
import { AuthService } from 'src/shared/auth.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  id: number = 0;
  userdetails: any;

  constructor(
    private service: ApicallService,
    private auth: AuthService,
    private route: Router
  ) {
    this.id = this.auth.getuserId() as number;
    console.log(this.id);
  }

  ngOnInit() {
    const userDetailsFromStorage = localStorage.getItem('userDetails');
    if (userDetailsFromStorage) {
      this.userdetails = JSON.parse(userDetailsFromStorage);
    } else {
      this.service.getoneuser(this.id).subscribe((data) => {
        this.userdetails = data;
        console.log('data is ', data);
        console.log('data', this.userdetails);
        localStorage.setItem('userDetails', JSON.stringify(data));
      });
    }
  }

  lout() {
    localStorage.removeItem('userDetails');
    this.auth.logout();
    this.route.navigateByUrl('/signin');
  }
}
