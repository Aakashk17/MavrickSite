import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private route: Router, private router: ActivatedRoute) { }

  isDashboardRoute: boolean = false;

  ngOnInit() {
    this.router.url.subscribe((segments) => {
      this.isDashboardRoute = segments.length > 0 && segments[0].path === 'dashboard';
    });
  }


}