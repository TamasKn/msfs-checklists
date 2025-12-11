/**
 * Procedure and common items for Checklists
 **/

const procedureTemplate = {
  checklist: [
    {
      title: 'MISC',
      items: [
        { 'Flight Plan': 'Imported & Sent' },
        { 'Timer': 'STARTED (if req)' }
      ]
    },
    {
      title: 'Cockpit Preparation',
      items: [{ 'VFR/IFR CLEARANCE': 'OBTAINED' }, { 'Lights': 'As Required' }]
    },
    {
      title: 'Takeoff PERF',
      items: [
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
        { 'Lights': 'ON' }
      ]
    },
    {
      title: 'Engine Start',
      items: [
        { 'R ENGINE': 'START' },
        { 'L ENGINE': 'START' },
        { 'EIS/CAS': 'CHECK' }
      ]
    },
    {
      title: 'Before Taxi',
      items: [
        { 'Flight Plan': 'DEPARTURE VERIFIED' },
        { 'Trim': 'SET for Takeoff (STAB green)' },
        { 'Altitude': 'SET -> FLC & VNAV' },
        { 'Navigation': 'SET -> NAV/HDG' },
        { 'Rudder & Aileron Trim': 'CENTER' },
        { 'Brakes': 'CHECK & SET & RETRACTED' },
        { 'Transponder': 'ON & SET' },
        {
          'Flight Controls': 'ALL OPERATIONAL',
          'info': ''
        },
        { 'Weather Radar': 'AS REQUIRED' },
        { 'Ice Protection': 'AS REQUIRED' },
        { 'BARO': 'SET departure value', 'info': 'From ATIS, EFB or METAR' },
        { 'Lights': 'ON' }
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
        { 'Engine instruments': 'Monitor' },
        {
          'BARO': 'Set to STD (if applicable)',
          'info': 'STD: 29.92 in / 1013 hPa'
        },
        {
          'TOD calculation': 'Obtained',
          'info':
            'Distance (NM): (Altitude to lose in ft / 1000) * 3, VS (fpm): 5 x Ground Speed (kts)'
        },
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
      title: 'Descent (TOD)',
      items: [
        { 'TOD': 'Start descent as calculated' },
        { 'Clearance': 'OBTAINED' },
        { 'Lights': 'ON' },
        { 'ATIS & Weather': 'CHECK' },
        { 'Power': 'Reduce for descent' },
        { 'Propeller': 'As required' },
        { 'Fuel': 'Balance and quantity checked' }
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
        { 'Touchdown': 'RETARD at 10 ft' }
      ]
    },
    {
      title: 'After Landing',
      items: [
        { 'Flaps': 'RETRACT' },
        { 'Taxi & Parking Clearance': 'OBTAINED' },
        { 'Taxi Lights': 'ON' },
        { 'Lights': 'OFF' }
      ]
    },
    {
      title: 'Shutdown',
      items: [
        { 'Throttles': 'IDLE' },
        { 'Parking Brake': 'SET' },
        { 'Engine Ice Protection': 'OFF' },
        { 'L & R Engine': 'STOP' },
        { 'Lights': 'OFF' }
      ]
    }
  ]
}
