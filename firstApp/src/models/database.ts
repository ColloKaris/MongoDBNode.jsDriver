import * as mongodb from 'mongodb'; // import everything as mongoDB


// connect to database function
export async function connectToDatabase(uri: string) {
  const client = new mongodb.MongoClient(uri);
  await client.connect();

  const db = client.db("channel");
  
}