import { AircraftName } from '@/data/aircrafts/aircraft-names'

export const TBM930Checklist = {
  name: AircraftName.TBM930,
  checklist: [
    {
      title: 'Cockpit Preparation',
      items: [
        { 'Parking Brake': 'ON' },
        { 'Doors': 'LOCKED' },
        { 'Passenger Oxygen Switch': 'STBY' },
        { 'Oxygen Master Switch': 'ON' },
        { 'Crew Oxygen Masks': 'TESTED' },
        { 'Ext. & Int. Lights': 'OFF' },
        { 'Crash Lever': 'DOWN' },
        { 'Starter': 'OFF' },
        { 'Ignition': 'AUTO' },
        { 'Aux BP': 'OFF' },
        { 'Fuel Sel': 'MAN' },
        { 'AP/Trims': 'OFF' },
        { 'A/C (Air Conditioning)': 'OFF' },
        { 'CB Lights': 'OFF' },
        { 'De-Ice Systems': 'ALL OFF' },
        { 'Inert Sep': 'OFF' },
        { 'Landing Gear Lever': 'DOWN' },
        { 'Dump': 'NORM/GUARDED' },
        { 'Bleed': 'OFF' },
        { 'Hot Air Flow': 'FLOOR' },
        { 'Man OVRD': 'OFF' },
        { 'Throttle': 'CUT OFF' },
        { 'Fuel Tank Selector': 'OPEN / L or R' },
        { 'Alt. Static Source': 'NORMAL (PUSHED)' },
        { 'Emergency RAM Air': 'CLOSED (PUSHED)' },
        { 'Ess. Bus Tie Switch': 'NORM/GUARDED' },
        { 'Circuit Breakers': 'ALL IN' },
        { 'Emergency Landing Gear Control': 'CHECK' }
      ]
    },
    {
      title: 'Before Engine Start',
      items: [
        { 'Crash Lever': 'UP' },
        { 'Source': 'BAT (or GPU)' },
        { 'Flight Plan': 'Verified' },
        { 'ATC Clearance': 'Copied / as required' },
        { 'Generator': 'MAIN' },
        { 'Fuel on board': 'CHECK' },
        { 'BAT Voltage': 'min. 24.5V' },
        { 'GPU Voltage': '~28V' },
        { 'Altimeter': 'SET' }
      ]
    },
    {
      title: 'Takeoff PERF (G5000)',
      items: [
        {
          'VNAV Profiles': 'SET / CHECK',
          'info': 'Flight plan - VNAV - Profile, Climb, Cruise, Descent'
        },
        { 'Weight and Fuel': 'TAKEOFF FOB sync' },
        { 'Takeoff Data|Weather': 'SET WIND & TEMP, Use RAT' },
        { 'Takeoff Config': 'SET recommended Flap' },
        { 'Takeoff Data': 'ACCEPT Takeoff Speeds' },
        { 'INIT': 'ALL CHECKED & ACCEPTED' },
        {
          'Altimeter Transition': 'SET to Regional',
          'info':
            'Check flight plan Charts Transition Altitude (TA). Change (Climb & Descent): Utilities/Setup/Avionics/Alerts'
        }
      ]
    },
    {
      title: 'Engine Start',
      items: [
        { 'START CLEARANCE': 'OBTAINED' },
        { 'Strobe Lights': 'ON' },
        { 'Ignition': 'AUTO' },
        { 'Aux BP': 'ON' },
        { 'CAS MSG "AUX BOOST PMP ON"': 'CHECK' },
        { 'Throttle': 'IDLE' },
        { 'Starter': 'ON (2" then OFF)' },
        {
          '@NG > 13% -> Throttle': 'LO-IDLE',
          'info':
            'Monitor: ITT (Max 870°(20s)/1000°(5s)), NG (30%(<30s)/50%(<1m)), OIL (Press/Temp)'
        },
        { '@NG > 52% (±2%) (1min MAX)': 'CAS « STARTER » should be OFF' }
      ]
    },
    {
      title: 'After Engine Start',
      items: [
        { 'Source (if GPU used)': 'BAT' },
        { 'GPU (if used)': 'DISCONNECT' },
        { 'CAS « GPU DOOR »': 'OFF' },
        { 'Throttle': 'LO-IDLE -> HIGH-IDLE' },
        { 'NG 70% (±2%)': 'CHECK' },
        { 'Oil Press. / Temp.': 'CHECK' },
        { 'Aux BP': 'AUTO' },
        { 'Fuel Sel': 'AUTO' },
        { 'AP/Trims': 'ON' },
        { 'Generator': 'MAIN' },
        { 'De-Ice': 'AS REQUIRED' },
        { 'A/C': 'AUTO' },
        { 'Temp / Hot Air Flow': 'AS REQUIRED' },
        { 'Bleed': 'AUTO (or MAX DIFF)' }
      ]
    },
    {
      title: 'Before Taxi',
      items: [
        { 'Flight Plan': 'DEPARTURE VERIFIED' },
        { 'Trims': 'SET for Takeoff' },
        { 'Flaps': 'SET for Takeoff' },
        { 'Altitude': 'SET -> FLC & VNAV' },
        { 'Navigation': 'SET -> NAV/HDG' },
        { 'Rudder & Aileron Trim': 'CENTER' },
        { 'Brakes': 'CHECK & SET & RETRACTED' },
        { 'Transponder': 'ON & SET' },
        { 'Weather Radar': 'AS REQUIRED' },
        { 'BARO': 'SET departure value', 'info': 'From ATIS, EFB or METAR' },
        { 'Inert Sep': 'ON' },
        { 'EIS (Engine Indication System)': 'CHECK' },
        { 'CAS': 'CHECK' },
        { 'Taxi Light': 'ON' },
        { 'Nav Lights': 'ON' }
      ]
    },
    {
      title: 'Taxi',
      items: [
        { 'Taxi Clearance': 'OBTAINED' },
        { 'Parking Brake': 'OFF' },
        { 'Brakes & Steering': 'CHECK' },
        { 'Flight Controls': 'CHECK' }
      ]
    },
    {
      title: 'Before Takeoff',
      items: [
        { 'Runway Clearance': 'OBTAIN' },
        { 'Landing Lights': 'ON' },
        { 'Strobes': 'ON' },
        { 'Pitot L/Pitot R & Stall HTR': 'ON' },
        { 'EIS & CAS': 'CHECK' }
      ]
    },
    {
      title: 'Takeoff',
      items: [
        { 'Departure Clearance': 'OBTAINED' },
        { 'Runway Alignment': 'CONFIRM' },
        { 'Heading Bug': 'SET' },
        { 'Throttle': '100% TRQ' },
        { 'Positive Rate': 'GEAR UP' },
        { 'AP & YD': 'ENGAGE, AS REQ' },
        { 'Inert Sep': 'AS REQUIRED' },
        { 'Flaps': 'RETRACT at Safe Speed' }
      ]
    },
    {
      title: 'Climb',
      items: [
        { 'Landing Lights': 'OFF after FL100' },
        { 'Climb Speed': '124 KIAS (Vy) - 170 KIAS' },
        { 'Autopilot': 'MONITOR' },
        { 'Cruise Altitude': 'SET' },
        { 'TRQ/ITT/NG': 'CHECK' },
        { 'BARO': 'SET to STD' }
      ]
    },
    {
      title: 'Cruise & Before Descent',
      items: [
        {
          'Flight Plan': 'APPROACH VERIFIED / SET',
          'info': 'Verify all Legs to Runway (incl.: RNAV Visual)'
        },
        { 'Navigation': 'SET MINIMUMS / LOC FREQ' },
        {
          'Altitude Constraints': 'FIX FAF to Signal altitude',
          'info':
            'You may set the Final Approach Fix to 20-50 ft below the recommended altitude, to make sure the Signal is captured, in case of inaccurate altimeter setting.'
        },
        { 'Altitude': 'SET RWY + 1,000 ft -> VNAV' },
        { 'BARO': 'SET destination value', 'info': 'From ATIS, EFB or METAR' },
        { 'De-Ice Systems': 'AS REQUIRED' },
        { 'Inert Sep': 'AS REQUIRED' }
      ]
    },
    {
      title: 'Descent',
      items: [
        { 'Clearance': 'OBTAINED' },
        { 'Landing Lights': 'ON (below FL100)' },
        { 'ATIS & Weather': 'CHECK' },
        { 'BARO': 'SET destination' }
      ]
    },
    {
      title: 'Approach & Landing',
      items: [
        { 'AP & YD': 'OFF' },
        { 'Inert Sep': 'ON' },
        { 'Flaps': 'FULL (AT MINIMUMS)' },
        {
          'Trim': 'SET for Landing',
          'info':
            'If AP armed let it settle the trim after flap (full) extension'
        },
        { 'WIND': 'CHECK' },
        { 'Speed': '~65-75 KIAS' },
        { 'Throttles': 'IDLE at 50 ft' },
        { 'Touchdown': 'RETARD at 10 ft' },
        { 'Reverse Thrust': 'If necessary until 40 KIAS' }
      ]
    },
    {
      title: 'After Landing',
      items: [
        { 'Flaps': 'RETRACT' },
        { 'Taxi & Parking Clearance': 'OBTAINED' },
        { 'Taxi Lights': 'ON' }
      ]
    },
    {
      title: 'Shutdown',
      items: [
        { 'Parking Brake': 'SET' },
        { 'Oxygen Master Switch': 'OFF' },
        { 'Fuel Sel': 'MAN' },
        { 'AP/Trims': 'OFF' },
        { 'A/C': 'OFF' },
        { 'Bleed': 'OFF' },
        { 'Throttle': 'IDLE for 2 MIN' },
        { 'Throttle': 'LO-IDLE for 15 SEC' },
        { 'Throttle': 'CUT OFF' },
        { 'Inert Sep': 'OFF' },
        { 'Aux BP': 'OFF' },
        { 'Generator': 'OFF' },
        { 'Source': 'OFF' },
        { 'Crash Lever': 'DOWN' },
        { 'Lights': 'OFF' }
      ]
    }
  ]
}
