export interface Challenge {
  id: string;
  name: string;
  logos: string[];
  specLink: string;
}

export const CHALLENGES: Challenge[] = [
  {
    id: "challenge-1",
    name: "The Living Map: Spatial Memory for Emergency Robots",
    logos: [
      "/societies/ras.png",
      "/societies/aess.png",
    ],
    specLink: "https://drive.google.com/file/d/1bvq9aVgPIA-A1pNEWhJ0lYeI8MNMtrdv/view?usp=sharing",
  },

  {
    id: "challenge-2",
    name: "CABINGUARD-ADI",
    logos: [
      "/societies/vts.png",
      "/societies/embs.png",
    ],
    specLink: "https://drive.google.com/file/d/15Vtqx499uvATtP3xO0FJxhRp_gGBLBB7/view?usp=sharing",
  }
];