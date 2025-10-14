import { AircraftName } from '@/data/aircrafts/aircraft-names'

export const airbusA320neoSpecs = {
  name: AircraftName.AirbusA320neo,
  specs: [
    {
      title: 'Limits & Specs',
      items: [
        { 'Max Operating Altitude': '39,800 ft' },
        { 'Cruise Speed': '450 KIAS' },
        { 'Range': '3,400 NM' },
        { 'Rate of Climb': '2,500 ft/min' },
        { 'VMO': '350 KIAS' },
        { 'MMO': 'M0.82' },
        { 'VLE': '220 KIAS' },
        { 'VFE (Config 1)': '230 KIAS' },
        { 'VFE (Config 2)': '200 KIAS' },
        { 'VFE (Config 3)': '185 KIAS' },
        { 'VFE (Config Full)': '177 KIAS' },
        { 'Max Landing Sink Rate': '600 ft/min' },
        { 'Payload': '164,000 lb' },
        { 'Fuel Capacity': '6,400 gal (usable)' },
        { 'Stall Speed': '108 KCAS' }
      ]
    }
  ]
}
