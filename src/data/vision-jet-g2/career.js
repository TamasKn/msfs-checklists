export const visionJetG2Career = {
  id: 'SF50G2',
  costs: {
    buyPriceBase: 3500000, // base price for a new aircraft
    sellPriceBase: 2100000, // base price for a used aircraft
    leasePriceBase: 800, // per flight hour
    insuranceBase: 125, // per flight hour
    maintenance: {
      base: 285, // per flight hour
      issues: {
        // possible issues, cost and chance of occurring
        engine: {
          base: 15000,
          chance: 0.0085
        },
        landingGear: {
          base: 4000,
          chance: 0.013
        },
        fuselage: {
          base: 2200,
          chance: 0.085
        },
        wing: {
          base: 1500,
          chance: 0.013
        },
        empennage: {
          base: 800,
          chance: 0.048
        },
        electrical: {
          base: 650,
          chance: 0.058
        },
        hydraulic: {
          base: 550,
          chance: 0.048
        },
        pressurization: {
          base: 450,
          chance: 0.038
        },
        avionics: {
          base: 400,
          chance: 0.032
        },
        interior: {
          base: 180,
          chance: 0.022
        },
        lights: {
          base: 150,
          chance: 0.042
        },
        navigation: {
          base: 320,
          chance: 0.032
        },
        communication: {
          base: 90,
          chance: 0.022
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

    fuelBase: 1.6, // per gallon
    storageBase: 55 // per day
  },
  reward: {
    base: 1950, // base reward for a flight
    perFlightHour: 16.5, // per flight hour
    perDistance: 6.8, // per nautical mile
    bonus: {
      min: 100, // minimum total
      max: 1000, // maximum total
      xpMultiplier: 1.022 // multiplier for XP
    }
  },
  xp: {
    base: 28, // base XP for a flight
    perDistance: 0.85, // per nautical mile
    perFlightHour: 18 // per flight hour
  }
}
