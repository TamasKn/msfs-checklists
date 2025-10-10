import { AircraftName } from '@/data/aircrafts/aircraft-names'

export const airbusA320neoChecklist = {
  name: AircraftName.AirbusA320neo,
  checklist: [
    {
      title: 'Cockpit Preparation',
      items: [
        { 'ADIRS': 'NAV' },
        { 'Parking Brake': 'SET' },
        { 'Battery 1 & 2': 'ON' },
        { 'External Power': 'ON (if available)' },
        { 'APU Master': 'ON' },
        { 'APU Start': 'ON' },
        { 'APU Bleed': 'ON (when APU available)' },
        { 'Flight Plan': 'LOAD in MCDU' },
        { 'Fuel Quantity': 'CHECK' },
        { 'Seat Belts': 'ON' }
      ]
    },
    {
      title: 'Before Start',
      items: [
        { 'Beacon': 'ON' },
        { 'Doors': 'CLOSED' },
        { 'Fuel Pumps': 'ON' },
        { 'Flaps': 'SET for Takeoff' },
        { 'Spoilers': 'RETRACTED' },
        { 'Flight Controls': 'CHECK' },
        { 'Pitch Trim': 'SET' },
        { 'Transponder': 'SET' }
      ]
    },
    {
      title: 'Engine Start',
      items: [
        { 'Engine Mode': 'NORM' },
        { 'Engine 2 Master': 'ON' },
        { 'Engine 2 N2': 'MONITOR (Wait for rotation)' },
        { 'Engine 2 N1': 'MONITOR (Stabilize)' },
        { 'Engine 1 Master': 'ON' },
        { 'Engine 1 N2': 'MONITOR (Wait for rotation)' },
        { 'Engine 1 N1': 'MONITOR (Stabilize)' },
        { 'APU Bleed': 'OFF' },
        { 'APU Master': 'OFF' }
      ]
    },
    {
      title: 'After Start',
      items: [
        { 'Anti-Ice': 'AS REQUIRED' },
        { 'Radar': 'ON' },
        { 'Predictive Windshear': 'AUTO' },
        { 'Transponder': 'TA/RA' },
        { 'ATC': 'SET' }
      ]
    },
    {
      title: 'Before Taxi',
      items: [
        { 'Flight Instruments': 'CHECK' },
        { 'Briefing': 'COMPLETE' },
        { 'Flaps': 'SET for Takeoff' },
        { 'Flight Controls': 'CHECK' },
        { 'Rudder Trim': 'ZERO' },
        { 'Nose Light': 'TAXI' },
        { 'RWY Turn Off Lights': 'ON' }
      ]
    },
    {
      title: 'Before Takeoff',
      items: [
        { 'Cabin Crew': 'ADVISED' },
        { 'Takeoff Config': 'TEST (T.O. CONFIG button)' },
        { 'Flight Controls': 'CHECK' },
        { 'Flaps': 'CONFIRM T.O. Setting' },
        { 'Autobrake': 'MAX' },
        { 'Transponder': 'TA/RA' },
        { 'Strobe Lights': 'ON' },
        { 'Landing Lights': 'ON' }
      ]
    },
    {
      title: 'Takeoff',
      items: [
        { 'Thrust Levers': 'FLX or TOGA' },
        { 'Thrust': 'CHECK (N1 at target)' },
        { '100 kts': 'CALL' },
        { 'V1': 'CALL' },
        { 'VR': 'ROTATE (10-15° pitch)' },
        { 'Positive Climb': 'GEAR UP' },
        { 'V2': 'MAINTAIN until acceleration' },
        { 'Autopilot': 'ENGAGE (above 100 ft)' }
      ]
    },
    {
      title: 'Climb',
      items: [
        { 'Landing Gear': 'UP & OFF' },
        { 'Flaps': 'RETRACT on schedule' },
        { 'Packs': 'AS REQUIRED' },
        { 'Anti-Ice': 'AS REQUIRED' },
        { 'Altimeters': 'SET (18,000 ft)' },
        { 'Landing Lights': 'OFF (above 10,000 ft)' }
      ]
    },
    {
      title: 'Cruise',
      items: [
        { 'Autopilot': 'MONITOR' },
        { 'Flight Management': 'MONITOR' },
        { 'Fuel': 'MONITOR' },
        { 'Weather': 'MONITOR' },
        { 'Pressurization': 'CHECK' }
      ]
    },
    {
      title: 'Descent',
      items: [
        { 'ATIS': 'OBTAIN' },
        { 'Altimeters': 'SET' },
        { 'Approach Briefing': 'COMPLETE' },
        { 'Landing Data': 'CONFIRM in MCDU' },
        { 'Seat Belts': 'ON' },
        { 'Cabin Crew': 'ADVISED' }
      ]
    },
    {
      title: 'Approach',
      items: [
        { 'Altimeters': 'SET & CROSS-CHECK' },
        { 'Minimums': 'SET' },
        { 'Landing Lights': 'ON (below 10,000 ft)' },
        { 'Anti-Ice': 'AS REQUIRED' },
        { 'Autobrake': 'SET (LOW or MED)' },
        { 'Flaps 1': 'SELECT (below 230 kts)' },
        { 'Gear Down': 'BELOW VLE' },
        { 'Flaps 2': 'SELECT (below 200 kts)' },
        { 'Flaps 3': 'SELECT (below 185 kts)' },
        { 'Flaps Full': 'SELECT (below 177 kts)' }
      ]
    },
    {
      title: 'Landing',
      items: [
        { 'Autopilot': 'DISCONNECT (below 160 ft)' },
        { 'Autothrust': 'DISCONNECT at 30 ft' },
        { 'Flare': 'BEGIN at 30 ft' },
        { 'Thrust Levers': 'RETARD at 20 ft' },
        { 'Touchdown': 'MAIN WHEELS FIRST' },
        { 'Spoilers': 'CHECK DEPLOYED' },
        { 'Reverse Thrust': 'APPLY' },
        { 'Brakes': 'AS REQUIRED' }
      ]
    },
    {
      title: 'After Landing',
      items: [
        { 'Reverse Thrust': 'IDLE (below 70 kts)' },
        { 'Flaps': 'RETRACT' },
        { 'Spoilers': 'DISARM' },
        { 'Radar': 'OFF' },
        { 'Predictive Windshear': 'OFF' },
        { 'Nose Light': 'TAXI' },
        { 'Strobe Lights': 'OFF' },
        { 'Transponder': 'TA ONLY' }
      ]
    },
    {
      title: 'Parking',
      items: [
        { 'Parking Brake': 'SET' },
        { 'Engine Mode': 'NORM' },
        { 'Fuel Pumps': 'OFF' },
        { 'Seat Belts': 'OFF' },
        { 'Beacon': 'OFF' }
      ]
    },
    {
      title: 'Shutdown',
      items: [
        { 'APU': 'START (if needed)' },
        { 'Engine 1 Master': 'OFF' },
        { 'Engine 2 Master': 'OFF' },
        { 'Seat Belts': 'OFF' },
        { 'Emergency Lights': 'OFF' },
        { 'ADIRS': 'OFF' },
        { 'External Lights': 'OFF' },
        { 'APU Bleed': 'OFF' },
        { 'APU Master': 'OFF' },
        { 'Battery 1 & 2': 'OFF' }
      ]
    }
  ]
}

