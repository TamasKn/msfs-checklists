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
import { diamondDa42Specs } from '@/data/diamond-da42/specs'
import { diamondDa42Checklist } from '@/data/diamond-da42/checklist'
import { diamondDa42Career } from '@/data/diamond-da42/career'
import { aerostar600Specs } from '@/data/aerostar-600/specs'
import { aerostar600Checklist } from '@/data/aerostar-600/checklist'
import { aerostar600Career } from '@/data/aerostar-600/career'
import { bonanzaB36TCSpecs } from '@/data/bonanza-b36tc/specs'
import { bonanzaB36TCChecklist } from '@/data/bonanza-b36tc/checklist'
import { bonanzaB36TCCareer } from '@/data/bonanza-b36tc/career'
import { bonanzaB36TPSpecs } from '@/data/bonanza-b36tp/specs'
import { bonanzaB36TPChecklist } from '@/data/bonanza-b36tp/checklist'
import { bonanzaB36TPCareer } from '@/data/bonanza-b36tp/career'
import { baron58Specs } from '@/data/baron-58/specs'
import { baron58Checklist } from '@/data/baron-58/checklist'
import { baron58Career } from '@/data/baron-58/career'
import { baron58PSpecs } from '@/data/baron-58p/specs'
import { baron58PChecklist } from '@/data/baron-58p/checklist'
import { baron58PCareer } from '@/data/baron-58p/career'
import { dukeB60Specs } from '@/data/duke-b60/specs'
import { dukeB60Checklist } from '@/data/duke-b60/checklist'
import { dukeB60Career } from '@/data/duke-b60/career'
import { grandDukeSpecs } from '@/data/grand-duke/specs'
import { grandDukeChecklist } from '@/data/grand-duke/checklist'
import { grandDukeCareer } from '@/data/grand-duke/career'
import { turbineDukeSpecs } from '@/data/turbine-duke/specs'
import { turbineDukeChecklist } from '@/data/turbine-duke/checklist'
import { turbineDukeCareer } from '@/data/turbine-duke/career'
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
import { CJ4Specs } from '@/data/cj4/specs'
import { CJ4Checklist } from '@/data/cj4/checklist'
import { CJ4Career } from '@/data/cj4/career'
import { TBM930Specs } from '@/data/daher-tbm-930/specs'
import { TBM930Checklist } from '@/data/daher-tbm-930/checklist'
import { TBM930Career } from '@/data/daher-tbm-930/career'

export const Aircrafts = [
  {
    id: 'C700',
    name: AircraftName.CessnaLongitude,
    specs: cessnaLongitudeSpecs,
    checklist: cessnaLongitudeChecklist,
    career: cessnaLongitudeCareer
  },
  {
    id: 'C172',
    name: AircraftName.Cessna172,
    specs: cessna172Specs,
    checklist: cessna172Checklist,
    career: cessna172Career
  },
  {
    id: 'DA62',
    name: AircraftName.DiamondDA62,
    specs: diamondDA62Specs,
    checklist: diamondDA62Checklist,
    career: diamondDA62Career
  },
  {
    id: 'PC12',
    name: AircraftName.PilatusPC12,
    specs: pilatusPc12Specs,
    checklist: pilatusPc12Checklist,
    career: pilatusPc12Career
  },
  {
    id: 'C25C',
    name: AircraftName.CitationCJ4,
    specs: CJ4Specs,
    checklist: CJ4Checklist,
    career: CJ4Career
  },
  {
    id: 'B350',
    name: AircraftName.BeechcraftKingAir350,
    specs: beechcraftKingAir350Specs,
    checklist: beechcraftKingAir350Checklist,
    career: beechcraftKingAir350Career
  },
  {
    id: 'TBM9',
    name: AircraftName.TBM930,
    specs: TBM930Specs,
    checklist: TBM930Checklist,
    career: TBM930Career
  },
  {
    id: 'SF50',
    name: AircraftName.VisionJetG2,
    specs: visionJetG2Specs,
    checklist: visionJetG2Checklist,
    career: visionJetG2Career
  },
  {
    id: 'A320',
    name: AircraftName.AirbusA320neo,
    specs: airbusA320neoSpecs,
    checklist: airbusA320neoChecklist,
    career: airbusA320neoCareer
  },
  {
    id: 'B38M',
    name: AircraftName.Boeing737Max,
    specs: boeing737MaxSpecs,
    checklist: boeing737MaxChecklist,
    career: boeing737MaxCareer
  },
  {
    id: 'DA42',
    name: AircraftName.DiamondDA42,
    specs: diamondDa42Specs,
    checklist: diamondDa42Checklist,
    career: diamondDa42Career
  },
  {
    id: 'AEST',
    name: AircraftName.Aerostar600,
    specs: aerostar600Specs,
    checklist: aerostar600Checklist,
    career: aerostar600Career
  },
  {
    id: 'BT36',
    name: AircraftName.BonanzaB36TC,
    specs: bonanzaB36TCSpecs,
    checklist: bonanzaB36TCChecklist,
    career: bonanzaB36TCCareer
  },
  {
    id: 'B36T',
    name: AircraftName.BonanzaB36TP,
    specs: bonanzaB36TPSpecs,
    checklist: bonanzaB36TPChecklist,
    career: bonanzaB36TPCareer
  },
  {
    id: 'BE58',
    name: AircraftName.Baron58,
    specs: baron58Specs,
    checklist: baron58Checklist,
    career: baron58Career
  },
  {
    id: 'B58T',
    name: AircraftName.Baron58P,
    specs: baron58PSpecs,
    checklist: baron58PChecklist,
    career: baron58PCareer
  },
  {
    id: 'BE60',
    name: AircraftName.DukeB60,
    specs: dukeB60Specs,
    checklist: dukeB60Checklist,
    career: dukeB60Career
  },
  {
    id: 'BE6G',
    name: AircraftName.GrandDuke,
    specs: grandDukeSpecs,
    checklist: grandDukeChecklist,
    career: grandDukeCareer
  },
  {
    id: 'B60T',
    name: AircraftName.TurbineDuke,
    specs: turbineDukeSpecs,
    checklist: turbineDukeChecklist,
    career: turbineDukeCareer
  }
]
