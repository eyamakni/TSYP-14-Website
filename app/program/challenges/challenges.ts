export interface Challenge {
  id: string;
  name: string;
  logos: string[];
  specLink: string;
  phase1Deadline: string;
  infoSessionDate: string;
}

export const CHALLENGES: Challenge[] = [
  {
    id: "challenge-1",
    name: "The Living Map: Spatial Memory for Emergency Robots",
    logos: [
      "/societies/ras.png",
      "/societies/aess.png",
    ],
    specLink:
      "https://drive.google.com/file/d/1bvq9aVgPIA-A1pNEWhJ0lYeI8MNMtrdv/view?usp=sharing",
    phase1Deadline: "05 October 2026",
    infoSessionDate: "14 September 2026",
  },
  {
    id: "challenge-2",
    name: "CABINGUARD-ADI",
    logos: [
      "/societies/vts.png",
      "/societies/embs.png",
    ],
    specLink:
      "https://drive.google.com/file/d/15Vtqx499uvATtP3xO0FJxhRp_gGBLBB7/view?usp=sharing",
    phase1Deadline: "01 October 2026",
    infoSessionDate: "15 September 2026",
  },
  {
    id: "challenge-3",
    name: "NEXUS: Next-Generation Emergency eXchange for Universal Sustainability",
    logos: [
      "/societies/sight.png",
      "/societies/council.png",
      "/societies/tech.png",
      "/societies/ceda.png",
    ],
    specLink:
      "https://drive.google.com/file/d/1IGdD5hincq2haXRrSGjGAKNVMgv2DQnd/view?usp=sharing",
    phase1Deadline: "12 October 2026",
    infoSessionDate: "12 September 2026",
  },
  {
    id: "challenge-4",
    name: "City Brain Convergence",
    logos: [
      "/societies/cs.png",
      "/societies/cn.png",
      "/societies/ai.png",
      "/societies/yp.png",
    ],
    specLink:
      "https://drive.google.com/file/d/18_xa-QnqOzZSWuOMNb1TwdR93buSmO_t/view?usp=drive_link",
    phase1Deadline: "17 September 2026",
    infoSessionDate: "09 September 2026",
  },
  {
    id: "challenge-5",
    name: "IAS CHALLENGE",
    logos: [
      "/societies/ias.png",
    ],
    specLink:
      "https://drive.google.com/file/d/1CZ472UIetrNzyy4dZiYGaYu8XxrVkXQp/view?usp=drive_link",
    phase1Deadline: "30 October 2026",
    infoSessionDate: "13 September 2026",
  },
  {
    id: "challenge-6",
    name: "Women And Rural Agriculture Innovation Challenge",
    logos: [
      "/societies/wie.png",
      "/societies/ssit.png",
      "/societies/ent.png",
    ],
    specLink:
      "https://drive.google.com/file/d/1CE_09tClW84i7t-oh6olvyofaJQwmkJH/view?usp=drive_link",
    phase1Deadline: "05 November 2026",
    infoSessionDate: "16 September 2026",
  },
  {
    id: "challenge-7",
    name: "Ground Truth Under Attack: Securing the Earth Observation Chain",
    logos: [
      "/societies/grss.png",
      "/societies/sp.png",
      "/societies/cis.png",
    ],
    specLink:
      "https://drive.google.com/file/d/1pocl9K2ymSAoT2N2oNVClJ9B-ER0pKbc/view?usp=sharing",
    phase1Deadline: "11 October 2026",
    infoSessionDate: "11 September 2026",
  },
];