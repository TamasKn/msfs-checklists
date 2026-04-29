import { AircraftName } from '@/data/aircrafts/aircraft-names'

export const grandDukeSpecs = {
  name: AircraftName.GrandDuke,
  specs: [
    {
      title: 'Limits & Specs',
      items: [
        { 'Max Operating Altitude': '30,000 ft' },
        { 'Cruise Speed': '260 KTAS' },
        { 'Range': '1,250 NM' },
        { 'Rate of Climb': '2,200 ft/min' },
        { 'VNE': '235 KIAS' },
        { 'VFE': '150 KIAS' },
        { 'VLE': '150 KIAS' },
        { 'VLO': '130 KIAS' },
        { 'Fuel Consumption (G/hr)': 52 },
        { 'Payload': '2,200 lb' },
        { 'Fuel Capacity': '282 gal' },
        { 'Stall Speed': '68 KCAS' }
      ]
    }
  ]
}
