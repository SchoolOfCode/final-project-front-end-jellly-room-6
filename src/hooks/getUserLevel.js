
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
        10: 5000
    }

export default function getUserLevel(xp){
    

    for (let level in levelRequirements){
        if(xp < levelRequirements[level]){
            return Number(level)
        }
    }
    return Object.keys(levelRequirements)[Object.keys(levelRequirements).length - 1]

}