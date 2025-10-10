export const cessnaLongitudeCareer = {
  id: 'C700',
  costs: {
    buyPriceBase: 28500000, // base price for a new aircraft
    sellPriceBase: 17000000, // base price for a used aircraft
    leasePriceBase: 3750, // per flight hour
    insuranceBase: 550, // per flight hour
    maintenance: {
      base: 1700, // per flight hour
      issues: {
        // possible issues, cost and chance of occurring
        engine: {
          base: 20000,
          chance: 0.0084
        },
        landingGear: {
          base: 5000,
          chance: 0.0145
        },
        fuselage: {
          base: 3000,
          chance: 0.095
        },
        wing: {
          base: 2000,
          chance: 0.015
        },
        empennage: {
          base: 1000,
          chance: 0.055
        },
        electrical: {
          base: 800,
          chance: 0.065
        },
        hydraulic: {
          base: 700,
          chance: 0.055
        },
        pressurization: {
          base: 600,
          chance: 0.045
        },
        avionics: {
          base: 500,
          chance: 0.035
        },
        interior: {
          base: 200,
          chance: 0.025
        },
        lights: {
          base: 200,
          chance: 0.045
        },
        navigation: {
          base: 400,
          chance: 0.035
        },
        communication: {
          base: 100,
          chance: 0.025
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

    fuelBase: 1.7, // per gallon
    storageBase: 100 // per day
  },
  reward: {
    base: 8200, // base reward for a flight
    perFlightHour: 21.78, // per flight hour
    perDistance: 9.35, // per nautical mile
    bonus: {
      min: 1000, // minimum total
      max: 4500, // maximum total
      xpMultiplier: 1.027 // multiplier for XP
    }
  },
  xp: {
    base: 45, // base XP for a flight
    perDistance: 1.1889, // per nautical mile
    perFlightHour: 28 // per flight hour
  }
}
