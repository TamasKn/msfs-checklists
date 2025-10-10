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
          base: 12000,
          chance: 0.17
        },
        landingGear: {
          base: 3500,
          chance: 0.24
        },
        fuselage: {
          base: 2400,
          chance: 0.32
        },
        wing: {
          base: 2800,
          chance: 0.27
        },
        empennage: {
          base: 1600,
          chance: 0.30
        },
        electrical: {
          base: 1150,
          chance: 0.34
        },
        hydraulic: {
          base: 980,
          chance: 0.29
        },
        pressurization: {
          base: 1350,
          chance: 0.27
        },
        avionics: {
          base: 2100,
          chance: 0.23
        },
        interior: {
          base: 720,
          chance: 0.37
        },
        lights: {
          base: 420,
          chance: 0.39
        },
        navigation: {
          base: 1250,
          chance: 0.25
        },
        communication: {
          base: 780,
          chance: 0.35
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
    base: 9.8, // base XP for a flight
    perDistance: 0.2975, // per nautical mile
    perFlightHour: 6.3 // per flight hour
  }
}
