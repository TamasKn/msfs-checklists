export const beechcraftKingAir350Career = {
  id: 'B350',
  costs: {
    buyPriceBase: 7500000,
    sellPriceBase: 4500000,
    leasePriceBase: 1200,
    insuranceBase: 180,
    maintenance: {
      base: 600,
      issues: {
        engine: {
          base: 13800,
          chance: 0.01
        },
        landingGear: {
          base: 4025,
          chance: 0.22
        },
        fuselage: {
          base: 2875,
          chance: 0.28
        },
        wing: {
          base: 3450,
          chance: 0.25
        },
        empennage: {
          base: 2070,
          chance: 0.28
        },
        electrical: {
          base: 1380,
          chance: 0.33
        },
        hydraulic: {
          base: 1150,
          chance: 0.28
        },
        pressurization: {
          base: 1725,
          chance: 0.25
        },
        avionics: {
          base: 2300,
          chance: 0.21
        },
        interior: {
          base: 805,
          chance: 0.35
        },
        lights: {
          base: 518,
          chance: 0.38
        },
        navigation: {
          base: 1380,
          chance: 0.23
        },
        communication: {
          base: 920,
          chance: 0.33
        }
      }
    },
    fuelBase: 1.7,
    storageBase: 80
  },
  reward: {
    base: 4200,
    perDistance: 12,
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
