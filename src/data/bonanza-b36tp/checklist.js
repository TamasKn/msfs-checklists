import { AircraftName } from '@/data/aircrafts/aircraft-names'

export const bonanzaB36TPChecklist = {
  name: AircraftName.BonanzaB36TP,
  checklist: [
    {
      title: 'Before Engine Start',
      items: [
        { 'Control locks': 'Removed' },
        { 'Parking brake': 'Set' },
        { 'Power levers': 'Idle' },
        { 'Prop levers': 'Full forward' },
        { 'Condition lever': 'Cutoff' },
        { 'Aileron trim': 'Center' },
        { 'Fuel selector': 'L or R Main' },
        { 'Battery Master': 'ON' },
        { 'Beacon light': 'ON' },
        { 'Volts': 'Min 23V' },
        { 'STBY Alt': 'ON' },
        { 'Fuel Pump': 'Audible P1 & P2, then OFF' },
        { 'Ignition': 'Auto, then ON' },
        {
          'STBY Gyro Pump': 'ON, then OFF',
          'info': 'Wait for Horizon instrument to settle'
        }
      ]
    },
    {
      title: 'Engine Start',
      items: [
        { 'Starter': 'ON' },
        { 'NG%': 'Wait until 15.0, then Condition Lever forward' },
        { 'Volts': 'Min 15' },
        { 'ITT': 'Monitor, less than 1090 C' },
        { 'Starter': 'OFF at NG% 52' },
        { 'Ignition': 'OFF' },
        { 'Generator': 'ON' },
        { 'Bus Volts (VDC)': '28V' },
        { 'Oil pressure': 'Indicates within thirty seconds' },
        { 'Engine instruments': 'Check normal' },
        { 'Fuel pump': 'Auto or on as required' }
      ]
    },
    {
      title: 'After Engine Start',
      items: [
        { 'Avionics Master': 'ON' },
        { 'ITT and torque': 'Within limits' },
        { 'Generator and ammeter': 'Check charge' },
        { 'Oil pressure and temperature': 'Normal range' },
        { 'Avionics': 'Set' },
        { 'A/C & Cabin heating': 'Set as required' },
        { 'Flight instruments': 'Checked and set' },
        { 'Taxi lights': 'ON' }
      ]
    },
    {
      title: 'Before Takeoff',
      items: [
        { 'Flight controls': 'Free and correct' },
        { 'BARO': 'Set' },
        { 'Trim': 'Set for takeoff' },
        { 'Flaps': 'Set for takeoff' },
        { 'Power lever': 'Idle' },
        { 'Propeller': 'Full forward' },
        { 'Condition lever': 'High idle' },
        { 'Pitot Heat': 'ON' },
        { 'Door Seals Switch': 'ON' },
        { 'Taxi lights': 'OFF' },
        { 'Landing lights': 'ON' }
      ]
    },
    {
      title: 'Climb',
      items: [
        { 'Propeller': '2200 RPM' },
        { 'Fuel imbalance': 'Max 15 gal' },
        { 'Flaps': 'Retract at safe speed' },
        { 'Engine instruments': 'Monitor' },
        { 'Landing lights': 'OFF' }
      ]
    },
    {
      title: 'Cruise',
      items: [
        { 'Propeller': 'Max 2000 RPM' },
        { 'Fuel': 'Balance and quantity checked' },
        {
          'BARO': 'Set to STD (if applicable)',
          'info': 'STD: 29.92 in / 1013 hPa'
        },
        { 'Prop heat': 'IF REQ' },
        { 'Engine instruments': 'Monitor' },
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
        { 'ATIS and Weather': 'Obtained and Checked' },
        { 'Power': 'Reduce for descent' },
        { 'Propeller': 'As required' },
        { 'Fuel': 'Balance and quantity checked' }
      ]
    },
    {
      title: 'Approach',
      items: [
        { 'Landing lights': 'ON' },
        { 'Speed': '90-100 KIAS' },
        { 'Ignition': 'AUTO' },
        { 'Prop Heat': 'OFF' },
        { 'BARO': 'Set to destination' },
        { 'Landing gear': 'Down by FAF' },
        { 'Flaps': 'As required' }
      ]
    },
    {
      title: 'Landing',
      items: [
        { 'Propeller': 'High' },
        { 'Fuel pump': 'PUMP1 ON' },
        { 'TD Speed': '~75 KIAS' }
      ]
    },
    {
      title: 'After Landing',
      items: [
        { 'Ignition': 'OFF' },
        { 'Pitot Heat': 'OFF' },
        { 'Flaps': 'Retract' },
        { 'Fuel pump': 'Off' },
        { 'Door Seals Switch': 'OFF' },
        { 'Taxi lights': 'ON' },
        { 'Landing lights': 'OFF' }
      ]
    },
    {
      title: 'Shutdown',
      items: [
        { 'Parking Break': 'Set' },
        { 'Avionics master': 'OFF' },
        { 'Power levers': 'Idle' },
        { 'Propeller levers': 'High idle' },
        { 'Condition lever': 'Cutoff' },
        { 'Generator': 'OFF' },
        { 'STBY Alt': 'OFF' },
        { 'Fuel Pumps': 'OFF' },
        { 'Lights': 'OFF' },
        { 'Battery Master': 'OFF' },
        { 'Control lock': 'Installed' }
      ]
    }
  ]
}
