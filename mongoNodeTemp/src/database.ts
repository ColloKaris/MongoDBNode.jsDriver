import * as mongodb from 'mongodb';

export async function connectToDatabase(uri: string) {
  const client = new mongodb.MongoClient(uri); // initialize MongoDB Client
  await client.connect();


}