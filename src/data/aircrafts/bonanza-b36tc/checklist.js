import { AircraftName } from '@/data/aircrafts/aircraft-names'

export const bonanzaB36TCChecklist = {
  name: AircraftName.BonanzaB36TC,
  checklist: [
    {
      title: 'Cockpit Preparation',
      items: [
        { 'Parking Brake': 'SET' },
        { 'Control Lock': 'REMOVED' },
        { 'Power Lever': 'IDLE' },
        { 'Mixture': 'CUTOFF' }
      ]
    },
    {
      title: 'Before Engine Start',
      items: [
        { 'Battery Master': 'ON' },
        { 'Alternator & STBY Alternator': 'ON' },
        { 'Bus Volts': 'Min 23V' },
        { 'Aux Fuel Pump': 'LO, verify operational, then OFF' },
        { 'Fuel selector': 'L or R Main' },
        {
          'STBY Gyro Pump': 'ON, then OFF',
          'info': 'Wait for Horizon instrument to settle'
        },
        { 'Beacon Lights': 'ON' }
      ]
    },
    {
      title: 'Engine Start',
      items: [
        { 'Clearance': 'OBTAINED' },
        { '---IF Ambient Temp < 32 C (Normal Start)': '' },
        { 'Power Lever': 'FULL' },
        { 'Prop': 'FULL FORWARD' },
        { 'Mixture': 'RICH' },
        { 'Aux Fuel Pump': 'HI, until fuel flow, then OFF' },
        { 'Power Lever': '20%' },
        { 'Ignition': 'START' },
        { 'Power Lever': '~1000 RPM' },
        { 'Oil Pressure': 'CHECK' },
        { '---IF Ambient Temp > 32 C (Hot Start)': '' },
        { 'Power Lever': 'CLOSED' },
        { 'Prop': 'FULL FORWARD' },
        { 'Mixture': 'CUTOFF' },
        { 'Aux Fuel Pump': 'HI, for 60 sec, then OFF' },
        { 'Power Lever': 'FULL' },
        { 'Mixture': 'RICH' },
        { 'Aux Fuel Pump': 'HI, until fuel flow, then LO' },
        { 'Power Lever': '20%' },
        { 'Ignition': 'START' },
        { 'Power Lever': '~1000 RPM' },
        { 'Oil Pressure': 'CHECK' }
      ]
    },
    {
      title: 'After Engine Start',
      items: [
        { 'Mixture': 'LEAN' },
        { 'Avionics Master': 'ON' },
        { 'Bus Volts': '28V' },
        { 'BARO': 'Set' },
        { 'Flaps': 'Set for takeoff' },
        { 'Trims': 'Set for takeoff' },
        { 'Parking Brake': 'RELEASE' },
        { 'Flight Controls': 'FREE & CORRECT' },
        { 'A/C & Cabin heating': 'Set as required' },
        { 'Taxi Lights': 'ON' }
      ]
    },
    {
      title: 'Before Takeoff',
      items: [
        { 'Runway Clearance': 'OBTAINED' },
        { 'Runway Alignment': 'CHECK' },
        { 'Heading Bug': 'SET' },
        { 'Pitot Heat': 'ON' },
        { 'Prop': 'FULL FORWARD' },
        { 'Mixture': 'RICH' },
        { 'Taxi Lights': 'OFF' },
        { 'Landing Lights': 'ON' }
      ]
    },
    {
      title: 'Takeoff',
      items: [
        { 'Departure Clearance': 'OBTAINED' },
        { 'Power Lever': 'FULL' },
        { 'Rotate Speed': '80 KIAS' },
        { 'Climb Speed': '100 KIAS' },
        { 'Landing Gear': 'UP' },
        { 'Flaps': 'RETRACT at safe speed' }
      ]
    },
    {
      title: 'Climb',
      items: [
        { 'Power': 'SET' },
        { 'Prop': '2500 RPM' },
        {
          'BARO': 'Set to STD (if applicable)',
          'info': 'STD: 29.92 in / 1013 hPa'
        },
        { 'Landing Lights': 'OFF' }
      ]
    },
    {
      title: 'Cruise',
      items: [
        { 'Power': '45 - 75%' },
        { 'Prop': '2100 - 2500 RPM' },
        { 'Mixture': 'LEAN' },
        { 'Fuel': 'CHECK balance and quantity' },
        {
          'TOD calculation': 'Obtained',
          'info':
            'Distance (NM): (Altitude to lose in ft / 1000) * 3, VS (fpm): 5 x Ground Speed (kts)'
        }
      ]
    },
    {
      title: 'Descent',
      items: [
        { 'TOD': 'Start descent as calculated' },
        { 'ATIS & Weather': 'OBTAIN' },
        { 'BARO': 'SET to destination' },
        { 'Mixture': 'RICH' },
        { 'Fuel': 'CHECK balance and quantity' }
      ]
    },
    {
      title: 'Approach',
      items: [
        { 'Landing lights': 'ON' },
        { 'Approach Speed': '110 KIAS' },
        { 'Power': 'AS REQUIRED' },
        { 'Prop': 'FULL FORWARD' },
        { 'Mixture': 'RICH' },
        { 'Fuel': 'CHECK balance and quantity' },
        { 'Gear': 'DOWN' },
        { 'Flaps': 'AS REQUIRED' },
        { 'Landing Clearance': 'OBTAINED' }
      ]
    },
    {
      title: 'Landing',
      items: [
        { 'TD Speed': '~75 KIAS' },
        { 'Touchdown': 'MAIN WHEELS FIRST' },
        { 'Brakes': 'AS REQUIRED' }
      ]
    },
    {
      title: 'After Landing',
      items: [
        { 'Parking Clearance': 'OBTAINED' },
        { 'Flaps': 'UP' },
        { 'Landing Lights': 'OFF' },
        { 'Taxi Lights': 'ON' }
      ]
    },
    {
      title: 'Shutdown',
      items: [
        { 'Parking Brake': 'SET' },
        { 'Taxi Lights': 'OFF' },
        { 'Avionics Master': 'OFF' },
        { 'Power': '1000 RPM' },
        { 'Aux Fuel Pump': 'OFF' },
        { 'Mixture': 'CUTOFF' },
        { 'Ignition': 'OFF' },
        { 'Subpanel Switches': 'OFF' },
        { 'Alternator & STBY Alternator': 'OFF' },
        { 'Beacon Lights': 'OFF' },
        { 'Battery Master': 'OFF' },
        { 'Control Lock': 'INSTALLED' }
      ]
    }
  ]
}
