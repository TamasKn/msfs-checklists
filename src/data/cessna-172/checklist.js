import { AircraftName } from '@/data/aircrafts/aircraft-names'

export const cessna172Checklist = {
  name: AircraftName.Cessna172,
  checklist: [
    {
      title: 'Pre-Flight',
      items: [
        { 'Documents': 'CHECK (ARROW)' },
        { 'Control Lock': 'REMOVE' },
        { 'Master Switch': 'ON' },
        { 'Fuel Quantity': 'CHECK' },
        { 'Avionics': 'OFF' },
        { 'Master Switch': 'OFF' },
        { 'External Inspection': 'COMPLETE' }
      ]
    },
    {
      title: 'Before Engine Start',
      items: [
        { 'Parking Brake': 'SET' },
        { 'Fuel Selector': 'BOTH' },
        { 'Fuel Shutoff Valve': 'OPEN' },
        { 'Mixture': 'RICH' },
        { 'Throttle': 'OPEN 1/4 INCH' }
      ]
    },
    {
      title: 'Engine Start',
      items: [
        { 'Propeller Area': 'CLEAR' },
        { 'Master Switch': 'ON' },
        { 'Beacon Light': 'ON' },
        { 'Fuel Pump': 'ON (for 3-5 sec), then OFF' },
        { 'Magnetos': 'START' },
        { 'Oil Pressure': 'CHECK GREEN' },
        { 'Throttle': '1000 RPM' }
      ]
    },
    {
      title: 'After Engine Start',
      items: [
        { 'Avionics Bus 1 & 2': 'ON' },
        { 'Flight Instruments': 'SET & CHECK' },
        { 'Mixture': 'LEAN for taxi' },
        { 'Pitot Heat': 'ON' }
      ]
    },
    {
      title: 'Run-up / Pre-Takeoff',
      items: [
        { 'Parking Brake': 'SET' },
        { 'Throttle': '1800 RPM' },
        { 'Magnetos': 'CHECK (max drop 150, diff 50)' },
        { 'Engine Instruments': 'CHECK GREEN' },
        { 'Amps / Volts': 'CHECK' },
        { 'Flight Controls': 'FREE & CORRECT' },
        { 'Throttle': 'IDLE' }
      ]
    },
    {
      title: 'Before Takeoff',
      items: [
        { 'Flaps': 'SET (0-10 degrees)' },
        { 'Trim': 'SET for Takeoff' },
        { 'Mixture': 'RICH' },
        { 'Landing Light': 'ON' },
        { 'Strobe Lights': 'ON' },
        { 'Transponder': 'ALT' }
      ]
    },
    {
      title: 'Takeoff',
      items: [
        { 'Throttle': 'FULL' },
        { 'Rotate': '55 KIAS' },
        { 'Climb Speed': '74 KIAS (Vy)' }
      ]
    },
    {
      title: 'Climb',
      items: [
        { 'Flaps': 'UP (above 60 KIAS)' },
        { 'Mixture': 'LEAN (above 3000 ft)' }
      ]
    },
    {
      title: 'Cruise',
      items: [
        { 'Power': 'SET (2200-2500 RPM)' },
        { 'Mixture': 'LEAN' },
        { 'Trim': 'SET' }
      ]
    },
    {
      title: 'Descent',
      items: [
        { 'ATIS/AWOS': 'OBTAIN' },
        { 'Altimeter': 'SET' },
        { 'Mixture': 'RICHEN' }
      ]
    },
    {
      title: 'Before Landing',
      items: [
        { 'Seat Belts': 'SECURE' },
        { 'Fuel Selector': 'BOTH' },
        { 'Mixture': 'RICH' },
        { 'Landing Light': 'ON' },
        { 'Flaps': 'AS REQUIRED' }
      ]
    },
    {
      title: 'Landing',
      items: [
        { 'Airspeed': '65 KIAS (final)' },
        { 'Touchdown': 'MAIN WHEELS FIRST' }
      ]
    },
    {
      title: 'After Landing',
      items: [
        { 'Flaps': 'UP' },
        { 'Strobe Lights': 'OFF' },
        { 'Landing Light': 'OFF' },
        { 'Taxi Light': 'ON' },
        { 'Transponder': 'GND or STBY' }
      ]
    },
    {
      title: 'Shutdown',
      items: [
        { 'Parking Brake': 'SET' },
        { 'Avionics': 'OFF' },
        { 'Mixture': 'IDLE CUT-OFF' },
        { 'Magnetos': 'OFF' },
        { 'Master Switch': 'OFF' },
        { 'Control Lock': 'INSTALL' }
      ]
    }
  ]
}
