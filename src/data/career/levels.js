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
  6: 793,
  7: 834,
  8: 875,
  9: 906,
  10: 940,
  11: 970,
  12: 1000,
  13: 1025,
  14: 1051,
  15: 1076,
  16: 1100,
  17: 1123,
  18: 1144,
  19: 1165,
  20: 1185,
  21: 1205,
  22: 1225,
  23: 1243,
  24: 1260,
  25: 1278,
  26: 1294,
  27: 1311,
  28: 1326,
  29: 1343,
  30: 1358,
  31: 1375,
  32: 1389,
  33: 1405,
  34: 1420,
  35: 1433,
  36: 1450,
  37: 1464,
  38: 1479,
  39: 1493,
  40: 1508,
  41: 2375,
  42: 2420,
  43: 2465,
  44: 2510,
  45: 2555,
  46: 2600,
  47: 2645,
  48: 2690,
  49: 2735,
  50: 2780,
  51: 2825,
  52: 2870,
  53: 2915,
  54: 2960,
  55: 3005,
  56: 3050,
  57: 3095,
  58: 3140,
  59: 3185,
  60: 3230,
  61: 3275,
  62: 3320,
  63: 3365,
  64: 3410,
  65: 3455,
  66: 3500,
  67: 3545,
  68: 3590,
  69: 3635,
  70: 3680,
  71: 3725,
  72: 3770,
  73: 3815,
  74: 3860,
  75: 3905,
  76: 3950,
  77: 3995,
  78: 4040,
  79: 4085,
  80: 4130,
  81: 4175,
  82: 4220,
  83: 4265,
  84: 4310,
  85: 4355,
  86: 4400,
  87: 4445,
  88: 4490,
  89: 4535,
  90: 4580,
  91: 4625,
  92: 4670,
  93: 4715,
  94: 4760,
  95: 4805,
  96: 4850,
  97: 4895,
  98: 4940,
  99: 4985,
  100: 5030
}

/**
 * Gets the current level and calculates the bonus multiplier
 * @param {number} currentLevel - Current level
 * @returns {number} Current level (1-100)
 */
export const calculateLevelBonus = (currentLevel = 1) => {
  const levelThreshold = LevelThresholds[currentLevel]
  const bonus = currentLevel > 1 ? levelThreshold / 1e4 : 0

  return Math.round(bonus * 1e4) / 1e4
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
