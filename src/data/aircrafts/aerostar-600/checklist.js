import { AircraftName } from '@/data/aircrafts/aircraft-names'

export const aerostar600Checklist = {
  name: AircraftName.Aerostar600,
  checklist: [
    {
      title: 'Cockpit Preparation',
      items: [
        { 'ATC Clearance': 'OBTAINED' },
        { 'Parking Brake': 'SET' },
        { 'Throttle': 'IDLE' },
        { 'Props': 'FULL FORWARD' },
        { 'Mixture': 'CUTOFF' }
      ]
    },
    {
      title: 'Before Engine Start',
      items: [{ 'Battery Master': 'ON' }, { 'Beacon': 'ON' }]
    },
    {
      title: 'Engine Start',
      items: [
        { 'Start Clearance': 'OBTAINED' },
        { 'R Fuel Selector': 'Cycle, then ON' },
        { 'R Throttle': '25%', 'info': 'Open Aircraft EFB to monitor Engine' },
        { 'Mixture': '25%' },
        { 'R Fuel Boost': 'ON' },
        { 'R MAGNETOS': 'When fuel flow starts, START' },
        { 'Mixture': 'Increase as req to ignite the engine' },
        { 'R Alternator': 'ON' },
        { 'R Fuel Boost': 'OFF' },
        { 'Oil Pressure': 'CHECK' },
        { 'L Engine': 'Repeat steps' }
      ]
    },
    {
      title: 'Before Taxi',
      items: [
        { 'Taxi Clearance': 'OBTAINED' },
        { 'Avionics Master': 'ON' },
        { 'Flaps': 'SET FOR TAKEOFF' },
        { 'Trims': 'SET FOR TAKEOFF' },
        { 'Flight Controls': 'FREE & CORRECT' },
        { 'Parking Brake': 'RELEASE' },
        {
          'Landing Lights': 'ON',
          'info': 'As no dedicated Taxi lights, use Landing lights for taxiing'
        }
      ]
    },
    {
      title: 'Before Takeoff',
      items: [
        { 'Departure Clearance': 'OBTAINED' },
        { 'BARO': 'SET' },
        { 'Pitot Heat': 'ON' },
        { 'Props': 'FULL FORWARD' },
        { 'Mixture': 'RICH' },
        { 'Autopilot Switch': 'ON (if req)' },
        { 'GPSS Switch': 'ON (if req)' }
      ]
    },
    {
      title: 'Takeoff',
      items: [
        { 'Throttle': 'FULL' },
        { 'Rotate Speed': '85 KIAS' },
        { 'Landing Gear': 'UP' },
        { 'Flaps': 'RETRACT at SAFE SPEED' },
        { 'Strobe Lights': 'ON' }
      ]
    },
    {
      title: 'Climb',
      items: [
        { 'Climb Rate': '800 fpm' },
        { 'Climb Speed': 'max 122 KIAS' },
        { 'Props': '2400 RPM' },
        { 'Landing Lights': 'OFF' }
      ]
    },
    {
      title: 'Cruise',
      items: [
        { 'Throttle': 'SET' },
        { 'Props': '2000 RPM' },
        { 'Mixture': 'LEAN' },
        { 'Autopilot': 'ENGAGED (if req)' },
        { 'Navigation': 'GPS/LOC CHECK' },
        { 'Approach': 'VERIFIED' },
        {
          'TOD Calculation': 'OBTAINED',
          'info':
            'Distance (NM): (Altitude to lose in ft / 1000) * 3, VS (fpm): 5 x Ground Speed (kts)'
        },
        { 'Altitude': 'SET RWY + 1,000 ft' }
      ]
    },
    {
      title: 'Descent',
      items: [
        { 'TOD': 'Start descent as calculated' },
        { 'Throttle': 'SET to Descent' },
        { 'ATIS & Weather': 'CHECK' }
      ]
    },
    {
      title: 'Approach & Landing',
      items: [
        { 'Clearance': 'OBTAINED' },
        { 'BARO': 'SET to Destination' },
        { 'Landing Lights': 'ON' },
        { 'L & R Fuel Boost': 'ON' },
        { 'Flaps': '20 DEG below 175 KIAS' },
        { 'Approach Speed': '140 KIAS' },
        { 'Throttle': 'AS REQUIRED' },
        { 'Props': 'FULL FORWARD' },
        { 'Mixture': 'RICH' },
        { 'Gear': 'DOWN below 150 KIAS' },
        { 'Flaps': 'FULL' },
        { 'Touchdown': '100 KIAS' }
      ]
    },
    {
      title: 'After Landing',
      items: [
        { 'Flaps': 'UP' },
        { 'L & R Fuel Boost': 'OFF' },
        { 'Pitot Heat': 'OFF' },
        { 'Strobe Lights': 'OFF' },
        { 'Cabin Heater': 'OFF' },
        { 'Mixture': 'LEAN' }
      ]
    },
    {
      title: 'Shutdown',
      items: [
        { 'Parking Brake': 'SET' },
        { 'Landing Lights': 'OFF' },
        { 'Avionics Master': 'OFF' },
        { 'Autopilot Switch': 'OFF' },
        { 'GPSS Switch': 'OFF' },
        { 'Mixture': 'CUTOFF' },
        { 'Magnetos': 'OFF' },
        { 'Beacon': 'OFF' },
        { 'R & L Fuel Selector': 'OFF' },
        { 'R & L Alternator': 'OFF' },
        { 'Battery Master': 'OFF' }
      ]
    }
  ]
}
