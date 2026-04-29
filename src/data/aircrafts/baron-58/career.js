export const baron58Career = {
  id: 'B58',
  costs: {
    buyPriceBase: 480000,
    sellPriceBase: 350000,
    leasePriceBase: 35,
    insuranceBase: 8,
    maintenance: {
      base: 30,
      issues: {
        engine: {
          base: 2000,
          chance: 0.07
        },
        landingGear: {
          base: 1000,
          chance: 0.14
        },
        fuselage: {
          base: 800,
          chance: 0.2
        },
        wing: {
          base: 900,
          chance: 0.17
        },
        empennage: {
          base: 700,
          chance: 0.19
        },
        electrical: {
          base: 600,
          chance: 0.25
        },
        hydraulic: {
          base: 500,
          chance: 0.22
        },
        pressurization: {
          base: 700,
          chance: 0.20
        },
        avionics: {
          base: 1200,
          chance: 0.17
        },
        interior: {
          base: 300,
          chance: 0.3
        },
        lights: {
          base: 250,
          chance: 0.35
        },
        navigation: {
          base: 800,
          chance: 0.2
        },
        communication: {
          base: 500,
          chance: 0.28
        }
      }
    },
    fuelBase: 1.8,
    storageBase: 20
  },
  reward: {
    base: 1600,
    perDistance: 1.9,
    bonus: {
      min: 280,
      max: 950,
      xpMultiplier: 1.01
    }
  },
  xp: {
    base: 2.6,
    perDistance: 0.1,
    perFlightHour: 1.9
  }
}
