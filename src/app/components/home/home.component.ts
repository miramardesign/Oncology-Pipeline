import { IPhase, IPhaseStudy } from './../../models/trial.model';
import { Phases, Disclaimer, HomeFooter } from './../../data/trials.data';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  phases: IPhase[];
  phase1: IPhase;
  phase2: IPhase;
  phase3: IPhase;

  footer: string;
  date = 'May 7, 2019';
  title = 'Merck KGaA, Darmstadt, Germany Oncology Pipeline';
  legendItems = {
    onc: 'Oncology',
    io: 'Immuno-Oncology',
  };

  registration = {
    title: 'Registration',
    code: 'avelumab - anti-PD-L1 mAb',
    type: 'Renal cell cancer 1L<sub>1,7</sub>',
    category: `Immuno-Oncology`
  };

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.phases = Phases;
    this.phase1 = this.getPhaseByTitle('Phase I');
    this.phase2 = this.getPhaseByTitle('Phase II');
    this.phase3 = this.getPhaseByTitle('Phase III');
    this.footer = HomeFooter;
  }

  getPhaseByTitle(title: string) {
    return this.phases.find(p => p.title == title);
  }

  trimWhiteSpace(str: string) {
    return str.trim();
  }

  onOnocologyClick() {
    this.router.navigate([ '/onocology' ]);
  }
}
