import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  showHeader: boolean = false;

  myForm: any;
  isLoggedIn: boolean = false;


  handleLoginSuccess() {
    this.isLoggedIn = true;
    console.log('header component : true');
  }

  constructor(public authService: AuthService, private route: Router, private router: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const currentRoute = this.getCurrentRoute(this.router.root);
        const pagesToHideHeader = ['dashboard', 'Content-Management', 'User-Management', 'notification', 'profile'];

        this.showHeader = currentRoute ? !pagesToHideHeader.includes(currentRoute) : true;
      }
    });
    this.router.url.subscribe((segments) => {
      this.showHeader = segments.length > 0 && segments[0].path === 'home';
    });
  }

  getCurrentRoute(route: ActivatedRoute): string | null {
    while (route.firstChild) {
      route = route.firstChild;
    }
    return route.snapshot.routeConfig?.path || null;
  }

}
