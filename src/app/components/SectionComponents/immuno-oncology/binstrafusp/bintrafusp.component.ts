import { Component, OnInit } from '@angular/core';
import { WelcomePageData } from '../../../../data/content.data';
import { Router } from '@angular/router';
import { WelcomeComponent } from '../../../welcome/welcome.component'
import { getVideoUrl } from 'src/app/data/content.data';

@Component({
  selector: 'app-immuno-oncology-bintrafusp',
  templateUrl: './bintrafusp.component.html',
  styleUrls: ['./bintrafusp.component.scss']
})
export class ImmunoOncologyBintrafuspComponent implements OnInit {

  welcomePanels = WelcomePageData;
  navigationHolder = {
    numberOfSections: 3,
    currentSection: 0
  };
  videoLink = '';
  constructor(
    public router: Router
  ) {
    this.videoLink = getVideoUrl();
  }

  generateArray = WelcomeComponent.prototype.generateArray;

  ngOnInit() {
  }
}


