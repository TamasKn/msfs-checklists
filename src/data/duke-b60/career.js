export const dukeB60Career = {
  id: 'B60',
  costs: {
    buyPriceBase: 300000,
    sellPriceBase: 220000,
    leasePriceBase: 20,
    insuranceBase: 5,
    maintenance: {
      base: 18,
      issues: {
        engine: {
          base: 1700,
          chance: 0.08
        },
        landingGear: {
          base: 850,
          chance: 0.16
        },
        fuselage: {
          base: 650,
          chance: 0.24
        },
        wing: {
          base: 750,
          chance: 0.19
        },
        empennage: {
          base: 550,
          chance: 0.21
        },
        electrical: {
          base: 450,
          chance: 0.29
        },
        hydraulic: {
          base: 350,
          chance: 0.26
        },
        pressurization: {
          base: 700,
          chance: 0.24
        },
        avionics: {
          base: 1050,
          chance: 0.19
        },
        interior: {
          base: 260,
          chance: 0.34
        },
        lights: {
          base: 210,
          chance: 0.39
        },
        navigation: {
          base: 650,
          chance: 0.24
        },
        communication: {
          base: 350,
          chance: 0.32
        }
      }
    },
    fuelBase: 1.8,
    storageBase: 16
  },
  reward: {
    base: 1200,
    perDistance: 1.6,
    bonus: {
      min: 240,
      max: 880,
      xpMultiplier: 1.008
    }
  },
  xp: {
    base: 2.2,
    perDistance: 0.08,
    perFlightHour: 1.7
  }
}
