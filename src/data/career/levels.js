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
 * XP required for each level (1-100)
 * Each level requires earning this amount of XP from zero
 * XP resets after leveling up
 * Levels 1-40: XP progression with a curve
 * Levels 41-100: Linear progression with a fixed XP increment per level
 */
export const LevelThresholds = {
  1: 0,
  2: 405,
  3: 482,
  4: 543,
  5: 592,
  6: 634,
  7: 667,
  8: 700,
  9: 725,
  10: 752,
  11: 776,
  12: 800,
  13: 820,
  14: 841,
  15: 861,
  16: 880,
  17: 898,
  18: 915,
  19: 932,
  20: 948,
  21: 964,
  22: 980,
  23: 994,
  24: 1008,
  25: 1022,
  26: 1035,
  27: 1049,
  28: 1061,
  29: 1074,
  30: 1086,
  31: 1100,
  32: 1111,
  33: 1124,
  34: 1136,
  35: 1146,
  36: 1160,
  37: 1171,
  38: 1183,
  39: 1194,
  40: 1206,
  41: 1900,
  42: 1936,
  43: 1972,
  44: 2008,
  45: 2044,
  46: 2080,
  47: 2116,
  48: 2152,
  49: 2188,
  50: 2224,
  51: 2260,
  52: 2296,
  53: 2332,
  54: 2368,
  55: 2404,
  56: 2440,
  57: 2476,
  58: 2512,
  59: 2548,
  60: 2584,
  61: 2620,
  62: 2656,
  63: 2692,
  64: 2728,
  65: 2764,
  66: 2800,
  67: 2836,
  68: 2872,
  69: 2908,
  70: 2944,
  71: 2980,
  72: 3016,
  73: 3052,
  74: 3088,
  75: 3124,
  76: 3160,
  77: 3196,
  78: 3232,
  79: 3268,
  80: 3304,
  81: 3340,
  82: 3376,
  83: 3412,
  84: 3448,
  85: 3484,
  86: 3520,
  87: 3556,
  88: 3592,
  89: 3628,
  90: 3664,
  91: 3700,
  92: 3736,
  93: 3772,
  94: 3808,
  95: 3844,
  96: 3880,
  97: 3916,
  98: 3952,
  99: 3988,
  100: 4024
}

/**
 * Gets the current level based on current XP in level
 * Note: This function is no longer used with the new reset system
 * Level is now stored directly in user data
 * @param {number} currentXP - Current XP in the current level
 * @param {number} currentLevel - Current level
 * @returns {number} Current level (1-100)
 * @deprecated Use user data level directly
 */
export const getLevelFromXP = (currentXP, currentLevel = 1) => {
  return currentLevel
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
 * @param {number} currentXP - Current XP in the current level (resets to 0 after level up)
 * @param {number} currentLevel - Current level (1-100)
 * @returns {Object} Object containing level, title, current XP, next level XP, and progress percentage
 */
export const getLevelProgress = (currentXP, currentLevel = 1) => {
  const level = Math.max(1, Math.min(100, currentLevel))
  const nextLevel = Math.min(level + 1, 100)
  const xpNeededForNextLevel = LevelThresholds[nextLevel]
  const reputationTitle = getReputationTitle(level)

  // Calculate progress percentage
  const progressPercentage =
    level === 100
      ? 100
      : Math.min(100, (currentXP / xpNeededForNextLevel) * 100)

  return {
    level,
    title: reputationTitle,
    currentXP,
    currentLevelXP: 0, // Always starts from 0 in new system
    nextLevelXP: xpNeededForNextLevel,
    xpInCurrentLevel: currentXP,
    xpNeededForNextLevel,
    progressPercentage: Math.round(progressPercentage * 100) / 100,
    isMaxLevel: level === 100
  }
}

/**
 * Calculates level ups and remaining XP after earning XP
 * @param {number} currentXP - Current XP in the current level
 * @param {number} currentLevel - Current level
 * @param {number} earnedXP - XP earned from flight
 * @returns {Object} Object containing new level, new XP, and whether leveled up
 */
export const calculateLevelUp = (currentXP, currentLevel, earnedXP) => {
  let level = Math.max(1, Math.min(100, currentLevel))
  let xp = currentXP + earnedXP
  let leveledUp = false
  let levelsGained = 0

  // Keep leveling up until XP is less than required for next level
  while (level < 100 && xp >= LevelThresholds[level + 1]) {
    xp -= LevelThresholds[level + 1]
    level++
    leveledUp = true
    levelsGained++
  }

  // If at max level, cap XP at the requirement
  if (level === 100) {
    xp = Math.min(xp, LevelThresholds[100])
  }

  return {
    newLevel: level,
    newXP: xp,
    leveledUp,
    levelsGained,
    previousLevel: currentLevel
  }
}
