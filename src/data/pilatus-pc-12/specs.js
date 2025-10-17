import { AircraftName } from '@/data/aircrafts/aircraft-names'

export const pilatusPc12Specs = {
  name: AircraftName.PilatusPC12,
  specs: [
    {
      title: 'Limits & Specs',
      items: [
        { 'Cruise Speed': '290 KTAS' },
        { 'Range': '1,803 NM' },
        { 'Max Operating Altitude': '30,000 ft' },
        { 'Rate of Climb': '1,920 ft/min' },
        { 'VMO': '240 KIAS' },
        { 'MMO': 'M.490' },
        { 'VLE': '240 KIAS' },
        { 'VFE (15)': '165 KIAS' },
        { 'VFE (Full)': '130 KIAS' },
        {
          'Fuel Consumption': '156 L/hr'
        },
        { 'Payload': '10,450 lb' },
        { 'Fuel Capacity': '402 gal (usable)' },
        { 'Stall Speed': '67 KCAS' }
      ]
    }
  ]
}
