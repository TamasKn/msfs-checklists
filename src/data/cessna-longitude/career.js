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
          chance: 0.3
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
          chance: 0.4
        },
        navigation: {
          base: 1850,
          chance: 0.26
        },
        communication: {
          base: 1150,
          chance: 0.36
        }
      }
    },

    fuelBase: 1.7, // per gallon
    storageBase: 100 // per day
  },
  reward: {
    base: 8200, // base reward for a flight
    perDistance: 9.35, // per nautical mile
    bonus: {
      min: 2000, // minimum total
      max: 7200, // maximum total
      xpMultiplier: 1.027 // multiplier for XP
    }
  },
  xp: {
    base: 15.75, // base XP for a flight
    perDistance: 0.416115, // per nautical mile
    perFlightHour: 9.8 // per flight hour
  }
}
