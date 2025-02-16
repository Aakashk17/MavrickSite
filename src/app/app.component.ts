import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'FinalProject';
  
  constructor(
    private router: Router,
  ) {}

  showHeader() {
    
  }
  ngOnInit() {
    
  }

  
  
  
  

}
