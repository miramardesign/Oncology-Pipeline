import { IPhaseStudy } from './trial.model';

export interface ILink {
  text: string;
  slideId?: number;
  slideGroup: string;
}
export interface ISectionNavLink {
  subSectionTitle?: string;
  links: ILink[];
}
export interface ITrialSection {
  sectionName: string;
  links?: ILink[];
  sectionedLinks?: ISectionNavLink[];
}

export interface IPhaseStudy {
  title?: string;
  code?: string;
  type: string;
  category: string;
}

export interface IPhase {
  title: string
  studies: IPhaseStudy[];
}



