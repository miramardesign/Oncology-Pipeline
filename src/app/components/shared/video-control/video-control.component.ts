import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { getVideoUrl } from 'src/app/data/content.data';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import {TimeoutService} from '../../../services/timeout.service';

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
  modalRef: BsModalRef;


  constructor(
    private timeoutService: TimeoutService,
  ) {
    this.videoLink = getVideoUrl();
   }

  @ViewChild('videoPlayer')
  set mainVideoEl(el: ElementRef) {
    this.videoPlayer = el.nativeElement;
  }

  /**
   * from welcome component. i dont see a modal anywhere?
   * maybe they had one before,
   */
  videoEnded() {
    console.log('videoended fired in video control? i dunno y modal open is never called.?');
    if (!this.modalRef) {
      return;
    }
    this.modalRef.hide();
    this.modalRef = null;
  }

  toggleVideo(event: any) {
    const paused = this.videoPlayer.paused;

    if (paused) {
      this.timeoutService.stopWatching();
      this.videoPlayer.play();
      this.isVisiblePlayPause = false;
    } else {
      this.timeoutService.start();
      this.videoPlayer.pause();
      this.isVisiblePlayPause = true;

    }
  }


  ngOnInit() {
  }


}
