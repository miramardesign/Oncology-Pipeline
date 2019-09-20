import { ISlide } from './../models/slide.model';
import { Injectable } from '@angular/core';
import { ITrialSection } from '../models/trial.model';

@Injectable({
  providedIn: 'root'
})
export class TrialService {

  constructor() { }

  getTrialBySectionName(trialData: ITrialSection[], sectionName: string): ITrialSection {
   return trialData.find(d => d.sectionName.toLowerCase() == sectionName.toLowerCase());
  }

  getTrialSlidesByGroupName(slideData: ISlide[], groupName: string): ISlide[] {
    return slideData.filter((slide: ISlide) => slide.slideGroups.includes(groupName));
  }

}
