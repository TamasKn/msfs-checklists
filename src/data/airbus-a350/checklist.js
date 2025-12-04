import { AircraftName } from '@/data/aircrafts/aircraft-names'

export const airbusA350Checklist = {
  name: AircraftName.AirbusA350,
  checklist: [
    {
      title: 'Before Engine Start',
      items: [
        { 'Cockpit Prep': 'COMPLETED (BOTH)' },
        { 'Gear Pins & Covers': 'REMOVED' },
        { 'Fuel QTY': '___ KG' },
        { 'T.O Data': 'SET' },
        { 'Baro Ref': 'SET (BOTH)' },
        { 'Seat Belts': 'ON' },
        { 'ADIRS': 'NAV' },
        { 'Doors': 'CLOSED/ARMED (BOTH)' },
        { 'Thrust Levers': 'IDLE' },
        { 'Park Brk': 'AS REQ' },
        { 'SURV': 'DEFAULT (BOTH)' },
        { 'Beacon': 'ON' }
      ]
    },
    {
      title: 'Engine Start',
      items: [
        { 'Guidance and Considerations': 'REVIEWED' },
        { 'Engine 1(2)': 'START' },
        { 'ENG Start Selector': 'NORM' },
        { 'XBLEED': 'OPEN' },
        { 'APU BLEED': 'OFF' },
        { 'APU': 'OFF' },
        { 'ANTIICE Running ENG': 'AS REQ' },
        { 'ECAM Status': 'CHECK' },
        { 'TUG & GND CREW': 'DISCONNECT' },
        { 'ENG Start Selector': 'IGN/START' },
        { 'ENG 2(1)': 'START' },
        { 'CHRONO': 'START' },
        { 'XBLEED': 'AUTO' },
        { 'ANTI ICE Running ENGS': 'AS REQ' },
        { 'GND Spoilers': 'ARM' },
        { 'Rudder Trim Check': 'ZERO' },
        { 'Flaps': 'SET' },
        { 'Pitch Trim': 'CHECK' },
        { 'ECAM Status': 'CHECK' },
        { 'A-ICE': 'AS REQ' },
        { 'ECAM STS': 'CHECK' },
        { 'Rudder Trim': 'NEUTRAL' }
      ]
    },
    {
      title: 'Before Takeoff',
      items: [
        { 'F/CTL Check': 'COMPLETED (BOTH)' },
        { 'Flight Instruments': 'CHECKED (BOTH)' },
        { 'Flaps Setting': 'CONF SET (BOTH)' },
        { 'V1/VR/V2/THR Rating': '(BOTH)' },
        { 'Squawk': 'SET' },
        { 'Seat Belts': 'ON' },
        { 'GND SPLRS': 'ARM' },
        { 'Flaps': 'T.O' },
        { 'Auto Brk': 'RTO' },
        { 'T.O Config': 'NORMAL' },
        { 'T.O RWY': 'CONFIRMED (BOTH)' },
        { 'PACKS': 'OFF' }
      ]
    },
    {
      title: 'Climb',
      items: [
        { 'LDG Gear': 'UP' },
        { 'Flaps': '0' },
        { 'PACKS': 'ON' },
        { 'Baro Ref': 'SET (BOTH)' }
      ]
    },
    {
      title: 'Cruise',
      items: [
        { 'Engine instruments': 'Monitor' },
        { 'Fuel': 'Balance and quantity checked' },
        { 'Systems': 'Monitor' }
      ]
    },
    {
      title: 'Descent',
      items: [
        { 'ATIS and Weather': 'Obtained and Checked' },
        { 'FMS/MCDU': 'Set for arrival' },
        { 'Barometric reference': 'Set to QNH below transition level' },
        { 'Seat belts': 'ON' }
      ]
    },
    {
      title: 'Approach',
      items: [
        { 'Seat Belts': 'ON' },
        { 'Minimum': 'SET (BOTH)' },
        { 'Baro Ref': 'SET (BOTH)' }
      ]
    },
    {
      title: 'Landing',
      items: [
        { 'A/THR': 'SPEED/OFF' },
        { 'Auto Brk': 'AS REQ' },
        { 'RWY Cond': 'SET' },
        { 'Seat Belts': 'ON' },
        { 'LDG Gear': 'DOWN' },
        { 'GND SPLRs': 'ARM' },
        { 'Flaps': 'LDG' }
      ]
    },
    {
      title: 'After Landing',
      items: [
        { 'GND SPLRS': 'DISARM' },
        { 'Flaps': '0' },
        { 'APU': 'START' },
        { 'ECAM Status': 'CHECK' },
        { 'APU': 'AVAIL' },
        { 'ENG 1(2)': 'SHUTDOWN' }
      ]
    },
    {
      title: 'Shutdown',
      items: [
        { 'EXT LT': 'AS REQ' },
        { 'PARK BRK/CHOCKS': 'AS REQ' },
        { 'XPDR': 'STBY' },
        { 'APU BLEED': 'ON' },
        { 'ALL ENGS': 'OFF' },
        { 'Fuel Pumps': 'OFF' },
        { 'Seat Belts': 'OFF' },
        { 'ADIRS': 'OFF' },
        { 'Oxygen Crew Supply': 'OFF' },
        { 'APU BLEED': 'OFF' },
        { 'Emer Exit LT': 'OFF' },
        { 'Signs': 'OFF' },
        { 'APU': 'AS REQ' },
        { 'ALL 4 BATS': 'AS REQ' }
      ]
    }
  ]
}
