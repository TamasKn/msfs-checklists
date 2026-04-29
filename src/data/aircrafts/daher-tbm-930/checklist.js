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
        { 'IFR Clearance': 'OBTAINED' },
        { 'Generator': 'MAIN' },
        { 'Fuel on board': 'CHECK' },
        { 'BAT Voltage': 'min. 24.5V' },
        { 'GPU Voltage': '~28V' }
      ]
    },
    {
      title: 'FMS',
      items: [
        { 'Weight and Fuel': 'TAKEOFF FOB sync' },
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
        { 'Aux BP': 'ON' },
        { 'CAS MSG "AUX BOOST PMP ON"': 'CHECK' },
        { 'Throttle': 'CUT OFF/IDLE' },
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
        { 'Throttle': 'HI-IDLE' },
        { 'NG 70% (+/-2)': 'CHECK' },
        { 'Oil Press. / Temp.': 'CHECK' },
        { 'Aux BP': 'AUTO' },
        { 'Fuel Sel': 'AUTO' },
        { 'AP/Trims': 'ON' },
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
        { 'Trims': 'SET for Takeoff (~10%)' },
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
        { 'Taxi Light': 'OFF' },
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
        { 'Speed': '124 KIAS (Vy) - 170 KIAS' },
        { 'Autopilot': 'MONITOR' },
        { 'Cruise Altitude': 'SET' },
        { 'TRQ/ITT/NG': 'CHECK' },
        { 'BARO': 'SET to STD' }
      ]
    },
    {
      title: 'Cruise & Before Descent',
      items: [
        { 'Throttle': '70-90% TRQ' },
        {
          'Flight Plan': 'APPROACH VERIFIED / SET',
          'info': 'Verify all Legs to Runway (incl.: RNAV Visual)'
        },
        { 'Navigation': 'SET MINIMUMS / LOC FREQ' },
        { 'Altitude': 'SET RWY + 1,000 ft -> VNAV' },
        { 'De-Ice Systems': 'AS REQUIRED' }
      ]
    },
    {
      title: 'Descent',
      items: [
        { 'Throttle': '70-90% TRQ' },
        { 'Speed': '200 KIAS below FL100' },
        { 'Clearance': 'OBTAINED' },
        { 'Landing Lights': 'ON (below FL100)' },
        { 'ATIS & Weather': 'CHECK' },
        { 'BARO': 'SET destination' }
      ]
    },
    {
      title: 'Approach & Landing',
      items: [
        { 'Inert Sep': 'ON' },
        { 'Flaps': 'APPROACH' },
        { 'Speed': '90-100 KIAS' },
        { 'Approach': 'APPR (GP) armed at FAF' },
        { 'Gear': 'DOWN' },
        { 'WIND': 'CHECK' },
        {
          'Trim': 'SET for Landing',
          'info':
            'If AP armed let it settle the trim after flap (full) extension'
        },
        { 'Flaps': 'LANDING' },
        { 'AP & YD': 'OFF' },
        { 'Throttles': 'IDLE at 50 ft' },
        { 'Touchdown': '~65-75 KIAS, RETARD at 10 ft' },
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
        { 'Inert Sep': 'OFF' },
        { 'Pitot L/Pitot R & Stall HTR': 'OFF' },
        { 'Throttle': 'HI-IDLE' },
        { 'Throttle': 'LO-IDLE' },
        { 'Throttle': 'CUT OFF' },
        { 'Aux BP': 'OFF' },
        { 'Generator': 'OFF' },
        { 'Source': 'OFF' },
        { 'Crash Lever': 'DOWN' },
        { 'Lights': 'OFF' }
      ]
    }
  ]
}
