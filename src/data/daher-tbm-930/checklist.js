import { AircraftName } from '@/data/aircrafts/aircraft-names'

export const TBM930Checklist = {
  name: AircraftName.TBM930,
  checklist: [
    {
      title: 'Cockpit Preparation',
      items: [
        { 'Parking Brake': 'ON' },
        { 'Doors': 'CLOSED & LOCKED (Green)' },
        { 'Passenger Oxygen': 'STBY' },
        { 'Oxygen': 'ON' },
        { 'Internal & External Lights': 'ALL OFF' },
        { 'Crash Lever': 'DOWN' },
        { 'Starter': 'OFF' },
        { 'Ignition': 'AUTO' },
        { 'Aux BP': 'OFF' },
        { 'Fuel Sel': 'MAN' },
        { 'AP/TRIM': 'OFF' },
        { 'A/C': 'OFF' },
        { 'CB Light': 'OFF' },
        { 'De-Ice Systems': 'ALL OFF' },
        { 'Inert Sep': 'OFF' },
        { 'Landing Gear Lever': 'DOWN' },
        { 'Dump': 'NORM / GUARDED' },
        { 'Bleed': 'OFF' },
        { 'Hot Air Flow': 'AS REQ' },
        { 'Man Overhead': 'FULLY BACKWARD' },
        { 'Throttle': 'CUT OFF' },
        { 'Fuel Tank Selector': 'OPEN L or R' },
        { 'Alternate Static Source': 'PUSHED' },
        { 'Emergency RAM Air': 'PUSHED' }
      ]
    },
    {
      title: 'Motoring (if residual ITT > 150°C)',
      items: [
        { 'Ignition': 'OFF' },
        { 'Aux BP': 'ON' },
        { 'Propeller Area': 'CLEAR' },
        { 'Starter': 'ON (2 secs then OFF)' },
        { 'After 30 seconds maximum: Starter': 'ABORT then OFF' },
        { 'Aux BP': 'OFF' }
      ]
    },
    {
      title: 'Engine Start',
      items: [
        { 'Ignition': 'AUTO' },
        { 'Aux BP': 'ON' },
        { 'Prop Area': 'CLEAR' },
        { 'Starter': 'ON (2 secs then OFF)' },
        { 'NG 13% -> Throttle': 'LO-IDLE' }
      ]
    },
    {
      title: 'Before Engine Start',
      items: [
        { 'Crash Lever': 'UP' },
        { 'Source': 'BATT or GPU' },
        { 'Generator': 'MAIN' },
        { 'ELT': 'TEST then ARM' },
        { 'Internal Lights': 'AS REQ' },
        { 'NAV Lights': 'ON' },
        { 'AHRS Alignment': 'CHECK' },
        { 'LTS TEST': 'PERFORM' },
        { 'Landing Gear Lights / Check Down': 'TEST' },
        { 'Multi-Function Display': 'INITIALIZE' },
        { 'XPDR': 'Standby' },
        { 'ATC Clearance': 'AS REQ' }
      ]
    },
    {
      title: 'After Engine Start',
      items: [
        { 'Throttle': 'LO-IDLE → FLIGHT IDLE' },
        { 'NG': 'CHECK 60% +/-2%' },
        { 'Oil Press. Temp.': 'CHECK' },
        { 'Aux BP': 'AUTO' },
        { 'Fuel Sel': 'AUTO' },
        { 'Fuel Sel Shift Button': 'TEST' }
      ]
    },
    {
      title: 'Before Taxi',
      items: [
        { 'Stand-by instruments': 'CHECK' },
        { 'De-Ice Systems': 'AS REQ' },
        { 'Inert Sep': 'ON' },
        { 'Flight Controls': 'CHECK' },
        { 'WX RADAR': 'STBY' },
        { 'Altimeter Setting (QNH)': 'SET' },
        { 'Standby Altimeter (QNH)': 'SET' },
        { 'ALT SEL': 'SET' },
        { 'FLC': 'PRESS & SET 124 KIAS' },
        { 'PFD ActiveNav': 'AS REQ' },
        { 'Squawk': 'SET' },
        { 'Throttle': 'FEATHER TWICE' },
        { 'Flaps': 'T/O' },
        { 'Taxi Lights': 'ON' },
        { 'Parking Brake': 'OFF' }
      ]
    },
    {
      title: 'Before Takeoff',
      items: [
        { 'Parking Brake': 'ON' },
        { 'Landing Lights': 'ON' },
        { 'Strobe Lights': 'ON' },
        { 'Ignition': 'CHECK AUTO or ON' },
        { 'Aux BP': 'CHECK AUTO' },
        { 'Fuel Sel': 'CHECK AUTO' },
        { 'De-Ice Systems': 'AS REQ' },
        { 'Pitot L HTR / Pitot R & Stall HTR': 'ON' },
        { 'Inert Sep': 'CHECK ON' },
        { 'Trims': 'T/O' },
        { 'Flaps': 'CHECK T/O' },
        { 'A/C': 'AS REQ' },
        { 'Bleed': 'CHECK AUTO or MAX DIFF' },
        { 'Fuel Gauges': 'CHECK IMBALANCE' },
        { 'BATT': 'CHECK < 50 A' },
        { 'XPDR': 'ON' }
      ]
    },
    {
      title: 'Takeoff',
      items: [
        { 'ADI, HSI, Headings': 'CHECK' },
        { 'Propeller RPM': 'GREEN SECTOR' },
        { 'Brakes': 'RELEASED' },
        { 'Torque': '100%' },
        { 'Rotation Speed': '(check references)' },
        { 'Attitude': '10° UP' },
        { 'Positive Climb': 'BRAKES / GEAR UP' },
        { 'IAS >115 kts': 'FLAPS UP' }
      ]
    },
    {
      title: 'After Takeoff',
      items: [
        { 'Landing Gear': 'CHECK UP' },
        { 'Flaps': 'CHECK UP' },
        { 'Torque Max 100%': 'CHECK' },
        { 'De-Ice Systems': 'AS REQ' },
        { 'Inert Sep': 'OFF' },
        { 'AUTOPILOT (min. 300 AGL)': 'A/P ON' },
        { 'AUTOPILOT (min. 300 AGL)': 'NAV or HDG ON' },
        { 'AUTOPILOT (min. 300 AGL)': 'Y/D ON' }
      ]
    },
    {
      title: 'Climb',
      items: [
        { 'ALT SEL': 'CHECK' },
        { 'At Transition Altitude: Altimeter Setting (QNH)': 'STD' },
        { 'At Transition Altitude: Autopilot': 'CHECK' },
        { 'At Transition Altitude: Torque adjustments / ITT /NG': 'CHECK' },
        { 'At Transition Altitude: WX RADAR': 'AS REQ' },
        { 'At Transition Altitude: Pressurization': 'CHECK' },
        { 'At Transition Altitude: Fuel Gauges': 'CHECK' },
        { 'At Transition Altitude: Amps / Volts': 'CHECK' },
        { 'At Transition Altitude: De-Ice Systems': 'AS REQ' },
        { 'At Transition Altitude: Inert Sep': 'AS REQ' },
        { 'At or above 10000ft/FL100: Landing Lights': 'OFF' },
        { 'At or above 10000ft/FL100: Speed (accelerate to)': '170 IAS' }
      ]
    },
    {
      title: 'Cruise',
      items: [
        { 'Autopilot': 'CHECK' },
        { 'Torque adjustments / ITT / NG': 'CHECK' },
        { 'Pressurization': 'CHECK' },
        { 'Fuel Gauges': 'CHECK' },
        { 'Amps / Volts': 'CHECK' },
        { 'De-Ice Systems': 'AS REQ' },
        { 'TOD (in MFD)': 'CHECK COMPUTED' }
      ]
    },
    {
      title: 'Before Descent',
      items: [
        { 'Altitude': 'SET' },
        { 'VNV (in glareshield)': 'ON' },
        { 'Pressurization': 'CHECK' },
        { 'Fuel Gauges': 'CHECK' },
        { 'Amps / Volts': 'CHECK' },
        { 'De-Ice Systems': 'AS REQ' },
        { 'Inert Sep': 'AS REQ' }
      ]
    },
    {
      title: 'Descent',
      items: [
        { 'Below 10000ft/FL100: Landing Lights': 'ON' },
        { 'Below 10000ft/FL100: Max Speed': '250 KIAS' }
      ]
    },
    {
      title: 'Approach',
      items: [
        { 'Altimeter Setting (QNH)': 'SET / CHECK' },
        { 'COM/NAV / GPS': 'SET / CHECK' },
        { 'Pressurization': 'CHECK' },
        { 'Fuel Gauges': 'CHECK' },
        { 'Amps / Volts': 'CHECK' },
        { 'De-Ice Systems': 'AS REQ' },
        { 'Inert Sep': 'ON' }
      ]
    },
    {
      title: 'Landing',
      items: [
        { '@8nm to go: Landing Gear': 'DOWN' },
        { '@8nm to go: Flaps': 'LDG' },
        { 'Before 200 AGL': 'AP/YD DISCONNECT' }
      ]
    },
    {
      title: 'After Landing',
      items: [
        { 'Taxi Lights': 'ON' },
        { 'Strobe Lights': 'OFF' },
        { 'De-Ice Systems': 'AS REQ' },
        { 'Trims': 'RESET TO T/O' },
        { 'Flaps': 'UP' },
        { 'A/C': 'AS REQ' },
        { 'XPDR': 'STBY' },
        { 'WX RADAR': 'STBY' }
      ]
    },
    {
      title: 'Shutdown',
      items: [
        { 'Parking Brake': 'ON' },
        { 'Taxi Lights': 'OFF' },
        { 'Internal Lights': 'AS REQ' },
        { 'Fuel Sel': 'MAN' },
        { 'AP/TRIM': 'OFF' },
        { 'A/C': 'OFF' },
        { 'Bleed': 'OFF' },
        { 'Throttle': 'IDLE FOR 2 MIN' },
        { 'Throttle': 'LO-IDLE FOR 15 SEC' },
        { 'Throttle': 'CUTOFF' },
        { 'Pitot L HTR / Pitot R & Stall HTR': 'OFF' },
        { 'Inert Sep': 'OFF' },
        { 'Aux BP': 'OFF' },
        { 'NAV Lights': 'OFF' },
        { 'Ignition': 'OFF' },
        { 'Generator': 'OFF' },
        { 'When Inert Sep is retracted, after ~40 sec: Source': 'OFF' },
        { 'When Inert Sep is retracted, after ~40 sec: Crash Lever': 'DOWN' },
        {
          'When Inert Sep is retracted, after ~40 sec: Stand-by instruments':
            'OFF'
        },
        { 'When Inert Sep is retracted, after ~40 sec: Oxygen': 'OFF' }
      ]
    }
  ]
}
