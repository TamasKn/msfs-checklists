import { AircraftName } from '@/data/aircrafts/aircraft-names'

export const CJ4Checklist = {
  name: AircraftName.CitationCJ4,
  checklist: [
    {
      title: 'Cockpit Preparation',
      items: [
        { 'Parking Brake': 'SET' },
        { 'Landing Gear': 'DOWN' },
        { 'Throttle': 'IDLE' },
        { 'Ground Spoilers': 'RETRACTED' },
        { 'Battery Switch': 'ON' },
        { 'Emergency Lights Switch': 'ARMED' },
        { 'Stby Flight Display Switch': 'ON' },
        { 'Avionics Switch': 'DISPATCH' },
        { 'Cabin Lights': 'AS REQ' },
        { 'Fuel, Pax & Cargo': 'LOAD' },
        { 'Ground Power Unit': 'ON (if avail)', 'info': 'IDX/NEXT/SETTINGS' },
        {
          '--- IF GPU UNAVAILABLE': '',
          'info': 'One engine is enough for Power'
        },
        { 'START CLEARANCE': 'OBTAINED' },
        { 'R Engine Starter': 'ON' },
        { 'R Engine RUN/STOP': 'RUN' }
      ]
    },
    {
      title: 'FMS Setup',
      items: [
        { 'ATC CLEARANCE': 'AS REQ' },
        { 'INIT': 'SET POS TO GNSS', 'info': 'IDX/POS ' },
        { '--- FPLN (1/2)': '' },
        { 'ORIGIN': 'SET' },
        { 'DEST': 'SET' },
        { 'ALTN': 'SET' },
        { '--- PERF -> PERF INIT': '' },
        { 'Cruise ALT': 'SET' },
        { 'ZFW': 'SET' },
        { '--- DEP ARR': '' },
        { 'SID & RWY': 'SELECT & EXEC' },
        {
          'LEGS': 'ENTER WAYPOINTS & EXEC',
          'info': 'Fetch from EFB / SimBrief'
        },
        { '--- PERF -> TAKEOFF': '' },
        { 'WIND / OAT /QNH': 'SET' },
        { 'RWY COND': 'SELECT' },
        { '--- PERF -> TAKEOFF -> NEXT': '' },
        { 'ANTI-ICE & FLAPS': 'SELECT' },
        { 'TOW / GWT / MTOW': 'CHECK' },
        { 'V1, VR, V2 and VT': 'CHECK & SEND' },
        { 'Transponder': 'ON & SET' }
      ]
    },
    {
      title: 'Engine Start',
      items: [
        { 'Lights (Beacon, NAV, LOGO)': 'ON' },
        { 'EICAS': 'CHECK' },
        { 'Throttles': 'IDLE' },
        { 'R Engine Starter': 'ON' },
        { 'R Engine RUN/STOP': 'RUN' },
        { 'EICAS': 'CHECK' },
        { 'L Engine Starter': 'ON' },
        { 'L Engine RUN/STOP': 'RUN' },
        { 'EICAS': 'CHECK' },
        { 'Ground Power Unit': 'OFF' },
        { 'Electrical System': 'CHECK' }
      ]
    },
    {
      title: 'Before Taxi',
      items: [
        { 'Avionics Switch': 'ON' },
        { 'Navigation': 'SET -> NAV/HDG' },
        { 'Flaps': 'T/O (1)' },
        { 'BARO': 'SET' },
        { 'Altitude': 'SET -> FLC' },
        { 'Speed': 'SET 240 IAS' },
        { 'Trims': 'SET FOR T/O' },
        { 'Pitot / Static Heat 1&2': 'ON' },
        { 'FRMT': 'AS REQ', 'info': 'Display Control Panel' },
        { 'TCAS': 'STBY', 'info': 'TUN -> TCAS MODE' },
        { 'CCS': 'NORM', 'info': 'Climate Control Selector' },
        { 'Flight Controls': 'CHECK' },
        { 'Ground Spoilers': 'CHECK' },
        { 'Belt & Safety Lights': 'ON' }
      ]
    },
    {
      title: 'Taxi',
      items: [
        { 'Taxi Lights': 'ON' },
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
        { 'Lights (Landing, Strobe)': 'ON' },
        { 'Trims': 'CHECK' },
        { 'Flaps': 'CHECK' },
        { 'Speed Brakes': '0%' },
        { 'TCAS': 'TA or RA' },
        { 'TFC': 'ON' },
        { 'TERR / WX': 'AS REQ' },
        { 'Anti-Ice': 'AS REQ' }
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
        { 'Flaps': 'RETRACT at V2+10' },
        { 'At 1000 ft AGL': 'SET THROTTLE TO CLB' }
      ]
    },
    {
      title: 'Climb',
      items: [
        { '--- At Transition Altitude': '' },
        { 'BARO': 'STD' },
        { '--- Below 10000ft / FL100': '' },
        { 'Max Speed': '250 KIAS' },
        { '--- Above 10000ft / FL100': '' },
        { 'Lights (Landing, Logo)': 'OFF' }
      ]
    },
    {
      title: 'Cruise',
      items: [
        { 'Belt & Safety Lights': 'AS REQ' },
        { 'Speed': 'MONITOR' },
        { 'Monitor Flight, ECAM & Weather': 'CHECK' },
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
      title: 'Descent (TOD)',
      items: [
        { 'Clearance': 'OBTAINED' },
        { 'Belt & Safety Lights': 'ON' },
        { 'Altitude': 'SET' },
        { '--- DEP ARR -> DEP / ARR IDX -> ARR': '' },
        { 'STAR & RWY': 'SET & EXEC' },
        { '--- PERF -> APPROACH': '' },
        { 'WIND / OAT / QNH': 'SET' },
        { 'RWY COND': 'SELECT' },
        { '--- PERF -> APPROACH -> NEXT': '' },
        { 'Anti-Ice': 'SELECT (IF REQ)' },
        { 'LW / GWT / MLW': 'CHECK & SEND' },
        { 'AP': 'AS REQ' },
        { 'Fuel Transfer Selector': 'OFF' },
        { '--- Below 10000ft/FL100': '' },
        { 'Landing Lights': 'ON' },
        { 'Logo Lights': 'ON' },
        { 'Max Speed': '250 KIAS' },
        { '--- At Transition Level': '' },
        { 'BARO': 'SET DESTINATION QNH' }
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
        { 'NAV Display': 'CONFIRM FMS/LOC' },
        { 'GLIDE': 'ARMED at FAF' },
        { 'Gear': 'DOWN by FAF' }
      ]
    },
    {
      title: 'Landing',
      items: [
        { 'Flaps': 'CHECK FULL' },
        {
          'Trim': 'SET for Landing',
          'info':
            'If AP armed let it settle the trim after flap (full) extension'
        },
        { 'WIND': 'CHECK' },
        { 'Speed': 'VREF' },
        { 'Landing Gear': 'CHECK 3 GREEN' },
        { '--- Before 800 AGL': '' },
        { 'YD/AP': 'DISCONNECT' },
        { 'Throttles': 'IDLE at 50 ft' },
        { 'Touchdown': 'RETARD at 10 ft' }
      ]
    },
    {
      title: 'Go Around',
      items: [
        { 'Throttle': 'TO' },
        { 'Flaps': 'SET 1' },
        { 'At Positive Climb': 'GEAR UP' },
        { 'At Vapp + 10': 'FLAPS UP' },
        { '--- AUTOPILOT (min. 300 AGL)': '' },
        { 'YD/AP': 'CONNECT' },
        { 'Flight Controls': 'VNAV, NAV, FLC' },
        { 'Speed': 'SET 200 KIAS' }
      ]
    },
    {
      title: 'After Landing',
      items: [
        { 'Flaps': 'RETRACT' },
        { 'Lights (Landing, Strobe)': 'OFF' },
        { 'Taxi Lights': 'ON' },
        { 'Pitot / Static Heat 1&2': 'OFF' },
        { 'Anti-Ice': 'AS REQ' },
        { 'TCAS': 'STBY' }
      ]
    },
    {
      title: 'Shutdown',
      items: [
        { 'Taxi Lights': 'OFF' },
        { 'Parking Brake': 'SET' },
        { 'Avionics Switch': 'OFF' },
        { 'Stby Flight Display Switch': 'OFF' },
        { 'CCS': 'OFF', 'info': 'Climate Control Selector' },
        { 'Throttles': 'IDLE' },
        { 'L&R Engine RUN / STOP': 'STOP' },
        { 'Lights (Emergency, Cabin, Belt & Safety, Exterior )': 'OFF' },
        { 'Battery': 'OFF' }
      ]
    }
  ]
}
