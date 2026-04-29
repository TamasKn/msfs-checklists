import { AircraftName } from '@/data/aircrafts/aircraft-names'

export const diamondDA62Checklist = {
  name: AircraftName.DiamondDA62,
  checklist: [
    {
      title: 'Pre-Flight',
      items: [
        { 'Battery Master': 'ON' },
        { 'Avionics Master': 'ON' },
        { 'Fuel Quantity': 'CHECK' },
        { 'Fuel Selectors': 'MAIN TANKS' },
        { 'Flight Plan': 'LOAD' },
        { 'NAV Radios': 'SET' },
        { 'Altimeter': 'SET (BARO)' },
        { 'Flaps': 'APPROACH for Takeoff' },
        { 'Flight Controls': 'FREE & CORRECT' },
        { 'Trim': 'SET for Takeoff' }
      ]
    },
    {
      title: 'Engine Start',
      items: [
        { 'Beacon Light': 'ON' },
        { 'Parking Brake': 'SET' },
        { 'Throttles': 'IDLE' },
        { 'Fuel Pumps': 'ON' },
        { 'Engine 1 Start': 'ENGAGE (Monitor N1)' },
        { 'Engine 1 Oil Pressure': 'CHECK' },
        { 'Engine 2 Start': 'ENGAGE (Monitor N1)' },
        { 'Engine 2 Oil Pressure': 'CHECK' },
        { 'Alternators': 'CHECK ON' },
        { 'Avionics': 'CHECK' }
      ]
    },
    {
      title: 'Before Taxi',
      items: [
        { 'Flight Instruments': 'CHECK' },
        { 'Autopilot': 'TEST' },
        { 'Flaps': 'APPROACH' },
        { 'Trim': 'SET' },
        { 'Flight Controls': 'FREE & CORRECT' },
        { 'Transponder': 'SET & ALT' },
        { 'Lights': 'AS REQUIRED' }
      ]
    },
    {
      title: 'Before Takeoff',
      items: [
        { 'Parking Brake': 'SET' },
        { 'Flight Controls': 'FREE & CORRECT' },
        { 'Flaps': 'APPROACH' },
        { 'Trim': 'SET for Takeoff' },
        { 'Fuel Selectors': 'MAIN TANKS' },
        { 'Fuel Pumps': 'ON' },
        { 'Engine Instruments': 'CHECK GREEN' },
        { 'Autopilot': 'OFF' },
        { 'Transponder': 'ALT' },
        { 'Lights': 'LANDING, STROBE, NAV ON' }
      ]
    },
    {
      title: 'Takeoff',
      items: [
        { 'Parking Brake': 'RELEASE' },
        { 'Throttles': 'FULL POWER' },
        { 'Engine Instruments': 'CHECK' },
        { 'Airspeed': 'ALIVE' },
        { 'Rotate': '75 KIAS' },
        { 'Climb Speed': '95 KIAS' },
        { 'Gear Up': 'POSITIVE RATE' },
        { 'Flaps Up': 'AFTER 500 ft AGL' }
      ]
    },
    {
      title: 'Climb',
      items: [
        { 'Airspeed': '120 KIAS' },
        { 'Power': 'CLIMB POWER' },
        { 'Fuel Pumps': 'AS REQUIRED' },
        { 'Engine Instruments': 'MONITOR' },
        { 'Altimeter': 'CHECK & SET' }
      ]
    },
    {
      title: 'Cruise',
      items: [
        { 'Power': 'SET CRUISE' },
        { 'Mixture': 'LEAN as required' },
        { 'Fuel Balance': 'MONITOR' },
        { 'Engine Instruments': 'MONITOR' },
        { 'Autopilot': 'ENGAGE as desired' }
      ]
    },
    {
      title: 'Descent',
      items: [
        { 'ATIS/Weather': 'OBTAIN' },
        { 'Altimeter': 'SET' },
        { 'Approach Briefing': 'COMPLETE' },
        { 'Power': 'REDUCE as needed' },
        { 'Fuel Pumps': 'ON' }
      ]
    },
    {
      title: 'Before Landing',
      items: [
        { 'Fuel Selectors': 'MAIN TANKS' },
        { 'Fuel Pumps': 'ON' },
        { 'Landing Gear': 'DOWN (3 Green)' },
        { 'Flaps': 'APPROACH then LANDING' },
        { 'Airspeed': '90 KIAS (Approach)' },
        { 'Final Approach': '75 KIAS' },
        { 'Autopilot': 'OFF' },
        { 'Lights': 'LANDING ON' }
      ]
    },
    {
      title: 'Landing',
      items: [
        { 'Airspeed': '75 KIAS' },
        { 'Flare': 'OVER THRESHOLD' },
        { 'Throttles': 'IDLE' },
        { 'Touchdown': 'MAIN WHEELS FIRST' },
        { 'Brakes': 'AS REQUIRED' }
      ]
    },
    {
      title: 'After Landing',
      items: [
        { 'Flaps': 'UP' },
        { 'Transponder': 'STANDBY' },
        { 'Lights': 'AS REQUIRED' },
        { 'Fuel Pumps': 'OFF' }
      ]
    },
    {
      title: 'Shutdown',
      items: [
        { 'Parking Brake': 'SET' },
        { 'Throttles': 'IDLE' },
        { 'Avionics Master': 'OFF' },
        { 'Fuel Pumps': 'OFF' },
        { 'Engines': 'SHUTDOWN (Mixture to Cutoff)' },
        { 'Alternators': 'OFF' },
        { 'Battery Master': 'OFF' },
        { 'All Switches': 'OFF' }
      ]
    }
  ]
}

