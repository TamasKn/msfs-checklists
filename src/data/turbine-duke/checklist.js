import { AircraftName } from '@/data/aircrafts/aircraft-names'

export const turbineDukeChecklist = {
  name: AircraftName.TurbineDuke,
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
        { 'Fuel Selectors': 'ON' },
        { 'VFR/IFR CLEARANCE': 'OBTAINED' }
      ]
    },
    {
      title: 'Before Engine Start',
      items: [
        { 'START CLEARANCE': 'OBTAINED' },
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
        { 'R Starter': 'ON' },
        { 'Bus Volts': 'MIN 15V' },
        { 'NG%': 'MIN 15%' },
        { 'R Condition Lever': 'RUN' },
        { 'ITT': '< 1090°C' },
        { 'R Starter': 'OFF AT 52% NG' },
        { 'R Ignition': 'OFF' },
        { 'Engine Instruments': 'CHECK' },
        { 'R Generator': 'ON' },
        { 'R Generator Load': '< 60' },
        { 'Bus Volts': 'MIN 28V' },
        { 'Battery Temp': '< 48°C' },
        { 'L Engine': 'REPEAT' }
      ]
    },
    {
      title: 'After Engine Start',
      items: [
        { 'Avionics Master': 'ON' },
        { 'Avionics Inverter': 'MAIN' },
        { 'Pitot Left': 'ON' },
        { 'Stall & Pitot Right': 'ON' },
        { 'Pitch Trim': 'ON' },
        { 'Transponder': 'SET' },
        { 'Taxi Lights': 'ON' }
      ]
    },
    {
      title: 'Takeoff',
      items: [
        { 'Runway/Departure Clearance': 'OBTAINED' },
        { 'Taxi Lights': 'OFF' },
        { 'Landing Lights': 'ON' },
        { 'ITT': '< 805°C' },
        { 'Runway Alignment': 'CONFIRM' },
        { 'Heading Bug': 'SET' },
        { 'Throttles': '90% (or AS REQ)' },
        { 'Positive Rate': 'GEAR UP' },
        { 'AP': 'ENGAGE, AS REQ' },
        { 'Flaps': 'RETRACT at Safe Speed' }
      ]
    },
    {
      title: 'Climb',
      items: [
        { 'Landing Lights': 'OFF' },
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
        { 'Props': '2000 RPM' },
        {
          'BARO': 'Set to STD (if applicable)',
          'info': 'STD: 29.92 in / 1013 hPa'
        },
        {
          'TOD calculation': 'Obtained',
          'info':
            'Distance (NM): (Altitude to lose in ft / 1000) * 3, VS (fpm): 5 x Ground Speed (kts)'
        },
        { 'Altitude': 'SET RWY + 1,000 ft' }
      ]
    },
    {
      title: 'Descent/Approach',
      items: [
        { 'Clearance': 'OBTAINED' },
        { 'TOD': 'Start descent as calculated' },
        { 'Recognition Lights': 'ON' },
        { 'Landing Lights': 'ON' },
        { 'ATIS & Weather': 'CHECK' },
        { 'Power': 'Reduce for descent' },
        { 'Propeller': 'As required' },
        { 'Windshield Heat': 'OFF' },
        { 'Prop Heat': 'OFF' },
        { 'Ignition': 'AUTO' },
        { 'Oil Doors': 'OPEN' },
        { 'Flaps': 'AS REQUIRED' },
        { 'Landing Gear': 'DOWN by FAF' }
      ]
    },
    {
      title: 'Landing',
      items: [{ 'Clearance': 'OBTAINED' }, { 'Wing Pumps': 'ON' }]
    },
    {
      title: 'After Landing',
      items: [
        { 'Taxi & Parking Clearance': 'OBTAINED' },
        { 'Oil Doors': 'CLOSED' },
        { 'Pitot Heat': 'OFF' },
        { 'Taxi Lights': 'ON' },
        { 'Landing Lights': 'OFF' }
      ]
    },
    {
      title: 'Shutdown',
      items: [
        { 'Avionics Master & Main': 'OFF' },
        { 'Pitch Trim': 'OFF' },
        { 'Generators': 'OFF' },
        { 'Ignition': 'OFF' },
        { 'Power Levers': 'IDLE' },
        { 'Prop Levers': 'FEATHER' },
        { 'Condition Levers': 'CUTOFF' },
        { 'Wing Pumps': 'OFF AT < 10% NG' },
        { 'Prop Levers': 'FULL FORWARD' },
        { 'Battery Master': 'OFF' },
        { 'Battery Selector': '#1' },
        { 'Control Locks': 'INSTALL' }
      ]
    }
  ]
}
