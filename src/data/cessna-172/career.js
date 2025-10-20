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
          base: 4025,
          chance: 0.013
        },
        landingGear: {
          base: 1380,
          chance: 0.27
        },
        fuselage: {
          base: 920,
          chance: 0.29
        },
        wing: {
          base: 1093,
          chance: 0.3
        },
        empennage: {
          base: 748,
          chance: 0.33
        },
        electrical: {
          base: 518,
          chance: 0.34
        },
        hydraulic: {
          base: 437,
          chance: 0.32
        },
        avionics: {
          base: 978,
          chance: 0.21
        },
        interior: {
          base: 322,
          chance: 0.4
        },
        lights: {
          base: 207,
          chance: 0.43
        },
        navigation: {
          base: 598,
          chance: 0.23
        },
        communication: {
          base: 368,
          chance: 0.38
        }
      }
    },

    fuelBase: 1.5, // per gallon
    storageBase: 25 // per day
  },
  reward: {
    base: 450, // base reward for a flight
    perDistance: 3.5, // per nautical mile
    bonus: {
      min: 1000, // minimum total
      max: 4500, // maximum total
      xpMultiplier: 1.015 // multiplier for XP
    }
  },
  xp: {
    base: 3.5, // base XP for a flight
    perDistance: 0.175, // per nautical mile
    perFlightHour: 2.8 // per flight hour
  }
}
