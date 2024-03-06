import * as express from 'express';
import * as mongodb from 'mongodb';
import { collections } from './database.js';

export const employeeRouter = express.Router();
employeeRouter.use(express.json()); // parses request from all routes

employeeRouter.get('/', async (_req, res) => {
  try {
    const employees = await collections.employees!.find({}).toArray();
    res.status(200).send(employees); // send back a response
  }
  catch (error: any) {
    res.status(500).send(error.message)
  }
})

employeeRouter.post('/', async (req, res) => {
  try {
    const employee = req.body;
    const result = await collections.employees!.insertOne(employee)

    if (result.acknowledged) {
      res.status(201).send(`Created a new empoyee: ID ${result.insertedId}.`)
    } else {
      res.status(500).send(`Failed to create a new employee`)
    }
  } catch (error:any) {
    console.error(error);
    res.status(400).send(error.message);
  }
})