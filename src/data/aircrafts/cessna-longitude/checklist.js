import { AircraftName } from '@/data/aircrafts/aircraft-names'

export const cessnaLongitudeChecklist = {
  name: AircraftName.CessnaLongitude,
  checklist: [
    {
      title: 'MISC',
      items: [{ 'Flight Plan': 'Imported & Sent' }, { 'Timer': 'STARTED' }]
    },
    {
      title: 'Cockpit Preparation',
      items: [
        { 'STBY PWR': 'TEST and Hold (Green light for min 10 sec)' },
        { 'STBY PWR': 'ON' },
        { 'EMER LTS': 'ARM' },
        { 'L BATT & R BATT': 'ON, Check Volts' },
        { 'EIS/CAS': 'CHECK' },
        { 'IFR CLEARANCE': 'OBTAINED' },
        { 'Power Source': 'As Desired (one of the following)' },
        { 'Option A: External Power': '' },
        { '--- EXT PWR (if AVAIL)': 'ON' },
        { '--- BATT Amps (both)': '0 or Charging' },
        { 'Option B: APU': '' },
        { '--- APU MAIN': 'START for 1 sec & ON' },
        {
          '--- APU ECS BLEED': 'NORM/OPEN',
          'info':
            'Aircraft Systems/Synoptics/AC Bleed: ECS BLEED has to be opened before Engines are started.'
        },
        { '--- APU GEN ON': 'CHECK' },
        { '--- BATT Amps (both)': '0 or Charging' },
        { 'Exterior/Interior Lights': 'As Required' }
      ]
    },
    {
      title: 'Takeoff PERF',
      items: [
        {
          'VNAV Profiles': 'SET / CHECK',
          'info': 'Flight plan - VNAV - Profile, Climb, Cruise, Descent'
        },
        {
          'Altimeter Transition': 'SET to Regional',
          'info':
            'Check flight plan Charts Transition Altitude (TA). Change (Climb & Descent): Utilities/Setup/Avionics/Alerts'
        },
        { 'Weight and Fuel': 'TAKEOFF FOB sync' },
        { 'Takeoff Data|Weather': 'SET WIND & TEMP, Use RAT' },
        { 'Takeoff Config': 'SET recommended Flap' },
        { 'Takeoff Data': 'ACCEPT Takeoff Speeds' },
        { 'INIT': 'ALL CHECKED & ACCEPTED' }
      ]
    },
    {
      title: 'Before Engine Start',
      items: [
        { 'START CLEARANCE': 'OBTAINED' },
        { 'Throttles': 'IDLE' },
        { 'PARKING BRAKE': 'SET' },
        { 'CABIN DOOR': 'CLOSED' },
        { 'EIS/CAS': 'Check' },
        { 'Anti-Collision Lights': 'ON' }
      ]
    },
    {
      title: 'Engine Start',
      items: [
        { 'R ENGINE RUN/STOP Button': 'RUN' },
        { 'R ENGINE STARTER Button': 'PUSH & HOLD until illuminated' },
        { 'Engine Instruments': 'Monitor (N1, ITT, N2, FUEL OIL)' },
        { 'START Pressure': 'Verify >= 32 PSI' },
        { 'L ENGINE': 'Repeat Steps 1 thru 3' },
        { 'EIS/CAS': 'CHECK' },
        { 'APU MAIN': 'OFF' },
        { 'EXT PWR (if AVAIL)': 'OFF' }
      ]
    },
    {
      title: 'Before Taxi',
      items: [
        { 'Flight Plan': 'DEPARTURE VERIFIED' },
        { 'Trim': 'SET for Takeoff (STAB green)' },
        { 'Altitude': 'SET -> FLC & VNAV' },
        { 'Navigation': 'SET -> NAV/HDG' },
        { 'SPD KNOB': 'FMS' },
        { 'Rudder & Aileron Trim': 'CENTER' },
        { 'Brakes': 'CHECK & SET & RETRACTED' },
        { 'Transponder': 'ON & SET' },
        {
          'Pre-Flight Synoptics': 'ALL CHECK',
          'info': 'Aircraft Systems/Synoptics/Preflight'
        },
        {
          'Flight Controls': 'ALL OPERATIONAL',
          'info': 'Aircraft Systems/Synoptics/Flight Controls'
        },
        { 'Weather Radar': 'AS REQUIRED' },
        { 'Ice Protection': 'AS REQUIRED' },
        { 'BARO': 'SET departure value', 'info': 'From ATIS, EFB or METAR' },
        { 'Lights (Taxi, TF, PS/SB)': 'ON' }
      ]
    },
    {
      title: 'Taxi',
      items: [
        { 'Taxi Clearance': 'OBTAINED' },
        { 'Parking Brake': 'RELEASE' },
        { 'Brakes & Steering': 'CHECK' }
      ]
    },
    {
      title: 'Before Takeoff',
      items: [
        { 'Runway Clearance': 'OBTAINED' },
        { 'Flaps': 'CHECK' },
        { 'Trim': 'CHECK' },
        { 'Speed Indicators': 'CHECK' },
        { 'Landing Lights': 'ON' },
        { 'Taxi Lights': 'OFF' }
      ]
    },
    {
      title: 'Takeoff',
      items: [
        { 'Departure Clearance': 'OBTAINED' },
        { 'Runway Alignment': 'CONFIRM' },
        { 'Heading Bug': 'SET' },
        { 'Throttles': 'TOGA' },
        { 'Positive Rate': 'GEAR UP' },
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
        {
          'Flight Plan': 'APPROACH VERIFIED / SET',
          'info': 'Verify all Legs to Runway (incl.: RNAV Visual)'
        },
        { 'Navigation': 'SET MINIMUMS / LOC FREQ' },
        { 'Altitude': 'SET RWY + 1,000 ft (VPATH stby)' },
        {
          'Altitude Constraints': 'FIX FAF to Signal altitude',
          'info':
            'You may set the Final Approach Fix to 20-50 ft below the recommended altitude, to make sure the Signal is captured, in case of inaccurate altimeter setting.'
        }
      ]
    },
    {
      title: 'Landing PERF',
      items: [
        { 'Landing Data|Weather': 'SET WIND & TEMP, Use RAT' },
        { 'BARO': 'SET destination value', 'info': 'From ATIS, EFB or METAR' },
        { 'Landing Config': 'CHECK' },
        { 'Landing Data': 'ACCEPT Landing Speeds' },
        {
          'Speed Constraints': 'IAF (~170 KTS) to FAF (SET Vapp)',
          'info': 'Set approach speeds from Landing data to FAF'
        }
      ]
    },
    {
      title: 'Descent',
      items: [
        { 'Clearance': 'OBTAINED' },
        { 'PS/SB Lights': 'ON' },
        { 'ATIS & Weather': 'CHECK' },
        { 'SPD KNOB': 'FMS' }
      ]
    },
    {
      title: 'Approach',
      items: [
        { 'Clearance': 'OBTAINED' },
        { 'BARO': 'ARM destination' },
        { 'Landing Lights': 'ON' },
        { 'Altitude': 'MONITOR' },
        { 'Flaps': 'AS REQUIRED' },
        { 'Speed': 'MANAGE/MONITOR' },
        { 'Approach': 'APPR (GS/GP) stby at IAF' },
        { 'CDI Source': 'CONFIRM FMS/LOC' },
        { 'Gear': 'DOWN by FAF' },
        { 'GLIDE': 'ARMED at FAF' },
        { 'Flaps': 'FULL (AT MINIMUMS)' },
        {
          'Trim': 'SET for Landing',
          'info':
            'If AP armed let it settle the trim after flap (full) extension'
        }
      ]
    },
    {
      title: 'Landing',
      items: [
        { 'WIND': 'CHECK' },
        { 'Speed': 'VREF' },
        { 'AP & AT': 'DISCONNECT' },
        { 'Throttles': 'IDLE at 50 ft' },
        { 'Touchdown': 'RETARD at 10 ft' },
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
        { 'LDG, TF, PS/SB Lights': 'OFF' }
      ]
    },
    {
      title: 'Shutdown',
      items: [
        { 'Throttles': 'IDLE' },
        { 'Parking Brake': 'SET' },
        { 'Engine Ice Protection': 'OFF' },
        { 'L & R Engine': 'STOP' },
        { 'Anti-Collision Lights': 'OFF' },
        { 'R & L BATT': 'OFF' },
        { 'STBY PWR': 'OFF' },
        { 'EMER LTS': 'OFF' }
      ]
    }
  ]
}
