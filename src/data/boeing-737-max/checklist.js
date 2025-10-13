import { AircraftName } from '@/data/aircrafts/aircraft-names'

export const boeing737MaxChecklist = {
  name: AircraftName.Boeing737Max,
  checklist: [
    {
      title: 'Pre-Flight',
      items: [
        { 'Battery Switch': 'ON' },
        { 'Standby Power': 'AUTO' },
        { 'IRS': 'NAV (both)' },
        { 'External Power': 'ON (if available)' },
        { 'APU': 'START' },
        { 'Hydraulic Pumps': 'ON' },
        { 'Flight Plan': 'LOAD in FMC' },
        { 'Fuel': 'CHECK QUANTITY' },
        { 'Oxygen': 'CHECK' }
      ]
    },
    {
      title: 'Before Start',
      items: [
        { 'Parking Brake': 'SET' },
        { 'Flight Deck Door': 'CLOSED & LOCKED' },
        { 'Passenger Signs': 'ON' },
        { 'Windows': 'CLOSED' },
        { 'MCP': 'SET V2, HDG, ALT' },
        { 'Takeoff Speeds': 'SET & CROSS-CHECK' },
        { 'CDU Preflight': 'COMPLETE' },
        { 'Trim': 'SET for Takeoff' }
      ]
    },
    {
      title: 'Engine Start',
      items: [
        { 'Anti-Collision Light': 'ON' },
        { 'Engine Start Switches': 'GRD' },
        { 'Engine Start Lever 2': 'IDLE (N2 rotation)' },
        { 'Engine 2 Start': 'MONITOR N1 & N2' },
        { 'Engine Start Lever 1': 'IDLE (N2 rotation)' },
        { 'Engine 1 Start': 'MONITOR N1 & N2' },
        { 'Engine Start Switches': 'AUTO' },
        { 'APU': 'OFF (when engines stable)' }
      ]
    },
    {
      title: 'After Start',
      items: [
        { 'Anti-Ice': 'AS REQUIRED' },
        { 'Probe Heat': 'ON' },
        { 'Hydraulic Pumps': 'ON' },
        { 'Recall': 'CHECK' },
        { 'Autobrake': 'RTO' },
        { 'Transponder': 'TA/RA' }
      ]
    },
    {
      title: 'Before Taxi',
      items: [
        { 'Generators': 'ON' },
        { 'Probe Heat': 'ON' },
        { 'Anti-Ice': 'AS REQUIRED' },
        { 'Isolation Valve': 'AUTO' },
        { 'Engine Start Switches': 'CONT' },
        { 'Recall': 'CHECK' },
        { 'Flaps': 'SET for Takeoff' },
        { 'Flight Controls': 'CHECK' },
        { 'Ground Equipment': 'CLEAR' }
      ]
    },
    {
      title: 'Before Takeoff',
      items: [
        { 'Cabin': 'SECURE' },
        { 'Flight Controls': 'CHECK' },
        { 'Flaps': 'CONFIRM T.O. Setting' },
        { 'Stabilizer Trim': 'CHECK GREEN BAND' },
        { 'Takeoff Briefing': 'COMPLETE' },
        { 'Transponder': 'TA/RA' },
        { 'Strobe Lights': 'ON' },
        { 'Landing Lights': 'ON' },
        { 'Recall': 'CHECK' }
      ]
    },
    {
      title: 'Takeoff',
      items: [
        { 'Thrust Levers': 'ADVANCE to 40% N1' },
        { 'Thrust Levers': 'ADVANCE to T.O. thrust' },
        { 'Engine Instruments': 'CHECK' },
        { '80 kts': 'CALL' },
        { 'V1': 'CALL' },
        { 'VR': 'ROTATE (15° pitch)' },
        { 'Positive Rate': 'GEAR UP' },
        { 'V2': 'MAINTAIN until acceleration' },
        { 'LNAV/VNAV': 'ENGAGE (above 400 ft)' }
      ]
    },
    {
      title: 'Climb',
      items: [
        { 'Landing Gear': 'UP & OFF' },
        { 'Flaps': 'UP on schedule' },
        { 'Altimeters': 'SET (18,000 ft)' },
        { 'Landing Lights': 'OFF (above 10,000 ft)' },
        { 'Packs': 'AUTO' },
        { 'Anti-Ice': 'AS REQUIRED' }
      ]
    },
    {
      title: 'Cruise',
      items: [
        { 'Autopilot': 'MONITOR' },
        { 'FMC Progress': 'MONITOR' },
        { 'Fuel': 'MONITOR' },
        { 'Pressurization': 'CHECK' },
        { 'Weather Radar': 'MONITOR' }
      ]
    },
    {
      title: 'Descent',
      items: [
        { 'ATIS': 'OBTAIN' },
        { 'Altimeters': 'SET' },
        { 'Approach Briefing': 'COMPLETE' },
        { 'Landing Data': 'CONFIRM' },
        { 'Passenger Signs': 'ON' },
        { 'Recall': 'CHECK' }
      ]
    },
    {
      title: 'Approach',
      items: [
        { 'Altimeters': 'SET & CROSS-CHECK' },
        { 'Minimums': 'SET' },
        { 'Landing Lights': 'ON (below 10,000 ft)' },
        { 'Anti-Ice': 'AS REQUIRED' },
        { 'Autobrake': 'SET (2 or 3)' },
        { 'Speedbrake': 'ARMED' },
        { 'Flaps 1': 'SELECT (below 250 kts)' },
        { 'Flaps 5': 'SELECT (below 250 kts)' },
        { 'Gear Down': 'BELOW 270 kts' },
        { 'Flaps 15': 'SELECT (below 200 kts)' },
        { 'Flaps 30': 'SELECT (below 190 kts)' }
      ]
    },
    {
      title: 'Landing',
      items: [
        { 'Autopilot': 'DISCONNECT (at minimums)' },
        { 'Autothrottle': 'DISCONNECT at 50 ft' },
        { 'Flare': 'BEGIN at 30 ft' },
        { 'Thrust Levers': 'RETARD at 20 ft' },
        { 'Touchdown': 'MAIN WHEELS FIRST' },
        { 'Speedbrake': 'CHECK DEPLOYED' },
        { 'Reverse Thrust': 'APPLY' },
        { 'Brakes': 'AS REQUIRED' }
      ]
    },
    {
      title: 'After Landing',
      items: [
        { 'Reverse Thrust': 'STOW (below 60 kts)' },
        { 'Speedbrake': 'DOWN' },
        { 'Flaps': 'UP' },
        { 'Autobrake': 'OFF' },
        { 'Transponder': 'TA ONLY' },
        { 'Strobe Lights': 'OFF' },
        { 'Landing Lights': 'OFF' },
        { 'Probe Heat': 'OFF' }
      ]
    },
    {
      title: 'Parking',
      items: [
        { 'Parking Brake': 'SET' },
        { 'Engine Start Switches': 'OFF' },
        { 'Passenger Signs': 'OFF' },
        { 'Anti-Collision Light': 'OFF' }
      ]
    },
    {
      title: 'Shutdown',
      items: [
        { 'APU': 'START (if needed)' },
        { 'Fuel Control Switches': 'CUTOFF' },
        { 'Passenger Signs': 'OFF' },
        { 'Probe Heat': 'OFF' },
        { 'Hydraulic Pumps': 'OFF' },
        { 'APU Bleed': 'OFF' },
        { 'APU': 'OFF' },
        { 'IRS': 'OFF' },
        { 'Emergency Lights': 'OFF' },
        { 'Battery Switch': 'OFF' }
      ]
    }
  ]
}
