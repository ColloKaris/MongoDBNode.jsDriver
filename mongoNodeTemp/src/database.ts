import * as mongodb from 'mongodb';
import { Employee } from './employee.js'

// An object to hold the collections that will be created
export const collections: {
  employees?: mongodb.Collection<Employee>
} = {};

export async function connectToDatabase(uri: string) {
  const client = new mongodb.MongoClient(uri); // initialize MongoDB Client
  await client.connect();

  // next we create a db instance and pass in the name of the db
  const db = client.db('meanStackExample'); // returns a database

}

/**
 * Update our existing collection with JSON Schema validation so we know our documents
 * will always match the shape of our Employee model,
 * even if added elsewhere
 */

async function applySchemaValidation(db: mongodb.Db) {
  const jsonSchema = {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "position", "level"],
      additionalProperties: false,
      properties: {
        _id:{},
        name: {
          bsonType: "string",
          description: "'name' is required and is a string",
        },
        position: {
          bsonType: "string",
          description: "'position' is required and is a string",
          minLength: 5
        },
        level: {
          bsonType: "string",
          description: "'level' is required and is one of 'junior",
          enum: ["junior", "mid", "senior"],
        }
      }
    }
  };

  /**
   * Trying applying the modification to the collection, if the collection
   * doesn't exist, create it
   */

  await db.command({
    collMod: "employees",
    validator: jsonSchema
  }).catch(async (error: mongodb.MongoServerError) => {
    if (error.codename === "NamespaceNotFound") {
      await db.createCollection("employes", {validator: jsonSchema})
    }
  })
}