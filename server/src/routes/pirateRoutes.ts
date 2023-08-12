import express from 'express';

import {
  createPirate,
  deletePirate,
  getAllPirates,
  getSinglePirate,
  updatePirate,
} from '../controllers/pirateController';

const router = express.Router();

router.route('/').post(createPirate).get(getAllPirates);
router
  .route('/:id')
  .get(getSinglePirate)
  .delete(deletePirate)
  .put(updatePirate);

export default router;
