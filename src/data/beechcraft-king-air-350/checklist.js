import { AircraftName } from '@/data/aircrafts/aircraft-names'

export const beechcraftKingAir350Checklist = {
  name: AircraftName.BeechcraftKingAir350,
  checklist: [
    {
      title: 'Before Engine Start',
      items: [
        { 'Preflight Inspection': 'COMPLETE' },
        { 'Parking Brake': 'SET' },
        { 'Doors': 'LOCKED' },
        { 'Passenger Briefing': 'COMPLETE' },
        { 'ELT Switch': 'ARM' },
        { 'Fuel Panel': 'CHECK' },
        { 'Landing Gear Control': 'DOWN' },
        { 'Power Levers': 'IDLE' },
        { 'Propeller Levers': 'FULL FORWARD' },
        { 'Condition Levers': 'FUEL CUTOFF' },
        { 'Beacon': 'ON' },
        { 'Nav Lights': 'ON' },
        { 'Fuel Quantity': 'CHECK MAIN & AUX' }
      ]
    },
    {
      title: 'Engine Start',
      items: [
        { 'Right Ignition and Engine Start': 'ON' },
        { 'Right Condition Lever (at min. 12% N1)': 'LOW IDLE' },
        { 'Right ITT and N1': 'MONITOR (max. 1000°)' },
        { 'Right Oil Pressure': 'CHECK' },
        { 'Right Ignition and Engine Start (at min 50% N1)': 'OFF' },
        { 'Right Generator': 'ON' },
        { 'Repeat for Left Engine': 'COMPLETE' },
        { 'Engine Instruments': 'CHECK' }
      ]
    },
    {
      title: 'Before Taxi',
      items: [
        { Radios: 'ON-SET' },
        { Transponder: 'SET & ALT' },
        { Altimeter: 'SET LOCAL QNH' },
        { Flaps: 'UP' },
        { 'Flight Controls': 'CHECK' },
        { 'Recognition Lights': 'ON' },
        { 'Taxi Lights': 'ON' },
        { 'Parking Brake': 'RELEASE' }
      ]
    },
    {
      title: 'Before Takeoff',
      items: [
        { 'Cabin Pressurization': '1,000 ft ABOVE CRZ ALT' },
        { 'Pitch Trim': 'TAKEOFF' },
        { Flaps: 'APPROACH' },
        { 'Propeller Levers': 'MANUAL FEATHER CHECK' },
        { 'Engine Auto-Ignition': 'ARM' },
        { 'Anti-Ice': 'AS REQUIRED' },
        { 'Pitot Heat': 'L & R ON' },
        { 'Propeller Levers': 'FULL FORWARD' },
        { 'Landing Lights': 'ON' },
        { 'Strobe Lights': 'ON' }
      ]
    },
    {
      title: 'After Takeoff',
      items: [
        { 'Landing Gear': 'UP' },
        { Flaps: 'UP' },
        { 'Climb Power': 'SET' }
      ]
    },
    {
      title: 'Climb',
      items: [
        { Autopilot: 'AS REQUIRED' },
        { 'Landing Lights': 'OFF' },
        { Airspeed: '160-170 KIAS' },
        { Propeller: '1600 RPM' },
        { 'Altimeter at FL180': 'SET 29.92 (1013MB)' }
      ]
    },
    {
      title: 'Cruise',
      items: [
        { 'Cruise Speed': '220-240 KIAS' },
        { Propeller: '1600 RPM' },
        { 'Engine & Instruments': 'CHECK' },
        { Fuel: 'CHECK' },
        { Autopilot: 'AS REQUIRED' }
      ]
    },
    {
      title: 'Descent',
      items: [{ 'Flight Plan / Radios': 'SET / CHECK' }, { Altimeters: 'SET' }]
    },
    {
      title: 'Before Landing',
      items: [
        { 'Fuel Panel': 'CHECK' },
        { 'Standby Pumps': 'OFF' },
        { Flaps: 'APPROACH' },
        { 'Landing Gear': 'DOWN' }
      ]
    },
    {
      title: 'Landing',
      items: [
        { Flaps: 'FULL' },
        { 'Propeller Levers': 'FULL FORWARD' },
        { Airspeed: 'VREF' }
      ]
    },
    {
      title: 'Shutdown',
      items: [
        { 'Parking Brake': 'SET' },
        { ITT: 'STABILIZED' },
        { 'Condition Levers': 'FUEL CUTOFF' },
        { 'Propeller Levers': 'FEATHER' },
        { Transponder: 'STBY' },
        { 'Exterior Lights': 'OFF' },
        { 'Pitot Heat': 'OFF' },
        { Avionics: 'OFF' },
        { 'Battery and Generators': 'OFF (below 15% N1)' }
      ]
    }
  ]
}
