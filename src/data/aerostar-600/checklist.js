import { AircraftName } from '@/data/aircrafts/aircraft-names'

export const aerostar600Checklist = {
  name: AircraftName.Aerostar600,
  checklist: [
    {
      title: 'Cockpit Preparation',
      items: [
        { 'Parking Brake': 'SET' },
        { 'Throttle': 'IDLE' },
        { 'Mixture': 'CUTOFF' },
        { 'Props': 'FULL FORWARD' }
      ]
    },
    {
      title: 'Before Engine Start',
      items: [{ 'Battery Master': 'ON' }, { 'Beacon': 'ON' }]
    },
    {
      title: 'Engine Start',
      items: [
        { 'L Fuel Selector': 'Cycle, then ON' },
        { 'L Fuel Boost': 'ON' },
        { 'L Throttle': '25%', 'info': 'Open Aircraft EFB to monitor Engine' },
        { 'Mixture': '20%' },
        { 'L STARTER': 'When fuel flow starts, IGNITE' },
        { 'Mixture': 'Increase as req to ignite the engine' },
        { 'L Alternator': 'ON' },
        { 'L Fuel Boost': 'OFF' },
        { 'Oil Pressure': 'CHECK' },
        { 'R Engine': 'Repeat steps' }
      ]
    },
    {
      title: 'Before Taxi',
      items: [
        { 'Avionics Master': 'ON' },
        { 'Flaps': 'SET FOR TAKEOFF' },
        { 'Trims': 'SET FOR TAKEOFF' },
        { 'Flight Controls': 'FREE & CORRECT' },
        { 'Parking Brake': 'RELEASE' }
      ]
    },
    {
      title: 'Before Takeoff',
      items: [
        { 'BARO': 'SET' },
        { 'Pitot Heat': 'ON' },
        { 'Taxi lights': 'OFF' },
        { 'Landing lights': 'ON' }
      ]
    },
    {
      title: 'Takeoff',
      items: [
        { 'Throttle': 'FULL' },
        { 'Rotate Speed': '85 KIAS' },
        { 'Climb Speed': '120 KIAS' },
        { 'Landing Gear': 'UP' },
        { 'Flaps': 'RETRACT at SAFE SPEED' }
      ]
    },
    {
      title: 'Climb',
      items: [{ 'Throttle': 'SET' }, { 'Props': 'SET' }, { 'Mixture': 'SET' }]
    },
    {
      title: 'Cruise',
      items: [
        { 'Throttle': 'SET' },
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
        { 'Throttle': 'AS REQUIRED' },
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
