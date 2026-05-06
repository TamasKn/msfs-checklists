import { AircraftName } from '@/data/aircrafts/aircraft-names'

export const baron58PChecklist = {
  name: AircraftName.Baron58P,
  checklist: [
    {
      title: 'Cockpit Preparation',
      items: [
        { 'Control locks': 'REMOVED' },
        { 'Parking Brake': 'SET' },
        { 'Emergency Gear Handle': 'STOWED' },
        { 'Throttles': 'IDLE' },
        { 'Props': 'FULL FORWARD' },
        { 'Mixture': 'CUTOFF' },
        { 'Aileron & Rudder': 'CENTERED' },
        { 'Fuel Selectors': 'ON' },
        { 'Cabin Pressure Shutoff': 'PUSHED' },
        { 'Door Seal STDBY Air': 'OFF' },
        { 'Cabin Pressure Mode': 'DUMP' },
        { 'Door Seal Mode': 'OFF' }
      ]
    },
    {
      title: 'Before Engine Start',
      items: [
        { 'Beacon': 'ON' },
        { 'Battery Master': 'ON' },
        { 'Bus Volts': 'min 23V' },
        { 'L & R Alternator': 'ON' },
        { 'L Fuel Boost Pump': 'LO, Audible, then OFF' },
        { 'R Fuel Boost Pump': 'LO, Audible, then OFF' },
        {
          'Cowl Flaps': 'OPEN (UP)',
          'info':
            'If CHT or oil temperatures rise too high, open them to increase airflow.'
        },
        { 'Strobe Lights': 'ON' }
      ]
    },
    {
      title: 'Engine Start',
      items: [
        { 'R Throttle': 'FULL' },
        { 'R Prop': 'FULL' },
        { 'R Mixture': 'RICH' },
        { 'R Fuel Boost Pump': 'HI for 2-3s' },
        { 'R Throttle': 'LOW' },
        { 'R Starter': 'IGNITE' },
        { 'R Throttle': '1000-1200 RPM' },
        { 'Oil Pressure': 'GREEN' },
        { 'R Alt Load': 'Below 25A' },
        { 'Bus Volts': '28V' },
        { 'Annunciators': 'CHECK' },
        { 'Engine Instruments': 'CHECK' },
        { 'L Engine': 'REPEAT STEPS' }
      ]
    },
    {
      title: 'Engine Start (HOT)',
      items: [
        { 'R Prop': 'FULL' },
        { 'R Mixture': 'CUTOFF' },
        { 'R Fuel Boost Pump': 'HI for 10-20s, then OFF' },
        { 'R Mixture': 'RICH' },
        { 'R Throttle': 'FULL' },
        { 'R Fuel Boost Pump': 'HI for 2-3s' },
        { 'Fuel Flow': '>3 Gph' },
        { 'R Fuel Boost Pump': 'OFF' },
        { 'R Throttle': 'LOW' },
        { 'R Starter': 'IGNITE' },
        { 'R Throttle': '1000-1200 RPM' },
        { 'Oil Pressure': 'GREEN' },
        { 'R Alt Load': 'below 25A' },
        { 'Bus Volts': '28V' },
        { 'Annunciators': 'CHECK' },
        { 'Engine Instruments': 'CHECK' },
        { 'L Engine': 'REPEAT STEPS' }
      ]
    },
    {
      title: 'After Engine Start',
      items: [
        { 'Avionics': 'ON' },
        { 'AC/Heater': 'AS REQ' },
        { 'Weather Radar': 'OFF/STDBY/ON' },
        { 'Mixture': 'LEAN FOR TAXI' },
        { 'Parking Brake': 'RELEASE' },
        { 'Brakes': 'CHECK' },
        { 'Taxi Lights': 'ON' }
      ]
    },
    {
      title: 'Before Takeoff',
      items: [
        { 'Mixture': 'RICH' },
        { 'Cabin Pressure Mode': 'PRESS' },
        { 'Door Seal Mode': 'PRESS' },
        { 'Transponder': 'SET' },
        { 'BARO': 'SET' },
        { 'Flaps': 'SET FOR TAKEOFF' },
        { 'Trims': 'SET FOR TAKEOFF' },
        { 'Flight Controls': 'CHECK' },
        { 'Ice Protection': 'AS REQ' },
        { 'L & R Pitot Heat': 'ON' },
        { 'Taxi Lights': 'OFF' },
        { 'Landing Lights': 'ON' }
      ]
    },
    {
      title: 'Takeoff',
      items: [
        { 'Power Levers': 'FULL' },
        { 'Rotate Speed': '81 KIAS' },
        { 'Props': '2500 RPM' },
        { 'Positive Climb': 'GEAR UP' },
        { 'Flaps': 'Retract at safe speed' }
      ]
    },
    {
      title: 'Climb',
      items: [
        { 'Climb Speed': '115 KIAS' },
        { 'Prop Sync': 'ON' },
        { 'Engine': 'MONITOR' },
        {
          'Cabin Pressure': 'MONITOR',
          'info': 'Cabin Controller: Set ACFT for target altitude'
        },
        { 'Landing Lights': 'OFF' },
        { 'NAV Lights': 'ON' }
      ]
    },
    {
      title: 'Cruise',
      items: [
        {
          'BARO': 'STD (if applicable)',
          'info': 'STD: 29.92 in / 1013 hPa'
        },
        { 'Cowl Flaps': 'CLOSED' },
        { 'Fuel Imbalance': 'max 15 Gal' },
        { 'Props': '2200 RPM' },
        { 'Mixture': 'LEAN (AS REQ)' },
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
        {
          'Cabin Pressure': 'Set Destination Altitude',
          'info': 'Cabin Controller: Set ACFT for target altitude'
        },
        { 'Throttle': 'REDUCE' },
        { 'Mixture': 'RICH' },
        { 'Cylinder Heat': 'min 116 C' }
      ]
    },
    {
      title: 'Approach',
      items: [
        { 'Landing Lights': 'ON' },
        { 'BARO': 'Set to Destination' },
        { 'Speed': '122 KTS' },
        { 'Fuel Imbalance': 'max 15 Gal' },
        { 'Mixture': 'RICH' },
        { 'Landing gear': 'Down by FAF' },
        { 'Flaps': 'APPROACH' }
      ]
    },
    {
      title: 'Landing',
      items: [{ 'Props': 'FULL FORWARD' }, { 'Flaps': 'FULL' }]
    },
    {
      title: 'After Landing',
      items: [
        { 'Cowl Flaps': 'OPEN' },
        { 'Flaps': 'UP' },
        { 'Cabin Pressure Mode': 'DUMP' },
        { 'Door Seal Mode': 'OFF' },
        { 'Ice Protection': 'OFF' },
        { 'Landing Lights': 'OFF' },
        { 'Taxi Lights': 'ON' }
      ]
    },
    {
      title: 'Shutdown',
      items: [
        { 'Parking Brake': 'SET' },
        { 'Avionics': 'OFF' },
        { 'Throttles': 'IDLE' },
        { 'Props': 'FULL FORWARD' },
        { 'Mixture': 'CUTOFF' },
        { 'Magnetos': 'OFF' },
        { 'Alternators': 'OFF' },
        { 'Subpanel Switches': 'OFF' },
        { 'Battery Master': 'OFF' },
        { 'Control Locks': 'INSTALLED' }
      ]
    }
  ]
}
