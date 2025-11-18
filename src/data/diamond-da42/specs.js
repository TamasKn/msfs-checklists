import { AircraftName } from '@/data/aircrafts/aircraft-names'

export const diamondDa42Specs = {
  name: AircraftName.DiamondDa42,
  specs: [
    {
      title: 'Limits & Specs',
      items: [
        { 'Max Operating Altitude': '18,000 ft' },
        { 'Cruise Speed': '176 KTAS' },
        { 'Range': '1,215 NM' },
        { 'Rate of Climb': '1,550 ft/min' },
        { 'VLE': '130 KIAS' },
        { 'VLO': 'EXT: 194, RET: 156 KIAS' },
        { 'VFE (Approach)': '92 KIAS' },
        { 'VFE (Landing)': '88 KIAS' },
        {
          'Fuel Consumption (G/hr)': 10.4
        },
        { 'Max Landing Sink Rate': '600 ft/min' },
        { 'Payload': '1,299 lb' },
        { 'Fuel Capacity': '76.4 gal (usable)' },
        { 'Stall Speed': '64 KCAS' }
      ]
    }
  ]
}
