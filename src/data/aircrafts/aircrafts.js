import { cessnaLongitudeSpecs } from "@/data/cessna-longitude/specs";
import { cessnaLongitudeChecklist } from "@/data/cessna-longitude/checklist";
import { cessna172Specs } from "@/data/cessna-172/specs";
import { cessna172Checklist } from "@/data/cessna-172/checklist";
import { pilatusPc12Specs } from "@/data/pilatus-pc-12/specs";
import { pilatusPc12Checklist } from "@/data/pilatus-pc-12/checklist";
import { AircraftName } from "@/data/aircrafts/aircraft-names";

export const Aircrafts = [
  {
    name: AircraftName.CessnaLongitude,
    specs: cessnaLongitudeSpecs,
    checklist: cessnaLongitudeChecklist,
  },
  {
    name: AircraftName.PilatusPC12,
    specs: pilatusPc12Specs,
    checklist: pilatusPc12Checklist,
  },
  {
    name: AircraftName.Cessna172,
    specs: cessna172Specs,
    checklist: cessna172Checklist,
  },

];