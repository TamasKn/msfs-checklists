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
          base: 18000,
          chance: 0.16
        },
        landingGear: {
          base: 5200,
          chance: 0.23
        },
        fuselage: {
          base: 3600,
          chance: 0.33
        },
        wing: {
          base: 4200,
          chance: 0.26
        },
        empennage: {
          base: 2400,
          chance: 0.29
        },
        electrical: {
          base: 1650,
          chance: 0.35
        },
        hydraulic: {
          base: 1450,
          chance: 0.30
        },
        pressurization: {
          base: 1950,
          chance: 0.28
        },
        avionics: {
          base: 3200,
          chance: 0.24
        },
        interior: {
          base: 1100,
          chance: 0.38
        },
        lights: {
          base: 620,
          chance: 0.40
        },
        navigation: {
          base: 1850,
          chance: 0.26
        },
        communication: {
          base: 1150,
          chance: 0.36
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
