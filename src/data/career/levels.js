/**
 * Career leveling system based on XP
 * Each level requires progressively more XP
 * Formula: XP required = baseXP * (level ^ 1.5)
 */

/**
 * Reputation titles based on level ranges
 */
export const ReputationTitles = {
  1: 'Student Pilot',
  2: 'Student Pilot',
  3: 'Student Pilot',
  4: 'Student Pilot',
  5: 'Private Pilot',
  6: 'Private Pilot',
  7: 'Private Pilot',
  8: 'Private Pilot',
  9: 'Private Pilot',
  10: 'Commercial Pilot',
  11: 'Commercial Pilot',
  12: 'Commercial Pilot',
  13: 'Commercial Pilot',
  14: 'Commercial Pilot',
  15: 'Experienced Pilot',
  16: 'Experienced Pilot',
  17: 'Experienced Pilot',
  18: 'Experienced Pilot',
  19: 'Experienced Pilot',
  20: 'Senior Pilot',
  21: 'Senior Pilot',
  22: 'Senior Pilot',
  23: 'Senior Pilot',
  24: 'Senior Pilot',
  25: 'Flight Instructor',
  26: 'Flight Instructor',
  27: 'Flight Instructor',
  28: 'Flight Instructor',
  29: 'Flight Instructor',
  30: 'Chief Pilot',
  31: 'Chief Pilot',
  32: 'Chief Pilot',
  33: 'Chief Pilot',
  34: 'Chief Pilot',
  35: 'Captain',
  36: 'Captain',
  37: 'Captain',
  38: 'Captain',
  39: 'Captain',
  40: 'Senior Captain',
  41: 'Senior Captain',
  42: 'Senior Captain',
  43: 'Senior Captain',
  44: 'Senior Captain',
  45: 'Check Airman',
  46: 'Check Airman',
  47: 'Check Airman',
  48: 'Check Airman',
  49: 'Check Airman',
  50: 'Flight Operations Manager',
  51: 'Flight Operations Manager',
  52: 'Flight Operations Manager',
  53: 'Flight Operations Manager',
  54: 'Flight Operations Manager',
  55: 'Chief Flight Instructor',
  56: 'Chief Flight Instructor',
  57: 'Chief Flight Instructor',
  58: 'Chief Flight Instructor',
  59: 'Chief Flight Instructor',
  60: 'Aviation Expert',
  61: 'Aviation Expert',
  62: 'Aviation Expert',
  63: 'Aviation Expert',
  64: 'Aviation Expert',
  65: 'Master Aviator',
  66: 'Master Aviator',
  67: 'Master Aviator',
  68: 'Master Aviator',
  69: 'Master Aviator',
  70: 'Distinguished Aviator',
  71: 'Distinguished Aviator',
  72: 'Distinguished Aviator',
  73: 'Distinguished Aviator',
  74: 'Distinguished Aviator',
  75: 'Aviation Legend',
  76: 'Aviation Legend',
  77: 'Aviation Legend',
  78: 'Aviation Legend',
  79: 'Aviation Legend',
  80: 'Sky Master',
  81: 'Sky Master',
  82: 'Sky Master',
  83: 'Sky Master',
  84: 'Sky Master',
  85: 'Elite Aviator',
  86: 'Elite Aviator',
  87: 'Elite Aviator',
  88: 'Elite Aviator',
  89: 'Elite Aviator',
  90: 'Legendary Pilot',
  91: 'Legendary Pilot',
  92: 'Legendary Pilot',
  93: 'Legendary Pilot',
  94: 'Legendary Pilot',
  95: 'Aviation Icon',
  96: 'Aviation Icon',
  97: 'Aviation Icon',
  98: 'Aviation Icon',
  99: 'Aviation Icon',
  100: 'Supreme Aviator'
}

/**
 * XP thresholds for each level (1-100)
 * Levels 1-39: Formula baseXP * (level ^ 1.5) * 1.43 (Base XP = 143)
 * Levels 40-100: Linear progression with ~1,900 XP increments to reach 150,000 at level 100
 */
export const LevelThresholds = {
  1: 0,
  2: 405,
  3: 887,
  4: 1430,
  5: 2022,
  6: 2656,
  7: 3323,
  8: 4023,
  9: 4748,
  10: 5500,
  11: 6276,
  12: 7076,
  13: 7896,
  14: 8737,
  15: 9598,
  16: 10478,
  17: 11376,
  18: 12291,
  19: 13223,
  20: 14171,
  21: 15135,
  22: 16115,
  23: 17109,
  24: 18117,
  25: 19139,
  26: 20174,
  27: 21223,
  28: 22284,
  29: 23358,
  30: 24444,
  31: 25544,
  32: 26655,
  33: 27779,
  34: 28915,
  35: 30061,
  36: 31221,
  37: 32392,
  38: 33575,
  39: 34769,
  40: 35975,
  41: 37875,
  42: 39775,
  43: 41675,
  44: 43575,
  45: 45475,
  46: 47375,
  47: 49275,
  48: 51175,
  49: 53075,
  50: 54975,
  51: 56875,
  52: 58775,
  53: 60675,
  54: 62575,
  55: 64475,
  56: 66375,
  57: 68275,
  58: 70175,
  59: 72075,
  60: 73975,
  61: 75875,
  62: 77775,
  63: 79675,
  64: 81575,
  65: 83475,
  66: 85375,
  67: 87275,
  68: 89175,
  69: 91075,
  70: 92975,
  71: 94875,
  72: 96775,
  73: 98675,
  74: 100575,
  75: 102475,
  76: 104375,
  77: 106275,
  78: 108175,
  79: 110075,
  80: 111975,
  81: 113875,
  82: 115775,
  83: 117675,
  84: 119575,
  85: 121475,
  86: 123375,
  87: 125275,
  88: 127175,
  89: 129075,
  90: 130975,
  91: 132875,
  92: 134775,
  93: 136675,
  94: 138575,
  95: 140475,
  96: 142375,
  97: 144275,
  98: 146175,
  99: 148075,
  100: 150000
}

/**
 * Gets the current level based on XP
 * @param {number} xp - Current XP amount
 * @returns {number} Current level (1-100)
 */
export const getLevelFromXP = (xp) => {
  if (xp < 0) return 1

  let level = 1
  for (let i = 100; i >= 1; i--) {
    if (xp >= LevelThresholds[i]) {
      level = i
      break
    }
  }

  return level
}

/**
 * Gets the reputation title for a given level
 * @param {number} level - Current level
 * @returns {string} Reputation title
 */
export const getReputationTitle = (level) => {
  return ReputationTitles[level] || 'Student Pilot'
}

/**
 * Gets XP progress information for current level
 * @param {number} xp - Current XP amount
 * @returns {Object} Object containing level, title, current XP, next level XP, and progress percentage
 */
export const getLevelProgress = (xp) => {
  const currentLevel = getLevelFromXP(xp)
  const currentLevelXP = LevelThresholds[currentLevel]
  const nextLevel = Math.min(currentLevel + 1, 100)
  const nextLevelXP = LevelThresholds[nextLevel]
  const reputationTitle = getReputationTitle(currentLevel)

  // Calculate progress percentage
  const xpInCurrentLevel = xp - currentLevelXP
  const xpNeededForNextLevel = nextLevelXP - currentLevelXP
  const progressPercentage =
    currentLevel === 100
      ? 100
      : Math.min(100, (xpInCurrentLevel / xpNeededForNextLevel) * 100)

  return {
    level: currentLevel,
    title: reputationTitle,
    currentXP: xp,
    currentLevelXP,
    nextLevelXP,
    xpInCurrentLevel,
    xpNeededForNextLevel,
    progressPercentage: Math.round(progressPercentage * 100) / 100,
    isMaxLevel: currentLevel === 100
  }
}

