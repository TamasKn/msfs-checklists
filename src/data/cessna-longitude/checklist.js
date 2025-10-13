import { AircraftName } from '@/data/aircrafts/aircraft-names'

export const cessnaLongitudeChecklist = {
  name: AircraftName.CessnaLongitude,
  checklist: [
    {
      title: 'MISC',
      items: [{ 'Flight Plan': 'Imported & Sent' }, { 'Timer': 'STARTED' }]
    },
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
        { 'Repeat for ENG 2': 'CHECK' },
        { 'Generators': 'ON' },
        { 'APU': 'OFF (if used)' }
      ]
    },
    {
      title: 'Takeoff PERF (G5000)',
      items: [
        { 'Weight and Fuel': 'TAKEOFF FOB sync' },
        { 'FLAP Speeds': 'CHECK' },
        { 'Takeoff Data|Weather': 'SET WIND & TEMP, Use RAT' },
        { 'Takeoff Config': 'SET displayed Flap' },
        { 'Takeoff Data': 'ACCEPT Takeoff Speeds' },
        { 'INIT': 'ALL CHECKED & ACCEPTED' },
        {
          'Altimeter Transition': 'SET to Regional',
          'info': 'BARO transitions: Utilities/Setup/Avionics/Alerts'
        }
      ]
    },
    {
      title: 'Before Taxi',
      items: [
        { 'Flight Plan': 'DEPARTURE VERIFIED' },
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
        { 'EMERGENCY Light': 'ARMED' },
        { 'Lights (Taxi, Rec, AC, TF, PS/SB)': 'ON' }
      ]
    },
    {
      title: 'Taxi',
      items: [
        { 'Taxi Clearance': 'OBTAINED' },
        { 'Parking Brake': 'RELEASE' },
        { 'Brakes & Steering': 'CHECK' },
        { 'Flight Controls': 'CHECK' }
      ]
    },
    {
      title: 'Before Takeoff (Hold Short)',
      items: [
        { 'Runway Clearance': 'OBTAINED' },
        { 'Flaps': 'CHECK' },
        { 'Trim': 'CHECK' },
        { 'Speed Indicators': 'CHECK' },
        { 'LDG, Pulse Lights': 'ON' },
        { 'Taxi, WI Lights': 'OFF' }
      ]
    },
    {
      title: 'Takeoff (Runway)',
      items: [
        { 'Departure Clearance': 'OBTAINED' },
        { 'Runway Alignment': 'CONFIRM' },
        { 'Heading Bug': 'SET' },
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
        { 'BARO': 'SET to STD' }
      ]
    },
    {
      title: 'Cruise',
      items: [
        { 'PS/SB Lights': 'OFF' },
        { 'Power Settings': 'CHECK' },
        { 'Fuel Balance': 'MONITOR' },
        { 'BARO': 'SET destination value' },
        {
          'Flight Plan': 'APPROACH VERIFIED / SET',
          'info': 'Verify all Legs to Runway (incl.: RNAV Visual)'
        },
        { 'Navigation': 'SET MINIMUMS / LOC FREQ' },
        { 'Speed Constraints': 'IAF (~200 KTS) to FAF (~140 KTS)' },
        { 'Altitude Constraints': 'FIX FAF to Signal altitude' },
        { 'Altitude': 'SET RWY + 1,000 ft -> VNAV' }
      ]
    },
    {
      title: 'Landing PERF (G5000)',
      items: [
        { 'Landing Data|Weather': 'SET WIND & TEMP, Use RAT' },
        { 'Landing Config': 'CHECK' },
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
        { 'BARO': 'SET destination' },
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
        { 'Approach': 'APPR (GP) stdby at IAF' },
        { 'CDI Source': 'CONFIRM FMS/LOC' },
        { 'GLIDEPATH': 'ARMED at FAF' },
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
        { 'Touchdown': 'RETARD at 10 ft' },
        { 'Reverse Thrust': 'AS NEEDED' },
        { 'Braking': 'APPLY' }
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
