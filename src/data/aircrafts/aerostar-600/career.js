export const aerostar600Career = {
  id: 'A600',
  costs: {
    buyPriceBase: 250000,
    sellPriceBase: 180000,
    leasePriceBase: 20,
    insuranceBase: 5,
    maintenance: {
      base: 15,
      issues: {
        engine: {
          base: 1500,
          chance: 0.06
        },
        landingGear: {
          base: 800,
          chance: 0.12
        },
        fuselage: {
          base: 600,
          chance: 0.18
        },
        wing: {
          base: 700,
          chance: 0.15
        },
        empennage: {
          base: 500,
          chance: 0.17
        },
        electrical: {
          base: 400,
          chance: 0.22
        },
        hydraulic: {
          base: 300,
          chance: 0.20
        },
        pressurization: {
          base: 500,
          chance: 0.18
        },
        avionics: {
          base: 1000,
          chance: 0.15
        },
        interior: {
          base: 200,
          chance: 0.28
        },
        lights: {
          base: 150,
          chance: 0.33
        },
        navigation: {
          base: 600,
          chance: 0.18
        },
        communication: {
          base: 300,
          chance: 0.25
        }
      }
    },
    fuelBase: 1.8,
    storageBase: 15
  },
  reward: {
    base: 1000,
    perDistance: 1.5,
    bonus: {
      min: 200,
      max: 800,
      xpMultiplier: 1.008
    }
  },
  xp: {
    base: 2,
    perDistance: 0.08,
    perFlightHour: 1.5
  }
}
