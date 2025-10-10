export const boeing737MaxCareer = {
  id: 'B737MAX',
  costs: {
    buyPriceBase: 121000000, // base price for a new aircraft
    sellPriceBase: 72000000, // base price for a used aircraft
    leasePriceBase: 7800, // per flight hour
    insuranceBase: 1750, // per flight hour
    maintenance: {
      base: 6000, // per flight hour
      issues: {
        // possible issues, cost and chance of occurring
        engine: {
          base: 38000,
          chance: 0.0092
        },
        landingGear: {
          base: 9000,
          chance: 0.017
        },
        fuselage: {
          base: 5500,
          chance: 0.115
        },
        wing: {
          base: 3800,
          chance: 0.018
        },
        empennage: {
          base: 2000,
          chance: 0.065
        },
        electrical: {
          base: 1500,
          chance: 0.075
        },
        hydraulic: {
          base: 1300,
          chance: 0.065
        },
        pressurization: {
          base: 1100,
          chance: 0.055
        },
        avionics: {
          base: 900,
          chance: 0.045
        },
        interior: {
          base: 380,
          chance: 0.035
        },
        lights: {
          base: 320,
          chance: 0.055
        },
        navigation: {
          base: 700,
          chance: 0.045
        },
        communication: {
          base: 200,
          chance: 0.035
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

    fuelBase: 1.85, // per gallon
    storageBase: 280 // per day
  },
  reward: {
    base: 19200, // base reward for a flight
    perFlightHour: 52.5, // per flight hour
    perDistance: 19.8, // per nautical mile
    bonus: {
      min: 2000, // minimum total
      max: 7000, // maximum total
      xpMultiplier: 1.035 // multiplier for XP
    }
  },
  xp: {
    base: 92, // base XP for a flight
    perDistance: 2.35, // per nautical mile
    perFlightHour: 56 // per flight hour
  }
}
