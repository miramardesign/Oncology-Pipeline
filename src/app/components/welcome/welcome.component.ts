import { Component, OnInit, TemplateRef } from '@angular/core';
import { ZincCode, WelcomePageData, images,welComeImages } from '../../data/content.data';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  zincCodeNum = ZincCode;
  welcomePanels = WelcomePageData;
  modalRef: BsModalRef;
  constructor(private modalService: BsModalService, private router: Router) {
  }

  ngOnInit() {
  }

  openModal(template: TemplateRef<any>) {
    this.modalService.config.class = 'modal-xl';
    this.modalRef = this.modalService.show(template);
  }

  goHome() {
    this.router.navigate(['/home']);
  }

  videoEnded() {
    console.log('videoended fired in welcom?');
    if (!this.modalRef) {
      return;
    }
    this.modalRef.hide();
    this.modalRef = null;
  }

  generateArray(number) {
    return Array.from(Array(number),(e,i)=>{ return i; });
  }

  getImageFromIndex(imageIndex) {
    return images[imageIndex]
  }
  getWelcomeImages(imageIndex) {
    return welComeImages[imageIndex]
  }

}
