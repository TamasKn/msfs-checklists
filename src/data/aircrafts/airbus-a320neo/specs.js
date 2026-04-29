import { AircraftName } from '@/data/aircrafts/aircraft-names'

export const airbusA320neoSpecs = {
  name: AircraftName.AirbusA320neo,
  specs: [
    {
      title: 'Limits & Specs',
      items: [
        { 'Max Operating Altitude': '39,800 ft' },
        { 'Cruise Speed': '455 KTAS' },
        { 'Range': '3,500 NM' },
        { 'Rate of Climb': '2,500 ft/min' },
        { 'VMO': '350 KIAS' },
        { 'MMO': 'M0.82' },
        { 'VLE': '280 KIAS' },
        { 'VLO': 'EXT: 250, RET: 220 KIAS' },
        { 'VFE (1)': '230 KIAS' },
        { 'VFE (1+F)': '215 KIAS' },
        { 'VFE (2)': '200 KIAS' },
        { 'VFE (3)': '185 KIAS' },
        { 'VFE (Full)': '177 KIAS' },
        {
          'Fuel Consumption (L/hr)': 1134
        },
        { 'Max Landing Sink Rate': '600 ft/min' },
        { 'Payload': '164,000 lb' },
        { 'Fuel Capacity': '6,400 gal (usable)' },
        { 'Stall Speed': '108 KCAS' }
      ]
    }
  ]
}
