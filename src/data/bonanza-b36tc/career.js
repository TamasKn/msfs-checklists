export const bonanzaB36TCCareer = {
  id: 'B36TC',
  costs: {
    buyPriceBase: 440000,
    sellPriceBase: 300000,
    leasePriceBase: 30,
    insuranceBase: 8,
    maintenance: {
      base: 25,
      issues: {
        engine: {
          base: 1800,
          chance: 0.07
        },
        landingGear: {
          base: 900,
          chance: 0.14
        },
        fuselage: {
          base: 700,
          chance: 0.2
        },
        wing: {
          base: 800,
          chance: 0.17
        },
        empennage: {
          base: 600,
          chance: 0.19
        },
        electrical: {
          base: 500,
          chance: 0.25
        },
        hydraulic: {
          base: 400,
          chance: 0.22
        },
        pressurization: {
          base: 600,
          chance: 0.20
        },
        avionics: {
          base: 1100,
          chance: 0.17
        },
        interior: {
          base: 250,
          chance: 0.3
        },
        lights: {
          base: 200,
          chance: 0.35
        },
        navigation: {
          base: 700,
          chance: 0.2
        },
        communication: {
          base: 400,
          chance: 0.28
        }
      }
    },
    fuelBase: 1.8,
    storageBase: 20
  },
  reward: {
    base: 1500,
    perDistance: 1.8,
    bonus: {
      min: 250,
      max: 900,
      xpMultiplier: 1.009
    }
  },
  xp: {
    base: 2.5,
    perDistance: 0.09,
    perFlightHour: 1.8
  }
}
