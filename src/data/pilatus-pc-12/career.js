export const pilatusPc12Career = {
  id: 'PC12',
  costs: {
    buyPriceBase: 5500000, // base price for a new aircraft
    sellPriceBase: 3200000, // base price for a used aircraft
    leasePriceBase: 850, // per flight hour
    insuranceBase: 125, // per flight hour
    maintenance: {
      base: 450, // per flight hour
      issues: {
        // possible issues, cost and chance of occurring
        engine: {
          base: 8500,
          chance: 0.18
        },
        landingGear: {
          base: 2800,
          chance: 0.25
        },
        fuselage: {
          base: 1900,
          chance: 0.31
        },
        wing: {
          base: 2200,
          chance: 0.28
        },
        empennage: {
          base: 1300,
          chance: 0.31
        },
        electrical: {
          base: 950,
          chance: 0.36
        },
        hydraulic: {
          base: 820,
          chance: 0.3
        },
        pressurization: {
          base: 1100,
          chance: 0.28
        },
        avionics: {
          base: 1650,
          chance: 0.24
        },
        interior: {
          base: 580,
          chance: 0.38
        },
        lights: {
          base: 350,
          chance: 0.41
        },
        navigation: {
          base: 980,
          chance: 0.26
        },
        communication: {
          base: 620,
          chance: 0.36
        }
      }
    },

    fuelBase: 1.6, // per gallon
    storageBase: 60 // per day
  },
  reward: {
    base: 2800, // base reward for a flight
    perDistance: 12.5, // per nautical mile
    bonus: {
      min: 2000, // minimum total
      max: 6300, // maximum total
      xpMultiplier: 1.022 // multiplier for XP
    }
  },
  xp: {
    base: 8.75, // base XP for a flight
    perDistance: 0.42, // per nautical mile
    perFlightHour: 6.3 // per flight hour
  }
}
