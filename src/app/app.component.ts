import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { PATH_DETAIL, PATH_HOME } from "./app.routes";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private router: Router) { }

  navigateToHome() {
    this.router.navigate([PATH_HOME])
  }

  ngOnInit() {
  }
}