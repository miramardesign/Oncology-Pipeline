import { Router } from '@angular/router';
import { TrialService } from './../../services/trial.service';
import { ITrialSection } from './../../models/trial.model';
import { TrialData, NavFooter } from './../../data/trials.data';
import { INavPage } from './../../models/content.model';
import { NavPageData } from './../../data/content.data';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-screen',
  templateUrl: './nav-screen.component.html',
  styleUrls: ['./nav-screen.component.scss']
})
export class NavScreenComponent implements OnInit {
  pageData: INavPage;
  trialData: ITrialSection[];
  disclaimer: string;
  dnaSection: ITrialSection;
  pathwaySection: ITrialSection;
  immunoSection: ITrialSection;

  @Output() navEvent = new EventEmitter<number>();

  constructor(
    private trialService: TrialService,
    private router: Router,
  ) {

  }

  ngOnInit() {
    this.pageData = NavPageData;
    this.trialData = TrialData;
    this.disclaimer = NavFooter;

    this.dnaSection = this.trialService.getTrialBySectionName(this.trialData, 'DNA Damage Response (DDR)');

    this.pathwaySection = this.trialService.getTrialBySectionName(this.trialData, 'Oncogenic Pathwa9999ys');

    this.immunoSection = this.trialService.getTrialBySectionName(this.trialData, 'Immuno-Oncology');

  }

  onNavLinkClick(slideGroup: string) {
    // console.log(slideId);
    // this.navEvent.emit(slideId + 1);
    this.router.navigate([ '/slides', slideGroup ]);
  }

}
