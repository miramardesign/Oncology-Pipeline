import { ITrialSection, IPhase } from './../models/trial.model';

export const TrialData: ITrialSection[] = [
  {
    sectionName: `DNA Damage Response (DDR)`,
    sectionedLinks: [
      {
        subSectionTitle: `DNA-PK inhibitors`,
        links: [
          {
            text: `M3814`,
            slideId: 15,
            slideGroup: 'm3814'
          },
        ]
      },
      {
        subSectionTitle: `ATR inhibitors`,
        links: [
          {
            text: `M6620 (VX-970)`,
            slideId: 15,
            slideGroup: 'm6620'
          },
          {
            text: `M4344 (VX-803)`,
            slideId: 15,
            slideGroup: 'm4344'
          },
        ]
      },
      {
        subSectionTitle: `ATM inhibitors`,
        links: [
          {
            text: `M3541`,
            slideId: 15,
            slideGroup: 'm3541'
          },
        ]
      },
      ],
  },
  {
    sectionName: `Oncogenic Pathways`,
    links: [
      {
        text: `Tepotinib (c-Met inhibitor)`,
        slideId: 1,
        slideGroup: 'tepotinib'
      },
      {
        text: `M7583 (BTK inhibitor)`,
        slideId: 3,
        slideGroup: 'm7583'
      },
      {
        text: `M8891 (MetAP2 inhibitor)`,
        slideId: 5,
        slideGroup: 'm8891'
      },
      {
        text: `M2698 (p70S6K/Akt inhibitor)`,
        slideId: 7,
        slideGroup: 'm2698'
      },
    ]
  },
  {
    sectionName: `Immuno-Oncology`,
    links: [
      {
        text: `Bintrafusp alfa <br/>(TGF-β trap/Anti–PD-L1)`,
        slideId: 9,
        slideGroup: 'bintrafusp'
      },
      {
        text: `M9241 (NHS-IL12)`,
        slideId: 11,
        slideGroup: 'm9241'
      },
      {
        text: `Abituzumab (anti-αv integrin)`,
        slideId: 13,
        slideGroup: 'abituzumab'
      }
    ]
  }
];

export const Phases: IPhase[] = [
  {
    title: `Phase I`,
    studies: [
      {
        title: `M2698`,
        code: `p70S6K & Akt inhibitor`,
        type: `Solid tumors`,
        category: `Oncology`
      },
      {
        title: `M3814`,
        code: `DNA-PK inhibitor`,
        type: `Solid tumors<sup>4</sup>`,
        category: `Oncology`
      },
      {
        title: `M6620 (VX-970)`,
        code: `ATR inhibitor`,
        type: `Solid tumors`,
        category: `Oncology`
      },
      {
        title: `M4344 (VX-803)`,
        code: `ATR inhibitor`,
        type: `Solid tumors`,
        category: `Oncology`
      },
      {
        title: `M3541`,
        code: `ATM inhibitor`,
        type: `Solid tumors`,
        category: `Oncology`
      },
      {
        title: `M8891`,
        code: `MetAP2 inhibitor`,
        type: `Hematological malignancies`,
        category: `Oncology`
      },
      {
        title: `M7583`,
        code: `BTK inhibitor`,
        type: `Hematological malignancies`,
        category: `Oncology`
      },

      {
        title: `avelumab`,
        code: `Banti-PD-L1 mAb`,
        type: `Solid Tumors`,
        category: `Immuno-Oncology`
      },
      {
        title: `M9241 (NHS-IL12)`,
        code: `Cancer immunotherapy`,
        type: `Solid Tumors<sup>4</sup>`,
        category: `Immuno-Oncology`
      },
      {
        title: `bintrafusp alfa (M7824)`,
        code: `TGFbeta trap/anti-PD-L1`,
        type: `Solid Tumors`,
        category: `Immuno-Oncology`
      },
    ]

  },
  {
    title: `Phase II`,
    studies: [
      {
        title: `tepotinib`,
        code: `MET kinase inhibitor`,
        type: `Non-small cell lung cancer`,
        category: `Oncology`
      },
      {
        title: `tepotinib`,
        code: `MET kinase inhibitor`,
        type: `Hepatocellular cancer`,
        category: `Oncology`
      },
      {
        title: `M3814`,
        code: `DNA-PK inhibitor`,
        type: `Rectal cancer`,
        category: `Oncology`
      },
      {
        title: `M6620 (VX-970)`,
        code: `ATR inhibitor`,
        type: `Ovarian cancer<sub>4</sub>`,
        category: `Oncology`
      },
      {
        title: `avelumab`,
        code: `anti-PD-L1 mAb`,
        type: `Merkel cell cancer 1L<sup>1</sup>`,
        category: `Immuno-Oncology`
      },
      {
        title: `avelumab`,
        code: `anti-PD-L1 mAb`,
        type: `Solid tumors<sup>2</sup>`,
        category: `Immuno-Oncology`
      },
      {
        title: `avelumab`,
        code: `anti-PD-L1 mAb`,
        type: `Non-small cell lung cancer<sup>2</sup>`,
        category: `Immuno-Oncology`
      },
      {
        title: `avelumab`,
        code: `anti-PD-L1 mAb`,
        type: `Urothelial cancer<sup>2</sup>`,
        category: `Immuno-Oncology`
      },
      {
        title: `abituzumab<sup>3</sup>`,
        code: `pan-αν integrin inhibiting mAb`,
        type: `Colorectal cancer 1L<sup>1</sup>`,
        category: `Immuno-Oncology`
      },
      {
        title: `bintrafusp alfa`,
        code: `TGFbeta trap/anti-PD-L1`,
        type: `Non-small cell lung cancer 1L<sup>1</sup>`,
        category: `Immuno-Oncology`
      },
      {
        title: `bintrafusp alfa`,
        code: `TGFbeta trap/anti-PD-L1`,
        type: `Locally advanced Non-small cell lung cancer<sup>5</sup>`,
        category: `Immuno-Oncology`
      },
      {
        title: `bintrafusp alfa`,
        code: `TGFbeta trap/anti-PD-L1`,
        type: `Non-small cell lung cancer 1L/2L<sup>6</sup>`,
        category: `Immuno-Oncology`
      },
      {
        title: `bintrafusp alfa`,
        code: `TGFbeta trap/anti-PD-L1`,
        type: `Biliary tract cancer`,
        category: `Immuno-Oncology`
      },
    ]
  },
  {
    title: `Phase III`,
    studies: [
      {
        title: `avelumab - anti-PD-L1 mAb`,
        type: `Non-small cell lung cancer 1L<sup>1</sup>`,
        category: `Immuno-Oncology`
      },
      {
        title: `avelumab - anti-PD-L1 mAb`,
        type: `Gastric cancer 1L-M<sup>1M</sup>`,
        category: `Immuno-Oncology`
      },
      {
        title: `avelumab - anti-PD-L1 mAb`,
        type: `Ovarian cancer 1L<sup>1,4</sup>`,
        category: `Immuno-Oncology`
      },
      {
        title: `avelumab - anti-PD-L1 mAb`,
        type: `Urothelial cancer 1L-M<sup>1M</sup>`,
        category: `Immuno-Oncology`
      },
      {
        title: `avelumab - anti-PD-L1 mAb`,
        type: `Locally advanced head and neck cancer`,
        category: `Immuno-Oncology`
      },
    ]
  },
]

export const Disclaimer: string =
  `<p class="reference text-primary">
    <br>
    <br>
    <br>
    Pipeline compounds are being investigated for the treatment of various diseases. Efficacy and safety of these compounds are still under investigation in various indications. Regulatory approval is dependent on the completion of the study programs and review by local regulatory authorities, and varies from country to country. Clinical trial information is available at <u>www.clinicaltrials.gov</u>.
  </p>`;

export const HomeFooter: string =
  `<span class="reference">
    <strong><sup>1</sup></strong> First-line treatment; <strong><sup>1M</sup></strong> First-line maintenance treatment. <strong><sup>2</sup></strong> Avelumab combination studies with talazoparib, axitinib, ALK inhibitors, chemotherapy, or novel immunotherapies. <strong><sup>3</sup></strong> As announced on May 2 2018, in an agreement with SFJ Pharmaceuticals Group, abituzumab will be developed by SFJ for colorectal cancer through Phase II/III clinical trials. <strong><sup>4</sup></strong> Includes studies in combination with avelumab. 5 Bintrafusp alfa in combination with chemoradiation including: Cisplatin/etoposide, Carboplatin/Paclitaxel or Cisplatin/Pemetrexed concomitant with Intensity modulated Radiation Therapy. 6 Bintrafusp alfa in combination with chemotherapy including: Cisplatin, Caboplatin, Pemetrexed, Nab-paclitaxel, Gemcitabine or Docetaxel. <strong><sup>5</sup></strong> The US Food and Drug Administration (FDA) accepted for Priority Review the supplemental Biologics License Application (sBLA) (February 11 2019) and the European Medicines Agency (EMA) validated for review the Type II variation application (March 8 2019) for avelumab in combination with axitinib for patients with advanced renal cell carcinoma.
  </span>
  <p class="reference text-primary">
    Pipeline compounds are being investigated for the treatment of various diseases. Efficacy and safety of these compounds are still under investigation in various indications. Regulatory approval is dependent on the completion of the study programs and review by local regulatory authorities, and varies from country to country. Clinical trial information is available at <u>www.clinicaltrials.gov</u>.
  </p>`;

export const NavFooter: string = 
  `<p class="reference text-primary">
    <br>
    <br>
    <br>
    Bintrafusp alfa is the proposed International Nonproprietary Name (INN) for the bifunctional immunotherapy M7824.<br>
    Pipeline compounds are being investigated for the treatment of various diseases. Efficacy and safety of these compounds are still under investigation in various indications. Regulatory approval is dependent on the completion of the study programs and review by local regulatory authorities, and varies from country to country. Clinical trial information is available at <u>www.clinicaltrials.gov</u>.
  </p>`