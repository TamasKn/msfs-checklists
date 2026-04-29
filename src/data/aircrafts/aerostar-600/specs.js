import { AircraftName } from '@/data/aircrafts/aircraft-names'

export const aerostar600Specs = {
  name: AircraftName.Aerostar600,
  specs: [
    {
      title: 'Limits & Specs',
      items: [
        { 'Max Operating Altitude': '25,000 ft' },
        { 'Cruise Speed': '210 KTAS' },
        { 'Range': '1,200 NM' },
        { 'Rate of Climb': '1,800 ft/min' },
        { 'VNE': '235 KIAS' },
        { 'VFE': '157 KIAS' },
        { 'VLE': '157 KIAS' },
        { 'VLO': '130 KIAS' },
        { 'Fuel Consumption (G/hr)': 30 },
        { 'Payload': '1,600 lb' },
        { 'Fuel Capacity': '165 gal' },
        { 'Stall Speed': '80 KCAS' }
      ]
    }
  ]
}
