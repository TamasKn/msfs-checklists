export const diamondDa42Career = {
  id: 'DA42',
  costs: {
    buyPriceBase: 800000,
    sellPriceBase: 500000,
    leasePriceBase: 55,
    insuranceBase: 15,
    maintenance: {
      base: 45,
      issues: {
        engine: {
          base: 2000,
          chance: 0.05
        },
        landingGear: {
          base: 1000,
          chance: 0.1
        },
        fuselage: {
          base: 800,
          chance: 0.15
        },
        wing: {
          base: 900,
          chance: 0.12
        },
        empennage: {
          base: 700,
          chance: 0.14
        },
        electrical: {
          base: 500,
          chance: 0.2
        },
        hydraulic: {
          base: 400,
          chance: 0.18
        },
        pressurization: {
          base: 600,
          chance: 0.16
        },
        avionics: {
          base: 1200,
          chance: 0.13
        },
        interior: {
          base: 300,
          chance: 0.25
        },
        lights: {
          base: 200,
          chance: 0.3
        },
        navigation: {
          base: 700,
          chance: 0.15
        },
        communication: {
          base: 400,
          chance: 0.22
        }
      }
    },
    fuelBase: 1.8,
    storageBase: 25
  },
  reward: {
    base: 2000,
    perDistance: 2,
    bonus: {
      min: 300,
      max: 1000,
      xpMultiplier: 1.01
    }
  },
  xp: {
    base: 3,
    perDistance: 0.1,
    perFlightHour: 2
  }
}
