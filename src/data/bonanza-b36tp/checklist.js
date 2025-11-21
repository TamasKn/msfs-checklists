import { AircraftName } from '@/data/aircrafts/aircraft-names'

export const bonanzaB36TPChecklist = {
  name: AircraftName.BonanzaB36TP,
  checklist: [
    {
      title: 'Before Engine Start',
      items: [
        { 'Seats, belts and harnesses': 'Adjusted and fastened' },
        { 'Passenger briefing': 'Complete' },
        { 'Parking brake': 'Set' },
        { 'Electrical switches': 'Off' },
        { 'Avionics master': 'Off' },
        { 'Fuel selector': 'On main tank' },
        { 'Condition levers': 'Cutoff' },
        { 'Power levers': 'Idle' },
        { 'Prop levers': 'Full forward' },
        { 'Inertial separator': 'Closed' },
        { 'Oil cooler door': 'Open' },
        { 'Weather and altimeter': 'Set and reviewed' },
        { 'Area around propeller': 'Clear' }
      ]
    },
    {
      title: 'Engine Start',
      items: [
        { 'Battery master': 'On' },
        { 'Ignition switch': 'Start' },
        { 'Condition lever': 'Low idle at twelve percent NG' },
        { 'Oil pressure': 'Indicates within thirty seconds' },
        { 'ITT': 'Monitor, remain within limits' },
        { 'Starter': 'Disengage at fifty percent NG' },
        { 'Generator': 'On' },
        { 'Avionics master': 'On' },
        { 'Engine instruments': 'Check normal' },
        { 'Fuel pump': 'Auto or on as required' }
      ]
    },
    {
      title: 'After Engine Start',
      items: [
        { 'ITT and torque': 'Within limits' },
        { 'Generator and ammeter': 'Check charge' },
        { 'Oil pressure and temperature': 'Normal range' },
        { 'Avionics and radios': 'Set' },
        { 'Environmental system': 'Set as required' },
        { 'Flight instruments': 'Checked and set' },
        { 'Beta range': 'Check function' }
      ]
    },
    {
      title: 'Run-Up',
      items: [
        { 'Parking brake': 'Set' },
        { 'Power lever': 'Advance to seventeen hundred RPM' },
        { 'Propeller governor': 'Cycle check' },
        { 'Fuel control and torque response': 'Smooth and within limits' },
        { 'Condition lever': 'High idle' },
        { 'Inertial separator': 'Operate then closed' },
        { 'Oil cooler door': 'Set for takeoff' },
        { 'Annunciator panel': 'Check all out' },
        { 'Beta range': 'Check engagement' },
        { 'Flight controls': 'Free and correct' }
      ]
    },
    {
      title: 'Before Takeoff',
      items: [
        { 'Flight controls': 'Free and correct' },
        { 'Flight instruments': 'Checked and set' },
        { 'Trim': 'Set for takeoff' },
        { 'Flaps': 'Set for takeoff' },
        { 'Power lever': 'Idle' },
        { 'Propeller': 'Full forward' },
        { 'Condition lever': 'High idle' },
        { 'Inertial separator': 'As required' },
        { 'Fuel pump': 'On' },
        { 'Doors and windows': 'Latched' },
        { 'Takeoff briefing': 'Reviewed' }
      ]
    },
    {
      title: 'Takeoff',
      items: [
        { 'Power lever': 'Advance to takeoff power' },
        { 'Torque and ITT': 'Within limits' },
        { 'Airspeed': 'Alive' },
        { 'Rotate': 'At proper speed' },
        { 'Positive rate': 'Gear up' },
        { 'Climb power': 'Set after safe altitude' }
      ]
    },
    {
      title: 'Climb',
      items: [
        { 'Torque': 'Set per climb table' },
        { 'Propeller': 'Set for climb RPM' },
        { 'Condition lever': 'High idle' },
        { 'Inertial separator': 'Closed unless icing' },
        { 'Oil cooler door': 'As required' },
        { 'Engine instruments': 'Monitor' }
      ]
    },
    {
      title: 'Cruise',
      items: [
        { 'Power': 'Set for cruise' },
        { 'Torque and ITT': 'Within limits' },
        { 'Condition lever': 'Low idle' },
        { 'Fuel': 'Balance and quantity checked' },
        { 'Engine instruments': 'Monitor' }
      ]
    },
    {
      title: 'Descent',
      items: [
        { 'ATIS and altimeter': 'Obtained and set' },
        { 'Power': 'As required for descent' },
        { 'Inertial separator': 'As required' },
        { 'Fuel pump': 'As required' },
        { 'Propeller': 'As required' },
        { 'Engine instruments': 'Monitor' }
      ]
    },
    {
      title: 'Approach',
      items: [
        { 'Seats and belts': 'Fastened' },
        { 'Fuel pump': 'On' },
        { 'Condition lever': 'High idle' },
        { 'Propeller': 'Full forward' },
        { 'Gear': 'Down, three green' },
        { 'Flaps': 'As required' },
        { 'Landing light': 'On' }
      ]
    },
    {
      title: 'Landing',
      items: [
        { 'Final checks': 'Gear down, flaps set' },
        { 'Airspeed': 'Stabilized' },
        { 'Touchdown': 'Main wheels first' },
        { 'Beta range': 'Engage after touchdown' },
        { 'Directional control': 'Maintain' }
      ]
    },
    {
      title: 'After Landing',
      items: [
        { 'Flaps': 'Up' },
        { 'Fuel pump': 'Off' },
        { 'Inertial separator': 'Closed' },
        { 'Oil cooler door': 'Open' },
        { 'Condition lever': 'Low idle' },
        { 'Lights': 'As required' },
        { 'Transponder': 'Standby' }
      ]
    },
    {
      title: 'Shutdown',
      items: [
        { 'Avionics master': 'Off' },
        { 'Power lever': 'Idle' },
        { 'Condition lever': 'Cutoff' },
        { 'Ignition': 'Off' },
        { 'Generator and battery': 'Off' },
        { 'Control lock': 'Installed' },
        { 'Chocks and covers': 'As required' }
      ]
    }
  ]
}
