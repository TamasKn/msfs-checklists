export const bonanzaB36TPCareer = {
  id: 'B36TP',
  costs: {
    buyPriceBase: 650000,
    sellPriceBase: 450000,
    leasePriceBase: 45,
    insuranceBase: 10,
    maintenance: {
      base: 35,
      issues: {
        engine: {
          base: 2200,
          chance: 0.06
        },
        landingGear: {
          base: 1000,
          chance: 0.12
        },
        fuselage: {
          base: 800,
          chance: 0.18
        },
        wing: {
          base: 900,
          chance: 0.15
        },
        empennage: {
          base: 700,
          chance: 0.17
        },
        electrical: {
          base: 600,
          chance: 0.24
        },
        hydraulic: {
          base: 500,
          chance: 0.21
        },
        pressurization: {
          base: 700,
          chance: 0.19
        },
        avionics: {
          base: 1300,
          chance: 0.16
        },
        interior: {
          base: 300,
          chance: 0.28
        },
        lights: {
          base: 250,
          chance: 0.33
        },
        navigation: {
          base: 800,
          chance: 0.19
        },
        communication: {
          base: 500,
          chance: 0.26
        }
      }
    },
    fuelBase: 1.8,
    storageBase: 22
  },
  reward: {
    base: 1800,
    perDistance: 2.2,
    bonus: {
      min: 300,
      max: 1100,
      xpMultiplier: 1.011
    }
  },
  xp: {
    base: 2.8,
    perDistance: 0.11,
    perFlightHour: 2.1
  }
}
