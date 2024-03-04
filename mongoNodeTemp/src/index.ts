import express from 'express';
import * as dotenv from 'dotenv';
import { connectToDatabase } from './database.js';

//Load environment variables from the .env file
dotenv.config();

// Use destructuring to get ATLAS_URI - shorter, DRY syntax
const { ATLAS_URI } = process.env;

// ATLAS_URI must be defined. Without it, log error and exit app
if (!ATLAS_URI) {
  console.log('No ATLAS_URI environment variable has been defined');
  process.exit(1); // exit with uncaught fatal exception(1)
}

connectToDatabase(ATLAS_URI)
  .then(() => {
    const app = express();

    app.listen(3000, () => {
      console.log('APP LISTENING ON PORT 3000!!')
    })
  })
  .catch(error => console.log(error));
