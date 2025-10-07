export const cessnaLongitudeChecklist = {
  name: "Cessna Citation Longitude",
  checklist: [
    {
      title: "Pre-Flight",
      items: [
        { "Battery Master": "ON" },
        { "External Power": "CONNECT (if needed)" },
        { "Avionics Master": "ON" },
        { "Fuel Quantity": "CHECK" },
        { "IRS Alignment": "CONFIRM" },
        { "FMS Flight Plan": "LOAD" },
        { "NAV Radios": "SET" },
        { "Altimeter": "SET (Baro)" },
        { "Flaps": "CHECK & SET for Takeoff" },
        { "Controls": "FREE & CORRECT" }
      ]
    },
    {
      title: "Engine Start",
      items: [
        { "Beacon Light": "ON" },
        { "Parking Brake": "SET" },
        { "Fuel Pumps": "AUTO" },
        { "Throttles": "IDLE" },
        { "Engine Start Switch": "ENG 1 (Monitor N2)" },
        { "N2 Above 20%": "Move ENG 1 to RUN" },
        { "Repeat for ENG 2": "" },
        { "Generators": "ON" },
        { "APU": "OFF (if used)" }
      ]
    },
    {
      title: "Before Taxi",
      items: [
        { "Avionics": "CHECK & CONFIGURE" },
        { "Flight Plan": "VERIFY" },
        { "Autopilot": "SET (ALT, HDG, VS, FLC)" },
        { "Takeoff Trim": "SET" },
        { "Rudder Trim": "CENTER" },
        { "Flaps": "SET for Takeoff" },
        { "Brakes": "CHECK" },
        { "Taxi Lights": "ON" }
      ]
    },
    {
      title: "Taxi",
      items: [
        { "Parking Brake": "RELEASE" },
        { "Taxi Clearance": "OBTAINED" },
        { "Brakes & Steering": "CHECK" },
        { "Flight Controls": "CHECK" },
        { "Strobe Lights": "ON" }
      ]
    },
    {
      title: "Before Takeoff",
      items: [
        { "Runway Alignment": "CONFIRM" },
        { "Flaps": "SET for Takeoff" },
        { "Trim": "CHECK" },
        { "Landing Lights": "ON" },
        { "Transponder": "ON (Mode C)" },
        { "Takeoff Power": "SET" },
        { "Speed Indicators": "CHECK" },
        { "Autopilot": "ARM if needed" }
      ]
    },
    {
      title: "Takeoff",
      items: [
        { "Throttles": "TOGA" },
        { "Airspeed Alive": "CONFIRM" },
        { "80 KTS": "CHECK" },
        { "Rotate at VR": "(~110-120 KTS)" },
        { "Positive Rate": "GEAR UP" },
        { "Climb Power": "SET" },
        { "Flaps": "RETRACT at Safe Speed" },
        { "Autopilot": "ENGAGE (if desired)" }
      ]
    },
    {
      title: "Climb to FL100",
      items: [
        { "Landing Lights": "OFF" },
        { "Seat Belt Sign": "AS REQUIRED" },
        { "Autopilot": "MONITOR" },
        { "Cruise Altitude": "SET" }
      ]
    },
    {
      title: "Cruise",
      items: [
        { "Power Settings": "CHECK" },
        { "Fuel Balance": "MONITOR" },
        { "Altitude": "MAINTAIN" },
        { "Weather & ATC": "CHECK" },
        { "Navigation": "MONITOR" }
      ]
    },
    {
      title: "Descent",
      items: [
        { "ATIS & Weather": "CHECK" },
        { "Approach Briefing": "COMPLETE" },
        { "Autopilot": "SET for Descent" },
        { "Seat Belt Sign": "ON" },
        { "Pressurization": "CHECK" }
      ]
    },
    {
      title: "Approach",
      items: [
        { "Altimeter": "SET" },
        { "Landing Lights": "ON" },
        { "Flaps": "AS REQUIRED" },
        { "Gear": "DOWN at Final Approach Fix" },
        { "Speed": "MANAGE (~130 KTS)" }
      ]
    },
    {
      title: "Landing",
      items: [
        { "Flaps": "FULL (if needed)" },
        { "Speed": "VREF (~120-130 KTS)" },
        { "Autopilot": "DISCONNECT before touchdown" },
        { "Throttles": "IDLE at 30-50 ft" },
        { "Touchdown": "MAIN GEARS FIRST" },
        { "Spoilers": "DEPLOY" },
        { "Braking": "APPLY" },
        { "Reverse Thrust": "AS NEEDED" }
      ]
    },
    {
      title: "After Landing",
      items: [
        { "Speed Below 60 KTS": "STOW REV THRUST" },
        { "Taxi Lights": "ON" },
        { "Strobe & Landing Lights": "OFF" },
        { "Flaps": "RETRACT" },
        { "Transponder": "STBY" }
      ]
    },
    {
      title: "Shutdown",
      items: [
        { "Parking Brake": "SET" },
        { "Avionics Master": "OFF" },
        { "Fuel Pumps": "OFF" },
        { "Throttles": "CUTOFF" },
        { "Beacon Light": "OFF" },
        { "Battery Master": "OFF" }
      ]
    }
  ]
}