import { AircraftName } from '@/data/aircrafts/aircraft-names'

export const diamondDa42Checklist = {
  name: AircraftName.DiamondDa42,
  checklist: [
    {
      title: 'Cockpit Preparation',
      items: [
        { 'Parking Brake': 'SET' },
        { 'Alternate Static': 'OFF' },
        { 'Gear Lever': 'DOWN' },
        { 'Power Levers': 'IDLE' },
        { 'Avionics Master': 'OFF' },
        { 'Electric Master': 'ON' },
        { 'Fuel Valves': 'ON' },
        { 'Canopy': 'CLOSED' }
      ]
    },
    {
      title: 'Before Engine Start',
      items: [
        { 'Seat Belts': 'ON' },
        { 'Fuel Pumps': 'ON' },
        { 'Strobe Lights': 'ON' },
        { 'Engine Masters': 'ON' },
        { 'Glow Plugs': 'ON' }
      ]
    },
    {
      title: 'Engine Start',
      items: [
        { 'Propeller Area': 'CLEAR' },
        { 'Left Engine': 'START' },
        { 'Right Engine': 'START' },
        { 'Oil Pressure': 'CHECK' },
        { 'Ammeter': 'CHECK' }
      ]
    },
    {
      title: 'After Start',
      items: [
        { 'Avionics Master': 'ON' },
        { 'FMS': 'SET' },
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
        { 'De-Ice': 'AS REQUIRED' },
        { 'Lights': 'ON' }
      ]
    },
    {
      title: 'Takeoff',
      items: [
        { 'Power Levers': 'FULL' },
        { 'Rotate Speed': '75 KIAS' },
        { 'Climb Speed': '90 KIAS' },
        { 'Positive Climb': 'GEAR UP' },
        { 'Flaps': 'UP' }
      ]
    },
    {
      title: 'Climb',
      items: [
        { 'Power': '92%' },
        { 'Climb Speed': '120 KIAS' },
        { 'De-Ice': 'AS REQUIRED' }
      ]
    },
    {
      title: 'Cruise',
      items: [
        { 'Power': 'SET (75%)' },
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
        { 'Flaps': 'APPROACH' },
        { 'Gear': 'DOWN' },
        { 'Flaps': 'LANDING' }
      ]
    },
    {
      title: 'Landing',
      items: [
        { 'Final Approach Speed': '80 KIAS' },
        { 'Touchdown': 'MAIN WHEELS FIRST' },
        { 'Brakes': 'AS REQUIRED' }
      ]
    },
    {
      title: 'After Landing',
      items: [
        { 'Flaps': 'UP' },
        { 'Strobe Lights': 'OFF' },
        { 'De-Ice': 'OFF' }
      ]
    },
    {
      title: 'Shutdown',
      items: [
        { 'Parking Brake': 'SET' },
        { 'Avionics Master': 'OFF' },
        { 'Engine Masters': 'OFF' },
        { 'Fuel Valves': 'OFF' },
        { 'Electric Master': 'OFF' }
      ]
    }
  ]
}
