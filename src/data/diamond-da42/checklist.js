import { AircraftName } from '@/data/aircrafts/aircraft-names'

export const diamondDa42Checklist = {
  name: AircraftName.DiamondDa42,
  checklist: [
    {
      title: 'Cockpit Preparation',
      items: [
        { 'ATC CLEARANCE': 'OBTAINED' },
        { 'Parking Brake': 'SET' },
        { 'Alternate Static': 'OFF' },
        { 'Gear Lever': 'DOWN' },
        { 'Power Levers': 'IDLE' },
        { 'Avionics Master': 'OFF' },
        { 'Electric Master': 'ON' },
        { 'Fuel Selector': 'ON, Guards closed' }
      ]
    },
    {
      title: 'Before Engine Start',
      items: [
        { 'START CLEARANCE': 'OBTAINED' },
        { 'L & R ECU': 'AUTO' },
        { 'Alternator': 'ON' },
        { 'BARO': 'SET' }
      ]
    },
    {
      title: 'Engine Start',
      items: [
        { 'Strobe Lights': 'ON' },
        { 'L Engine Master': 'ON' },
        { 'Glow Plugs': 'OUT' },
        { 'L Engine': 'START' },
        { 'Oil Pressure': 'CHECK' },
        { 'Voltage/Electrical Load': 'CHECK' },
        { 'Repeat R Engine': 'COMPLETE' }
      ]
    },
    {
      title: 'After Engine Start',
      items: [
        { 'Oil Pressure': 'CHECK' },
        { 'RPM': '710 +/-3' },
        { 'Fuel Selector': 'CROSSFEED' },
        { 'Avionics Master': 'ON' },
        { 'Pitot Heat': 'ON' },
        { 'STDBY Horizon Cage': 'SET' },
        { 'Fuel Selector': 'ON' },
        { 'FMS': 'SET' }
      ]
    },
    {
      title: 'Before Taxi',
      items: [
        { 'Flight Plan': 'DEPARTURE VERIFIED' },
        { 'Trim': 'SET for Takeoff' },
        { 'Altitude': 'SET -> FLC & VNV' },
        { 'Navigation': 'SET -> NAV/HDG' },
        { 'Transponder': 'ON & SET' },
        { 'Weather Radar': 'AS REQUIRED' },
        { 'De-Ice': 'AS REQUIRED' },
        { 'Taxi Lights': 'ON' }
      ]
    },
    {
      title: 'Taxi',
      items: [
        { 'Taxi Clearance': 'OBTAINED' },
        { 'Parking Brake': 'RELEASE' },
        { 'Brakes & Steering': 'CHECK' },
        { 'Flight Controls': 'CHECK' }
      ]
    },
    {
      title: 'Before Takeoff',
      items: [
        { 'Runway Clearance': 'OBTAINED' },
        { 'Fuel Pumps': 'ON' },
        { 'Flaps': 'CHECK' },
        { 'Trim': 'CHECK' },
        { 'Speed Indicators': 'CHECK' },
        { 'Landing Lights': 'ON' },
        { 'Taxi Lights': 'OFF' }
      ]
    },
    {
      title: 'Takeoff',
      items: [
        { 'Departure Clearance': 'OBTAINED' },
        { 'Runway Alignment': 'CONFIRM' },
        { 'Heading Bug': 'SET' },
        { 'Power': 'FULL' },
        { 'Rotate Speed': '75 KIAS' },
        { 'Positive Rate': 'GEAR UP' },
        { 'AP & YD': 'ENGAGE, AS REQ' },
        { 'Flaps': 'RETRACT at Safe Speed' }
      ]
    },
    {
      title: 'Climb',
      items: [
        { 'Power': '92%' },
        { 'Landing Lights': 'OFF' },
        { 'Fuel Pumps': 'OFF' },
        { 'De-Ice': 'AS REQUIRED' },
        { 'Autopilot': 'MONITOR' },
        { 'Cruise Altitude': 'SET' },
        { 'BARO': 'SET to STD' }
      ]
    },
    {
      title: 'Cruise',
      items: [
        { 'Power': 'SET 50-92%' },
        { 'Fuel Quantity': 'CHECK' },
        { 'Flight Plan': 'APPROACH VERIFIED' }
      ]
    },
    {
      title: 'Descent',
      items: [{ 'Power': 'SET 40-60%' }, { 'BARO': 'SET' }]
    },
    {
      title: 'Approach',
      items: [
        { 'Power': 'AS REQUIRED' },
        { 'Fuel Pumps': 'ON' },
        { 'Flaps': 'APPROACH' },
        { 'Gear': 'DOWN' },
        { 'Flaps': 'LANDING' }
      ]
    },
    {
      title: 'Landing',
      items: [
        { 'FAF Speed': '80 KIAS' },
        { 'Touchdown': '65 KIAS' },
        { 'Brakes': 'AS REQUIRED' },
        { 'Landing Lights': 'ON' }
      ]
    },
    {
      title: 'After Landing',
      items: [
        { 'Flaps': 'UP' },
        { 'Pitot Heat': 'OFF' },
        { 'De-Ice': 'OFF' },
        { 'Fuel Pumps': 'OFF' },
        { 'Landing Lights': 'OFF' },
        { 'Taxi Lights': 'ON' }
      ]
    },
    {
      title: 'Shutdown',
      items: [
        { 'Parking Brake': 'SET' },
        { 'Avionics Master': 'OFF' },
        { 'Engine Masters': 'OFF' },
        { 'Electric Master': 'OFF' },
        { 'Lights': 'OFF' }
      ]
    }
  ]
}
