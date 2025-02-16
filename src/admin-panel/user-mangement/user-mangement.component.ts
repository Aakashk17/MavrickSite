import { Component, OnInit } from '@angular/core';
import { ApicallService } from '../apicall.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-user-mangement',
  templateUrl: './user-mangement.component.html',
  styleUrls: ['./user-mangement.component.css']
})
export class UserMangementComponent implements OnInit {
  signup: any = [];
  userid:number=0;
  showdeletepopup:boolean=false;
  constructor(private service: ApicallService, private route: Router) { }

  ngOnInit(): void {
    this.getrefershed();
  }
  gototdelete(id: number) {
    this.userid=id;
    this.showdeletepopup=true;
  }
  getrefershed() {
    this.service.showusers().subscribe(data => {
      this.signup = data;
    });
  }
  closePopup(){
    this.showdeletepopup=false;
  }
  deleteEmployee(){
    this.service.deluser(this.userid).subscribe((data: any) => {
      console.log(data);
      alert('User deleted.'); 
      this.signup = this.signup.filter((a: any) => a.userid != this.userid);
    });
    this.closePopup();
  }
}
