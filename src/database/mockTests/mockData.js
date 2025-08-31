// USERS
export const users = [
  { discord_id: "111111111111111111", donder_id: "DON001" },
  { discord_id: "222222222222222222", donder_id: "DON002" },
  { discord_id: "333333333333333333", donder_id: "DON003" },
  { discord_id: "444444444444444444", donder_id: "DON004" },
  { discord_id: "555555555555555555", donder_id: "DON005" },
  { discord_id: "666666666666666666", donder_id: "DON006" }
];

// CHALLENGES
export const challenges = [
  { name: "Summer Taiko Cup", end_time: "2025-09-15T23:59:59" },
  { name: "Autumn Rhythm Clash", end_time: "2025-10-10T23:59:59" }
];

// CHARTS
export const charts = [
  { name: "Blue Bird", artist: "Ikimono Gakari" },   // id 1
  { name: "Senbonzakura", artist: "Kurousa-P" },     // id 2
  { name: "Butter-Fly", artist: "Kōji Wada" },       // id 3
  { name: "Night of Knights", artist: "ZUN/beatMARIO" }, // id 4
  { name: "Guren no Yumiya", artist: "Linked Horizon" }, // id 5
  { name: "Silhouette", artist: "Kana-Boon" }        // id 6
];

// CHALLENGE_CHARTS (3 charts each)
export const challenge_charts = [
  // Summer Taiko Cup -> charts 1–3
  { challenge_id: 1, chart_id: 1 },
  { challenge_id: 1, chart_id: 2 },
  { challenge_id: 1, chart_id: 3 },

  // Autumn Rhythm Clash -> charts 4–6
  { challenge_id: 2, chart_id: 4 },
  { challenge_id: 2, chart_id: 5 },
  { challenge_id: 2, chart_id: 6 }
];

// SCORES
export const scores = [
  // Challenge 1 scores
  { challenge_id: 1, chart_id: 1, donder_id: "DON001", score: 950000 },
  { challenge_id: 1, chart_id: 1, donder_id: "DON002", score: 880000 },
  { challenge_id: 1, chart_id: 1, donder_id: "DON003", score: 910000 },
  { challenge_id: 1, chart_id: 2, donder_id: "DON004", score: 920000 },
  { challenge_id: 1, chart_id: 2, donder_id: "DON005", score: 870000 },
  { challenge_id: 1, chart_id: 2, donder_id: "DON006", score: 940000 },
  { challenge_id: 1, chart_id: 3, donder_id: "DON001", score: 965000 },
  { challenge_id: 1, chart_id: 3, donder_id: "DON002", score: 899000 },
  { challenge_id: 1, chart_id: 3, donder_id: "DON003", score: 912000 },

  // Challenge 2 scores
  { challenge_id: 2, chart_id: 4, donder_id: "DON004", score: 960000 },
  { challenge_id: 2, chart_id: 4, donder_id: "DON005", score: 880000 },
  { challenge_id: 2, chart_id: 4, donder_id: "DON006", score: 920000 },
  { challenge_id: 2, chart_id: 5, donder_id: "DON001", score: 970000 },
  { challenge_id: 2, chart_id: 5, donder_id: "DON002", score: 940000 },
  { challenge_id: 2, chart_id: 5, donder_id: "DON003", score: 915000 },
  { challenge_id: 2, chart_id: 6, donder_id: "DON004", score: 930000 },
  { challenge_id: 2, chart_id: 6, donder_id: "DON005", score: 875000 },
  { challenge_id: 2, chart_id: 6, donder_id: "DON006", score: 955000 }
];