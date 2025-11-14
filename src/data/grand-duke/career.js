export const grandDukeCareer = {
  id: 'GDUKE',
  costs: {
    buyPriceBase: 380000,
    sellPriceBase: 280000,
    leasePriceBase: 28,
    insuranceBase: 7,
    maintenance: {
      base: 22,
      issues: {
        engine: {
          base: 2100,
          chance: 0.07
        },
        landingGear: {
          base: 1000,
          chance: 0.14
        },
        fuselage: {
          base: 800,
          chance: 0.20
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
          chance: 0.26
        },
        hydraulic: {
          base: 500,
          chance: 0.23
        },
        pressurization: {
          base: 850,
          chance: 0.21
        },
        avionics: {
          base: 1250,
          chance: 0.17
        },
        interior: {
          base: 300,
          chance: 0.31
        },
        lights: {
          base: 250,
          chance: 0.36
        },
        navigation: {
          base: 800,
          chance: 0.21
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
      min: 300,
      max: 1050,
      xpMultiplier: 1.011
    }
  },
  xp: {
    base: 2.6,
    perDistance: 0.10,
    perFlightHour: 2.0
  }
}

