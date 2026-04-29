export const baron58PCareer = {
  id: 'B58P',
  costs: {
    buyPriceBase: 350000,
    sellPriceBase: 250000,
    leasePriceBase: 25,
    insuranceBase: 6,
    maintenance: {
      base: 20,
      issues: {
        engine: {
          base: 1900,
          chance: 0.08
        },
        landingGear: {
          base: 950,
          chance: 0.15
        },
        fuselage: {
          base: 750,
          chance: 0.22
        },
        wing: {
          base: 850,
          chance: 0.18
        },
        empennage: {
          base: 650,
          chance: 0.20
        },
        electrical: {
          base: 550,
          chance: 0.27
        },
        hydraulic: {
          base: 450,
          chance: 0.24
        },
        pressurization: {
          base: 800,
          chance: 0.22
        },
        avionics: {
          base: 1150,
          chance: 0.18
        },
        interior: {
          base: 280,
          chance: 0.32
        },
        lights: {
          base: 230,
          chance: 0.37
        },
        navigation: {
          base: 750,
          chance: 0.22
        },
        communication: {
          base: 450,
          chance: 0.30
        }
      }
    },
    fuelBase: 1.8,
    storageBase: 18
  },
  reward: {
    base: 1400,
    perDistance: 1.7,
    bonus: {
      min: 260,
      max: 920,
      xpMultiplier: 1.009
    }
  },
  xp: {
    base: 2.4,
    perDistance: 0.09,
    perFlightHour: 1.8
  }
}
