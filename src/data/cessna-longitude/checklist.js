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
        { "Flight Controls": "FREE & CORRECT" }
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
      title: "G5000 PERF",
      items: [
        { "Weight and Fuel": "TAKEOFF FOB sync" },
        { "SPEED Bugs": "ALL, AS REQ" },
        { "FLAP Speeds": "CHECK" }
      ]
    },
    {
      title: "G5000 INIT",
      items: [
        { "Weather": "SET WIND/TEMP, Use RAT" },
        { "Takeoff Config": "SET Takeoff Flap" },
        { "Takeoff Data": "ACCEPT Takeoff Speeds" },
        { "INIT": "ACCEPT" }
      ]
    },
    {
      title: "Before Taxi",
      items: [
        { "Avionics": "CHECK & CONFIGURE" },
        { "Perf INIT": "CONFIGURED" },
        { "Flight Plan": "VERIFIED" },
        { "Takeoff Trim": "SET (~ +40%)" },
        { "Flaps": "SET for Takeoff" },
        { "Altitude": "SET -> FLC" },
        { "Navigation": "SET -> NAV/HDG" },
        { "Rudder Trim": "CENTER" },
        { "Brakes": "CHECK & SET & RETRACTED" },
        { "Ice Protection": "AS REQUIRED" },
        { "Lights (Taxi, Rec, AC, WI, TF, PS/SB, EM)": "ON" }
      ]
    },
    {
      title: "Taxi",
      items: [
        { "Parking Brake": "RELEASE" },
        { "Taxi Clearance": "OBTAINED" },
        { "Brakes & Steering": "CHECK" },
        { "Flight Controls": "CHECK" }
      ]
    },
    {
      title: "Before Takeoff",
      items: [
        { "Runway Alignment": "CONFIRM" },
        { "Flaps": "SET for Takeoff" },
        { "Trim": "CHECK" },
        { "Speedbrakes": "CHECK/RETRACTED" },
        { "Ice Protection": "CHECK, AS REQ" },
        { "Transponder": "ON" },
        { "Takeoff Power": "SET" },
        { "Heading Bug": "SET" },
        { "SPD KNOB": "FMS" },
        { "Speed Indicators": "CHECK" },
        { "Weather Radar": "AS REQUIRED" },
        { "LDG, Pulse Lights": "ON" },
        { "Taxi, WI Lights": "OFF" }
      ]
    },
    {
      title: "Takeoff",
      items: [
        { "Throttles": "TOGA" },
        { "Positive Rate": "GEAR UP" },
        { "Climb Power": "SET" },
        { "AP & AT": "ENGAGE, AS REQ" },
        { "Flaps": "RETRACT at Safe Speed" },
      ]
    },
    {
      title: "Climb",
      items: [
        { "Landing Lights": "OFF" },
        { "Autopilot": "MONITOR" },
        { "Cruise Altitude": "SET" },
        { "BARO (above 10,000 ft)": "SET to STD" },
      ]
    },
    {
      title: "Cruise",
      items: [
        { "WI, PS/SB Lights": "OFF" },
        { "Power Settings": "CHECK" },
        { "Fuel Balance": "MONITOR" },
        { "BARO": "SET destination value" },
        { "Navigation": "SET MINIMUMS + 20 ft / FREQ" },
        { "Speed Constraints": "IAF (~200 KTS) to FAF (~130 KTS)" },
        { "Altitude": "SET RWY + 1,000 ft -> VNAV" },
      ]
    },
    {
      title: "Descent",
      items: [
        { "ATIS & Weather": "CHECK" },
        { "Approach Briefing": "COMPLETE" },
        { "SPD KNOB": "FMS" },
        { "BARO (below 10,000 ft)": "ARM destination value" },
        { "Approach": "APPR (GS) stdby" },
        { "WI, PS/SB Lights": "ON" },
      ]
    },
    {
      title: "Approach",
      items: [
        { "Landing Lights": "ON" },
        { "Flaps": "AS REQUIRED" },
        { "Gear": "DOWN at FAF" },
        { "Speed": "MANAGE" },
        { "Approach": "GS armed at FAF" },
      ]
    },
    {
      title: "Landing",
      items: [
        { "Flaps": "FULL (if needed)" },
        { "Speed": "VREF (~120-130 KTS)" },
        { "AP & AT": "DISCONNECT before touchdown" },
        { "Throttles": "IDLE at 30-50 ft" },
        { "Touchdown": "MAIN GEARS FIRST" },
        { "Braking": "APPLY" },
        { "Reverse Thrust": "AS NEEDED" }
      ]
    },
    {
      title: "After Landing",
      items: [
        { "Speed Below 60 KTS": "STOW REV THRUST" },
        { "Flaps": "RETRACT" },
        { "Taxi Lights": "ON" },
        { "LDG, Rec, Pulse, PS/SB Lights": "OFF" },
      ]
    },
    {
      title: "Shutdown",
      items: [
        { "Parking Brake": "SET" },
        { "Avionics Master": "OFF" },
        { "Fuel Pumps": "OFF" },
        { "Throttles": "CUTOFF" },
        { "Lights": "OFF" },
        { "Battery Master": "OFF" }
      ]
    }
  ]
}