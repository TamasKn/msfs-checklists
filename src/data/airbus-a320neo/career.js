export const airbusA320neoCareer = {
  id: 'A320NEO',
  costs: {
    buyPriceBase: 110000000, // base price for a new aircraft
    sellPriceBase: 65000000, // base price for a used aircraft
    leasePriceBase: 7500, // per flight hour
    insuranceBase: 1500, // per flight hour
    maintenance: {
      base: 6000, // per flight hour
      issues: {
        // possible issues, cost and chance of occurring
        engine: {
          base: 35000,
          chance: 0.009
        },
        landingGear: {
          base: 8500,
          chance: 0.016
        },
        fuselage: {
          base: 5000,
          chance: 0.11
        },
        wing: {
          base: 3500,
          chance: 0.017
        },
        empennage: {
          base: 1800,
          chance: 0.062
        },
        electrical: {
          base: 1400,
          chance: 0.072
        },
        hydraulic: {
          base: 1200,
          chance: 0.062
        },
        pressurization: {
          base: 1000,
          chance: 0.052
        },
        avionics: {
          base: 850,
          chance: 0.042
        },
        interior: {
          base: 350,
          chance: 0.032
        },
        lights: {
          base: 300,
          chance: 0.052
        },
        navigation: {
          base: 650,
          chance: 0.042
        },
        communication: {
          base: 180,
          chance: 0.032
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

    fuelBase: 1.8, // per gallon
    storageBase: 250 // per day
  },
  reward: {
    base: 18500, // base reward for a flight
    perFlightHour: 48.5, // per flight hour
    perDistance: 18.2, // per nautical mile
    bonus: {
      min: 2000, // minimum total
      max: 7000, // maximum total
      xpMultiplier: 1.032 // multiplier for XP
    }
  },
  xp: {
    base: 85, // base XP for a flight
    perDistance: 2.15, // per nautical mile
    perFlightHour: 52 // per flight hour
  }
}
