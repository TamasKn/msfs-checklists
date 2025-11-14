import { AircraftName } from '@/data/aircrafts/aircraft-names'

export const bonanzaB36TPSpecs = {
  name: AircraftName.BonanzaB36TP,
  specs: [
    {
      title: 'Limits & Specs (Turbine Conversion)',
      items: [
        { 'Max Operating Altitude': '25,000 ft' },
        { 'Cruise Speed': '200 KTAS' },
        { 'Range': '900 NM' },
        { 'Rate of Climb': '1,500 ft/min' },
        { 'VNE': '210 KIAS' },
        { 'VFE': '153 KIAS' },
        { 'VLE': '153 KIAS' },
        { 'VLO': '124 KIAS' },
        { 'Fuel Consumption (G/hr)': 30 },
        { 'Payload': '1,200 lb' },
        { 'Fuel Capacity': '102 gal' },
        { 'Stall Speed': '65 KCAS' }
      ]
    }
  ]
}
