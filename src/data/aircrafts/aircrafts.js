import { cessnaLongitudeSpecs } from '@/data/cessna-longitude/specs'
import { cessnaLongitudeChecklist } from '@/data/cessna-longitude/checklist'
import { cessna172Specs } from '@/data/cessna-172/specs'
import { cessna172Checklist } from '@/data/cessna-172/checklist'
import { pilatusPc12Specs } from '@/data/pilatus-pc-12/specs'
import { pilatusPc12Checklist } from '@/data/pilatus-pc-12/checklist'
import { diamondDA62Specs } from '@/data/diamond-da62/specs'
import { diamondDA62Checklist } from '@/data/diamond-da62/checklist'
import { visionJetG2Specs } from '@/data/vision-jet-g2/specs'
import { visionJetG2Checklist } from '@/data/vision-jet-g2/checklist'
import { airbusA320neoSpecs } from '@/data/airbus-a320neo/specs'
import { airbusA320neoChecklist } from '@/data/airbus-a320neo/checklist'
import { boeing737MaxSpecs } from '@/data/boeing-737-max/specs'
import { boeing737MaxChecklist } from '@/data/boeing-737-max/checklist'
import { beechcraftKingAir350Specs } from '@/data/beechcraft-king-air-350/specs'
import { beechcraftKingAir350Checklist } from '@/data/beechcraft-king-air-350/checklist'
import { AircraftName } from '@/data/aircrafts/aircraft-names'
import { cessna172Career } from '@/data/cessna-172/career'
import { diamondDA62Career } from '@/data/diamond-da62/career'
import { pilatusPc12Career } from '@/data/pilatus-pc-12/career'
import { visionJetG2Career } from '@/data/vision-jet-g2/career'
import { cessnaLongitudeCareer } from '@/data/cessna-longitude/career'
import { airbusA320neoCareer } from '@/data/airbus-a320neo/career'
import { boeing737MaxCareer } from '@/data/boeing-737-max/career'
import { beechcraftKingAir350Career } from '@/data/beechcraft-king-air-350/career'

export const Aircrafts = [
  {
    name: AircraftName.CessnaLongitude,
    specs: cessnaLongitudeSpecs,
    checklist: cessnaLongitudeChecklist,
    career: cessnaLongitudeCareer
  },
  {
    name: AircraftName.Cessna172,
    specs: cessna172Specs,
    checklist: cessna172Checklist,
    career: cessna172Career
  },
  {
    name: AircraftName.DiamondDA62,
    specs: diamondDA62Specs,
    checklist: diamondDA62Checklist,
    career: diamondDA62Career
  },
  {
    name: AircraftName.PilatusPC12,
    specs: pilatusPc12Specs,
    checklist: pilatusPc12Checklist,
    career: pilatusPc12Career
  },
  {
    name: AircraftName.BeechcraftKingAir350,
    specs: beechcraftKingAir350Specs,
    checklist: beechcraftKingAir350Checklist,
    career: beechcraftKingAir350Career
  },
  {
    name: AircraftName.VisionJetG2,
    specs: visionJetG2Specs,
    checklist: visionJetG2Checklist,
    career: visionJetG2Career
  },
  {
    name: AircraftName.AirbusA320neo,
    specs: airbusA320neoSpecs,
    checklist: airbusA320neoChecklist,
    career: airbusA320neoCareer
  },
  {
    name: AircraftName.Boeing737Max,
    specs: boeing737MaxSpecs,
    checklist: boeing737MaxChecklist,
    career: boeing737MaxCareer
  }
]
