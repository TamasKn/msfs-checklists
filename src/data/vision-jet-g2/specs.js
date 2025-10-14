import { AircraftName } from '@/data/aircrafts/aircraft-names'

export const visionJetG2Specs = {
  name: AircraftName.VisionJetG2,
  specs: [
    {
      title: 'Limits & Specs',
      items: [
        { 'Max Operating Altitude': '31,000 ft' },
        { 'Cruise Speed': '311 KTAS' },
        { 'Range': '1,275 NM' },
        { 'Rate of Climb': '1,900 ft/min' },
        { 'VMO': '250 KIAS' },
        { 'MMO': 'M0.53' },
        { 'VLE': '173 KIAS' },
        { 'VFE (50%)': '173 KIAS' },
        { 'VFE (100%)': '140 KIAS' },
        { 'Max Landing Sink Rate': '600 ft/min' },
        { 'Payload': '6,000 lb' },
        { 'Fuel Capacity': '202 gal (usable)' },
        { 'Stall Speed': '67 KCAS' }
      ]
    }
  ]
}
