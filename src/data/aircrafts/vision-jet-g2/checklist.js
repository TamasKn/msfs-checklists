import { AircraftName } from '@/data/aircrafts/aircraft-names'

export const visionJetG2Checklist = {
  name: AircraftName.VisionJetG2,
  checklist: [
    {
      title: 'Pre-Flight',
      items: [
        { 'Battery Master': 'ON' },
        { 'External Power': 'CONNECT (if needed)' },
        { 'Avionics Master': 'ON' },
        { 'Fuel Quantity': 'CHECK' },
        { 'Flight Plan': 'LOAD' },
        { 'NAV Radios': 'SET' },
        { 'Altimeter': 'SET (BARO)' },
        { 'Flaps': 'CHECK & SET for Takeoff' },
        { 'Flight Controls': 'FREE & CORRECT' },
        { 'CAPS': 'CHECK ARMED' }
      ]
    },
    {
      title: 'Engine Start',
      items: [
        { 'Beacon Light': 'ON' },
        { 'Parking Brake': 'SET' },
        { 'Throttle': 'IDLE' },
        { 'Fuel Pump': 'ON' },
        { 'Engine Start': 'ENGAGE (Monitor N1)' },
        { 'Oil Pressure': 'CHECK' },
        { 'Generator': 'ON' },
        { 'External Power': 'DISCONNECT' },
        { 'Avionics': 'CHECK' }
      ]
    },
    {
      title: 'Before Taxi',
      items: [
        { 'Flight Instruments': 'CHECK' },
        { 'Autopilot': 'TEST' },
        { 'Flaps': '50% for Takeoff' },
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
        { 'Flaps': '50%' },
        { 'Trim': 'SET for Takeoff' },
        { 'Fuel Pump': 'ON' },
        { 'Engine Instruments': 'CHECK GREEN' },
        { 'Autopilot': 'OFF' },
        { 'Transponder': 'ALT' },
        { 'Lights': 'LANDING, STROBE, NAV ON' },
        { 'CAPS': 'ARMED' }
      ]
    },
    {
      title: 'Takeoff',
      items: [
        { 'Parking Brake': 'RELEASE' },
        { 'Throttle': 'FULL POWER' },
        { 'Engine Instruments': 'CHECK' },
        { 'Airspeed': 'ALIVE' },
        { 'Rotate': '80 KIAS' },
        { 'Climb Speed': '100 KIAS' },
        { 'Gear Up': 'POSITIVE RATE' },
        { 'Flaps Up': 'AFTER 400 ft AGL' }
      ]
    },
    {
      title: 'Climb',
      items: [
        { 'Airspeed': '160 KIAS' },
        { 'Power': 'CLIMB POWER' },
        { 'Fuel Pump': 'AS REQUIRED' },
        { 'Engine Instruments': 'MONITOR' },
        { 'Altimeter': 'CHECK & SET' },
        { 'Pressurization': 'CHECK' }
      ]
    },
    {
      title: 'Cruise',
      items: [
        { 'Power': 'SET CRUISE' },
        { 'Fuel Balance': 'MONITOR' },
        { 'Engine Instruments': 'MONITOR' },
        { 'Autopilot': 'ENGAGE as desired' },
        { 'Pressurization': 'MONITOR' }
      ]
    },
    {
      title: 'Descent',
      items: [
        { 'ATIS/Weather': 'OBTAIN' },
        { 'Altimeter': 'SET' },
        { 'Approach Briefing': 'COMPLETE' },
        { 'Power': 'REDUCE as needed' },
        { 'Fuel Pump': 'ON' },
        { 'Pressurization': 'CHECK' }
      ]
    },
    {
      title: 'Before Landing',
      items: [
        { 'Fuel Pump': 'ON' },
        { 'Landing Gear': 'DOWN (3 Green)' },
        { 'Flaps': '50% then 100%' },
        { 'Airspeed': '100 KIAS (Approach)' },
        { 'Final Approach': '80 KIAS' },
        { 'Autopilot': 'OFF' },
        { 'Lights': 'LANDING ON' }
      ]
    },
    {
      title: 'Landing',
      items: [
        { 'Airspeed': '80 KIAS' },
        { 'Flare': 'OVER THRESHOLD' },
        { 'Throttle': 'IDLE' },
        { 'Touchdown': 'MAIN WHEELS FIRST' },
        { 'Brakes': 'AS REQUIRED' },
        { 'Thrust Reverser': 'DEPLOY if needed' }
      ]
    },
    {
      title: 'After Landing',
      items: [
        { 'Flaps': 'UP' },
        { 'Transponder': 'STANDBY' },
        { 'Lights': 'AS REQUIRED' },
        { 'Fuel Pump': 'OFF' }
      ]
    },
    {
      title: 'Shutdown',
      items: [
        { 'Parking Brake': 'SET' },
        { 'Throttle': 'IDLE' },
        { 'Avionics Master': 'OFF' },
        { 'Fuel Pump': 'OFF' },
        { 'Engine': 'SHUTDOWN (Throttle to Cutoff)' },
        { 'Generator': 'OFF' },
        { 'Battery Master': 'OFF' },
        { 'All Switches': 'OFF' }
      ]
    }
  ]
}

