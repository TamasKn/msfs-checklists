import { AircraftName } from '@/data/aircrafts/aircraft-names'

export const grandDukeChecklist = {
  name: AircraftName.GrandDuke,
  checklist: [
    {
      title: 'Cockpit Preparation',
      items: [
        { 'Control Locks': 'REMOVE' },
        { 'Parking Brake': 'SET' },
        { 'Oxygen Pressure': '1550-1850 PSI' },
        { 'Power Levers': 'IDLE' },
        { 'Prop Levers': 'HIGH RPM' },
        { 'Condition Levers': 'CUTOFF' },
        { 'Fuel Selectors': 'ON' }
      ]
    },
    {
      title: 'Before Engine Start',
      items: [
        { 'Beacon': 'ON' },
        { 'Battery Master': 'ON' },
        { 'Fuel Quantity': 'CHECK' },
        { 'Battery Selector': '#1' },
        { 'Bus Volts': 'MIN 23V' },
        { 'Battery Selector': '#2' },
        { 'Bus Volts': 'MIN 23V' },
        { 'Battery Selector': 'BOTH' },
        { 'L Ignition': 'AUTO, THEN ON' },
        { 'R Ignition': 'AUTO, THEN ON' },
        { 'L & R Wing Pump': 'CHECK, THEN OFF' },
        { 'L & R Aux Pump': 'CHECK, THEN OFF' }
      ]
    },
    {
      title: 'Engine Start',
      items: [
        { 'Right Starter': 'ON' },
        { 'Bus Volts': 'MIN 15V' },
        { 'Ng': 'MIN 15%' },
        { 'Right Condition Lever': 'RUN' },
        { 'ITT': '< 1090°C' },
        { 'Right Starter': 'OFF AT 52% NG' },
        { 'Right Ignition': 'OFF' },
        { 'Engine Instruments': 'CHECK' },
        { 'Right Generator': 'ON' },
        { 'Right Generator Load': '< 60' },
        { 'Bus Volts': 'MIN 28V' },
        { 'Battery Temp': '< 48°C' },
        { 'Left Engine': 'REPEAT' }
      ]
    },
    {
      title: 'After Engine Start',
      items: [{ 'Inverter': 'MAIN' }]
    },
    {
      title: 'Takeoff',
      items: [{ 'ITT': '< 805°C' }]
    },
    {
      title: 'Climb',
      items: [
        { 'Ignition': 'AUTO/OFF' },
        { 'Oil Doors': 'OPEN' },
        { 'Props': '2190 RPM' }
      ]
    },
    {
      title: 'Cruise',
      items: [
        { 'Recognition Lights': 'OFF' },
        { 'Oil Doors': 'CLOSED' },
        { 'Fuel Imbalance': 'MAX 25 GAL' },
        { 'Props': '2000 RPM' }
      ]
    },
    {
      title: 'Descent/Approach',
      items: [
        { 'Fuel Selectors': 'ON' },
        { 'Recognition Lights': 'ON' },
        { 'Windshield Heat': 'OFF' },
        { 'Prop Heat': 'OFF' },
        { 'Ignition': 'AUTO' },
        { 'Oil Doors': 'OPEN' }
      ]
    },
    {
      title: 'Landing',
      items: [{ 'Wing Pumps': 'ON' }]
    },
    {
      title: 'After Landing',
      items: [{ 'Oil Doors': 'CLOSED' }, { 'Pitot Heat': 'OFF' }]
    },
    {
      title: 'Shutdown',
      items: [
        { 'Avionics Switches': 'OFF' },
        { 'Pitch Trim': 'OFF' },
        { 'Generators': 'OFF' },
        { 'Power Levers': 'IDLE' },
        { 'Prop Levers': 'FEATHER' },
        { 'Condition Levers': 'CUTOFF' },
        { 'Wing Pumps': 'OFF AT < 10% NG' },
        { 'Battery Master': 'OFF' },
        { 'Battery Selector': '#1' },
        { 'Control Locks': 'INSTALL' }
      ]
    }
  ]
}
