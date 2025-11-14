import { AircraftName } from '@/data/aircrafts/aircraft-names'

export const aerostar600Checklist = {
  name: AircraftName.Aerostar600,
  checklist: [
    {
      title: 'Cockpit Preparation',
      items: [
        { 'Parking Brake': 'SET' },
        { 'Gear Lever': 'DOWN' },
        { 'Power Levers': 'IDLE' },
        { 'Mixture': 'CUTOFF' },
        { 'Props': 'FULL FORWARD' },
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
        { 'Parking Brake': 'RELEASE' }
      ]
    },
    {
      title: 'Before Takeoff',
      items: [
        { 'Parking Brake': 'SET' },
        { 'Flaps': '1/2' },
        { 'Flight Controls': 'CHECK' },
        { 'Trims': 'SET FOR TAKEOFF' },
        { 'Lights': 'ON' }
      ]
    },
    {
      title: 'Takeoff',
      items: [
        { 'Power Levers': 'FULL' },
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
        { 'Mixture': 'SET' }
      ]
    },
    {
      title: 'Cruise',
      items: [
        { 'Power': 'SET' },
        { 'Props': 'SET' },
        { 'Mixture': 'SET' },
        { 'Autopilot': 'ENGAGED' }
      ]
    },
    {
      title: 'Descent',
      items: [
        { 'ATIS': 'OBTAIN' },
        { 'Altimeters': 'SET' },
        { 'Approach Briefing': 'COMPLETE' }
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
        { 'Final Approach Speed': '95 KIAS' },
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
        { 'Battery Master': 'OFF' }
      ]
    }
  ]
}
