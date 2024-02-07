import express from 'express';
import * as dotenv from 'dotenv';

//Load environment variables from the .env file
dotenv.config();

// Use destructuring to get ATLAS_URI - shorter, DRY syntax
const { ATLAS_URI } = process.env;

// ATLAS_URI must be defined. Without it, log error and exit app
if (!ATLAS_URI) {
  console.log('No ATLAS_URI environment variable has been defined');
  process.exit(1); // exit with uncaught fatal exception(1)
}

