export const boeing737MaxCareer = {
  id: 'B737MAX',
  costs: {
    buyPriceBase: 121000000, // base price for a new aircraft
    sellPriceBase: 72000000, // base price for a used aircraft
    leasePriceBase: 7800, // per flight hour
    insuranceBase: 1750, // per flight hour
    maintenance: {
      base: 6000, // per flight hour
      issues: {
        // possible issues, cost and chance of occurring
        engine: {
          base: 32000,
          chance: 0.14
        },
        landingGear: {
          base: 9500,
          chance: 0.21
        },
        fuselage: {
          base: 6800,
          chance: 0.36
        },
        wing: {
          base: 7500,
          chance: 0.24
        },
        empennage: {
          base: 4400,
          chance: 0.27
        },
        electrical: {
          base: 3000,
          chance: 0.37
        },
        hydraulic: {
          base: 2600,
          chance: 0.31
        },
        pressurization: {
          base: 3600,
          chance: 0.29
        },
        avionics: {
          base: 5500,
          chance: 0.25
        },
        interior: {
          base: 2000,
          chance: 0.41
        },
        lights: {
          base: 1100,
          chance: 0.44
        },
        navigation: {
          base: 3400,
          chance: 0.27
        },
        communication: {
          base: 2100,
          chance: 0.39
        }
      }
    },

    fuelBase: 1.85, // per gallon
    storageBase: 280 // per day
  },
  reward: {
    base: 19200, // base reward for a flight
    perDistance: 19.8, // per nautical mile
    bonus: {
      min: 2000, // minimum total
      max: 7000, // maximum total
      xpMultiplier: 1.035 // multiplier for XP
    }
  },
  xp: {
    base: 32.2, // base XP for a flight
    perDistance: 0.8225, // per nautical mile
    perFlightHour: 19.6 // per flight hour
  }
}
