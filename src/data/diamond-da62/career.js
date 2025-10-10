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
          base: 12000,
          chance: 0.008
        },
        landingGear: {
          base: 3000,
          chance: 0.012
        },
        fuselage: {
          base: 1800,
          chance: 0.08
        },
        wing: {
          base: 1200,
          chance: 0.012
        },
        empennage: {
          base: 600,
          chance: 0.045
        },
        electrical: {
          base: 500,
          chance: 0.055
        },
        hydraulic: {
          base: 400,
          chance: 0.045
        },
        pressurization: {
          base: 0,
          chance: 0
        },
        avionics: {
          base: 350,
          chance: 0.03
        },
        interior: {
          base: 150,
          chance: 0.02
        },
        lights: {
          base: 120,
          chance: 0.04
        },
        navigation: {
          base: 250,
          chance: 0.03
        },
        communication: {
          base: 80,
          chance: 0.02
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
    base: 18, // base XP for a flight
    perDistance: 0.65, // per nautical mile
    perFlightHour: 12 // per flight hour
  }
}

