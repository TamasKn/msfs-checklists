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
          base: 21000,
          chance: 0.008
        },
        landingGear: {
          base: 5700,
          chance: 0.23
        },
        fuselage: {
          base: 3900,
          chance: 0.33
        },
        wing: {
          base: 4800,
          chance: 0.26
        },
        empennage: {
          base: 2800,
          chance: 0.29
        },
        electrical: {
          base: 1950,
          chance: 0.35
        },
        hydraulic: {
          base: 1750,
          chance: 0.3
        },
        pressurization: {
          base: 2250,
          chance: 0.28
        },
        avionics: {
          base: 4200,
          chance: 0.24
        },
        interior: {
          base: 1800,
          chance: 0.38
        },
        lights: {
          base: 920,
          chance: 0.4
        },
        navigation: {
          base: 2350,
          chance: 0.26
        },
        communication: {
          base: 1850,
          chance: 0.36
        }
      }
    },

    fuelBase: 1.7, // per gallon
    storageBase: 100 // per day
  },
  reward: {
    base: 9900, // base reward for a flight
    perDistance: 15.55, // per nautical mile
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
