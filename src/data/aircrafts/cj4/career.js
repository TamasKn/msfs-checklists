export const CJ4Career = {
  id: 'C25C',
  costs: {
    buyPriceBase: 9000000, // base price for a new aircraft
    sellPriceBase: 6000000, // base price for a used aircraft
    leasePriceBase: 2500, // per flight hour
    insuranceBase: 425, // per flight hour
    maintenance: {
      base: 1200, // per flight hour
      issues: {
        // possible issues, cost and chance of occurring
        engine: {
          base: 15000,
          chance: 0.008
        },
        landingGear: {
          base: 4000,
          chance: 0.23
        },
        fuselage: {
          base: 2800,
          chance: 0.33
        },
        wing: {
          base: 3500,
          chance: 0.26
        },
        empennage: {
          base: 2000,
          chance: 0.29
        },
        electrical: {
          base: 1500,
          chance: 0.35
        },
        hydraulic: {
          base: 1300,
          chance: 0.3
        },
        pressurization: {
          base: 1800,
          chance: 0.28
        },
        avionics: {
          base: 3000,
          chance: 0.24
        },
        interior: {
          base: 1200,
          chance: 0.38
        },
        lights: {
          base: 700,
          chance: 0.4
        },
        navigation: {
          base: 1800,
          chance: 0.26
        },
        communication: {
          base: 1400,
          chance: 0.36
        }
      }
    },

    fuelBase: 1.7, // per gallon
    storageBase: 100 // per day
  },
  reward: {
    base: 6400, // base reward for a flight
    perDistance: 12.5, // per nautical mile
    bonus: {
      min: 2000, // minimum total
      max: 5500, // maximum total
      xpMultiplier: 1.018 // multiplier for XP
    }
  },
  xp: {
    base: 12.45, // base XP for a flight
    perDistance: 0.35, // per nautical mile
    perFlightHour: 7.2 // per flight hour
  }
}
