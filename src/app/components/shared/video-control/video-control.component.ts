import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { getVideoUrl } from 'src/app/data/content.data';

@Component({
  selector: 'app-video-control',
  templateUrl: './video-control.component.html',
  styleUrls: ['./video-control.component.scss']
})
export class VideoControlComponent implements OnInit {

  @Input() src: string;
  videoLink = '';
  isVisiblePlayPause = true;
  videoPlayer: HTMLVideoElement;

  constructor() {
    this.videoLink = getVideoUrl();
   }

  @ViewChild('videoPlayer')
  set mainVideoEl(el: ElementRef) {
    this.videoPlayer = el.nativeElement;
  }

  toggleVideo(event: any) {
    const paused = this.videoPlayer.paused;

    if (paused) {
      this.videoPlayer.play();
      this.isVisiblePlayPause = false;
    } else {
      this.videoPlayer.pause();
      this.isVisiblePlayPause = true;

    }
  }


  ngOnInit() {
  }


}
