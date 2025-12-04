export const airbusA350Career = {
  id: 'A359',
  costs: {
    buyPriceBase: 150000000,
    sellPriceBase: 120000000,
    leasePriceBase: 150000,
    insuranceBase: 50000,
    maintenance: {
      base: 45000,
      issues: {
        engine: {
          base: 250000,
          chance: 0.05
        },
        landingGear: {
          base: 120000,
          chance: 0.1
        },
        fuselage: {
          base: 90000,
          chance: 0.15
        },
        wing: {
          base: 110000,
          chance: 0.12
        },
        empennage: {
          base: 80000,
          chance: 0.14
        },
        electrical: {
          base: 75000,
          chance: 0.2
        },
        hydraulic: {
          base: 65000,
          chance: 0.18
        },
        pressurization: {
          base: 85000,
          chance: 0.16
        },
        avionics: {
          base: 180000,
          chance: 0.15
        },
        interior: {
          base: 50000,
          chance: 0.25
        },
        lights: {
          base: 30000,
          chance: 0.3
        },
        navigation: {
          base: 100000,
          chance: 0.17
        },
        communication: {
          base: 60000,
          chance: 0.22
        }
      }
    },
    fuelBase: 4.5,
    storageBase: 800
  },
  reward: {
    base: 250000,
    perDistance: 25,
    bonus: {
      min: 50000,
      max: 200000,
      xpMultiplier: 1.05
    }
  },
  xp: {
    base: 35,
    perDistance: 0.08,
    perFlightHour: 30
  }
}
