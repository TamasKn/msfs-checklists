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
        { '--- ADIRS': '' },
        { 'NAV 1 (L)': 'NAV' },
        { 'NAV 3 (R)': 'NAV' },
        { 'NAV 2 (MID)': 'NAV' },
        { 'NAV Lights': '2' },
        { 'EMER EXIT LTS': 'ARM' },
        { 'EIS/CAS': 'CHECK' },
        { 'IFR CLEARANCE': 'OBTAINED' },
        { 'OXYGEN Crew Supply': 'ON' },
        { 'EVAC CAPT & PURS': 'ON' },
        { '--- FUEL': '' },
        { 'L TK Main': 'ON' },
        { 'R TK Main': 'ON' },
        { 'L TK STBY': 'ON' },
        { 'R TK STBY': 'ON' },
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
        { 'LOADSHEET': 'SET ZFW & FUEL LOAD' },
        { '--- FMS': '' },
        {
          'ACTIVE/INIT': 'REQUEST OR SET F-PLN',
          'info': 'ACTIVE/INIT - CPNY F-PLN - Request from Simbrief and Insert'
        },
        { '--- FMS (ACTIVE/F-PLN)': '' },
        { 'DEPARTURE': 'RWY, VIA, STAR INSERTED' },
        { 'DESTINATION': 'RWY, APPR, VIA, STAR INSERTED' },
        { 'CONTINUITY': 'CONFIRMED' },
        {
          'Altimeter Transition': 'SET to Regional',
          'info':
            'Check flight plan Charts Transition Altitude (TA). Change (T.O & APPR): FMS/ACTIVE/PERF - TRANS'
        },
        { 'T.O Perf (EFB)': 'SYNC SIMBRIEF, FMS, CONDITIONS' },
        { 'T.O Speeds': 'COMPUTE & SEND TO FMS' },
        { '--- FMS (ACTIVE/PERF/T.O)': '' },
        { 'TakeOff Speeds': 'INSERTED' },
        { 'FLAPS': 'SET RECOMMENDED' },
        { 'ICE Protection': 'AS REQ' },
        { 'ACTIVE/FUEL&LOAD': 'SET FUEL & PAX' },
        { '--- FMS (SURV/CONTROLS)': '' },
        { 'WXR': 'AUTO' },
        { 'TAWS': 'ON' },
        { 'XPDR': 'SQWK SET, AUTO ON' },
        { 'TCAS': 'TA/RA & ADS-B ON' }
      ]
    },
    {
      title: 'Before Engine Start',
      items: [
        { 'START CLEARANCE': 'OBTAINED' },
        { 'Throttles': 'IDLE' },
        { 'PARKING BRAKE': 'SET' },
        { 'CABIN DOOR': 'CLOSED' },
        { 'ECAM Status': 'CHECK' },
        { 'Doors': 'CLOSED/ARMED' },
        { 'Thrust Levers': 'IDLE' },
        { 'Park Brk': 'AS REQ' },
        { '--- APU': '' },
        { 'MASTER SW': 'ON' },
        { 'START': 'ON (Wait for AVAIL)' },
        { 'APU STARTING': 'MONITOR', 'info': 'PEDESTAL/ECAM/APU' },
        { '--- AIR': '' },
        { 'APU BLEED': 'ON' },
        { 'LIGHTS (SB, Beacon)': 'ON' }
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
        { 'APU Master SW': 'OFF' },
        { 'GND Spoilers': 'ARM', 'info': 'Pull upward the GND SPLRS stick' },
        { 'Rudder Trim': 'CHECK' },
        { 'Pitch Trim': 'CHECK', 'info': 'Automatically set' },
        { 'ECAM STS': 'CHECK' }
      ]
    },
    {
      title: 'Before Taxi',
      items: [
        { 'Flight Plan': 'DEPARTURE VERIFIED' },
        { 'Altitude': 'SET' },
        { 'Brakes': 'CHECK & SET & RETRACTED' },
        { 'Transponder': 'ON & SET' },
        {
          'Flight Controls': 'ALL OPERATIONAL',
          'info': 'ECAM/F-CTL'
        },
        { 'FD': 'ON' },
        { 'AP1': 'ON' },
        { 'A/THR': 'ON (IF NOT ACTIVE)' },
        { 'EFIS': 'WX/TERR AS REQ' },
        { 'BARO': 'SET departure value', 'info': 'From ATIS, EFB or METAR' },
        { 'Auto Brk': 'ON' },
        { 'CHOCKS & GPU': 'DISCONNECTED' },
        { 'T.O Config': 'VERIFY NORMAL', 'info': 'ACTIVE/PERF/T.O' },
        { 'T.O RWY': 'CONFIRMED' },
        { 'PACKS': 'OFF' },
        { 'Taxi Lights': 'ON' }
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
        { 'Strobe': 'ON' },
        { 'Landing Lights': 'ON' },
        { 'Nose T.O': 'ON' }
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
        { 'Flaps': 'RETRACT at Safe Speed' },
        {
          'GND Spoilers': 'DISARM',
          'info': 'Pull downward the GND SPLRS stick'
        },
        { 'PACKS': 'ON' },
        { 'Landing Lights': 'OFF' },
        { 'Nose T.O': 'OFF' },
        { 'Autopilot': 'MONITOR' },
        { 'Cruise Altitude': 'SET' },
        { 'BARO': 'SET to STD' },
        { 'CLB Performance': 'MONITOR' }
      ]
    },
    {
      title: 'Cruise',
      items: [
        { 'Engine instruments': 'Monitor' },
        { 'SB Lights': 'OFF' },
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
        { 'WIND, OAT, QNH': 'SET' },
        { 'MINIMUMS': 'SET' },
        { 'Approach Speeds': 'CHECK' },

        {
          'Altitude': 'SET RWY + 2,000 ft',
          'info': 'Or follow ATC guidance until APPROACH altitude'
        },
        {
          'Altitude Constraints': 'FIX FAF to Signal altitude',
          'info':
            'You may set the Final Approach Fix to 20-50 ft below the recommended altitude, to make sure the Signal is captured, in case of inaccurate altimeter setting.'
        },
        {
          'Speed Constraints': 'CHECK in Flight Plan',
          'info': 'Change approach speeds if necessary'
        },
        { 'Auto Brk': 'ON' },
        {
          'BTV': 'CALCULATED & SET ',
          'info':
            'Get EFB/LDG PERF/Factored LD (M) and set the nearest Runway exit after the landing distance in (PMD/Landing/BTV EXIT AT) - double arrow when PMD Zoom option active.'
        },
        { 'TOD POINT': 'CONFIRM' }
      ]
    },
    {
      title: 'Descent',
      items: [
        { 'Clearance': 'OBTAINED' },
        {
          'MANAGED DESCENT': 'ACTIVATED',
          'info': 'Once TOD reached, push ALTITUDE knob - verify DES on PMD'
        },
        { 'ATIS & Weather': 'CHECK' },
        {
          'BARO': 'PRE-SET destination value',
          'info': 'From ATIS, EFB or METAR'
        },
        { 'Instrument Guide (LS)': 'ON' },
        { 'SB Lights': 'ON' },
        { 'Landing Lights': 'ON' }
      ]
    },
    {
      title: 'Approach',
      items: [
        { 'Clearance': 'OBTAINED' },
        { 'BARO': 'ARM destination' },
        { 'Altitude': 'MONITOR' },
        { 'Flaps': 'AS REQUIRED' },
        { 'Speed': 'MANAGE/MONITOR' },
        { 'GND Spoilers': 'ARM', 'info': 'Pull upward the GND SPLRS stick' },
        { 'Approach': 'APPR (G/S) stby at IAF' },
        { 'Localizer': 'CONFIRM LOC' },
        { 'Gear': 'DOWN by FAF' },
        { 'G/S': 'ARMED at FAF' },
        { 'Flaps': 'LDG' },
        {
          'Trim': 'SET for Landing',
          'info':
            'If AP armed let it settle the trim after flap (full) extension'
        },
        { 'Auto Brk & SPLRS': 'SET & ARMED' },
        { 'RWY Cond': 'SET' }
      ]
    },
    {
      title: 'Landing',
      items: [
        { '--- Manual': '' },
        { 'WIND': 'CHECK' },
        { 'A/THR': 'SPEED/OFF' },
        { 'AP': 'DISCONNECT' },
        { 'Throttles': 'IDLE at 100 ft' },
        { 'Touchdown': 'FLARE at 40 ft' },
        { 'Reverse Thrust': 'AS REQ' },
        { '--- Auto Land': '' },
        { 'AP1 & AP2': 'ON' },
        { 'Touchdown': 'FLARE at 40 ft' }
      ]
    },
    {
      title: 'After Landing',
      items: [
        { 'GND SPLRS': 'DISARM' },
        { 'Flaps': 'RETRACT' },
        { 'Taxi & Parking Clearance': 'OBTAINED' },
        { 'FD': 'OFF' },
        { 'Taxi Lights': 'ON' },
        { 'LDG, SB Lights': 'OFF' },
        { 'APU MASTER SW': 'ON' },
        { 'APU START': 'AVAIL' },
        { 'ENG 1': 'SHUTDOWN' },
        { 'ECAM Wheel Temps': 'MONITOR' }
      ]
    },
    {
      title: 'Shutdown',
      items: [
        { 'Parking Brake': 'SET' },
        { 'APU BLEED': 'ON' },
        { 'ENG 2': 'SHUTDOWN' },
        { 'Lights': 'OFF' },
        { '--- FUEL': '' },
        { 'R TK STBY': 'OFF' },
        { 'R TK Main': 'OFF' },
        { 'L TK STBY': 'OFF' },
        { 'L TK Main': 'OFF' },
        { 'R CTR TK': 'OFF' },
        { 'L CTR TK': 'OFF' },
        { '--- ADIRS': '' },
        { 'NAV 1 (L)': 'OFF' },
        { 'NAV 3 (R)': 'OFF' },
        { 'NAV 2 (MID)': 'OFF' },
        { 'Transponder': 'STBY' },
        { 'APU BLEED': 'OFF' },
        { 'APU MASTER SW': 'OFF' },
        { 'OXYGEN Crew Supply': 'OFF' },
        { 'EVAC CAPT & PURS': 'OFF' },
        { 'ECAM STATUS': 'CHECK' },
        { '--- ELEC': '' },
        { 'EXT 1': 'OFF' },
        { 'BAT 2, BAT EMER 2': 'OFF' },
        { 'BAT EMER 1, BAT 1': 'OFF' },
        { 'EXT 2': 'OFF' }
      ]
    }
  ]
}
