import { AircraftName } from '@/data/aircrafts/aircraft-names'

export const turbineDukeChecklist = {
  name: AircraftName.TurbineDuke,
  checklist: [
    {
      title: 'Cockpit Preparation',
      items: [
        { 'Parking Brake': 'SET' },
        { 'Gear Lever': 'DOWN' },
        { 'Power Levers': 'IDLE' },
        { 'Condition Levers': 'FUEL CUTOFF' },
        { 'Props': 'FULL FORWARD' },
        { 'Pressurization': 'DUMP' },
        { 'Battery Master': 'ON' }
      ]
    },
    {
      title: 'Before Engine Start',
      items: [
        { 'Fuel Selectors': 'ON' },
        { 'Fuel Pumps': 'ON' },
        { 'Strobe Lights': 'ON' },
        { 'Beacon': 'ON' },
        { 'Inertial Separators': 'AS REQUIRED' }
      ]
    },
    {
      title: 'Engine Start',
      items: [
        { 'Propeller Area': 'CLEAR' },
        { 'Left Engine': 'START' },
        { 'Left Condition Lever': 'LOW IDLE' },
        { 'Left ITT': 'MONITOR' },
        { 'Right Engine': 'START' },
        { 'Right Condition Lever': 'LOW IDLE' },
        { 'Right ITT': 'MONITOR' },
        { 'Oil Pressure': 'CHECK' }
      ]
    },
    {
      title: 'After Start',
      items: [
        { 'Avionics Master': 'ON' },
        { 'Flaps': 'UP' },
        { 'Pressurization': 'SET' },
        { 'Condition Levers': 'HIGH IDLE' },
        { 'Parking Brake': 'RELEASE' }
      ]
    },
    {
      title: 'Before Takeoff',
      items: [
        { 'Parking Brake': 'SET' },
        { 'Flaps': 'APPROACH' },
        { 'Flight Controls': 'CHECK' },
        { 'Trims': 'SET FOR TAKEOFF' },
        { 'Lights': 'ON' },
        { 'Condition Levers': 'HIGH IDLE' }
      ]
    },
    {
      title: 'Takeoff',
      items: [
        { 'Power Levers': 'FULL' },
        { 'Torque': 'MONITOR' },
        { 'Rotate Speed': '85 KIAS' },
        { 'Climb Speed': '120 KIAS' },
        { 'Positive Climb': 'GEAR UP' },
        { 'Flaps': 'UP' }
      ]
    },
    {
      title: 'Climb',
      items: [
        { 'Power': 'SET' },
        { 'Props': 'SET' },
        { 'ITT & Torque': 'MONITOR' },
        { 'Pressurization': 'MONITOR' }
      ]
    },
    {
      title: 'Cruise',
      items: [
        { 'Power': 'SET' },
        { 'Props': 'SET' },
        { 'ITT & Torque': 'MONITOR' },
        { 'Autopilot': 'ENGAGED' },
        { 'Pressurization': 'MONITOR' }
      ]
    },
    {
      title: 'Descent',
      items: [
        { 'ATIS': 'OBTAIN' },
        { 'Altimeters': 'SET' },
        { 'Approach Briefing': 'COMPLETE' },
        { 'Pressurization': 'SET FOR LANDING' }
      ]
    },
    {
      title: 'Approach',
      items: [
        { 'Power': 'AS REQUIRED' },
        { 'Props': 'FULL FORWARD' },
        { 'Condition Levers': 'HIGH IDLE' },
        { 'Gear': 'DOWN' },
        { 'Flaps': 'AS REQUIRED' }
      ]
    },
    {
      title: 'Landing',
      items: [
        { 'Final Approach Speed': '100 KIAS' },
        { 'Touchdown': 'MAIN WHEELS FIRST' },
        { 'Beta Range': 'AS REQUIRED' },
        { 'Brakes': 'AS REQUIRED' }
      ]
    },
    {
      title: 'After Landing',
      items: [
        { 'Flaps': 'UP' },
        { 'Strobe Lights': 'OFF' },
        { 'Transponder': 'ALT OFF' }
      ]
    },
    {
      title: 'Shutdown',
      items: [
        { 'Parking Brake': 'SET' },
        { 'Avionics Master': 'OFF' },
        { 'Condition Levers': 'FUEL CUTOFF' },
        { 'Props': 'FEATHER' },
        { 'Pressurization': 'DUMP' },
        { 'Battery Master': 'OFF' }
      ]
    }
  ]
}

