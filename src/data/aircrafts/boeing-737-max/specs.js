import { AircraftName } from '@/data/aircrafts/aircraft-names'

export const boeing737MaxSpecs = {
  name: AircraftName.Boeing737Max,
  specs: [
    {
      title: 'Limits & Specs',
      items: [
        { 'Max Operating Altitude': '41,000 ft' },
        { 'Cruise Speed': '455 KTAS' },
        { 'Range': '3,200 NM' },
        { 'Rate of Climb': '3,000 ft/min' },
        { 'VMO': '340 KIAS' },
        { 'MMO': 'M0.82' },
        { 'VLO': 'EXT: 270, RET: 235 KIAS' },
        { 'VFE (1,2,5)': '250 KIAS' },
        { 'VFE (10)': '210 KIAS' },
        { 'VFE (15)': '200 KIAS' },
        { 'VFE (25)': '190 KIAS' },
        { 'VFE (30)': '175 KIAS' },
        { 'VFE (40)': '166 KIAS' },
        {
          'Fuel Consumption (L/hr)': 2268
        },
        { 'Max Landing Sink Rate': '600 ft/min' },
        { 'Payload': '172,000 lb' },
        { 'Fuel Capacity': '6,820 gal (usable)' },
        { 'Stall Speed': '112 KCAS' }
      ]
    }
  ]
}
