export const cessna172Career = {
  id: 'C172',
  costs: {
    buyPriceBase: 400000, // base price for a new aircraft
    sellPriceBase: 250000, // base price for a used aircraft
    leasePriceBase: 120, // per flight hour
    insuranceBase: 35, // per flight hour
    maintenance: {
      base: 85, // per flight hour
      issues: {
        // possible issues, cost and chance of occurring
        engine: {
          base: 8000,
          chance: 0.012
        },
        landingGear: {
          base: 2000,
          chance: 0.018
        },
        fuselage: {
          base: 1200,
          chance: 0.015
        },
        wing: {
          base: 800,
          chance: 0.02
        },
        empennage: {
          base: 500,
          chance: 0.065
        },
        electrical: {
          base: 400,
          chance: 0.075
        },
        hydraulic: {
          base: 300,
          chance: 0.045
        },
        avionics: {
          base: 350,
          chance: 0.04
        },
        interior: {
          base: 150,
          chance: 0.03
        },
        lights: {
          base: 100,
          chance: 0.05
        },
        navigation: {
          base: 250,
          chance: 0.04
        },
        communication: {
          base: 80,
          chance: 0.03
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
    storageBase: 25 // per day
  },
  reward: {
    base: 450, // base reward for a flight
    perFlightHour: 15, // per flight hour
    perDistance: 3.5, // per nautical mile
    bonus: {
      min: 20, // minimum per hour
      max: 80, // maximum per hour
      xpMultiplier: 1.015 // multiplier for XP
    }
  },
  xp: {
    base: 10, // base XP for a flight
    perDistance: 0.5, // per nautical mile
    perFlightHour: 8 // per flight hour
  }
}

