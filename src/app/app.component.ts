import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { PATH_HOME } from './constantes.routes';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  idDetail: number = 1;

  constructor(private router: Router) { }

  navigateToHome() {
    this.router.navigate([PATH_HOME])
  }

  ngOnInit() {
  }
}