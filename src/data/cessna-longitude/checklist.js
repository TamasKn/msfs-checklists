import { AircraftName } from '@/data/aircrafts/aircraft-names'

export const cessnaLongitudeChecklist = {
  name: AircraftName.CessnaLongitude,
  checklist: [
    {
      title: 'Pre-Flight',
      items: [
        { 'Battery Master': 'ON' },
        { 'External Power': 'CONNECT (if needed)' },
        { 'Avionics Master': 'ON' },
        { 'Fuel Quantity': 'CHECK' },
        { 'IRS Alignment': 'CONFIRM' },
        { 'FMS Flight Plan': 'LOAD' },
        { 'NAV Radios': 'SET' },
        { 'Altimeter': 'SET (Baro)' },
        { 'Flaps': 'CHECK & SET for Takeoff' },
        { 'Flight Controls': 'FREE & CORRECT' }
      ]
    },
    {
      title: 'Engine Start',
      items: [
        { 'Beacon Light': 'ON' },
        { 'Parking Brake': 'SET' },
        { 'Fuel Pumps': 'AUTO' },
        { 'Throttles': 'IDLE' },
        { 'Engine Start Switch': 'ENG 1 (Monitor N2)' },
        { 'N2 Above 20%': 'Move ENG 1 to RUN' },
        { 'Repeat for ENG 2': '' },
        { 'Generators': 'ON' },
        { 'APU': 'OFF (if used)' }
      ]
    },
    {
      title: 'G5000 PERF',
      items: [
        { 'Weight and Fuel': 'TAKEOFF FOB sync' },
        { 'FLAP Speeds': 'CHECK' },
        { 'TO Data / Weather': 'SET WIND & TEMP, Use RAT' },
        { 'Takeoff Config': 'SET displayed Flap' },
        { 'Takeoff Data': 'ACCEPT Takeoff Speeds' },
        { 'Speed Bugs': 'ALL, IF NOT DISPLAYED' }
      ]
    },
    {
      title: 'G5000 INIT',
      items: [
        { 'Flight Initialization': 'All Checked' },
        { 'INIT': 'ACCEPT INITIALIZATION' }
      ]
    },
    {
      title: 'Before Taxi',
      items: [
        { 'Flight Plan': 'VERIFIED' },
        { 'Takeoff Trim': 'SET (~ +40%)' },
        { 'Flaps': 'SET for Takeoff' },
        { 'Altitude': 'SET -> FLC' },
        { 'Navigation': 'SET -> NAV/HDG' },
        { 'SPD KNOB': 'FMS' },
        { 'Rudder Trim': 'CENTER' },
        { 'Brakes': 'CHECK & SET & RETRACTED' },
        { 'Transponder': 'ON' },
        { 'Weather Radar': 'AS REQUIRED' },
        { 'Ice Protection': 'AS REQUIRED' },
        { 'Lights (Taxi, Rec, AC, WI, TF, PS/SB, EM)': 'ON' }
      ]
    },
    {
      title: 'Taxi',
      items: [
        { 'Parking Brake': 'RELEASE' },
        { 'Taxi Clearance': 'OBTAINED' },
        { 'Brakes & Steering': 'CHECK' },
        { 'Flight Controls': 'CHECK' }
      ]
    },
    {
      title: 'Before Takeoff',
      items: [
        { 'Runway Alignment': 'CONFIRM' },
        { 'Flaps': 'CHECK' },
        { 'Trim': 'CHECK' },
        { 'Heading Bug': 'SET' },
        { 'Speed Indicators': 'CHECK' },
        { 'LDG, Pulse Lights': 'ON' },
        { 'Taxi, WI Lights': 'OFF' }
      ]
    },
    {
      title: 'Takeoff',
      items: [
        { 'Throttles': 'TOGA' },
        { 'Positive Rate': 'GEAR UP' },
        { 'Climb Power': 'SET' },
        { 'AP & AT': 'ENGAGE, AS REQ' },
        { 'Flaps': 'RETRACT at Safe Speed' }
      ]
    },
    {
      title: 'Climb',
      items: [
        { 'Landing Lights': 'OFF' },
        { 'Autopilot': 'MONITOR' },
        { 'Cruise Altitude': 'SET' },
        { 'BARO (above 10,000 ft)': 'SET to STD' }
      ]
    },
    {
      title: 'Cruise',
      items: [
        { 'PS/SB Lights': 'OFF' },
        { 'Power Settings': 'CHECK' },
        { 'Fuel Balance': 'MONITOR' },
        { 'BARO': 'SET destination value' },
        { 'Navigation': 'SET MINIMUMS / LOC FREQ' },
        { 'Speed Constraints': 'IAF (~200 KTS) to FAF (~130 KTS)' },
        { 'Altitude': 'SET RWY + 1,000 ft -> VNAV' }
      ]
    },
    {
      title: 'G5000 PERF',
      items: [
        { 'Weight and Fuel': '' },
        { 'FLAP Speeds': 'CHECK' },
        { 'Speed Bugs': '' },
        { 'Landing Data': '' }
      ]
    },
    {
      title: 'Descent (TOD)',
      items: [
        { 'ATIS & Weather': 'CHECK' },
        { 'Landing PERF': 'SET' },
        { 'SPD KNOB': 'FMS' },
        { 'BARO (below 10,000 ft)': 'ARM destination value' },
        { 'Approach': 'APPR (GS) stdby' },
        { 'WI, PS/SB Lights': 'ON' }
      ]
    },
    {
      title: 'Approach (BOD)',
      items: [
        { 'CDI Source': 'FMS (RNAV) / LOC1 (ILS) / ??? (VOR)' },
        { 'Landing Lights': 'ON' },
        { 'Flaps': 'AS REQUIRED' },
        { 'Gear': 'DOWN at FAF' },
        { 'Speed': 'MANAGE' },
        { 'Approach': 'GS armed at FAF' }
      ]
    },
    {
      title: 'Landing',
      items: [
        { 'Flaps': 'FULL (IF REQ)' },
        { 'Speed': 'VREF (~120-130 KTS)' },
        { 'AP & AT': 'DISCONNECT before touchdown' },
        { 'Throttles': 'IDLE at 30-50 ft' },
        { 'Touchdown': 'MAIN GEARS FIRST' },
        { 'Braking': 'APPLY' },
        { 'Reverse Thrust': 'AS NEEDED' }
      ]
    },
    {
      title: 'After Landing',
      items: [
        { 'Speed Below 60 KTS': 'STOW REV THRUST' },
        { 'Flaps': 'RETRACT' },
        { 'Taxi Lights': 'ON' },
        { 'LDG, Rec, Pulse, PS/SB Lights': 'OFF' }
      ]
    },
    {
      title: 'Shutdown',
      items: [
        { 'Parking Brake': 'SET' },
        { 'Avionics Master': 'OFF' },
        { 'Fuel Pumps': 'OFF' },
        { 'Throttles': 'CUTOFF' },
        { 'Lights': 'OFF' },
        { 'Battery Master': 'OFF' }
      ]
    }
  ]
}
