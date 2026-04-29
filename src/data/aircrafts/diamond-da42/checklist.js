import { AircraftName } from '@/data/aircrafts/aircraft-names'

export const diamondDa42Checklist = {
  name: AircraftName.DiamondDa42,
  checklist: [
    {
      title: 'Cockpit Preparation',
      items: [
        { 'ATC CLEARANCE': 'OBTAINED' },
        { 'Parking Brake': 'SET' },
        { 'Power Levers': 'IDLE' },
        { 'Electric Master': 'ON' },
        { 'Fuel Selector': 'ON, Guards closed' }
      ]
    },
    {
      title: 'Before Engine Start',
      items: [
        { 'START CLEARANCE': 'OBTAINED' },
        { 'L & R ECU': 'AUTO' },
        { 'Alternator': 'ON' }
      ]
    },
    {
      title: 'Engine Start',
      items: [
        { 'Strobe Lights': 'ON' },
        { 'L Engine Master': 'ON' },
        { 'Glow Plugs': 'Wait for OUT' },
        { 'L Engine': 'START' },
        { 'Oil Pressure': 'CHECK (out of RED)' },
        { 'Voltage/Electrical Load': 'CHECK' },
        { 'Repeat R Engine': 'COMPLETE' },
        { 'Oil Pressure': 'CHECK (out of RED)' }
      ]
    },
    {
      title: 'After Engine Start',
      items: [
        { 'RPM': '710 +/-3' },
        { 'Fuel Selector': 'CROSSFEED' },
        { 'Avionics Master': 'ON' },
        { 'Pitot Heat': 'ON' },
        { 'STDBY Horizon Cage': 'SET' },
        { 'Fuel Selector': 'ON' }
      ]
    },
    {
      title: 'Before Taxi',
      items: [
        { 'Flight Plan': 'DEPARTURE VERIFIED' },
        { 'Trim': 'SET for Takeoff' },
        { 'Flaps': 'SET for Takeoff' },
        { 'Altitude': 'SET -> FLC & VNV' },
        { 'CDI': 'GPS/LOC' },
        { 'Navigation': 'SET -> NAV/HDG' },
        { 'BARO': 'SET to Departure, PFD & Analog' },
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
        { 'Taxi Lights': 'OFF' },
        { 'Landing Lights': 'ON' }
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
        { 'GPS': 'Direct to Waypoint (if applicable)' },
        { 'De-Ice': 'AS REQUIRED' },
        { 'Autopilot': 'MONITOR' },
        { 'Cruise Altitude': 'SET' },
        { 'BARO': 'SET to STD (if applicable)' }
      ]
    },
    {
      title: 'Cruise',
      items: [
        { 'Power': 'SET 50-92%' },
        { 'Fuel Quantity': 'CHECK' },
        { 'Flight Plan': 'APPROACH VERIFIED' },
        { 'Altitude': 'SET RWY + 1,000 ft -> VNV' }
      ]
    },
    {
      title: 'Descent',
      items: [
        { 'Power': 'SET 20-60%' },
        { 'BARO': 'SET for Destination' },
        { 'Landing Lights': 'ON' }
      ]
    },
    {
      title: 'Approach',
      items: [
        { 'Fuel Pumps': 'ON' },
        { 'Flaps': 'APPROACH' },
        { 'Power': 'MANAGE' },
        { 'Approach': 'APPR (GP) armed at FAF' },
        { 'Gear': 'DOWN' },
        { 'Flaps': 'LANDING' }
      ]
    },
    {
      title: 'Landing',
      items: [{ 'FAF Speed': '80 KIAS' }, { 'Touchdown': '65 KIAS' }]
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
