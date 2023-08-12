import mongoose, { Schema, Types } from 'mongoose';
import { IPirate, CrewPosition } from '../interface/IPirate';

const PirateSchema: Schema<IPirate> = new Schema<IPirate>(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    crewPosition: {
      type: String,
      enum: Object.values(CrewPosition),
      required: true,
    },
    chests: { type: Number, required: true },
    phrase: { type: String, required: true },
    pegLeg: { type: Boolean, required: true },
    eyePatch: { type: Boolean, required: true },
    hookHand: { type: Boolean, required: true },
    createdBy: {
      type: Types.ObjectId,
      ref: 'User',
      required: [true, 'Please provide user'],
    },
  },
  { timestamps: true },
);

const PirateModel = mongoose.model<IPirate>('Pirate', PirateSchema);

export default PirateModel;
