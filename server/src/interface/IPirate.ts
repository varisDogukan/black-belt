import { Types, Document } from 'mongoose';

export enum CrewPosition {
  Captain = 'Captain',
  FirstMate = 'First Mate',
  QuarterMaster = 'Quarter Master',
  Boatswain = 'Boatswain',
  PowderMonkey = 'Powder Monkey',
}

export interface IPirate extends Document {
  _id: Types.ObjectId;
  name: string;
  image: string;
  crewPosition: CrewPosition;
  chests: number;
  phrase: string;
  pegLeg: boolean;
  eyePatch: boolean;
  hookHand: boolean;
  createdBy: any;
}
