export const pilatusPc12Career = {
  id: 'PC12',
  costs: {
    buyPriceBase: 5500000, // base price for a new aircraft
    sellPriceBase: 3200000, // base price for a used aircraft
    leasePriceBase: 850, // per flight hour
    insuranceBase: 125, // per flight hour
    maintenance: {
      base: 450, // per flight hour
      issues: {
        // possible issues, cost and chance of occurring
        engine: {
          base: 15000,
          chance: 0.01
        },
        landingGear: {
          base: 4000,
          chance: 0.016
        },
        fuselage: {
          base: 2500,
          chance: 0.012
        },
        wing: {
          base: 1800,
          chance: 0.018
        },
        empennage: {
          base: 900,
          chance: 0.06
        },
        electrical: {
          base: 700,
          chance: 0.07
        },
        hydraulic: {
          base: 600,
          chance: 0.05
        },
        pressurization: {
          base: 500,
          chance: 0.05
        },
        avionics: {
          base: 450,
          chance: 0.038
        },
        interior: {
          base: 180,
          chance: 0.028
        },
        lights: {
          base: 180,
          chance: 0.048
        },
        navigation: {
          base: 350,
          chance: 0.038
        },
        communication: {
          base: 90,
          chance: 0.028
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
    storageBase: 60 // per day
  },
  reward: {
    base: 2800, // base reward for a flight
    perFlightHour: 35, // per flight hour
    perDistance: 12.5, // per nautical mile
    bonus: {
      min: 50, // minimum per hour
      max: 200, // maximum per hour
      xpMultiplier: 1.022 // multiplier for XP
    }
  },
  xp: {
    base: 25, // base XP for a flight
    perDistance: 1.2, // per nautical mile
    perFlightHour: 18 // per flight hour
  }
}
