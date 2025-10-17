/**
 * Career leveling system based on XP
 * Each level requires progressively more XP
 * Formula: XP required = baseXP * (level ^ 1.5)
 */

/**
 * Reputation titles based on level ranges
 */
export const ReputationInfo = {
  STUDENT_PILOT: { title: 'Student Pilot', description: 'A trainee pilot learning to fly under the supervision of a flight instructor.' },
  PRIVATE_PILOT: { title: 'Private Pilot', description: 'Licensed to fly non-commercial aircraft for personal or recreational purposes.' },
  COMMERCIAL_PILOT: { title: 'Commercial Pilot', description: 'Licensed to fly for compensation or hire, operating more complex aircraft.' },
  EXPERIENCED_PILOT: { title: 'Experienced Pilot', description: 'A seasoned pilot with significant flight hours and diverse operational experience.' },
  SENIOR_PILOT: { title: 'Senior Pilot', description: 'A pilot with extensive experience, often taking on mentoring roles for junior pilots.' },
  FLIGHT_INSTRUCTOR: { title: 'Flight Instructor', description: 'Certified to teach students how to fly and endorse them for pilot certificates.' },
  CHIEF_PILOT: { title: 'Chief Pilot', description: 'Manages all pilots in a company, overseeing training, standards, and operations.' },
  CAPTAIN: { title: 'Captain', description: 'The pilot in command of an aircraft, responsible for the safety and operation of a flight.' },
  SENIOR_CAPTAIN: { title: 'Senior Captain', description: 'A highly experienced captain, often flying the largest aircraft or most challenging routes.' },
  CHECK_AIRMAN: { title: 'Check Airman', description: 'An expert pilot authorized by aviation authorities to evaluate and certify other pilots\' skills.' },
  FLIGHT_OPS_MANAGER: { title: 'Flight Operations Manager', description: 'Oversees the entire flight operations department, ensuring efficiency and compliance.' },
  CHIEF_FLIGHT_INSTRUCTOR: { title: 'Chief Flight Instructor', description: 'Manages a team of flight instructors and the overall training curriculum at a flight school.' },
  AVIATION_EXPERT: { title: 'Aviation Expert', description: 'A recognized authority in a specific area of aviation, such as safety, aerodynamics, or regulations.' },
  MASTER_AVIATOR: { title: 'Master Aviator', description: 'A pilot who has demonstrated exceptional skill, knowledge, and a long-standing commitment to aviation.' },
  DISTINGUISHED_AVIATOR: { title: 'Distinguished Aviator', description: 'An aviator who has made significant contributions to the field of aviation.' },
  AVIATION_LEGEND: { title: 'Aviation Legend', description: 'A pilot whose achievements and influence have become legendary within the aviation community.' },
  SKY_MASTER: { title: 'Sky Master', description: 'A pilot with unparalleled mastery of flight, capable of handling any aircraft in any condition.' },
  ELITE_AVIATOR: { title: 'Elite Aviator', description: 'One of a select few pilots known for their exceptional abilities and performance in demanding flight operations.' },
  LEGENDARY_PILOT: { title: 'Legendary Pilot', description: 'A pilot whose name is synonymous with greatness and extraordinary feats in aviation history.' },
  AVIATION_ICON: { title: 'Aviation Icon', description: 'A pilot who has become a symbol of aviation excellence and inspiration for generations of aviators.' },
  SUPREME_AVIATOR: { title: 'Supreme Aviator', description: 'The pinnacle of aviation achievement, a pilot of unmatched skill, wisdom, and legacy.' }
};

export const ReputationTitles = {
  1: 'STUDENT_PILOT', 2: 'STUDENT_PILOT', 3: 'STUDENT_PILOT', 4: 'STUDENT_PILOT', 5: 'PRIVATE_PILOT', 6: 'PRIVATE_PILOT', 7: 'PRIVATE_PILOT', 8: 'PRIVATE_PILOT', 9: 'PRIVATE_PILOT', 10: 'COMMERCIAL_PILOT', 11: 'COMMERCIAL_PILOT', 12: 'COMMERCIAL_PILOT', 13: 'COMMERCIAL_PILOT', 14: 'COMMERCIAL_PILOT', 15: 'EXPERIENCED_PILOT', 16: 'EXPERIENCED_PILOT', 17: 'EXPERIENCED_PILOT', 18: 'EXPERIENCED_PILOT', 19: 'EXPERIENCED_PILOT', 20: 'SENIOR_PILOT', 21: 'SENIOR_PILOT', 22: 'SENIOR_PILOT', 23: 'SENIOR_PILOT', 24: 'SENIOR_PILOT', 25: 'FLIGHT_INSTRUCTOR', 26: 'FLIGHT_INSTRUCTOR', 27: 'FLIGHT_INSTRUCTOR', 28: 'FLIGHT_INSTRUCTOR', 29: 'FLIGHT_INSTRUCTOR', 30: 'CHIEF_PILOT', 31: 'CHIEF_PILOT', 32: 'CHIEF_PILOT', 33: 'CHIEF_PILOT', 34: 'CHIEF_PILOT', 35: 'CAPTAIN', 36: 'CAPTAIN', 37: 'CAPTAIN', 38: 'CAPTAIN', 39: 'CAPTAIN', 40: 'SENIOR_CAPTAIN', 41: 'SENIOR_CAPTAIN', 42: 'SENIOR_CAPTAIN', 43: 'SENIOR_CAPTAIN', 44: 'SENIOR_CAPTAIN', 45: 'CHECK_AIRMAN', 46: 'CHECK_AIRMAN', 47: 'CHECK_AIRMAN', 48: 'CHECK_AIRMAN', 49: 'CHECK_AIRMAN', 50: 'FLIGHT_OPS_MANAGER', 51: 'FLIGHT_OPS_MANAGER', 52: 'FLIGHT_OPS_MANAGER', 53: 'FLIGHT_OPS_MANAGER', 54: 'FLIGHT_OPS_MANAGER', 55: 'CHIEF_FLIGHT_INSTRUCTOR', 56: 'CHIEF_FLIGHT_INSTRUCTOR', 57: 'CHIEF_FLIGHT_INSTRUCTOR', 58: 'CHIEF_FLIGHT_INSTRUCTOR', 59: 'CHIEF_FLIGHT_INSTRUCTOR', 60: 'AVIATION_EXPERT', 61: 'AVIATION_EXPERT', 62: 'AVIATION_EXPERT', 63: 'AVIATION_EXPERT', 64: 'AVIATION_EXPERT', 65: 'MASTER_AVIATOR', 66: 'MASTER_AVIATOR', 67: 'MASTER_AVIATOR', 68: 'MASTER_AVIATOR', 69: 'MASTER_AVIATOR', 70: 'DISTINGUISHED_AVIATOR', 71: 'DISTINGUISHED_AVIATOR', 72: 'DISTINGUISHED_AVIATOR', 73: 'DISTINGUISHED_AVIATOR', 74: 'DISTINGUISHED_AVIATOR', 75: 'AVIATION_LEGEND', 76: 'AVIATION_LEGend', 77: 'AVIATION_LEGEND', 78: 'AVIATION_LEGEND', 79: 'AVIATION_LEGEND', 80: 'SKY_MASTER', 81: 'SKY_MASTER', 82: 'SKY_MASTER', 83: 'SKY_MASTER', 84: 'SKY_MASTER', 85: 'ELITE_AVIATOR', 86: 'ELITE_AVIATOR', 87: 'ELITE_AVIATOR', 88: 'ELITE_AVIATOR', 89: 'ELITE_AVIATOR', 90: 'LEGENDARY_PILOT', 91: 'LEGENDARY_PILOT', 92: 'LEGENDARY_PILOT', 93: 'LEGENDARY_PILOT', 94: 'LEGENDARY_PILOT', 95: 'AVIATION_ICON', 96: 'AVIATION_ICON', 97: 'AVIATION_ICON', 98: 'AVIATION_ICON', 99: 'AVIATION_ICON', 100: 'SUPREME_AVIATOR'
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
  const titleKey = ReputationTitles[level] || 'STUDENT_PILOT'
  return ReputationInfo[titleKey]
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
