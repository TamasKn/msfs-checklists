export const beechcraftKingAir350Career = {
  id: 'KingAir350',
  costs: {
    buyPriceBase: 7500000,
    sellPriceBase: 4500000,
    leasePriceBase: 1200,
    insuranceBase: 180,
    maintenance: {
      base: 600,
      issues: {
        engine: {
          base: 12000,
          chance: 0.01
        },
        landingGear: {
          base: 3500,
          chance: 0.22
        },
        fuselage: {
          base: 2500,
          chance: 0.28
        },
        wing: {
          base: 3000,
          chance: 0.25
        },
        empennage: {
          base: 1800,
          chance: 0.28
        },
        electrical: {
          base: 1200,
          chance: 0.33
        },
        hydraulic: {
          base: 1000,
          chance: 0.28
        },
        pressurization: {
          base: 1500,
          chance: 0.25
        },
        avionics: {
          base: 2000,
          chance: 0.21
        },
        interior: {
          base: 700,
          chance: 0.35
        },
        lights: {
          base: 450,
          chance: 0.38
        },
        navigation: {
          base: 1200,
          chance: 0.23
        },
        communication: {
          base: 800,
          chance: 0.33
        }
      }
    },
    fuelBase: 1.7,
    storageBase: 80
  },
  reward: {
    base: 3500,
    perDistance: 15,
    bonus: {
      min: 2500,
      max: 7000,
      xpMultiplier: 1.025
    }
  },
  xp: {
    base: 10,
    perDistance: 0.5,
    perFlightHour: 7.5
  }
}
