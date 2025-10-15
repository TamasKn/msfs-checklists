import { AircraftName } from '@/data/aircrafts/aircraft-names'

export const cessna172Specs = {
  name: AircraftName.Cessna172,
  specs: [
    {
      title: 'Limits & Specs',
      items: [
        { 'Cruise Speed': '124 KTAS' },
        { 'Range': '640 NM' },
        { 'Max Operating Altitude': '14,000 ft' },
        { 'Rate of Climb': '730 ft/min' },
        { 'VMO': '163 KTAS' },
        { 'VLE': '110 KIAS' },
        { 'VFE (10)': '110 KIAS' },
        { 'VFE (Full)': '85 KIAS' },
        {
          'Fuel Consumption': '24.50 L/hr'
        },
        { 'Payload': '2,550 lb' },
        { 'Fuel Capacity': '53 gal (usable)' },
        { 'Stall Speed': '48 KIAS' }
      ]
    }
  ]
}
