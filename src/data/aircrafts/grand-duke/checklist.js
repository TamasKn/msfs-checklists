import { AircraftName } from '@/data/aircrafts/aircraft-names'

export const grandDukeChecklist = {
  name: AircraftName.GrandDuke,
  checklist: [
    {
      title: 'Cockpit Preparation',
      items: [
        { 'Parking Brake': 'SET' },
        { 'Gear Lever': 'DOWN' },
        { 'Power Levers': 'IDLE' },
        { 'Mixture': 'CUTOFF' },
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
        { 'Beacon': 'ON' }
      ]
    },
    {
      title: 'Engine Start',
      items: [
        { 'Propeller Area': 'CLEAR' },
        { 'Mixture': 'RICH' },
        { 'Left Engine': 'START' },
        { 'Right Engine': 'START' },
        { 'Oil Pressure': 'CHECK' }
      ]
    },
    {
      title: 'After Start',
      items: [
        { 'Avionics Master': 'ON' },
        { 'Flaps': 'UP' },
        { 'Pressurization': 'SET' },
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
        { 'Lights': 'ON' }
      ]
    },
    {
      title: 'Takeoff',
      items: [
        { 'Power Levers': 'FULL' },
        { 'Rotate Speed': '90 KIAS' },
        { 'Climb Speed': '110 KIAS' },
        { 'Positive Climb': 'GEAR UP' },
        { 'Flaps': 'UP' }
      ]
    },
    {
      title: 'Climb',
      items: [
        { 'Power': 'SET' },
        { 'Props': 'SET' },
        { 'Mixture': 'SET' },
        { 'Pressurization': 'MONITOR' }
      ]
    },
    {
      title: 'Cruise',
      items: [
        { 'Power': 'SET' },
        { 'Props': 'SET' },
        { 'Mixture': 'SET' },
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
        { 'Mixture': 'RICH' },
        { 'Gear': 'DOWN' },
        { 'Flaps': 'AS REQUIRED' }
      ]
    },
    {
      title: 'Landing',
      items: [
        { 'Final Approach Speed': '100 KIAS' },
        { 'Touchdown': 'MAIN WHEELS FIRST' },
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
        { 'Mixture': 'CUTOFF' },
        { 'Magnetos': 'OFF' },
        { 'Pressurization': 'DUMP' },
        { 'Battery Master': 'OFF' }
      ]
    }
  ]
}
