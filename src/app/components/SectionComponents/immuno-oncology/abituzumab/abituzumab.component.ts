import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-abituzumab',
  templateUrl: './abituzumab.component.html',
  styleUrls: ['./abituzumab.component.scss']
})
export class AbituzumabComponent implements OnInit {
  navigationHolder = {
    numberOfSections: 2,
    currentSection: 0
  }
  constructor() { }

  ngOnInit() {
  }

}
