import { AircraftName } from '@/data/aircrafts/aircraft-names'

export const cessnaLongitudeSpecs = {
  name: AircraftName.CessnaLongitude,
  specs: [
    {
      title: 'Limits & Specs',
      items: [
        {
          'Maximum Operating Altitude': '45,000 ft'
        },
        {
          'Cruise Speed': '320 KTAS'
        },
        {
          Range: '3,500 NM'
        },
        { VMO: '483 KTAS' },
        { MMO: '0.724' },
        { VLE: '230 KTAS' },
        { 'VFE (Flaps 1)': '250 KTAS' },
        { 'VFE (Flaps 2)': '230 KTAS' },
        { 'VFE (Flaps Full)': '180 KTAS' },
        {
          Payload: '4000 lb / 1814 kg'
        },
        {
          'Fuel Capacity': '14,593 lb / 6619 kg'
        },
        {
          'Fuel Consumption': '816.50 L/hr'
        }
      ]
    }
  ]
}
