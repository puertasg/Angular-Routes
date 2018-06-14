import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PATH_HOME } from '../constantes.routes';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    console.log('idDetail snapshot', this.route.snapshot.paramMap.get('idDetail'))
  }

  navigateToHome() {
    this.router.navigate([PATH_HOME]);
  }
}
