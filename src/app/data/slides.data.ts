import { ISlide } from './../models/slide.model';

export const SlideData: ISlide[] = [
  {
    id: 1,
    slideGroups: ['tepotinib'],
    slideClass: 'pathways-1',
    title: `Proposed profile of tepotinib<sup>*</sup> (MET inhibitor)`,
    category: 'pathways',
    templateImageTextColumns: {
      column1: {
        topText: `
          <ul class="dashed-sublist list-spaced">
            <li>
              <span class="text-primary">Tepotinib is an investigational oral MET inhibitor<sup>1</sup></span><sup>,2</sup>. This
              molecule is currently under clinical investigation and has not
              been proven to be safe and effective.
            </li>
            <li>
              MET activation is a key driver of tumor progression and therapy resistance<sup>3</sup>
            </li>
            <li>
              Two different roles for MET in tumor biology making it a plausible target:
              <ul>
                <li>
                <span class="text-primary">MET can act as driver of tumorigenesis<sup>4-7</sup></span>
                  <ul>
                    <li>
                      Some tumors depend on MET signaling for their growth, represented by MET pathway aberrations (MET can act as <em>MET</em> amplification, <em>MET</em> activating mutations – such as <em>MET</em> exon 14 skipping, MET and/or HGF overexpression)
                    </li>
                  </ul>
                </li>
                <li>
                      <span class="text-primary">MET can act as co-stimulatory or resistance mediator<sup>4-8</sup></span>
                      <ul>
                        <li>
                          Disruption of tumor growth can be achieved by interfering with cross-talking pathways between MET and other RTKs, to block different tumor-specific pathways in parallel
                        </li>
                      </ul>
                    </li>
              </ul>
            </li>
          </ul>`
      },
      column2: {
        topImage: `assets/images/pathways/pathways-1.png`,
        topImageClass: `d-block mx-auto`
      }
    },
    footer: `<p><span class="text-primary">*Tepotinib (EMD 1214063; MSC2156119J) is under clinical investigation and has not been proven to be safe and effective. There is no guarantee tepotinib will be approved in the sought-after indications.The relevance of these preclinical findings on the efficacy and safety in the clinical setting has not been established.</span><br /><br /><strong>1.</strong>Bladt F, et al. Clin Cancer Res 2013;19:2941-51. <strong>2.</strong> Srivastava AK, et al. J Clin Oncol 2013;31(Suppl):Abstract 11103 and poster (ASCO 2013).<strong> 3.</strong> Peruzzi B, et al. Clin Cancer Res 2006;12:3657-60. <strong>4</strong>. Ghiso E, Giordano S. Curr Opin Pharmacol 2013;13:511-8. <strong>5. </strong>Maroun CR, Rowlands T. Pharmacol Ther 2014;142:316-38. <strong>6. </strong>Graveel CR, et al. Cold Spring Harb Perspect Biol 2013;5.pii:a009209. <strong>7. </strong>Skead G, Govender D. J Clin Pathol 2015;68:405-9. <strong>8. </strong>Huang L, Fu L. Acta Pharm Sin B 2015;5:390-401.</p>
    <p class="text-right"><strong>RTKs</strong> &ndash; receptor Tyrosine Kinases</p>`
  },
  {
    id: 2,
    slideGroups: ['tepotinib'],
    slideClass: 'pathways-2',
    title: `Tepotinib clinical trial program overview`,
    category: 'pathways',
    templateTable: {
      tableData: [
        {
          rowClass: `table-header`,
          tableRow: [
            {
              text: `Enrolling`,
            },
            {
              text: `Clinical Trial`,
              cellClass: `text-white table-bg-blue`,

            },
            {
              text: `Line`,
              cellClass: `text-white table-bg-green`,
            },
            {
              text: `Phase`,
              cellClass: `text-white table-bg-yellow`,
            },
            {
              text: `Tepotinib Treatment `,
              cellClass: `text-white table-bg-pink`,
            },
            {
              text: `ClinicalTrials.gov Identifier`,
              cellClass: `text-white table-bg-red`,
            },
          ]
        },
        {
          rowClass: `section-header`,
          tableRow: [
            {
              emptyCell: true
            },
            {
              text: `Solid Tumors`,
              cellClass: 'font-weight-bold table-bg-gray',
              colSpan: 5
            },
          ],
        },
        {
          rowClass: `content-row`,
          tableRow: [
            {
              cellClass: `table-bg-trial-closed`
            },
            {
              text: `Solid tumors (FIM)`
            },
            {
              text: `Any`
            },
            {
              text: `Phase I`
            },
            {
              text: `Monotherapy`
            },
            {
              text: `NCT01014926`,
            }
          ]
        },
        {
          rowClass: `content-row`,
          tableRow: [
            {
              cellClass: `table-bg-trial-closed`
            },
            {
              text: `Solid tumors - Japan`
            },
            {
              text: `Any`
            },
            {
              text: `Phase I`
            },
            {
              text: `Monotherapy`
            },
            {
              text: `NCT01832506`,
            }
          ]
        },
        {
          rowClass: `section-header`,
          tableRow: [
            {
              emptyCell: true
            },
            {
              text: `Healthy Volunteers`,
              cellClass: 'font-weight-bold table-bg-gray',
              colSpan: 5
            },
          ],
        },
        {
          rowClass: `content-row`,
          tableRow: [
            {
              cellClass: `table-bg-trial-closed`
            },
            {
              text: `Bioavailability (100-mg/500-mg tablets)`
            },
            {
              text: `-`
            },
            {
              text: `Phase I`
            },
            {
              text: `Monotherapy`
            },
            {
              text: `NCT03021642`,
            }
          ]
        },
        {
          rowClass: `content-row`,
          tableRow: [
            {
              cellClass: `table-bg-trial-closed`
            },
            {
              text: `Pharmacokinetics on P-gp`
            },
            {
              text: `-`
            },
            {
              text: `Phase I`
            },
            {
              text: `Monotherapy`
            },
            {
              text: `NCT03492437`,
            }
          ]
        },
        {
          rowClass: `content-row`,
          tableRow: [
            {
              cellClass: `table-bg-trial-closed`
            },
            {
              text: `Pharmacokinetics with PPI`
            },
            {
              text: `-`
            },
            {
              text: `Phase I`
            },
            {
              text: `Monotherapy`
            },
            {
              text: `NCT03531762`,
            }
          ]
        },
        {
          rowClass: `content-row`,
          tableRow: [
            {
              cellClass: `table-bg-trial-open`
            },
            {
              text: `Hepatic impairment (PK, safety)`
            },
            {
              text: `-`
            },
            {
              text: `Phase I`
            },
            {
              text: `Monotherapy`
            },
            {
              text: `NCT03546608
`,
            }
          ]
        },
        {
          rowClass: `content-row`,
          tableRow: [
            {
              cellClass: `table-bg-trial-closed`
            },
            {
              text: `Pharmacokinetics with CYP3A substrate`
            },
            {
              text: `-`
            },
            {
              text: `Phase I`
            },
            {
              text: `Monotherapy`
            },
            {
              text: `NCT03628339`,
            }
          ]
        },
        {
          rowClass: `content-row`,
          tableRow: [
            {
              cellClass: `table-bg-trial-closed`
            },
            {
              text: `Bioequivalence of TF3 compared to TF2/ pharmacokinetics with food`
            },
            {
              text: `-`
            },
            {
              text: `Phase I`
            },
            {
              text: `Monotherapy`
            },
            {
              text: `NCT03629223`,
            }
          ]
        },
        {
          rowClass: `section-header`,
          tableRow: [
            {
              emptyCell: true
            },
            {
              text: `Hepatocellular carcinoma`,
              cellClass: 'font-weight-bold table-bg-gray',
              colSpan: 5
            },
          ],
        },
        {
          rowClass: `content-row`,
          tableRow: [
            {
              cellClass: `table-bg-trial-closed`
            },
            {
              text: `Asian MET+ HCC`
            },
            {
              text: `1L`
            },
            {
              text: `Phase Ib/II`
            },
            {
              text: `Monotherapy <strong>vs</strong> sorafenib`
            },
            {
              text: `NCT01988493`,
            }
          ]
        },
        {
          rowClass: `content-row`,
          tableRow: [
            {
              cellClass: `table-bg-trial-closed`
            },
            {
              text: `MET+ HCC`
            },
            {
              text: `2L`
            },
            {
              text: `Phase Ib/II`
            },
            {
              text: `Monotherapy`
            },
            {
              text: `NCT02115373`,
            }
          ]
        },
      ],
    },
    footer: ``
  },
  {
    id: 21,
    slideGroups: ['tepotinib'],
    slideClass: 'pathways-2',
    title: `Tepotinib clinical trial program overview`,
    category: 'pathways',
    templateTable: {
      tableData: [
        {
          rowClass: `table-header`,
          tableRow: [
            {
              text: `Enrolling`,
            },
            {
              text: `Clinical Trial`,
              cellClass: `text-white table-bg-blue`,

            },
            {
              text: `Line`,
              cellClass: `text-white table-bg-green`,
            },
            {
              text: `Phase`,
              cellClass: `text-white table-bg-yellow`,
            },
            {
              text: `Tepotinib Treatment `,
              cellClass: `text-white table-bg-pink`,
            },
            {
              text: `ClinicalTrials.gov Identifier`,
              cellClass: `text-white table-bg-red`,
            },
          ]
        },
        {
          rowClass: `section-header`,
          tableRow: [
            {
              emptyCell: true
            },
            {
              text: `Non-small cell lung cancer`,
              cellClass: 'font-weight-bold table-bg-gray',
              colSpan: 5
            },
          ],
        },
        {
          rowClass: `content-row`,
          tableRow: [
            {
              cellClass: `table-bg-trial-open`
            },
            {
              text: `VISION: <em>MET</em>ex14 NSCLC`
            },
            {
              text: `Any<sup>*</sup>`
            },
            {
              text: `Phase II`
            },
            {
              text: `Monotherapy`
            },
            {
              text: `NCT02864992`,
            }
          ]
        },
        {
          rowClass: `content-row`,
          tableRow: [
            {
              cellClass: `table-bg-trial-closed`
            },
            {
              text: `INSIGHT: MET+, EGFRm+ NSCLC`
            },
            {
              text: `2L`
            },
            {
              text: `Phase Ib/II`
            },
            {
              text: `Combination with gefitinib <strong>vs</strong><br/> pemetrexed + carboplatin/cisplatin`
            },
            {
              text: `NCT01982955`,
            }
          ]
        },
        {
          rowClass: `content-row`,
          tableRow: [
            {
              cellClass: `table-bg-trial-open`
            },
            {
              text: `INSIGHT2: METamp EGFRm+ NSCLC, after EGFR TKI`
            },
            {
              text: `2L+`
            },
            {
              text: `Phase II`
            },
            {
              text: `Combination with osimertinib`
            },
            {
              text: `NCT03940703`,
            }
          ]
        },
      ],
    },
    footer: `<p><sup>*</sup>Treatment-naive patients receiving first-line therapy or pretreated patients receiving no more than 2 lines of prior therapy.</p>`
  },
  {
    id: 3,
    slideGroups: ['m7583'],
    slideClass: 'pathways-3',
    title: `Proposed profile of M7583<sup>*</sup>`,
    category: 'pathways',
    templateImageTextColumns: {
      column1: {
        topText: `<ul class="dashed-sublist list-spaced">
          <li>
            <span class="text-primary">M7583* is an investigational, ATP-competitive, irreversible BTK inhibitor<sup>1</sup>.</span> This molecule is currently under clinical investigation and has not been proven to
            be safe and effective.
          </li>
          <li>
            BTK is a key component of BCR signaling that regulates B-cell proliferation and survival<sup>2,3</sup>
          </li>
          <li>
            The BCR pathway is implicated in the pathogenesis of B-cell malignancies such as diffuse large B-cell lymphoma (DLBCL), mantle cell lymphoma (MCL), B-cell chronic lymphocytic leukemia (CLL), Waldenström macroglobulinemia (WM), and multiple myeloma (MM)<sup>3,4</sup>
          </li>
          <li class="text-primary">
            M7583 is currently being investigated as potential therapy for various B-cell malignancies<sup>3</sup>
          </li>
          <li>
            Development of and clinical/preclinical investigation of BTK inhibitors may provide additional insight into treatment of patient groups who have not shown significant response to other therapies<sup>3</sup>
          </li>
        </ul>`
      },
      column2: {
        topText: `<span class="d-block mb-1 text-center text-primary"><strong>B-Cell Antigen Receptor (BCR) Pathway<sup>2</sup></strong></span>`,
        middleImage: `assets/images/pathways/pathways-3.png`,
        middleImageClass: 'd-block mx-auto',
        bottomText: `<p class="reference pt-2"><strong>BCR, </strong>B-cell antigen receptor; <strong>BTK,</strong> Bruton tyrosine kinase; <strong>elf4E, </strong>Eukaryotic translation initiation factor 4E; <strong>GSK-3,</strong> glycogen synthase kinase 3; <strong>LYN, </strong>tyrosine-protein kinase Lyn; <strong>mTOR,</strong> mammalian target of rapamycin; <strong>NF-k</strong><strong>&beta;</strong><strong>,</strong> nuclear factor kappa-light-chain-enhancer of activated B cells; <strong>p70S6K, </strong>ribosomal protein S6 kinase beta-1; <strong>PI3K,</strong> phosphatidylinositide 3-kinase; <strong>PKC, </strong>protein kinase C; <strong>PLC</strong><strong>&gamma;2</strong><strong>, </strong>phospholipase C&gamma;2; <strong>SYK, </strong>spleen tyrosine kinase.</p>`
      }
    },
    footer: `<p><span class="text-primary">*M7583 is under clinical investigation and has not been proven to be safe and effective. There is no guarantee M7583 will be approved in the sought-after indications. The relevance of these preclinical findings on the efficacy and safety in the clinical setting has not been established. </span> <br/><br/><strong>1</strong>Herman SEM, et al. Blood 2011;117:6287-96. <strong>2</strong>. Gaudio E, et al. Cancer Res 2017;77(13 Suppl):Abstract 4182 and poster (AACR 2017). <strong>3</strong>. Hendricks RW, et al. Nat Cancer Rev 2014;14:219-32. Woyach JA, et al. Blood 2012;120:1175-84.</p>`
  },
  {
    id: 4,
    slideGroups: ['m7583'],
    slideClass: 'pathways-4',
    title: `M7583 clinical trial program overview`,
    category: 'pathways',
    templateTable: {
      tableData: [
        {
          rowClass: `table-header`,
          tableRow: [
            {
              text: `Enrolling`,
            },
            {
              text: `Clinical Trial`,
              cellClass: `text-white table-bg-blue`,

            },
            {
              text: `Line`,
              cellClass: `text-white table-bg-green`,
            },
            {
              text: `Phase`,
              cellClass: `text-white table-bg-yellow`,
            },
            {
              text: `M7583 Treatment`,
              cellClass: `text-white table-bg-pink`,
            },
            {
              text: `ClinicalTrials.gov Identifier`,
              cellClass: `text-white table-bg-red`,
            },
          ]
        },
        {
          rowClass: `section-header`,
          tableRow: [
            {
              emptyCell: true
            },
            {
              text: `Hematologic malignancies`,
              cellClass: 'font-weight-bold table-bg-gray',
              colSpan: 5
            },
          ],
        },
        {
          rowClass: `content-row`,
          tableRow: [
            {
              cellClass: `table-bg-trial-closed`
            },
            {
              text: `B-cell malignancies`
            },
            {
              text: `2L+<sup>*</sup>`
            },
            {
              text: `Phase I/II`
            },
            {
              text: `Monotherapy`
            },
            {
              text: `NCT02825836`,
            }
          ]
        },
        {
          rowClass: `section-header`,
          tableRow: [
            {
              emptyCell: true
            },
            {
              text: `Healthy volunteers`,
              cellClass: 'font-weight-bold table-bg-gray',
              colSpan: 5
            },
          ],
        },
        {
          rowClass: `content-row`,
          tableRow: [
            {
              cellClass: `table-bg-trial-closed`
            },
            {
              text: `Bioavailability`
            },
            {
              text: `-`
            },
            {
              text: `Phase I`
            },
            {
              text: `Monotherapy`
            },
            {
              text: `NCT03297983`,
            }
          ]
        },
      ],
    },
    footer: `<p class="text-primary"><sup>*</sup>This study is ongoing, but not recruiting participants.</p>`
  },
  {
    id: 5,
    slideGroups: ['m8891'],
    slideClass: 'pathways-5',
    title: `Proposed profile of M8891<sup>*</sup>`,
    category: 'pathways',
    templateImageTextColumns: {
      column1: {
        topText: `<ul class="dashed-sublist list-spaced">
          <li>
            <span class="text-primary">M8891<sup>*</sup> is an investigational, small-molecule designed as a reversible, orally bioavailable inhibitor of Methionine aminopeptidase 2 (MetAP2).</span> This molecule is currently under clinical investigation and has not been proven to be safe and effective.
          </li>
          <li>
            MetAP2 is an enzyme that is important for angiogenesis and proliferation in several tumor types, therefore serves as a relevant therapeutic target for anti-cancer treatment development
          </li>
        </ul>`,
        bottomImage: `assets/images/pathways/pathways-5.png`,
        bottomImageClass: 'd-block mx-auto'
      },

    },
    footer: `<p><span class="text-primary">*M8891 (MetAP2i) is under clinical investigation and has not been proven to be safe and effective. There is no guarantee M8891 will be approved in the sought-after indications. The relevance of these preclinical findings on the efficacy and safety in the clinical setting has not been established.</span> <br/><br/>Figure (ribosome): http://biochemistrycourse.blogspot.com/2012/12/protein-synthesis.html</p>`
  },
  {
    id: 6,
    slideGroups: ['m8891'],
    slideClass: 'pathways-6',
    title: `M8891 clinical trial program overview`,
    category: 'pathways',
    templateTable: {
      // topText: `<ul class="dashed-sublist list-spaced">
      //   <li>
      //     M8891 is currently being evaluated in 1 first-in-human Phase I study
      //   </li>
      // </ul>`,
      tableData: [
        {
          rowClass: `table-header`,
          tableRow: [
            {
              text: `Enrolling`,
            },
            {
              text: `Clinical Trial`,
              cellClass: `text-white table-bg-blue`,

            },
            {
              text: `Line`,
              cellClass: `text-white table-bg-green`,
            },
            {
              text: `Phase`,
              cellClass: `text-white table-bg-yellow`,
            },
            {
              text: `M8891 Treatment`,
              cellClass: `text-white table-bg-pink`,
            },
            {
              text: `NCT Number`,
              cellClass: `text-white table-bg-red`,
            },
          ]
        },
        {
          rowClass: `content-row`,
          tableRow: [
            {
              cellClass: `table-bg-trial-open`
            },
            {
              text: `Solid tumors`
            },
            {
              text: `&ge;2L`
            },
            {
              text: `Phase I`
            },
            {
              text: `Once or twice daily administration at escalated dose levels for consecutive 21-day cycles of continuous treatment`
            },
            {
              text: `NCT03138538`,
            }
          ]
        },

      ],
    },
  },
  {
    id: 7,
    slideGroups: ['m2698'],
    slideClass: 'pathways-7',
    title: `Proposed profile of M2698<sup>*</sup>`,
    category: 'pathways',
    templateImageTextColumns: {
      column1: {
        topText: `
          <ul class="dashed-sublist list-spaced">
            <li>
              <span class="text-primary">M2698<sup>*</sup> is designed to be a brain penetrant, orally bioavailable, ATP-competitive dual small-molecule proposed to be an inhibitor of p70S6K, Akt1, and Akt3 kinases<sup>1</sup></span> This molecule is currently under clinical investigation and has not been proven to be safe and effective.
            </li>
            <li>
              Although mTOR-inhibiting agents have shown clinical activity, effectiveness may be limited due to activation of a compensatory Akt feedback loop, which leads to increased PI3K/AKT/mTOR (PAM) pathway signaling<sup>2</sup>
            </li>
            <li>
              Inhibition of several protein kinases along the PAM signaling pathway may potentially overcome activation of this compensatory feedback loop<sup>1</sup>
            </li>
          </ul>`
      },
      column2: {
        topImage: `assets/images/pathways/pathways-7.png`,
        topImageClass: `d-block mx-auto`
      }
    },
    footer: `<p><span class="text-primary">*M2698 (MSC2363318A) is under clinical investigation and has not been proven to be safe and effective. There is no guarantee M2698 will be approved in the sought-after indications.
    The relevance of these preclinical findings on the efficacy and safety in the clinical setting has not been established.</span><br /><br /><strong>1.</strong> Machl A, et al. Am J Cancer Res 2016;6:806-18. <strong>2. </strong>O&rsquo;Reilly KE, et al. Cancer Res 2006;66:1500-8.</p>`
  },
  {
    id: 8,
    slideGroups: ['m2698'],
    slideClass: 'pathways-8',
    title: `M2698 clinical trial program overview`,
    category: 'pathways',
    templateTable: {
      // topText: `<ul class="dashed-sublist list-spaced">
      //   <li>
      //     M2698 is currently being evaluated in 1 first-in-man Phase I study
      //   </li>
      // </ul>`,
      tableData: [
        {
          rowClass: `table-header`,
          tableRow: [
            {
              text: `Enrolling`,
            },
            {
              text: `Clinical Trial`,
              cellClass: `text-white table-bg-blue`,

            },
            {
              text: `Line`,
              cellClass: `text-white table-bg-green`,
            },
            {
              text: `Phase`,
              cellClass: `text-white table-bg-yellow`,
            },
            {
              text: `M2698 Treatment`,
              cellClass: `text-white table-bg-pink`,
            },
            {
              text: `NCT Number`,
              cellClass: `text-white table-bg-red`,
            },
          ]
        },
        {
          rowClass: `section-header`,
          tableRow: [
            {
              emptyCell: true
            },
            {
              text: `Solid tumors`,
              cellClass: 'font-weight-bold table-bg-gray',
              colSpan: 5
            },
          ],
        },
        {
          rowClass: `content-row`,
          tableRow: [
            {
              cellClass: `table-bg-trial-closed`
            },
            {
              text: `Solid tumors + breast cancer expansion cohorts<sup>*</sup>`
            },
            {
              text: `Any`
            },
            {
              text: `Phase I`
            },
            {
              text: `Cohort 1: monotherapy<br/>
              Cohort 2: + trastuzumab<br/>
              Cohort 3: + tamoxifen`
            },
            {
              text: `NCT01971515`,
            }
          ]
        },

      ],
    },
    footer: `<p class="text-primary"><sup>*</sup>This study is ongoing, but not recruiting participants.</p>`
  },
  {
    id: 9,
    slideGroups: [ 'bintrafusp'],
    slideClass: `immuno-9`,
    title: `Proposed profile of bintrafusp alfa<sup>*</sup>`,
    subtitle: `<span class="font-weight-normal">(TGF-&beta; trap/anti–PD-L1)</span>`,
    category: `immuno`,
    templateImageTextColumns: {
      column1: {
        topText: `<ul class="dashed-sublist list-spaced">
          <li class="text-primary">
            Bintrafusp alfa (M7824) is a novel, bi-functional fusion protein<sup>1</sup> designed with the following two components:
            <ul>
              <li>
                Potential TGF-β–neutralizing trap component: extracellular domain of human TGF-β receptor II
              </li>
              <li>
                Antibody component: fully human IgG1 mAb against human PD-L1
              </li>
            </ul>
          </li>
          This molecule is currently under clinical investigation and has not been proven to be safe and effective.<br>
          <br>
          <li>
            Evasion of antitumor immunity is a hallmark of cancer<sup>2</sup>
            <ul>
              <li>
                PD-1 and PD-L1 dampen T-cell activity and can be co-opted by tumors to suppress T-cell–mediated antitumor immune responses<sup>3</sup>
              </li>
              <li>
                TGF-β is a regulatory cytokine with diverse effects in the immune system that maintains immunologic self-tolerance<sup>4-6</sup>
              </li>
            </ul>
          </li>
          <li>
            The TGF-β and PD-L1 pathways are 2 key tumor immune evasion pathways that are thought to have independent and complementary immunosuppressive functions
          </li>
        </ul>`
      },
      column2: {
        topImage: `assets/images/immuno/immuno-1.png`,
        topImageClass: `d-block mx-auto`
      }
    },
    footer: `<p><span class="text-primary">
      <sup>*</sup>Bintrafusp alfa is the proposed International Nonproprietary Name (INN) for the bifunctional immunotherapy M7824. M7824 (MSB0011359C) is under clinical investigation and has not
      been proven to be safe and effective. There is no guarantee M2698 will be approved in the sought-after indications. The relevance of these preclinical findings on the efficacy and safety in the clinical setting has not been established.
      </span><br/>
      <br/>
      <strong>1.</strong> Lan Y, et al. Sci. Transl. Med 2018;10(424):eaan5488. <strong>2.</strong> Hanahan D, Weinberg R. Cell 2011;144(5):646-74. <strong>3.</strong> Pardoll DM. Nat Rev Cancer 2012;12(4):252-64. <strong>4. </strong>Akhurst RJ, Hata A. Nat Rev Drug Discov 2012;11(10):790-811. <strong>5. </strong>Wrzesinski SH, et al. Clin Cancer Res 2007;13:5262-70. <strong>6. </strong>Li MO, et al. Immunity 2008;28:468-76.
    </p>`
  },
  {
    id: 10,
    slideGroups: [ 'bintrafusp' ],
    slideClass: 'immuno-10',
    title: `Bintrafusp alfa clinical trial program overview ongoing studies`,
    category: 'immuno',
    templateTable: {
      // topText: `<ul class="dashed-sublist list-spaced">
      //   <li>
      //    Bintrafusp alfa is currently being evaluated in 2 Phase I and 2 Phase II company-sponsored studies
      //   </li>
      // </ul>`,
      bottomText: `<ul class="dashed-sublist list-spaced">
        <li>In addition, M7824 is being evaluated in several studies sponsored by academic research institute collaboration partners</li>
      </ul>`,
      tableData: [
        {
          rowClass: `table-header`,
          tableRow: [
            {
              text: `Enrolling`,
            },
            {
              text: `Clinical Trial`,
              cellClass: `text-white table-bg-blue`,

            },
            {
              text: `Line`,
              cellClass: `text-white table-bg-green`,
            },
            {
              text: `Phase`,
              cellClass: `text-white table-bg-yellow`,
            },
            {
              text: `M7824 Treatment`,
              cellClass: `text-white table-bg-pink`,
            },
            {
              text: `NCT Number`,
              cellClass: `text-white table-bg-red`,
            },
          ]
        },
        {
          rowClass: `section-header`,
          tableRow: [
            {
              emptyCell: true
            },
            {
              text: `Solid tumors`,
              cellClass: 'font-weight-bold table-bg-gray',
              colSpan: 5
            },
          ],
        },
        {
          rowClass: `content-row`,
          tableRow: [
            {
              cellClass: `table-bg-trial-open`
            },
            {
              text: `<strong>Study 001:</strong> Solid tumors`
            },
            {
              text: `Any`
            },
            {
              text: `Phase I`
            },
            {
              text: `Monotherapy`
            },
            {
              text: `NCT02517398`,
            }
          ]
        },
        {
          rowClass: `content-row`,
          tableRow: [
            {
              cellClass: `table-bg-trial-closed`
            },
            {
              text: `<strong>Study 008:</strong> Solid tumors – Asia`
            },
            {
              text: `Any`
            },
            {
              text: `Phase I`
            },
            {
              text: `Monotherapy`
            },
            {
              text: `NCT02699515`,
            }
          ]
        },
        {
          rowClass: `section-header`,
          tableRow: [
            {
              emptyCell: true
            },
            {
              text: `NSCLC`,
              cellClass: 'font-weight-bold table-bg-gray',
              colSpan: 5
            },
          ],
        },
        {
          rowClass: `content-row`,
          tableRow: [
            {
              cellClass: `table-bg-trial-open`
            },
            {
              text: `<strong>Study 0037: </strong> Advanced NSCLC (PD-L1-High)`
            },
            {
              text: `1L`
            },
            {
              text: `Phase II`
            },
            {
              text: `Monotherapy vs. pembrolizumab`
            },
            {
              text: `NCT03631706`,
            }
          ]
        },
        {
          rowClass: `content-row`,
          tableRow: [
            {
              cellClass: `table-bg-trial-open`
            },
            {
              text: `<strong>Study 0005:</strong> Stage III NSCLC cCRT Stage III 
              Phase II`
            },
            {
              text: `1L`
            },
            {
              text: `Phase II`
            },
            {
              text: `RT-CT combination vs durvalumab `
            },
            {
              text: `NCT03840902`,
            }
          ]
        },
        {
          rowClass: `content-row`,
          tableRow: [
            {
              cellClass: `table-bg-trial-open`
            },
            {
              text: `<strong>Study 0024:</strong> Stage IV NSCLC CT combo`
            },
            {
              text: `1L/2L`
            },
            {
              text: `Phase Ib/II `
            },
            {
              text: `Combination with chemotherapy`
            },
            {
              text: `NCT03840915`,
            }
          ]
        },
        {
          rowClass: `section-header`,
          tableRow: [
            {
              emptyCell: true
            },
            {
              text: `BTC`,
              cellClass: 'font-weight-bold table-bg-gray',
              colSpan: 5
            },
          ],
        },
        {
          rowClass: `content-row`,
          tableRow: [
            {
              cellClass: `table-bg-trial-open`
            },
            {
              text: `<strong>Study 0047:</strong> 2L BTC`
            },
            {
              text: `2L`
            },
            {
              text: `Phase II`
            },
            {
              text: `Monotherapy`
            },
            {
              text: `NCT0383361`,
            }
          ]
        },
      ],
    },
    // footer: `<p><strong>For further information on recruiting Study 037, please refer to the Clinical Programs panels in the booth.</strong></p>`
  },
  {
    id: 11,
    slideGroups: [ 'bintrafusp' ],
    slideClass: 'immuno-11',
    title: `Bintrafuspalfa clinical trial overview: NCI and MD Anderson trials`,
    category: 'immuno',
    templateTable: {
      topText: `<ul class="dashed-sublist list-spaced">
        <li>
         List of bintrafusp alfa trials sponsored by the NCI or MD Anderson Cancer Center
        </li>
      </ul>`,
      tableData: [
        {
          rowClass: `table-header`,
          tableRow: [
            {
              text: `Enrolling`,
            },
            {
              text: `Clinical Trial`,
              cellClass: `text-white table-bg-blue`,

            },
            {
              text: `Line`,
              cellClass: `text-white table-bg-green`,
            },
            {
              text: `Phase`,
              cellClass: `text-white table-bg-yellow`,
            },
            {
              text: `Bintrafusp Alfa Treatment`,
              cellClass: `text-white table-bg-pink`,
            },
            {
              text: `ClinicalTrials.gov Identifier`,
              cellClass: `text-white table-bg-red`,
            },
          ]
        },
        {
          rowClass: `section-header`,
          tableRow: [
            {
              emptyCell: true
            },
            {
              text: `HPV associated`,
              cellClass: 'font-weight-bold table-bg-gray',
              colSpan: 5
            },
          ],
        },
        {
          rowClass: `content-row`,
          tableRow: [
            {
              cellClass: `table-bg-trial-open`
            },
            {
              text: `HPV+ cancers`
            },
            {
              text: `1L+`
            },
            {
              text: `Phase II`
            },
            {
              text: `Monotherapy`
            },
            {
              text: `NCT03427411`,
            }
          ]
        },
        {
          rowClass: `content-row`,
          tableRow: [
            {
              cellClass: `table-bg-trial-closed`
            },
            {
              text: `Recurrent respiratory papillomatosis`
            },
            {
              text: `1L+`
            },
            {
              text: `Phase II`
            },
            {
              text: `Monotherapy`
            },
            {
              text: `NCT03707587`,
            }
          ]
        },
        {
          rowClass: `section-header`,
          tableRow: [
            {
              emptyCell: true
            },
            {
              text: `Breast cancer`,
              cellClass: 'font-weight-bold table-bg-gray',
              colSpan: 5
            },
          ],
        },
        {
          rowClass: `content-row`,
          tableRow: [
            {
              cellClass: `table-bg-trial-open`
            },
            {
              text: `<strong>RACHEL1:</strong> HER2− BC
`
            },
            {
              text: `2L+`
            },
            {
              text: `Phase I`
            },
            {
              text: `Combination with radiation`
            },
            {
              text: `NCT03524170`,
            }
          ]
        },
        {
          rowClass: `content-row`,
          tableRow: [
            {
              cellClass: `table-bg-trial-open`
            },
            {
              text: `TNBC`
            },
            {
              text: `1L+`
            },
            {
              text: `Phase I`
            },
            {
              text: `Combination with eribulin`
            },
            {
              text: `NCT03579472`,
            }
          ]
        },
        {
          rowClass: `content-row`,
          tableRow: [
            {
              cellClass: `table-bg-trial-open`
            },
            {
              text: `Stage II/III HER2+ BC`
            },
            {
              text: `NeoAdj`
            },
            {
              text: `Phase I`
            },
            {
              text: `Monotherapy`
            },
            {
              text: `NCT03620201`,
            }
          ]
        },
        {
          rowClass: `section-header`,
          tableRow: [
            {
              emptyCell: true
            },
            {
              text: `Prostate cancer`,
              cellClass: 'font-weight-bold table-bg-gray',
              colSpan: 5
            },
          ],
        },
        {
          rowClass: `content-row`,
          tableRow: [
            {
              cellClass: `table-bg-trial-open`
            },
            {
              text: `Biochemically recurrent prostate cancer`
            },
            {
              text: `2L+`
            },
            {
              text: `Phase II`
            },
            {
              text: `Combination with PROSTVAC + CV301`
            },
            {
              text: `NCT03315871`,
            }
          ]
        },
        {
          rowClass: `content-row`,
          tableRow: [
            {
              cellClass: `table-bg-trial-open`
            },
            {
              text: `<strong>QuEST1:</strong> includes mCRPC cohort`
            },
            {
              text: `1L+`
            },
            {
              text: `Phase I/II`
            },
            {
              text: `Various combinations with epacadostat + ALT-803 + BN-Brachyury vaccine`
            },
            {
              text: `NCT03493945`,
            }
          ]
        },
        {
          rowClass: `section-header`,
          tableRow: [
            {
              emptyCell: true
            },
            {
              text: `Other`,
              cellClass: 'font-weight-bold table-bg-gray',
              colSpan: 5
            },
          ],
        },
        {
          rowClass: `content-row`,
          tableRow: [
            {
              cellClass: `table-bg-trial-open`
            },
            {
              text: `MSI-H solid tumors, MSI-H mCRC, and CMS4 mCRC`
            },
            {
              text: `2L`
            },
            {
              text: `Phase I/II`
            },
            {
              text: `Monotherapy`
            },
            {
              text: `NCT03436563`,
            }
          ]
        },
        {
          rowClass: `content-row`,
          tableRow: [
            {
              cellClass: `table-bg-trial-closed`
            },
            {
              text: `Pancreatic cancer<sup>*</sup>`
            },
            {
              text: `2L`
            },
            {
              text: `Phase I/II`
            },
            {
              text: `Combination with gemcitabine`
            },
            {
              text: `NCT03451773`,
            }
          ]
        },
        {
          rowClass: `content-row`,
          tableRow: [
            {
              cellClass: `table-bg-trial-open`
            },
            {
              text: `SCLC`
            },
            {
              text: `2L+`
            },
            {
              text: `Phase I/II`
            },
            {
              text: `Combination with topotecan or TMZ`
            },
            {
              text: `NCT03554473`,
            }
          ]
        },
      ],
    },
    // footer: `<p class="text-primary"><sup>*</sup>Suspended (study undergoing sponsor audit)</p>`
  },
  {
    id: 12,
    slideGroups: [ 'm9241' ],
    slideClass: `immuno-12`,
    title: `Proposed profile of M9241 (NHS-IL12)<sup>*</sup>`,
    category: `immuno`,
    templateImageTextColumns: {
      column1: {
        topText: `<ul class="dashed-sublist list-spaced">
            <li class="text-primary">
              M9241<sup>*</sup> (NHS-IL12) is an immunocytokine composed of 2 IL-12 heterodimers, each fused to one of the H-chains of the IgG NHS76 antibody<sup>1,4</sup>

              <ul class="text-body">
                <li>NHS76 has affinity for both single- and double-stranded DNA</li>
                <li>Designed to deliver IL-12 to the necrotic regions of the tumor</li>
              </ul>
            </li>
            This molecule is currently under clinical investigation and has not been proven to be safe and effective.<br>
            <br>
            <li>
              Interleukin 12 (IL-12) is thought to be a proinflammatory cytokine produced by dendritic cells and macrophages <br/>that is a key mediator of the transition from innate to adaptive&nbsp;immunity<sup>1-4</sup>:

              <ul>
                <li>induce differentiation of naive CD4+ T cells to the Th1 phenotype<sup>5</sup></li>
                <li>increase the proliferation and lytic capacity of CD8+ cytotoxic T cells and NK cells<sup>6-10</sup></li>
                <li>promote IFN-γ production via NK cells and T cells<sup>11</sup></li>
              </ul>
            </li>`
      },
      column2: {
        topText: `<span class="d-block text-primary text-center mb-2"><strong>Biological properties of IL-12<sup>12</sup></strong></span>`,
        middleImage: `assets/images/immuno/immuno-12.png`,
        middleImageClass: `d-block mx-auto mb-2`,
        bottomText: `<p class="reference"><strong>APC,</strong> antigen-presenting cell; <strong>IP-10,</strong> interferon-inducible protein 10; <strong>MIG,</strong> monokine induced by interferon &gamma;; <strong>NK,</strong> natural killer cell; <strong>Tc,</strong> cytotoxic T lymphocyte; <strong>Th,</strong> T helper lymphocyte.</p>`
      }
    },
    footer: `<p>
      <span class="text-primary">
        <sup>*</sup>M9241 (MSB0010360) is under clinical investigation and has not been proven to be safe and effective. There is no guarantee M9241 will be approved in the sought-after indications.<br/>The relevance of these preclinical findings on the efficacy and safety in the clinical setting has not been established.<br>
      </span><br/><strong>1.</strong>Fallon J, et al. Oncotarget 2014;5:1869-84. <strong>2. </strong>Trinchieri G. Nat Rev Immunol 2003;3:133-46. <strong>3. </strong>Liu J, et al. Curr Immunol Rev 2005;1:119-37. <strong>4</strong>. Heery CR, et al. ASCO SITC 2016:Abstract 172 and poster. <strong>5</strong>. Xu C, et al. ASCO SITC 2016:Abstract 254 <strong>6. </strong>Gately MK, et al. J Immunol 1991;147:874-82. <strong>7. </strong>Perussia B, et al. J Immunol 1992;149:3495-502. <strong>8. </strong>Wong HL, et al. Cell Immunol 1988;111:39-54. <strong>9. </strong>Gately MK, et al. Cell Immunol 1992;143:127-42. <strong>10. </strong>Aste-Amezaga M, et al. Cell Immunol 1994;156:480-92. <strong>11. </strong>Kobayashi M, et al. J Exp Med 1989;170:827-45. <strong>12. </strong>Sgadari C, et al. Blood 1996;87:3877-82.
    </p>`
  },
  {
    id: 13,
    slideGroups: [ 'm9241' ],
    slideClass: 'immuno-13',
    title: `M9241 (NHS-IL12) clinical trial program overview ongoing studies`,
    category: 'immuno',
    templateTable: {
      topText: `<ul class="dashed-sublist list-spaced">
        <li>
         M9241 (NHS-IL12) is currently being evaluated in 2 Phase I studies
        </li>
      </ul>`,
      tableData: [
        {
          rowClass: `table-header`,
          tableRow: [
            {
              text: `Enrolling`,
            },
            {
              text: `Clinical Trial`,
              cellClass: `text-white table-bg-blue`,

            },
            {
              text: `Line`,
              cellClass: `text-white table-bg-green`,
            },
            {
              text: `Phase`,
              cellClass: `text-white table-bg-yellow`,
            },
            {
              text: `M9241 Treatment`,
              cellClass: `text-white table-bg-pink`,
            },
            {
              text: `NCT Number`,
              cellClass: `text-white table-bg-red`,
            },
          ]
        },
        {
          rowClass: `section-header`,
          tableRow: [
            {
              emptyCell: true
            },
            {
              text: `Solid tumors`,
              cellClass: 'font-weight-bold table-bg-gray',
              colSpan: 5
            },
          ],
        },
        {
          rowClass: `content-row`,
          tableRow: [
            {
              cellClass: `table-bg-trial-closed`
            },
            {
              text: `<strong>Study 110225:</strong> First in Human`
            },
            {
              text: `Any`
            },
            {
              text: `Phase I`
            },
            {
              text: `Monotherapy`
            },
            {
              text: `NCT01417546`,
            }
          ]
        },
        {
          rowClass: `content-row`,
          tableRow: [
            {
              cellClass: `table-bg-trial-open`
            },
            {
              text: `<strong>Study JAVELIN – IL-12:</strong> Solid tumors`
            },
            {
              text: `Any`
            },
            {
              text: `Phase Ib`
            },
            {
              text: `In combination with avelumab`
            },
            {
              text: `NCT02994953`,
            }
          ]
        },
      ],
    },
    // footer: `<p><strong>For further information on recruiting study JAVELIN – IL-12, please refer to the Clinical Programs panels in the booth.</strong></p>`
  },
  {
    id: 14,
    slideGroups: ['abituzumab'],
    slideClass: `immuno-14`,
    title: `Proposed profile of abituzumab<sup>*</sup>`,
    category: `immuno`,
    templateImageTextColumns: {
      column1: {
        topText: `<ul class="dashed-sublist list-spaced">
        <li>
          <span class="text-primary">Abituzumab* (EMD 525797) is a humanized IgG2 mAbagainst αv integrins1 that can bind to the extracellular domain of αv integrins and may inhibit ligand binding<sup>2,3</sup>.</span> This molecule is currently under clinical investigation and has not been proven to be safe and effective.
        </li>
        <li>
          Changes in integrin expression or function have been linked to tumor cell survival, metastasis, and angiogenesis<sup>4</sup>
        </li>
        <li>
          Studies have shown that the αv integrin subfamily (αvβ1, αvβ3, αvβ5, αvβ6, and αvβ8)<sup>4</sup> are expressed on certain types of tumor cells
          <ul>
            <li>
              <strong>CRC:</strong> Integrins αvβ5 and αvβ6 are expressed on CRC tumor cells and αvβ3 and αvβ5 are expressed on tumor-associated blood vessels<sup>5</sup>
            </li>
            <li>
              <strong>Prostate Cancer:</strong> Studies demonstrate that primary prostate cancer tumor cells express αvβ5<sup>6</sup>
            </li>
          </ul>
        </li>
      </ul>`
      },
      column2: {
        topImage: `assets/images/immuno/immuno-14.png`,
        topImageClass: `d-block mx-auto`
      }
    },
    footer: `<p>
      <span class="text-primary"><sup>*</sup>Abituzumab (EMD 525797) is an investigational agent and is not approved by Regulatory Authorities in any jurisdiction for any use.<br/>The relevance of these preclinical findings on the efficacy and safety in the clinical setting has not been established.</span><br/>
      <br>
      <strong>1.</strong> Uhl W, et al. Invest New Drugs 2014;32:347-354. <strong>2. </strong>Goodman SL, et al. Trends Pharmacol Sci 2012;33(7):405-12. <strong>3. </strong>Mitjans F, et al. J Cell Sci 1995;108(pt 8):2825-2838. <strong>4.</strong> Nemeth JA, et al. Cancer Invest 2007;25:632-646. <strong>5. </strong>Goodman SL, et al. Biol Open 2012;1:329-340. <strong>6. </strong>He&szlig; K, et al. Ann Diagn Pathol. 2014;18(6):343-50.<br/>Figure taken from Wirth M, et al. J Clin Oncol 2012;30(suppl 5):Abstract 231 and poster (ASCO GU 2012)
    </p>`
  },
  {
    id: 15,
    slideGroups: [ 'abituzumab' ],
    slideClass: `immuno-15`,
    // title: `<span class="font-weight-normal">Abituzumab Section 3: Clinical Studies</span>`,
    subtitle: `Abituzumab clinical trial program overview`,
    category: `immuno`,
    templateTable: {
      tableData: [
        {
          rowClass: `table-header`,
          tableRow: [
            {
              text: `Enrolling`,
            },
            {
              text: `Clinical Trial`,
              cellClass: `text-white table-bg-blue`,

            },
            {
              text: `Line`,
              cellClass: `text-white table-bg-green`,
            },
            {
              text: `Phase`,
              cellClass: `text-white table-bg-yellow`,
            },
            {
              text: `Abituzumab Treatment`,
              cellClass: `text-white table-bg-pink`,
            },
            {
              text: `ClinicalTrials.gov Identifier`,
              cellClass: `text-white table-bg-red`,
            },
          ]
        },
        {
          rowClass: `section-header`,
          tableRow: [
            {
              emptyCell: true
            },
            {
              text: `Prostate cancer`,
              cellClass: 'font-weight-bold table-bg-gray',
              colSpan: 5
            },
          ],
        },
        {
          rowClass: `content-row`,
          tableRow: [
            {
              cellClass: `table-bg-trial-closed`
            },
            {
              text: `CRPC with bone metastases`
            },
            {
              text: `2L+`
            },
            {
              text: `Phase I`
            },
            {
              text: `Monotherapy`
            },
            {
              text: `NCT00958477`,
            }
          ]
        },
        {
          rowClass: `content-row`,
          tableRow: [
            {
              cellClass: `table-bg-trial-closed`
            },
            {
              text: `<strong>PERSEUS:</strong> mCRPC`
            },
            {
              text: `1L`
            },
            {
              text: `Phase II`
            },
            {
              text: `Monotherapy`
            },
            {
              text: `NCT01360840`,
            }
          ]
        },
        {
          rowClass: `section-header`,
          tableRow: [
            {
              emptyCell: true
            },
            {
              text: `Colorectal cancer`,
              cellClass: 'font-weight-bold table-bg-gray',
              colSpan: 5
            },
          ],
        },
        {
          rowClass: `content-row`,
          tableRow: [
            {
              cellClass: `table-bg-trial-closed`
            },
            {
              text: `<strong>POSEIDON:</strong> <em>KRAS</em> WT mCRC`
            },
            {
              text: `2L+`
            },
            {
              text: `Phase I/II`
            },
            {
              text: `Combination with cetuximab + irinotecan`
            },
            {
              text: `NCT01008475`,
            }
          ]
        },
        {
          rowClass: `content-row`,
          tableRow: [
            {
              cellClass: `table-bg-trial-closed`
            },
            {
              text: `<strong>AMELION:</strong> RAS WT, left-sided mCRC with high αvβ6 expression`
            },
            {
              text: `1L`
            },
            {
              text: `Phase II`
            },
            {
              text: `Combination with cetuximab + FOLFIRI`
            },
            {
              text: `NCT03688230`,
            }
          ]
        },
        {
          rowClass: `section-header`,
          tableRow: [
            {
              emptyCell: true
            },
            {
              text: `Solid tumors`,
              cellClass: 'font-weight-bold table-bg-gray',
              colSpan: 5
            },
          ],
        },
        {
          rowClass: `content-row`,
          tableRow: [
            {
              cellClass: `table-bg-trial-closed`
            },
            {
              text: `CRC and OC with liver metastases`
            },
            {
              text: `2L+`
            },
            {
              text: `Phase I`
            },
            {
              text: `Monotherapy`
            },
            {
              text: `NCT00848510`,
            }
          ]
        },
        {
          rowClass: `content-row`,
          tableRow: [
            {
              cellClass: `table-bg-trial-closed`
            },
            {
              text: `Solid tumors – Japan`
            },
            {
              text: `Any`
            },
            {
              text: `Phase I`
            },
            {
              text: `Monotherapy`
            },
            {
              text: `NCT01327313`,
            }
          ]
        },
      ],
    },
    footer: `Abituzumab in SSC-ILD (NCT02745145) was terminated because of low recruitment rate of patients and due to a change in focus of the study.`
  },
  {
    id: 16,
    slideClass: `dna-16`,
    slideGroups: [ 'm3814', 'm6620', 'm4344', 'm3541' ],
    title: `DDRi portfolio potential mechanisms:<br/>M6620 (VX-970), M4344 (VX-803), M3541, M3814<sup>*</sup>`,
    category: `dna`,
    templateImageTextColumns: {
      column1: {
        topText: `<br><span class="font-md">These molecules are currently under clinical investigation and has not been proven to be safe and effective.</span><br><br>DDRi portfolio targets 3 major pathways of DSBs:<br/>ATR, ATM, DNA-PK`,
        bottomImage: `assets/images/dna/dna-16.png`,
        bottomImageClass: `d-block mx-auto`
      },
    },
    footer: `<p>
      <span class="text-primary">
        <sup>*</sup>M6620 (VX-970), M4344 (VX-803), M3541, and M3814 are under clinical investigation and have not been proven to be safe and effective. There is no guarantee any product will be approved in the sought-after indications.<br/>
      </span><br/><strong>1.</strong> Shapiro G, et al. Cancer Res 2016;76(14 Suppl):Abstract CT012 and oral presentation (AACR 2016). <strong>2. </strong>Plummer E, et al. J Clin Oncol 2016;34(Suppl):Abstract 2513 and poster (ASCO 2016). <strong>3. </strong>O&rsquo;Carrigan B, et al. J Clin Oncol 2016;34(Suppl):Abstract 2504 and oral presentation (ASCO 2016). <strong>4.</strong> Vertex. Press Release, 11 January 2017 (Accessed 1 January 2019). <strong>5. </strong>ClinicalTrials.gov NCT03225105 (Accessed 7 January 2019). <strong>6. </strong>van Bussel M, et al. J Clin Oncol 2017;35(Suppl):Abstract 2556 and poster (ASCO 2017).
    </p>`
  },
  {
    id: 17,
    slideGroups: [ 'm3814', 'm6620', 'm4344', 'm3541' ],
    slideClass: `dna-17`,
    title: `Genomic instability: a hallmark of late-stage cancers<sup>1,2</sup> – rationale for DDR inhibition `,
    category: `dna`,
    templateImageTextColumns: {
      column1: {
        topText: `Key enzymes involved in the repair of DNA damage<sup>3</sup>:
        <ul class="list-spaced">
          <li class="dna-text-blue">ATM</li>
          <li class="dna-text-purple">ATR</li>
          <li class="dna-text-dark-purple">DNA-PK</li>
        </ul>`,
        middleImage: `assets/images/dna/dna-17-1.png`,
        middleImageClass: `d-block ml-auto dna-img`,
        bottomText: `<p><span class="text-primary">DNA-PK is thought to be induced by exposure to cancer therapeutics.</span> As an effector kinase, DNA-PK is the integral component of the NHEJ process for DNA DSB repair</p>`
      },
      column2: {
        topText: `
        <p class="text-primary">ATR and ATM signal DNA repair by homologous recombination<sup>4</sup></p>
        <ul class="list-spaced text-primary">
          <li>ATR is thought to be activated in response to DNA damage, such as double-strand breaks and replication stress<sup>5</sup></li>
          <li>ATM is thought to be activated by a single-stranded DNA-containing structure<sup>5</sup></li>
        </ul>
        <p>In cancer, loss of ATM-p53 signaling is common and leads to dependence of tumor cells on ATR to survive DNA damage<sup>6,7</sup></p>
        `,
        bottomImage: `assets/images/dna/dna-17-2.png`,
        bottomImageClass: `d-block mx-auto`
      }
    },
    footer: `<p><strong>1.</strong> O'Connor MJ. Mol Cell 2015;60:547-60. <strong>2. </strong>Moeller BJ, et al. Curr Drug Targets 2010;11:1336-40. <strong>3. </strong>Andrs M, et al. J Med Chem 2015;58:41&minus;71. <strong>4.</strong> Smith J, et al. Adv Cancer Res 2010;108:73-112. <strong>5.</strong> Cimprich KA, Cortez D. Nat Rev Mol Cell Biol 2008;9:616-27. <strong>6.</strong> Freed-Pastor WA, Prives C. Genes Dev 2012;26:1268-86. <br /> <strong>7.</strong>Hall AB, et al. Oncotarget 2014;5:5674-85.</p>`
  },
  {
    id: 18,
    slideGroups: [ 'm6620'],
    slideClass: `dna-18`,
    title: `DDRi M6620 (VX-970) clinical trial program overview (1/2)`,
    category: `dna`,
    templateTable: {
      tableData: [
        {
          rowClass: `table-header`,
          tableRow: [
            {
              text: `Enrolling`,
            },
            {
              text: `Clinical Trial`,
              cellClass: `text-white table-bg-blue`,

            },
            {
              text: `Line`,
              cellClass: `text-white table-bg-green`,
            },
            {
              text: `Phase`,
              cellClass: `text-white table-bg-yellow`,
            },
            {
              text: `M6620 Treatment`,
              cellClass: `text-white table-bg-pink`,
            },
            {
              text: `ClinicalTrials.gov Identifier`,
              cellClass: `text-white table-bg-red`,
            },
          ]
        },
        {
          rowClass: `section-header`,
          tableRow: [
            {
              emptyCell: true
            },
            {
              text: `Solid tumors`,
              cellClass: 'font-weight-bold table-bg-gray',
              colSpan: 5
            },
          ],
        },
        {
          rowClass: `content-row`,
          tableRow: [
            {
              cellClass: `table-bg-trial-open`
            },
            {
              text: `Expansion cohort in TNBC, NSCLC, SCLC`
            },
            {
              text: `Various`
            },
            {
              text: `Phase I`
            },
            {
              text: `+ various chemotherapies`
            },
            {
              text: `NCT02157792`,
            }
          ]
        },
        {
          rowClass: `content-row`,
          tableRow: [
            {
              cellClass: `table-bg-trial-open`
            },
            {
              text: `Dose escalation`
            },
            {
              text: `Any`
            },
            {
              text: `Phase I/II`
            },
            {
              text: `+/- carboplatin `
            },
            {
              text: `2013-005100-34 (EU clinical trials register)`,
            }
          ]
        },
        {
          rowClass: `content-row`,
          tableRow: [
            {
              cellClass: `table-bg-trial-closed`
            },
            {
              text: `Rollover study for 2013-005100-34`
            },
            {
              text: `Any`
            },
            {
              text: `Phase I`
            },
            {
              text: `+/- carboplatin/paclitaxel `
            },
            {
              text: `NCT03309150`,
            }
          ]
        },
        {
          rowClass: `content-row`,
          tableRow: [
            {
              cellClass: `table-bg-trial-open`
            },
            {
              text: `Dose escalation (NCI-sponsored)`
            },
            {
              text: `Any`
            },
            {
              text: `Phase I`
            },
            {
              text: `+ irinotecan`
            },
            {
              text: `NCT02595931`,
            }
          ]
        },
        {
          rowClass: `content-row`,
          tableRow: [
            {
              cellClass: `table-bg-trial-open`
            },
            {
              text: `Dose escalation (NCI-sponsored)`
            },
            {
              text: `Any`
            },
            {
              text: `Phase I`
            },
            {
              text: `+ cisplatin/veliparib`
            },
            {
              text: `NCT02723864`,
            }
          ]
        },
        {
          rowClass: `section-header`,
          tableRow: [
            {
              emptyCell: true
            },
            {
              text: `HPV-negative SCCHN`,
              cellClass: 'font-weight-bold table-bg-gray',
              colSpan: 5
            },
          ],
        },
        {
          rowClass: `content-row`,
          tableRow: [
            {
              cellClass: `table-bg-trial-open`
            },
            {
              text: `Dose escalation (NCI-sponsored)`
            },
            {
              text: `Any`
            },
            {
              text: `Phase I`
            },
            {
              text: `+ cisplatin/radiotherapy `
            },
            {
              text: `NCT02567422`,
            }
          ]
        },
        {
          rowClass: `section-header`,
          tableRow: [
            {
              emptyCell: true
            },
            {
              text: `NSCLC with brain metastases `,
              cellClass: 'font-weight-bold table-bg-gray',
              colSpan: 5
            },
          ],
        },
        {
          rowClass: `content-row`,
          tableRow: [
            {
              cellClass: `table-bg-trial-open`
            },
            {
              text: `Dose escalation (NCI-sponsored)`
            },
            {
              text: `Any`
            },
            {
              text: `Phase I`
            },
            {
              text: `+ WBRT`
            },
            {
              text: `NCT02589522`,
            }
          ]
        },
        {
          rowClass: `section-header`,
          tableRow: [
            {
              emptyCell: true
            },
            {
              text: `Ovarian carcinoma`,
              cellClass: 'font-weight-bold table-bg-gray',
              colSpan: 5
            },
          ],
        },
        {
          rowClass: `content-row`,
          tableRow: [
            {
              cellClass: `table-bg-trial-closed`
            },
            {
              text: `Platinum-resistant (NCI-sponsored)`
            },
            {
              text: `2L+`
            },
            {
              text: `Phase II`
            },
            {
              text: `+ gemcitabine`
            },
            {
              text: `NCT02595892`,
            }
          ]
        },
        {
          rowClass: `content-row`,
          tableRow: [
            {
              cellClass: `table-bg-trial-open`
            },
            {
              text: `Platinum-sensitive (NCI-sponsored)`
            },
            {
              text: `2L`
            },
            {
              text: `Phase I/II`
            },
            {
              text: `+ gemcitabine/carboplatin`
            },
            {
              text: `NCT02627443`,
            }
          ]
        },
        {
          rowClass: `content-row`,
          tableRow: [
            {
              cellClass: `table-bg-trial-open`
            },
            {
              text: `Recurrent, PARPi resistant`
            },
            {
              text: `2L+`
            },
            {
              text: `Phase II`
            },
            {
              text: `+ avelumab/carboplatin`
            },
            {
              text: `NCT03704467`,
            }
          ]
        },
        {
          rowClass: `section-header`,
          tableRow: [
            {
              emptyCell: true
            },
            {
              text: `Castration-Resistant Prostate Cancer`,
              cellClass: 'font-weight-bold table-bg-gray',
              colSpan: 5
            },
          ],
        },
        {
          rowClass: `content-row`,
          tableRow: [
            {
              cellClass: `table-bg-trial-open`
            },
            {
              text: `Metastatic CRPC (NCI-sponsored)`
            },
            {
              text: `2L+`
            },
            {
              text: `Phase II`
            },
            {
              text: `+ carboplatin; +/-docetaxel`
            },
            {
              text: `NCT03517969`,
            }
          ]
        },
      ],
    },
  },
  {
    id: 19,
    slideGroups: ['m6620'],
    slideClass: `dna-19`,
    title: `DDRi M6620 (VX-970) clinical trial program overview (2/2)`,
    category: `dna`,
    templateTable: {
      tableData: [
        {
          rowClass: `table-header`,
          tableRow: [
            {
              text: `Enrolling`,
            },
            {
              text: `Clinical Trial`,
              cellClass: `text-white table-bg-blue`,

            },
            {
              text: `Line`,
              cellClass: `text-white table-bg-green`,
            },
            {
              text: `Phase`,
              cellClass: `text-white table-bg-yellow`,
            },
            {
              text: `M6620 Treatment`,
              cellClass: `text-white table-bg-pink`,
            },
            {
              text: `ClinicalTrials.gov Identifier`,
              cellClass: `text-white table-bg-red`,
            },
          ]
        },
        {
          rowClass: `section-header`,
          tableRow: [
            {
              emptyCell: true
            },
            {
              text: `Urothelial carcinoma`,
              cellClass: 'font-weight-bold table-bg-gray',
              colSpan: 5
            },
          ],
        },
        {
          rowClass: `content-row`,
          tableRow: [
            {
              cellClass: `table-bg-trial-open`
            },
            {
              text: `UC (NCI-sponsored)`
            },
            {
              text: `1L`
            },
            {
              text: `Phase II`
            },
            {
              text: `+ gemcitabine/cisplatin`
            },
            {
              text: `NCT02567409`,
            }
          ]
        },
        {
          rowClass: `section-header`,
          tableRow: [
            {
              emptyCell: true
            },
            {
              text: `Small-cell cancers`,
              cellClass: 'font-weight-bold table-bg-gray',
              colSpan: 5
            },
          ],
        },
        {
          rowClass: `content-row`,
          tableRow: [
            {
              cellClass: `table-bg-trial-open`
            },
            {
              text: `SCLC, NSCLC, OC, cervical cancer, NET (NCI-sponsored)`
            },
            {
              text: `2L+`
            },
            {
              text: `Phase I/II`
            },
            {
              text: `+ topotecan`
            },
            {
              text: `NCT02487095`,
            }
          ]
        },
        {
          rowClass: `content-row`,
          tableRow: [
            {
              cellClass: `table-bg-trial-closed`
            },
            {
              text: `Relapsed small cell lung cancer or
              extrapulmonary small cell cancer (NCI-sponsored)`
            },
            {
              text: `2L+`
            },
            {
              text: `Phase II`
            },
            {
              text: `+ topotecan`
            },
            {
              text: `NCT03896503`,
            }
          ]
        },
        {
          rowClass: `section-header`,
          tableRow: [
            {
              emptyCell: true
            },
            {
              text: `Prostate cancer`,
              cellClass: 'font-weight-bold table-bg-gray',
              colSpan: 5
            },
          ],
        },
        {
          rowClass: `content-row`,
          tableRow: [
            {
              cellClass: `table-bg-trial-open`
            },
            {
              text: `Metastatic castration-resistant prostate cancer (NCI Sponsored)`
            },
            {
              text: `2L+`
            },
            {
              text: `Phase II`
            },
            {
              text: `+carboplatin/docetaxel`
            },
            {
              text: `NCT03517969`,
            }
          ]
        },
        {
          rowClass: `section-header`,
          tableRow: [
            {
              emptyCell: true
            },
            {
              text: `Gastric/GEJ adenocarcinoma`,
              cellClass: 'font-weight-bold table-bg-gray',
              colSpan: 5
            },
          ],
        },
        {
          rowClass: `content-row`,
          tableRow: [
            {
              cellClass: `table-bg-trial-closed`
            },
            {
              text: `TP53 mutant cancer (NCI-sponsored)`
            },
            {
              text: `2L+`
            },
            {
              text: `Phase II`
            },
            {
              text: `+ irinotecan`
            },
            {
              text: `NCT03641313`,
            }
          ]
        },
        {
          rowClass: `section-header`,
          tableRow: [
            {
              emptyCell: true
            },
            {
              text: `Esophageal cancer and solid tumors`,
              cellClass: 'font-weight-bold table-bg-gray',
              colSpan: 5
            },
          ],
        },
        {
          rowClass: `content-row`,
          tableRow: [
            {
              cellClass: `table-bg-trial-open`
            },
            {
              text: `Dose escalation (University of Oxford sponsored)`
            },
            {
              text: `Any`
            },
            {
              text: `Phase I`
            },
            {
              text: `+ radiotherapy, cisplatin/capecitabine, or CRT`
            },
            {
              text: `NCT03641547`,
            }
          ]
        },
        {
          rowClass: `section-header`,
          tableRow: [
            {
              emptyCell: true
            },
            {
              text: `Various cancers`,
              cellClass: 'font-weight-bold table-bg-gray',
              colSpan: 5
            },
          ],
        },
        {
          rowClass: `content-row`,
          tableRow: [
            {
              cellClass: `table-bg-trial-open`
            },
            {
              text: `Leiomyosarcoma, osteosarcoma, or solid tumors with specified mutations`
            },
            {
              text: `Various`
            },
            {
              text: `Phase II`
            },
            {
              text: `Monotherapy`
            },
            {
              text: `NCT03718091`,
            }
          ]
        },
      ],
    },
  },
  {
    id: 20,
    slideGroups: [ 'm3814', 'm4344', 'm3541' ],
    slideClass: `dna-20`,
    title: `DDRi M4344 (VX-803), M3541, M3814 clinical trial program overview`,
    category: `dna`,
    templateTable: {
      tableData: [
        {
          rowClass: `table-header`,
          tableRow: [
            {
              text: `Enrolling`,
            },
            {
              text: `Clinical Trial`,
              cellClass: `text-white table-bg-blue`,

            },
            {
              text: `Line`,
              cellClass: `text-white table-bg-green`,
            },
            {
              text: `Phase`,
              cellClass: `text-white table-bg-yellow`,
            },
            {
              text: `Treatment`,
              cellClass: `text-white table-bg-pink`,
            },
            {
              text: `ClinicalTrials.gov Identifier`,
              cellClass: `text-white table-bg-red`,
            },
          ]
        },
        {
          rowClass: `section-header`,
          tableRow: [
            {
              emptyCell: true
            },
            {
              text: `Solid tumors`,
              cellClass: 'font-weight-bold table-bg-gray',
              colSpan: 5
            },
          ],
        },
        {
          rowClass: `content-row`,
          tableRow: [
            {
              cellClass: `table-bg-trial-open`
            },
            {
              text: `<strong>M4344</strong>, ATRi, dose escalation`
            },
            {
              text: `Any`
            },
            {
              text: `Phase I`
            },
            {
              text: `<strong>M4344</strong> +/− gemcitabine or cisplatin or carboplatin`
            },
            {
              text: `NCT02278250`,
            }
          ]
        },
        {
          rowClass: `content-row`,
          tableRow: [
            {
              cellClass: `table-bg-trial-open`
            },
            {
              text: `<strong>M3541</strong>, ATMi, dose escalation<br>(tumors in thorax, abdomen, head<br>and neck, extremities)`
            },
            {
              text: `Any`
            },
            {
              text: `Phase I`
            },
            {
              text: `<strong>M3541</strong> + radiotherapy`
            },
            {
              text: `NCT03225105`,
            }
          ]
        },
        {
          rowClass: `content-row`,
          tableRow: [
            {
              cellClass: `table-bg-trial-closed`
            },
            {
              text: `<strong>M3814</strong>, DNA-PKi, dose escalation<br>(expansion cohort in CLL)`
            },
            {
              text: `Any/3L+`
            },
            {
              text: `Phase I`
            },
            {
              text: `<strong>M3814</strong>`
            },
            {
              text: `NCT02316197`,
            }
          ]
        },
        {
          rowClass: `content-row`,
          tableRow: [
            {
              cellClass: `table-bg-trial-closed`
            },
            {
              text: `<strong>M3814</strong>, DNA-PKi, dose escalation<br>(expansion cohorts in NSCLC and SCCHN)`
            },
            {
              text: `Any/1L<sup>†</sup>`
            },
            {
              text: `Phase I`
            },
            {
              text: `<strong>M3814</strong> + radiotherapy/cisplatin`
            },
            {
              text: `NCT02516813`,
            }
          ]
        },
        {
          rowClass: `content-row`,
          tableRow: [
            {
              cellClass: `table-bg-trial-open`
            },
            {
              text: `<strong>M3814</strong>, DNA-PKi, dose escalation`
            },
            {
              text: `2L+`
            },
            {
              text: `Phase I`
            },
            {
              text: `<strong>M3814</strong> + avelumab +/- radiotherapy`
            },
            {
              text: `NCT03724890`,
            }
          ]
        },
        {
          rowClass: `section-header`,
          tableRow: [
            {
              emptyCell: true
            },
            {
              text: `Rectal Cancer`,
              cellClass: 'font-weight-bold table-bg-gray',
              colSpan: 5
            },
          ],
        },
        {
          rowClass: `content-row`,
          tableRow: [
            {
              cellClass: `table-bg-trial-open`
            },
            {
              text: `<strong>M3814</strong>, DNA-PKi,<br>Locally advanced Rectal Cancer`
            },
            {
              text: `Any`
            },
            {
              text: `Phase Ib, Phase II`
            },
            {
              text: `<strong>M3814</strong> + Capecitabine and radiotherapy`
            },
            {
              text: `NCT03770689`,
            }
          ]
        },
      ],
    },
  }
];
