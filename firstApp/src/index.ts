import express from 'express';
import dotenv from 'dotenv';

// load environment variables
dotenv.config();

// get ATLAS_URI using destructuring
const { ATLAS_URI } = process.env;

// terminate Node.js application if ATLAS_URI is not available
if(!ATLAS_URI) {
  console.log("No ATLAS_URI environment variable has been defined in config.env");
  process.exit(1);
}

