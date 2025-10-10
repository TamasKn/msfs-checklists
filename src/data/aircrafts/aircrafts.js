import { cessnaLongitudeSpecs } from "@/data/cessna-longitude/specs";
import { cessnaLongitudeChecklist } from "@/data/cessna-longitude/checklist";
import { cessna172Specs } from "@/data/cessna-172/specs";
import { cessna172Checklist } from "@/data/cessna-172/checklist";
import { pilatusPc12Specs } from "@/data/pilatus-pc-12/specs";
import { pilatusPc12Checklist } from "@/data/pilatus-pc-12/checklist";
import { diamondDA62Specs } from "@/data/diamond-da62/specs";
import { diamondDA62Checklist } from "@/data/diamond-da62/checklist";
import { visionJetG2Specs } from "@/data/vision-jet-g2/specs";
import { visionJetG2Checklist } from "@/data/vision-jet-g2/checklist";
import { airbusA320neoSpecs } from "@/data/airbus-a320neo/specs";
import { airbusA320neoChecklist } from "@/data/airbus-a320neo/checklist";
import { boeing737MaxSpecs } from "@/data/boeing-737-max/specs";
import { boeing737MaxChecklist } from "@/data/boeing-737-max/checklist";
import { AircraftName } from "@/data/aircrafts/aircraft-names";

export const Aircrafts = [
  {
    name: AircraftName.Cessna172,
    specs: cessna172Specs,
    checklist: cessna172Checklist,
  },
  {
    name: AircraftName.DiamondDA62,
    specs: diamondDA62Specs,
    checklist: diamondDA62Checklist,
  },
  {
    name: AircraftName.PilatusPC12,
    specs: pilatusPc12Specs,
    checklist: pilatusPc12Checklist,
  },
  {
    name: AircraftName.VisionJetG2,
    specs: visionJetG2Specs,
    checklist: visionJetG2Checklist,
  },
  {
    name: AircraftName.CessnaLongitude,
    specs: cessnaLongitudeSpecs,
    checklist: cessnaLongitudeChecklist,
  },
  {
    name: AircraftName.AirbusA320neo,
    specs: airbusA320neoSpecs,
    checklist: airbusA320neoChecklist,
  },
  {
    name: AircraftName.Boeing737Max,
    specs: boeing737MaxSpecs,
    checklist: boeing737MaxChecklist,
  },
];