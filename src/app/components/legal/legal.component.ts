import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-legal',
  templateUrl: './legal.component.html',
  styleUrls: ['./legal.component.scss']
})
export class LegalComponent implements OnInit {

  legalText = `Pipeline compounds are being investigated for the treatment of various
  diseases. Efficacy and safety of these compounds are still under investigation
  in various indications. Regulatory approval is dependent on the completion of
  the study programs and review by local regulatory authorities, and varies from
  country to country. Clinical trial information is available at
  <u>www.clinicaltrials.gov</u>.`;

  constructor() { }

  ngOnInit() {
  }

}
