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
        { 'LANDING GEAR Handle': 'DOWN' },
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
        { '--- External Power': 'Disconnected' },
        { '--- BATT Amps (both)': '0 or Charging' },
        { 'Exterior/Interior Lights': 'As Required' }
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
          'info': 'BARO transitions: Utilities/Setup/Avionics/Alerts'
        }
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
        { 'Landing Lights': 'ON' },
        { 'Taxi Lights': 'OFF' }
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
        {
          'Altitude Constraints': 'FIX FAF to Signal altitude',
          'info':
            'You may set the Final Approach Fix to 20-50 ft below the recommended altitude, to make sure the Signal is captured, in case of inaccurate altimeter setting.'
        },
        { 'Altitude': 'SET RWY + 1,000 ft -> VNAV' }
      ]
    },
    {
      title: 'Landing PERF (G5000)',
      items: [
        { 'Landing Data|Weather': 'SET WIND & TEMP, Use RAT' },
        { 'BARO': 'SET destination value', 'info': 'From ATIS, EFB or METAR' },
        { 'Landing Config': 'CHECK' },
        { 'Landing Data': 'ACCEPT Landing Speeds' },
        {
          'Speed Constraints': 'IAF (~150 KTS) to FAF (SET Vapp)',
          'info': 'Set approach speeds from Landing data to FAF'
        }
      ]
    },
    {
      title: 'Descent (TOD)',
      items: [
        { 'Clearance': 'OBTAINED' },
        { 'PS/SB Lights': 'ON' },
        { 'ATIS & Weather': 'CHECK' },
        { 'SPD KNOB': 'FMS' },
        { 'BARO': 'ARM destination' }
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
        { 'Approach': 'APPR (GS/GP) stdby at IAF' },
        { 'CDI Source': 'CONFIRM FMS/LOC' },
        { 'GLIDE': 'ARMED at FAF' },
        { 'Gear': 'DOWN by FAF' }
      ]
    },
    {
      title: 'Landing',
      items: [
        { 'Flaps': 'FULL (AT MINIMUMS)' },
        {
          'Trim': 'SET for Landing',
          'info':
            'If AP armed let it settle the trim after flap (full) extension'
        },
        { 'WIND': 'CHECK' },
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
        { 'APU MAIN': 'OFF' },
        { 'EM LTS, AC': 'OFF' },
        { 'R & L BATT': 'OFF' },
        { 'STBY PWR': 'OFF' }
      ]
    }
  ]
}
