import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-connaissances',
  templateUrl: './connaissances.component.html',
  styleUrls: ['./connaissances.component.css']
})
export class ConnaissancesComponent implements OnInit {

  connaissances: Array<string>;

  constructor() { }

  ngOnInit() {
    this.connaissances = [
      "connaissance 1",
      "connaissance 2",
      "connaissance 3",
      "connaissance 4"
    ]
  }

}
