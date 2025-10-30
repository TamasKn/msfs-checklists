export const TBM930Career = {
  id: 'TBM930',
  costs: {
    buyPriceBase: 3950000,
    sellPriceBase: 1880000,
    leasePriceBase: 815,
    insuranceBase: 115,
    maintenance: {
      base: 400,
      issues: {
        engine: {
          base: 8200,
          chance: 0.008
        },
        landingGear: {
          base: 2900,
          chance: 0.25
        },
        fuselage: {
          base: 1960,
          chance: 0.31
        },
        wing: {
          base: 2270,
          chance: 0.28
        },
        empennage: {
          base: 1345,
          chance: 0.31
        },
        electrical: {
          base: 980,
          chance: 0.36
        },
        hydraulic: {
          base: 850,
          chance: 0.3
        },
        pressurization: {
          base: 1140,
          chance: 0.28
        },
        avionics: {
          base: 1700,
          chance: 0.24
        },
        interior: {
          base: 600,
          chance: 0.38
        },
        lights: {
          base: 360,
          chance: 0.41
        },
        navigation: {
          base: 1010,
          chance: 0.26
        },
        communication: {
          base: 640,
          chance: 0.36
        }
      }
    },
    fuelBase: 1.6,
    storageBase: 55
  },
  reward: {
    base: 2850,
    perDistance: 8.64,
    bonus: {
      min: 2000,
      max: 5500,
      xpMultiplier: 1.019
    }
  },
  xp: {
    base: 7.9,
    perDistance: 0.38,
    perFlightHour: 5.7
  }
}
