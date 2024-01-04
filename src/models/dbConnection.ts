import { MongoClient, Db} from "mongodb";

const connectionString = process.env.MONGO_URI || "";

let client: MongoClient;
let dbConnection: Db;

const dbName = "channel";

const connectToDatabase = async () => {
  try {
    client = new MongoClient(connectionString); // MongoClient instance
    const connection = await client.connect();
    dbConnection = connection.db(dbName)
    return dbConnection;
  }
  catch {
    console.log("Error connecting to MongoDB")
  }
}

export { connectToDatabase, dbConnection };
