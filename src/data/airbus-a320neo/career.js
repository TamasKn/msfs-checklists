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
          base: 28000,
          chance: 0.007
        },
        landingGear: {
          base: 8200,
          chance: 0.22
        },
        fuselage: {
          base: 5800,
          chance: 0.35
        },
        wing: {
          base: 6500,
          chance: 0.25
        },
        empennage: {
          base: 3800,
          chance: 0.28
        },
        electrical: {
          base: 2600,
          chance: 0.38
        },
        hydraulic: {
          base: 2200,
          chance: 0.32
        },
        pressurization: {
          base: 3100,
          chance: 0.3
        },
        avionics: {
          base: 4800,
          chance: 0.26
        },
        interior: {
          base: 1750,
          chance: 0.42
        },
        lights: {
          base: 950,
          chance: 0.45
        },
        navigation: {
          base: 2900,
          chance: 0.28
        },
        communication: {
          base: 1800,
          chance: 0.4
        }
      }
    },

    fuelBase: 1.8, // per gallon
    storageBase: 250 // per day
  },
  reward: {
    base: 18500, // base reward for a flight
    perDistance: 18.2, // per nautical mile
    bonus: {
      min: 3000, // minimum total
      max: 11000, // maximum total
      xpMultiplier: 1.032 // multiplier for XP
    }
  },
  xp: {
    base: 29.75, // base XP for a flight
    perDistance: 0.7525, // per nautical mile
    perFlightHour: 18.2 // per flight hour
  }
}
