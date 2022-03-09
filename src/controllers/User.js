const levelRequirements = {
  1: 0,
  2: 100,
  3: 300,
  4: 500,
  5: 800,
  6: 1200,
  7: 1800,
  8: 2500,
  9: 3500,
  10: 5000
};


export function getUserRemainingXpPercentage(xp, level){

  const difference = levelRequirements[level+1] - levelRequirements[level]
  //Difference in xp between current level and next level

  const xpLessLevel = xp - levelRequirements[level];
  //Gets the xp earned since the start of this level.

  //Work out percentage of current xp to remaining xp required
  const percentage = xpLessLevel / difference;

  return Number(percentage.toFixed(2))
}

export function getUserRemainingXp(xp, level){
  
  const difference = levelRequirements[level-1] - levelRequirements[level-1]
  //Difference in xp between current level and next level

  const xpLessLevel = xp - levelRequirements[level-1];
  //Gets the xp earned since the start of this level.

  //Work out percentage of current xp to remaining xp required
  const remainingXp = difference - xpLessLevel;

  return remainingXp;
}

export function getUserXpEarnedThisLevel(xp, level){
  return xp - levelRequirements[level];
}

export function getUserXpNextLevelRequired(level){
  return levelRequirements[level+1] - levelRequirements[level]
}


export function getUserLevel(xp) {
  for (let level in levelRequirements) {
    if (xp < levelRequirements[level]) {
      return Number(level-1);
    }
  }
  return Object.keys(levelRequirements)[
    Object.keys(levelRequirements).length - 1
  ];
}

export async function getUserBeans(username) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/${username}`);
  const data = await res.json();
  return data.payload[0].beans;
}

export async function getPurchasesByUser(user_id) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/purchases/${user_id}`);
  const data = await res.json();
  return data.payload;
}




