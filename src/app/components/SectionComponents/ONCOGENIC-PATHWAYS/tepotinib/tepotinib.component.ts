import { Component, OnInit, Input } from '@angular/core';
import {WelcomeComponent} from '../../../welcome/welcome.component'
import { Router } from '@angular/router';
import { getVideoUrl } from 'src/app/data/content.data';
@Component({
  selector: 'app-tepotinib',
  templateUrl: './tepotinib.component.html',
  styleUrls: ['./tepotinib.component.scss']
})
export class TepotinibComponent implements OnInit {
  navigationHolder = {
    numberOfSections : 3,
    currentSection : 0
  }
  videoLink = "";
  constructor(
    public router : Router
  ) { 
    this.videoLink = getVideoUrl();
  }
  
  generateArray = WelcomeComponent.prototype.generateArray;

  ngOnInit() {
  }

}
