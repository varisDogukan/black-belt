import { StatusCodes } from "http-status-codes";
import { Request, Response } from "express";
import Pirate from "../model/Pirate";
import { IPirate } from "../interface/IPirate";
import { BadRequestError, NotFoundError } from "../errors";
import checkPermissions from "../utils/checkPermissions";

declare global {
  namespace Express {
    interface Request {
      user: {
        userId: string;
      };
    }
  }
}

const createPirate = async (req: Request, res: Response) => {
  const {
    name,
    image,
    crewPosition,
    chests,
    phrase,
    pegLeg,
    eyePatch,
    hookHand,
  } = req.body;

  if (!name || !image || !crewPosition || !chests || !phrase) {
    throw new BadRequestError("Please provide all values");
  }

  const createdBy = req.user.userId;

  const pirate = await Pirate.create({
    name,
    image,
    crewPosition,
    chests,
    phrase,
    pegLeg,
    eyePatch,
    hookHand,
    createdBy,
  });

  res.status(StatusCodes.CREATED).json({ pirate });
};

const getAllPirates = async (req: Request, res: Response) => {
  const pirates = await Pirate.find({ createdBy: req.user.userId });

  res.status(StatusCodes.OK).json({ pirates });
};

const deletePirate = async (req: Request, res: Response) => {
  const { id: pirateId } = req.params;

  const pirate = await Pirate.findOne({ _id: pirateId });

  if (!pirate) {
    throw new NotFoundError(`No pirate with id : ${pirateId}`);
  }

  // check permission
  checkPermissions(req.user, pirate?.createdBy);

  await pirate.deleteOne();

  res.status(StatusCodes.OK).json({ msg: "Success! Pirate removed" });
};

const getSinglePirate = async (req: Request, res: Response) => {
  const { id: pirateId } = req.params;

  const singlePirate = await Pirate.findOne({ _id: pirateId });

  if (!singlePirate) {
    throw new NotFoundError(`No pirate with id : ${pirateId}`);
  }

  checkPermissions(req.user, singlePirate.createdBy);

  res.status(StatusCodes.OK).json({ singlePirate });
};

const updatePirate = async (req: Request, res: Response) => {
  const { id: pirateId } = req.params;

  const { name, image, crewPosition, chests, phrase, pegLeg, eyePatch, hookHand } = req.body;
  const updates: Record<string, unknown> = {};
  if (name !== undefined) updates.name = name;
  if (image !== undefined) updates.image = image;
  if (crewPosition !== undefined) updates.crewPosition = crewPosition;
  if (chests !== undefined) updates.chests = chests;
  if (phrase !== undefined) updates.phrase = phrase;
  if (pegLeg !== undefined) updates.pegLeg = pegLeg;
  if (eyePatch !== undefined) updates.eyePatch = eyePatch;
  if (hookHand !== undefined) updates.hookHand = hookHand;

  if (Object.keys(updates).length === 0) {
    throw new BadRequestError("Please provide fields to update");
  }

  const pirate = await Pirate.findOne({ _id: pirateId });

  if (!pirate) {
    throw new NotFoundError(`No pirate with id : ${pirateId}`);
  }

  // check permission
  checkPermissions(req.user, pirate.createdBy);

  await Pirate.findOneAndUpdate(
    { _id: pirateId },
    { $set: updates },
    {
      new: true,
      runValidators: true,
    },
  );

  res.status(StatusCodes.OK).json({ msg: "Success! Updated pirate" });
};

export {
  createPirate,
  getAllPirates,
  deletePirate,
  getSinglePirate,
  updatePirate,
};
