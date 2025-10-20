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
          base: 13800,
          chance: 0.007
        },
        landingGear: {
          base: 4025,
          chance: 0.24
        },
        fuselage: {
          base: 2760,
          chance: 0.32
        },
        wing: {
          base: 3220,
          chance: 0.27
        },
        empennage: {
          base: 1840,
          chance: 0.3
        },
        electrical: {
          base: 1323,
          chance: 0.34
        },
        hydraulic: {
          base: 1127,
          chance: 0.29
        },
        pressurization: {
          base: 1553,
          chance: 0.27
        },
        avionics: {
          base: 2415,
          chance: 0.23
        },
        interior: {
          base: 828,
          chance: 0.37
        },
        lights: {
          base: 483,
          chance: 0.39
        },
        navigation: {
          base: 1438,
          chance: 0.25
        },
        communication: {
          base: 897,
          chance: 0.35
        }
      }
    },

    fuelBase: 1.6, // per gallon
    storageBase: 55 // per day
  },
  reward: {
    base: 1950, // base reward for a flight
    perDistance: 6.8, // per nautical mile
    bonus: {
      min: 2700, // minimum total
      max: 5500, // maximum total
      xpMultiplier: 1.022 // multiplier for XP
    }
  },
  xp: {
    base: 9.8, // base XP for a flight
    perDistance: 0.2975, // per nautical mile
    perFlightHour: 6.3 // per flight hour
  }
}
