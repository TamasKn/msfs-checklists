import { AircraftName } from "@/data/aircrafts/aircraft-names";

export const pilatusPc12Checklist = {
  name: AircraftName.PilatusPC12,
  checklist: [
    {
      title: "Before Engine Start",
      items: [
        { "Parking Brake": "SET" },
        { "Control Lock": "REMOVE" },
        { "Oxygen": "ON & CHECKED" },
        { "Battery Switches": "ON" },
        { "Beacon & Nav Lights": "ON" },
        { "Fuel Quantity": "CHECK" },
      ]
    },
    {
      title: "Engine Start",
      items: [
        { "Prop Area": "CLEAR" },
        { "Starter Switch": "PRESS" },
        { "Condition Lever": "GROUND IDLE (at >12% Ng)" },
        { "Oil Pressure": "CHECK" },
        { "Generators 1 & 2": "ON" },
        { "Avionics 1 & 2": "ON" },
      ]
    },
    {
      title: "Before Taxi",
      items: [
        { "Flaps": "SET 15°" },
        { "Trims": "SET GREEN" },
        { "Flight Controls": "CHECK" },
        { "Inertial Separator": "OPEN" },
        { "Pressurization": "SET" },
      ]
    },
    {
      title: "Taxi",
      items: [
        { "Taxi Light": "ON" },
        { "Brakes": "CHECK" },
        { "Flight Instruments": "CHECK" },
      ]
    },
    {
      title: "Before Takeoff",
      items: [
        { "Flaps": "CONFIRM 15°" },
        { "Pusher Test": "COMPLETE" },
        { "Ice Protection": "AS REQUIRED" },
        { "Transponder": "SET" },
        { "Condition Lever": "FLIGHT IDLE" },
      ]
    },
    {
      title: "Takeoff",
      items: [
        { "Power": "SET TAKEOFF" },
        { "Rotate": "~80 KIAS" },
        { "Positive Rate": "GEAR UP" },
      ]
    },
    {
      title: "After Takeoff / Climb",
      items: [
        { "Flaps": "UP (at >100 KIAS)" },
        { "Yaw Damper": "ON" },
        { "Climb Power": "SET" },
        { "Pressurization": "MONITOR" },
        { "Taxi/Landing Lights": "OFF" },
      ]
    },
    {
      title: "Cruise",
      items: [
        { "Cruise Power": "SET" },
        { "Engine Instruments": "MONITOR" },
        { "Fuel Balance": "MONITOR" },
      ]
    },
    {
      title: "Descent",
      items: [
        { "ATIS": "OBTAIN" },
        { "Approach Briefing": "COMPLETE" },
        { "Altimeters": "SET" },
        { "Pressurization": "SET for landing" },
      ]
    },
    {
      title: "Approach",
      items: [
        { "Inertial Separator": "OPEN" },
        { "Landing Gear": "DOWN (<180 KIAS)" },
        { "Flaps": "AS REQUIRED" },
        { "Landing/Taxi Lights": "AS REQUIRED" },
      ]
    },
    {
      title: "Landing",
      items: [
        { "Flaps": "SET 40° (if needed)" },
        { "Speed": "VREF" },
        { "Condition Lever": "GROUND IDLE (on touchdown)" },
        { "Braking / Reverse": "AS REQUIRED" },
      ]
    },
    {
      title: "After Landing",
      items: [
        { "Condition Lever": "GROUND IDLE" },
        { "Flaps": "UP" },
        { "Ice Protection": "OFF" },
        { "Trims": "RESET" },
        { "Lights": "SET for taxi" },
      ]
    },
    {
      title: "Shutdown",
      items: [
        { "Parking Brake": "SET" },
        { "Avionics": "OFF" },
        { "Generators": "OFF" },
        { "Condition Lever": "CUT-OFF" },
        { "Battery Switches": "OFF" },
        { "Control Lock": "INSTALL" },
      ]
    }
  ]
}
