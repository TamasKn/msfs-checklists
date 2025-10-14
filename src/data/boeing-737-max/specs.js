import { AircraftName } from '@/data/aircrafts/aircraft-names'

export const boeing737MaxSpecs = {
  name: AircraftName.Boeing737Max,
  specs: [
    {
      title: 'Limits & Specs',
      items: [
        { 'Max Operating Altitude': '41,000 ft' },
        { 'Cruise Speed': '453 KTAS' },
        { 'Range': '3,550 NM' },
        { 'Rate of Climb': '3,000 ft/min' },
        { 'VMO': '340 KIAS' },
        { 'MMO': 'M0.82' },
        { 'VLE': '270 KIAS' },
        { 'VFE (Flaps 1)': '250 KIAS' },
        { 'VFE (Flaps 5)': '250 KIAS' },
        { 'VFE (Flaps 10)': '210 KIAS' },
        { 'VFE (Flaps 15)': '200 KIAS' },
        { 'VFE (Flaps 25)': '190 KIAS' },
        { 'VFE (Flaps 30/40)': '170 KIAS' },
        { 'Max Landing Sink Rate': '600 ft/min' },
        { 'Payload': '172,000 lb' },
        { 'Fuel Capacity': '6,820 gal (usable)' },
        { 'Stall Speed': '112 KIAS' }
      ]
    }
  ]
}
