import { AircraftName } from '@/data/aircrafts/aircraft-names'

export const diamondDA62Specs = {
  name: AircraftName.DiamondDA62,
  specs: [
    {
      title: 'Limits & Specs',
      items: [
        { 'Cruise Speed': '171 KTAS' },
        { 'Range': '1,285 NM' },
        { 'Max Operating Altitude': '20,000 ft' },
        { 'Rate of Climb': '1,350 ft/min' },
        { 'VMO': '205 KIAS' },
        { 'VLE': '205 KIAS' },
        { 'VFE (20)': '140 KIAS' },
        { 'VFE (Full)': '122 KIAS' },
        {
          'Fuel Consumption': '35.80 L/hr'
        },
        { 'Payload': '7,000 lb' },
        { 'Fuel Capacity': '100 gal (usable)' },
        { 'Stall Speed': '67 KCAS' }
      ]
    }
  ]
}
