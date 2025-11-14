import { AircraftName } from '@/data/aircrafts/aircraft-names'

export const bonanzaB36TCChecklist = {
  name: AircraftName.BonanzaB36TC,
  checklist: [
    {
      title: 'Cockpit Preparation',
      items: [
        { 'Parking Brake': 'SET' },
        { 'Gear Lever': 'DOWN' },
        { 'Power Lever': 'IDLE' },
        { 'Mixture': 'CUTOFF' },
        { 'Prop': 'FULL FORWARD' },
        { 'Battery Master': 'ON' }
      ]
    },
    {
      title: 'Before Engine Start',
      items: [
        { 'Fuel Selector': 'ON' },
        { 'Fuel Pump': 'ON' },
        { 'Strobe Lights': 'ON' },
        { 'Beacon': 'ON' }
      ]
    },
    {
      title: 'Engine Start',
      items: [
        { 'Propeller Area': 'CLEAR' },
        { 'Mixture': 'RICH' },
        { 'Engine': 'START' },
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
        { 'Flaps': 'APPROACH' },
        { 'Flight Controls': 'CHECK' },
        { 'Trims': 'SET FOR TAKEOFF' },
        { 'Lights': 'ON' }
      ]
    },
    {
      title: 'Takeoff',
      items: [
        { 'Power Lever': 'FULL' },
        { 'Rotate Speed': '80 KIAS' },
        { 'Climb Speed': '100 KIAS' },
        { 'Positive Climb': 'GEAR UP' },
        { 'Flaps': 'UP' }
      ]
    },
    {
      title: 'Climb',
      items: [
        { 'Power': 'SET' },
        { 'Prop': 'SET' },
        { 'Mixture': 'SET' }
      ]
    },
    {
      title: 'Cruise',
      items: [
        { 'Power': 'SET' },
        { 'Prop': 'SET' },
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
        { 'Prop': 'FULL FORWARD' },
        { 'Mixture': 'RICH' },
        { 'Gear': 'DOWN' },
        { 'Flaps': 'AS REQUIRED' }
      ]
    },
    {
      title: 'Landing',
      items: [
        { 'Final Approach Speed': '85 KIAS' },
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
