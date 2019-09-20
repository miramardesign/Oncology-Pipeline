import { Component, OnInit, Input } from '@angular/core';
import {WelcomeComponent} from '../../../welcome/welcome.component'
import { Router } from '@angular/router';
import { getVideoUrl } from 'src/app/data/content.data';

@Component({
  selector: 'app-m3814',
  templateUrl: './m3814.component.html',
  styleUrls: ['./m3814.component.scss']
})
export class M3814Component implements OnInit {
  navigationHolder = {
    numberOfSections : 6,
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
