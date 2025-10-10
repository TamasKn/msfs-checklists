export const diamondDA62Career = {
  id: 'DA62',
  costs: {
    buyPriceBase: 1400000, // base price for a new aircraft
    sellPriceBase: 850000, // base price for a used aircraft
    leasePriceBase: 185, // per flight hour
    insuranceBase: 45, // per flight hour
    maintenance: {
      base: 120, // per flight hour
      issues: {
        // possible issues, cost and chance of occurring
        engine: {
          base: 5500,
          chance: 0.19
        },
        landingGear: {
          base: 1800,
          chance: 0.26
        },
        fuselage: {
          base: 1200,
          chance: 0.30
        },
        wing: {
          base: 1400,
          chance: 0.29
        },
        empennage: {
          base: 850,
          chance: 0.32
        },
        electrical: {
          base: 620,
          chance: 0.35
        },
        hydraulic: {
          base: 520,
          chance: 0.31
        },
        pressurization: {
          base: 0,
          chance: 0
        },
        avionics: {
          base: 1100,
          chance: 0.22
        },
        interior: {
          base: 380,
          chance: 0.39
        },
        lights: {
          base: 240,
          chance: 0.42
        },
        navigation: {
          base: 680,
          chance: 0.24
        },
        communication: {
          base: 420,
          chance: 0.37
        }
      },
      issueSeverityMultiplier: {
        // multiplier for issue cost
        minor: {
          min: 0.7,
          max: 1.1
        },
        medium: {
          min: 1.1,
          max: 1.4
        },
        major: {
          min: 1.5,
          max: 2.9
        },
        critical: {
          min: 3,
          max: 5
        }
      }
    },

    fuelBase: 1.5, // per gallon
    storageBase: 35 // per day
  },
  reward: {
    base: 850, // base reward for a flight
    perFlightHour: 12.5, // per flight hour
    perDistance: 4.2, // per nautical mile
    bonus: {
      min: 80, // minimum total
      max: 450, // maximum total
      xpMultiplier: 1.018 // multiplier for XP
    }
  },
  xp: {
    base: 6.3, // base XP for a flight
    perDistance: 0.2275, // per nautical mile
    perFlightHour: 4.2 // per flight hour
  }
}

