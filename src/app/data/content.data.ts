import { INavPage, IWelcomePage, ISection } from './../models/content.model';

export const ZincCode = 'US/ONC/0219/0018(1)';

export const NavPageData: INavPage = {
  title: `Merck KGaA, Darmstadt, Germany oncology pipeline portfolio`,
  subtitle: `Three key mechanistic areas`,
  footer: `Pipeline compounds are being investigated for the treatment of various diseases.
  Efficacy and safety of these compounds are still under investigation in various indications. 
  Regulatory approval is dependent on the completion of the study programs and review by local regulatory authorities,
   and varies from country to country. Clinical trial information is available at <u>www.clinicaltrials.gov</u>.`,
};
export const images = [
  'assets/indicators/purple-phase-one-icon.png',
  'assets/indicators/purple-phase-two-icon.png',
  'assets/indicators/purple-phase-three-icon.png'
]
export const welComeImages = [
  'assets/home-page-elements/immuno-onc-bg.png',
  'assets/home-page-elements/immuno-onc-bg.png',
  'assets/home-page-elements/immuno-onc-bg.png'
];
export const WelcomePageData: any[] = [
  {
    mainTitle: `Immuno-<br>Oncology`,
    sections: [
    { title: 'Bintrafusp alfa (M7824)', subTitle: 'TGF-β trap/anti-PD-L1', phase: 2, path: 'bintrafusp'},
    { title: 'Abituzumab', subTitle: 'pan-αv integrin inhibiting mAb', phase: 2, path: 'Abituzumab' },
    { title: 'M9241 (NHS-IL12)', subTitle: 'Cancer immunotherapy', phase: 1, path: 'M9241' }
    ],
    btnImg: 'assets/home-page-elemets/immuno-onc-bg.png',
    video: 'assets/videos/tgfb-trap-sept.mp4',
    color: `navyblue`,
    arrowImage: 'assets/buttons/home-immuno-onc-btn.png',
    Index: 0
  },
  {
    mainTitle: 'DNA DAMAGE RESPONSE (DDR)',
    sections: [
    { title: 'M3814', subTitle: 'DNA-PK inhibitor', phase: 2, path: 'M3814' },
    { title: 'M6620', subTitle: '(VX-970) ATR inhibitor', phase: 2, path: 'M3814' },
    { title: 'M4344', subTitle: '(VX-803) ATR inhibitor', phase: 1, path: 'M3814' },
    { title: 'M3541', subTitle: 'ATM inhibitor', phase: 1, path: 'M3814' },
    ],
    btnImg: 'assets/home-page-elemets/ddr-bg.png',
    video: 'assets/videos/dna-damage-response-pathway-sept.mp4',
    color: `yellow`,
    arrowImage: 'assets/buttons/home-ddr-btn.png',
    Index: 1
  },
  {
    mainTitle: 'ONCOGENIC <br>PATHWAYS',
    sections: [
      { title: 'Tepotinib',subTitle: 'MET kinase inhibitor', phase: 2, path: 'Tepotinib'},
      { title: 'M2698', subTitle: 'p70S6K and Akt inhibitor', phase: 1, path: 'M2698' },
      { title: 'M8891', subTitle: 'MetAP2 inhibitor', phase: 1, path: 'M8891' },
      { title: 'M7583', subTitle: 'BTK inhibitor', phase: 1, path: 'M7583' },
    ],
    btnImg: 'assets/home-page-elemets/onco-pathways-bg.png',
    video: 'assets/videos/met-pathway-alterations-sept.mp4',
    color: `skyblue`,
    arrowImage: 'assets/buttons/home-onco-pathway-btn.png',
    Index: 2
  },
];

export const getVideoUrl = (): string =>
 (WelcomePageData.find(sec =>
  (sec.sections).find(ele => ele.path == window.location.pathname.split('').reduce((prev, next) =>
   { return prev + (next == "/" ? "" : next) }, "")) != undefined) || {}).video;
export const getButtonImageColor = (): string => (WelcomePageData.find(sec => (sec.sections).find(ele => ele.path == window.location.pathname.split('').reduce((prev, next) => { return prev + (next == "/" ? "" : next) }, "")) != undefined) || {}).color;