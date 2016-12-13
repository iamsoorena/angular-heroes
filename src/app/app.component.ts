import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>{{title}}</h1>
  <nav>
  <a 
    routerLink="/heroes"
    routerLinkActive="active"
      >Heroes</a>  
  <a 
    routerLink="/dashboard"
    routerLinkActive="active"
    >Dashboard</a>
  </nav>
  <router-outlet></router-outlet>
  <!--<app-heroes></app-heroes>-->
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Tour of Heroes';
  constructor() { }

  ngOnInit() {
  }

}
