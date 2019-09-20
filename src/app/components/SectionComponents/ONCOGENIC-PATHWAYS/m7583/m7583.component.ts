import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-m7583',
  templateUrl: './m7583.component.html',
  styleUrls: ['./m7583.component.scss']
})
export class M7583Component implements OnInit {
  navigationHolder = {
    numberOfSections : 2,
    currentSection : 0
  }
  constructor() { }

  ngOnInit() {
  }

}
