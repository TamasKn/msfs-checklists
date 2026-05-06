import { AircraftName } from '@/data/aircrafts/aircraft-names'

export const airbusA350Checklist = {
  name: AircraftName.AirbusA350,
  checklist: [
    {
      title: 'MISC',
      items: [
        { 'Flight Plan': 'Imported' },
        { 'Departure, Arrival, Approach': 'SET' }
      ]
    },
    {
      title: 'Cockpit Preparation',
      items: [
        { '--- ELEC': '' },
        { 'BAT 1, BAT EMER 1': 'ON' },
        { 'BAT EMER 2, BAT 2': 'ON' },
        { 'EXT 2': 'ON' },
        { 'EXT 1': 'ON' },
        { 'ADIRS NAV L, R, MID': 'NAV' },
        { 'NAV Lights': '2' },
        { 'EMER EXIT LTS': 'ARM' },
        { 'ECAM Status': 'CHECK' },
        { 'IFR CLEARANCE': 'OBTAINED' },
        { 'OXYGEN Crew Supply': 'ON' },
        { 'EVAC CAPT & PURS': 'ON' },
        { '--- FUEL': '' },
        { 'L TK Main, STBY': 'ON' },
        { 'R TK Main, STBY': 'ON' },
        { 'L CTR TK': 'ON' },
        { 'R CTR TK': 'ON' },
        { 'Smoking & Phones Lights': 'AUTO' },
        { 'Exterior/Interior Lights': 'AS REQ' }
      ]
    },
    {
      title: 'Takeoff PERF',
      items: [
        { '--- EFB': '' },
        { 'FLT OPS STS': 'SET FLIGHT DETAILS' },
        { 'LOADSHEET': 'SET ZFW & FUEL LOAD, REFUEL' },
        { '--- FMS': '' },
        {
          'ACTIVE/INIT': 'REQUEST OR SET F-PLN',
          'info': 'ACTIVE/INIT - CPNY F-PLN - Request from Simbrief and Insert'
        },
        { '--- FMS (ACTIVE/F-PLN)': '' },
        { 'DEPARTURE': 'RWY, VIA, STAR INSERTED' },
        { 'DESTINATION': 'RWY, APPR, VIA, STAR INSERTED' },
        {
          'CONTINUITY': 'CONFIRMED',
          'info':
            'If F-PLN shows incorrect fuel consumption (EFOB), remove Departure SID'
        },
        { 'ACTIVE/FUEL&LOAD': 'SET FUEL & PAX' },
        { 'T.O Perf (EFB)': 'SYNC SIMBRIEF, FMS, CONDITIONS' },
        { 'T.O Speeds': 'COMPUTE & SEND TO FMS' },
        { '--- FMS (ACTIVE/PERF/T.O)': '' },
        { 'Takeoff Speeds': 'INSERTED' },
        {
          'Altimeter Transition': 'SET to Regional',
          'info':
            'Check flight plan Charts Transition Altitude (TA). Change (T.O & APPR): FMS/ACTIVE/PERF - TRANS'
        },
        { 'FLAPS': 'SET RECOMMENDED' },
        { 'ICE Protection': 'AS REQ' },
        { '--- FMS (SURV/CONTROLS)': '' },
        { 'WXR': 'AUTO' },
        { 'TAWS': 'ON' },
        { 'XPDR': 'SQWK SET, AUTO ON' },
        { 'TCAS': 'TA/RA & ADS-B ON' },
        { 'POSITION/MONITOR': 'SET DISTANCE TO DEST' },
        { 'POSITION/TIME': 'SET UTC DIFF TO DEST' }
      ]
    },
    {
      title: 'Before Engine Start',
      items: [
        { 'START CLEARANCE': 'OBTAINED' },
        { 'Throttles': 'IDLE' },
        { 'Parking Brake': 'SET' },
        { 'CABIN DOORS': 'CLOSED & ARMED' },
        { 'ECAM Status': 'CHECK' },
        { '--- APU': '' },
        { 'MASTER SW': 'ON' },
        { 'START': 'ON (Wait for AVAIL)' },
        { 'APU STARTING': 'MONITOR', 'info': 'PEDESTAL/ECAM/APU' },
        { 'APU BLEED': 'ON' },
        { '--- ELEC': '' },
        { 'EXT 1': 'OFF' },
        { 'EXT 2': 'OFF' },
        { 'Lights (SB, Beacon)': 'ON' }
      ]
    },
    {
      title: 'Engine Start',
      items: [
        { 'ENG Start Selector': 'IGN START' },
        { 'ENG 2': 'START' },
        { 'ECAM Status': 'CHECK' },
        { 'Engine Instruments': 'MONITOR, AVAIL' },
        { 'ENG 1': 'START' },
        { 'ECAM Status': 'CHECK' },
        { 'Engine Instruments': 'MONITOR, AVAIL' },
        { 'ENG Start Selector': 'NORM' },
        { 'APU BLEED': 'OFF' },
        { 'APU Master SW': 'OFF' }
      ]
    },
    {
      title: 'Before Taxi',
      items: [
        { 'Flight Plan': 'DEPARTURE VERIFIED' },
        { 'Altitude': 'SET' },
        { 'FD': 'ON' },
        { 'EFIS': 'WX/TERR AS REQ', 'info': 'PF: WX/TRAF, PM: TERR/TRAF' },
        {
          'BARO': 'SET departure value',
          'info': 'From ATIS, ATC or EFB'
        },
        { 'Auto Brk': 'ON' },
        {
          'RADIO': 'VHF1 MASTER ON',
          'info': 'Activate VHF1 on Pedestal (Both) and adjust volume knob'
        },
        { 'GND Spoilers': 'ARM', 'info': 'Pull upward the GND SPLRS stick' },
        { 'Rudder Trim': 'CHECK' },
        { 'Pitch Trim': 'CHECK', 'info': 'Automatically set' },
        { 'Transponder': 'ON & SET' },
        {
          'T.O Config': 'TEST & VERIFY NORMAL',
          'info': 'ACTIVE/PERF/T.O & Hold ECAM T.O CONFIG button'
        },
        { 'T.O RWY': 'CONFIRMED' },
        {
          'Flight Controls': 'ALL OPERATIONAL',
          'info': 'ECAM/F-CTL'
        },
        { 'CHOCKS & GPU': 'DISCONNECTED' },
        { 'Taxi Light': 'ON' }
      ]
    },
    {
      title: 'Taxi',
      items: [
        { 'Taxi Clearance': 'OBTAINED' },
        { 'Parking Brake': 'RELEASE' },
        {
          'Brakes & Steering': 'CHECK',
          'info': 'If steering does not work, switch to SLEW mode ON and OFF'
        }
      ]
    },
    {
      title: 'Before Takeoff',
      items: [
        { 'Runway Clearance': 'OBTAINED' },
        { 'Flaps': 'CHECK' },
        { 'Trim': 'CHECK' },
        { 'Speed Indicators': 'CHECK' },
        { 'Taxi Light': 'OFF' },
        { 'LDG, Nose T.O, Strobe Lights': 'ON' }
      ]
    },
    {
      title: 'Takeoff',
      items: [
        { 'Departure Clearance': 'OBTAINED' },
        { 'Runway Alignment': 'CONFIRM' },
        { 'Heading Bug': 'SET' },
        { 'Throttles': 'FLEX/TOGA' },
        { 'Positive Rate': 'GEAR UP' },
        { 'AP': 'ENGAGE, AS REQ' }
      ]
    },
    {
      title: 'Climb',
      items: [
        { 'Throttles': 'CLB' },
        { 'Nose T.O': 'OFF' },
        { 'Flaps': 'RETRACT at Safe Speed' },
        {
          'GND Spoilers': 'DISARM',
          'info': 'Pull downward the GND SPLRS stick'
        },
        { 'Autopilot': 'MONITOR' },
        { 'BARO': 'SET to STD' },
        { 'Landing Lights': 'OFF' },
        { 'Cruise Altitude': 'SET' },
        { 'CLB Performance': 'MONITOR' }
      ]
    },
    {
      title: 'Cruise',
      items: [
        { 'SB Lights': 'OFF' },
        { 'EFIS': 'WX' },
        { 'Engine instruments': 'Monitor' },
        { 'Fuel Balance': 'MONITOR' },
        { 'CRZ Performance': 'Monitor' },
        {
          'Flight Plan': 'APPROACH VERIFIED / SET',
          'info': 'Verify all Legs to Runway'
        },
        {
          'LDG PERF (EFB)': 'SYNC SIMBRIEF, FMS, CONDITIONS',
          'info':
            'RWY Condition, LDG Technique and BRK Mode may need to be set.'
        },
        { 'COMPUTE Distance': 'CHECK, Note DISTANCE' },
        { '--- FMS (POSITION/NAVAIDS/LS)': '' },
        {
          'Approach FREQ/CHAN': 'SET',
          'info': 'ILS will be auto tuned within 300 NM of destination.'
        },
        {
          'Approach IDENT': 'SET',
          'info':
            'From Instrument Approach Chart, identity next to ILS frequency'
        },
        { '--- FMS (ACTIVE/PERF/APPR)': '' },
        { 'Approach Method Indicated': 'CONFIRMED' },
        { 'WIND, OAT, QNH': 'SET' },
        {
          'BARO': 'PRE-SET destination value',
          'info': 'From ATC, ATIS or EFB'
        },
        { 'MINIMUMS': 'SET' },
        { 'Approach Speeds': 'CHECK' },

        {
          'Altitude': 'SET FAF or RWY + 2,000 ft',
          'info': 'Or follow ATC guidance until APPROACH altitude'
        },
        {
          'Altitude Constraints': 'CHECK FAF to Signal altitude',
          'info':
            'You may set the Final Approach Fix to 50 ft below the recommended altitude, to make sure the Signal is captured, in case of inaccurate altimeter setting.'
        },
        {
          'Speed Constraints': 'CHECK in Flight Plan',
          'info': 'Change approach speeds if necessary'
        },
        {
          'BTV': 'CALCULATED & SET ',
          'info':
            'Get EFB/LDG PERF/Factored LD (M) and set the nearest Runway exit after the landing distance in (PMD/Landing/BTV EXIT AT) - double arrow when PMD Zoom option active.'
        },
        { 'TOD INDICATOR': 'CONFIRMED' }
      ]
    },
    {
      title: 'Descent',
      items: [
        { 'Clearance': 'OBTAINED' },
        {
          'MANAGED DESCENT': 'INITIATE',
          'info': 'Once TOD reached, push ALTITUDE knob - verify DES on PMD'
        },
        { 'ATIS & Weather': 'CHECK' },
        { 'EFIS': 'TERR' },
        { 'SB Light': 'ON' },
        { 'LDG Light': 'ON' }
      ]
    },
    {
      title: 'Approach',
      items: [
        { 'Clearance': 'OBTAINED' },
        { 'Instrument Guide (LS)': 'ON' },
        { 'GND Spoilers': 'ARM', 'info': 'Pull upward the GND SPLRS stick' },
        { 'Auto Brk': 'ON' },
        { 'Nose T.O Light': 'ON' },
        { 'Altitude': 'MONITOR' },
        { 'BARO': 'ARM destination' },
        {
          'Speed': 'MANAGE/MONITOR',
          'info': 'At 1000 ft AGL, stabilized for Vapp'
        },
        { 'Flaps': 'AS REQUIRED' },
        { 'Approach': 'APPR (G/S) stby at IAF' },
        { 'Gear': 'DOWN by FAF' },
        { 'Localizer': 'CONFIRM LOC' },
        { 'G/S': 'ARMED at FAF' },
        { 'Flaps': 'LDG' },
        { 'Auto Brk & SPLRS': 'CONFIRM ARMED' },
        { 'RWY Cond': 'CHECK SET' }
      ]
    },
    {
      title: 'Landing',
      items: [
        { '--- Manual': '' },
        { 'WIND': 'CHECK' },
        { 'A/THR': 'SPEED/OFF' },
        { 'AP': 'DISCONNECT' },
        { 'Throttles': 'IDLE at 40 ft' },
        { 'Touchdown': 'FLARE ~5° at 40 ft' },
        { 'Reverse Thrust': 'AS REQ, IDLE at 70 kts' },
        { 'Manual Brake': 'at 30 kts to Disengage Auto Brk' },
        { '--- Auto Land': '' },
        { 'AP1 & AP2': 'ON' },
        { 'PFD LAND': 'VERIFY at 350 ft AGL' },
        { 'FLARE': 'VERIFY at 40 ft' },
        { 'THR IDLE': 'VERIFY at 30 ft' },
        { 'Throttle': 'IDLE on RETARD (~10 ft)' },
        { 'ROLL OUT': 'VERIFY after Touchdown' },
        { '--- GA': '' },
        { 'Throttle': 'TOGA' },
        { 'GA SOFT/TOGA': 'VERIFY' },
        { 'ROTATE & RETRACT FLAPS': 'CHECK' },
        { 'Positive Rate': 'GEAR UP' },
        { 'Throttle': 'CLB above 400 ft AGL' },
        { 'AP1 & A/THR': 'ENGAGE, AS REQ' },
        { 'Altitude': 'SET Indicated ALT' },
        { 'NAV/HDG': 'SET & Follow GA Procedure' }
      ]
    },
    {
      title: 'After Landing',
      items: [
        { 'Flaps': 'RETRACT' },
        { 'GND SPLRS': 'DISARM' },
        { 'BRAKE FANS': 'IF REQ' },
        { 'Taxi Light': 'ON' },
        { 'LDG, Nose T.O, SB Lights': 'OFF' },
        { 'Taxi & Parking Clearance': 'OBTAINED' },
        { 'FD & LS': 'OFF' },
        { 'EFIS': 'OFF' },
        { 'APU MASTER SW': 'ON' },
        { 'APU START': 'AVAIL' }
      ]
    },
    {
      title: 'Shutdown',
      items: [
        { 'Parking Brake': 'SET' },
        { 'APU BLEED': 'ON' },
        { 'ENG 1 & 2': 'SHUTDOWN' },
        { 'Lights (ALL)': 'OFF' },
        { 'ICE Protection': 'OFF' },
        { '--- FUEL': '' },
        { 'R TK STBY, Main': 'OFF' },
        { 'L TK STBY, Main': 'OFF' },
        { 'R CTR TK': 'OFF' },
        { 'L CTR TK': 'OFF' },
        { 'ADIRS NAV MID, R, L': 'OFF' },
        { 'Transponder': 'STBY' },
        { 'GROUND (EFB)': 'SET CHOCKS' },
        { 'APU BLEED': 'OFF' },
        { 'APU MASTER SW': 'OFF' },
        { 'OXYGEN Crew Supply': 'OFF' },
        { 'EVAC CAPT': 'ON' },
        { 'ECAM STATUS': 'CHECK' },
        { '--- ELEC': '' },
        { 'BAT 2, BAT EMER 2': 'OFF' },
        { 'BAT EMER 1, BAT 1': 'OFF' }
      ]
    }
  ]
}
