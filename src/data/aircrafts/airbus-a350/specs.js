import { AircraftName } from '@/data/aircrafts/aircraft-names'

export const airbusA350Specs = {
  name: AircraftName.AirbusA350,
  specs: [
    {
      title: 'Limits & Specs',
      items: [
        { 'Max Operating Altitude': '43,100 ft' },
        { 'Cruise Speed': '488 KTAS' },
        { 'Range': '8,500 NM' },
        { 'Rate of Climb': '2,500 ft/min' },
        { 'MNE': 'Mach 0.89' },
        { 'VFE (Flaps 1)': '255 KIAS' },
        { 'VFE (Flaps 1+F)': '220 KIAS' },
        { 'VFE (Flaps 2)': '212 KIAS' },
        { 'VFE (Flaps 3)': '195 KIAS' },
        { 'VFE (Flaps FULL)': '186 KIAS' },
        { 'VLE': '280 KIAS' },
        { 'VLO': '250 KIAS' },
        { 'Fuel Consumption (L/hr)': 7250 },
        { 'Payload': '117,500 lb | 53,300 kg' },
        { 'Fuel Capacity': '248,680 lbs | 112,800 kg' },
        { 'Stall Speed (Clean)': '140 KCAS' },
        { 'Engines': '2x Rolls-Royce Trent XWB' },
        { 'Max Takeoff Weight': '623,900 lb | 283,000 kg' },
        { 'Max Landing Weight': '456,350 lb | 207,000 kg' },
        { 'EGT Limit (Takeoff)': '1000 °C' }
      ]
    }
  ]
}
