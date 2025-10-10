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
        { 'Altimeter': 'SET (BARO)' },
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
        { 'Takeoff Data|Weather': 'SET WIND & TEMP, Use RAT' },
        { 'Takeoff Config': 'SET displayed Flap' },
        { 'Takeoff Data': 'ACCEPT Takeoff Speeds' },
        { 'Speed Bugs': 'ALL, IF NOT DISPLAYED' }
      ]
    },
    {
      title: 'G5000 INIT',
      items: [
        { 'Flight Initialization': 'All Checked' },
        { 'INIT': 'ACCEPTED' }
      ]
    },
    {
      title: 'Before Taxi',
      items: [
        { 'Flight Plan': 'VERIFIED' },
        { 'Trim': 'SET for Takeoff (~ +40%)' },
        { 'Flaps': 'SET for Takeoff' },
        { 'Altitude': 'SET -> FLC' },
        { 'Navigation': 'SET -> NAV/HDG' },
        { 'SPD KNOB': 'FMS' },
        { 'Rudder Trim': 'CENTER' },
        { 'Brakes': 'CHECK & SET & RETRACTED' },
        { 'Transponder': 'ON & SET' },
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
        { 'Runway Clearance': 'OBTAINED' },
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
        { 'Clearance': 'OBTAINED' },
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
        { 'BARO (see regional alt)': 'SET to STD' }
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
        { 'Speed Constraints': 'IAF (~200 KTS) to FAF (~140 KTS)' },
        { 'Altitude Constraints': 'FIX FAF to Signal altitude' },
        { 'Altitude': 'SET RWY + 1,000 ft -> VNAV' }
      ]
    },
    {
      title: 'G5000 PERF',
      items: [
        { 'Landing Data|Weather': 'SET WIND & TEMP, Use RAT' },
        { 'FLAP Speeds': 'CHECK' },
        { 'Landing Config': 'SET displayed Flap' },
        { 'Landing Data': 'ACCEPT Landing Speeds' }
      ]
    },
    {
      title: 'Descent (TOD)',
      items: [
        { 'Clearance': 'OBTAINED' },
        { 'ATIS & Weather': 'CHECK' },
        { 'Landing PERF': 'SET' },
        { 'SPD KNOB': 'FMS' },
        { 'BARO (see regional alt)': 'ARM destination value' },
        { 'Approach': 'APPR (GS) stdby' },
        { 'WI, PS/SB Lights': 'ON' }
      ]
    },
    {
      title: 'Approach (BOD)',
      items: [
        { 'Clearance': 'OBTAINED' },
        { 'Landing Lights': 'ON' },
        { 'Altitude': 'MONITOR' },
        { 'Flaps': 'AS REQUIRED' },
        { 'Speed': 'MANAGE' },
        { 'CDI Source': 'CONFIRM FMS/LOC' },
        { 'Approach': 'GS armed at BOD' },
        { 'Gear': 'DOWN at FAF' }
      ]
    },
    {
      title: 'Landing',
      items: [
        { 'Flaps': 'FULL (IF REQ)' },
        { 'Trim': 'SET for Landing' },
        { 'Speed': 'VREF' },
        { 'AP & AT': 'DISCONNECT' },
        { 'Throttles': 'IDLE at 50 ft' },
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
        { 'Taxi & Parking Clearance': 'OBTAINED' },
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
