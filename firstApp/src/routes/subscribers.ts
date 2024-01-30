import express, { Request, Response } from 'express';
import { dbConnection } from '../models/dbConnection.js';

const router = express.Router();

const collectionName = "subscribers"

router.get('/', async (req: Request, res: Response) => {
  const collection = dbConnection.collection(collectionName);
  const result = await collection.findOne({});
  res.send(result);
})

export {router};