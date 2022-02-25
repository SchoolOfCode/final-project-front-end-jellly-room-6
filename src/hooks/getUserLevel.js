const levelRequirements = {
  1: 100,
  2: 200,
  3: 300,
  4: 500,
  5: 800,
  6: 1200,
  7: 1800,
  8: 2500,
  9: 3500,
  10: 5000,
};


export function getUserRemainingXpPercentage(xp, level){

  const difference = levelRequirements[level] - levelRequirements[level-1]
  //Difference in xp between current level and next level

  const xpLessLevel = xp - levelRequirements[level-1];
  //Gets the xp earned since the start of this level.

  //Work out percentage of current xp to remaining xp required
  const percentage = xpLessLevel / difference;

  return Number(percentage.toFixed(2))
}

export function getUserRemainingXp(xp, level){
  
  const difference = levelRequirements[level] - levelRequirements[level-1]
  //Difference in xp between current level and next level

  const xpLessLevel = xp - levelRequirements[level-1];
  //Gets the xp earned since the start of this level.

  //Work out percentage of current xp to remaining xp required
  const remainingXp = difference - xpLessLevel;

  return remainingXp;
}

export function getUserXpToNextLevel(level){
  return levelRequirements[level];
}

export function getUserXpEarnedThisLevel(xp, level){
  return xp - levelRequirements[level-1];
}

export function getUserXpNextLevelRequired(level){
  return levelRequirements[level] - levelRequirements[level-1]
}


export default function getUserLevel(xp) {
  for (let level in levelRequirements) {
    if (xp <= levelRequirements[level]) {
      return Number(level);
    }
  }
  return Object.keys(levelRequirements)[
    Object.keys(levelRequirements).length - 1
  ];
}
