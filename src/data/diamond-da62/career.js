export const diamondDA62Career = {
  id: 'DA62',
  costs: {
    buyPriceBase: 1400000, // base price for a new aircraft
    sellPriceBase: 850000, // base price for a used aircraft
    leasePriceBase: 185, // per flight hour
    insuranceBase: 45, // per flight hour
    maintenance: {
      base: 120, // per flight hour
      issues: {
        // possible issues, cost and chance of occurring
        engine: {
          base: 6325,
          chance: 0.018
        },
        landingGear: {
          base: 2070,
          chance: 0.26
        },
        fuselage: {
          base: 1380,
          chance: 0.3
        },
        wing: {
          base: 1610,
          chance: 0.29
        },
        empennage: {
          base: 978,
          chance: 0.32
        },
        electrical: {
          base: 713,
          chance: 0.35
        },
        hydraulic: {
          base: 598,
          chance: 0.31
        },
        avionics: {
          base: 1265,
          chance: 0.22
        },
        interior: {
          base: 437,
          chance: 0.39
        },
        lights: {
          base: 276,
          chance: 0.42
        },
        navigation: {
          base: 782,
          chance: 0.24
        },
        communication: {
          base: 483,
          chance: 0.37
        }
      }
    },

    fuelBase: 1.5, // per gallon
    storageBase: 35 // per day
  },
  reward: {
    base: 1000, // base reward for a flight
    perDistance: 4.2, // per nautical mile
    bonus: {
      min: 2500, // minimum total
      max: 4800, // maximum total
      xpMultiplier: 1.018 // multiplier for XP
    }
  },
  xp: {
    base: 6.3, // base XP for a flight
    perDistance: 0.2275, // per nautical mile
    perFlightHour: 4.2 // per flight hour
  }
}
