import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formations',
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.css']
})
export class FormationsComponent implements OnInit {

  formations: Array<string>;

  constructor() { }

  ngOnInit() {
    this.formations = [
      "formation 1",
      "formation 2",
      "formation 3",
      "formation 4"
    ]
  }

}
