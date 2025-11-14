export const turbineDukeCareer = {
  id: 'TDUKE',
  costs: {
    buyPriceBase: 950000,
    sellPriceBase: 650000,
    leasePriceBase: 120,
    insuranceBase: 35,
    maintenance: {
      base: 95,
      issues: {
        engine: {
          base: 8500,
          chance: 0.009
        },
        landingGear: {
          base: 1200,
          chance: 0.14
        },
        fuselage: {
          base: 950,
          chance: 0.20
        },
        wing: {
          base: 1100,
          chance: 0.17
        },
        empennage: {
          base: 850,
          chance: 0.19
        },
        electrical: {
          base: 750,
          chance: 0.26
        },
        hydraulic: {
          base: 650,
          chance: 0.23
        },
        pressurization: {
          base: 1000,
          chance: 0.21
        },
        avionics: {
          base: 1500,
          chance: 0.17
        },
        interior: {
          base: 350,
          chance: 0.31
        },
        lights: {
          base: 280,
          chance: 0.36
        },
        navigation: {
          base: 950,
          chance: 0.21
        },
        communication: {
          base: 600,
          chance: 0.28
        }
      }
    },
    fuelBase: 2.2,
    storageBase: 28
  },
  reward: {
    base: 2400,
    perDistance: 2.5,
    bonus: {
      min: 450,
      max: 1600,
      xpMultiplier: 1.014
    }
  },
  xp: {
    base: 3.2,
    perDistance: 0.12,
    perFlightHour: 2.5
  }
}

