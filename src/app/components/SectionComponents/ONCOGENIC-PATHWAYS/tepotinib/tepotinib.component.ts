import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
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
  };
  videoLink = '';
  constructor(
    public router: Router
  ) {
    this.videoLink = getVideoUrl();
  }

  generateArray = WelcomeComponent.prototype.generateArray;

  videoPlayer: HTMLVideoElement;

  @ViewChild('videoPlayer')
  set mainVideoEl(el: ElementRef) {
    this.videoPlayer = el.nativeElement;
  }

  toggleVideo(event: any) {

    console.log('video event', event);
    const paused = event.target.paused;

    if (paused) {
      this.videoPlayer.play();
    } else {
      this.videoPlayer.pause();
    }
  }

  ngOnInit() {
  }

}
