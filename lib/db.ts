import { MongoClient, Db } from "mongodb";

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB || "dent_db";

let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

export async function connectToDatabase(): Promise<{ client: MongoClient; db: Db }> {
  if (!uri) {
    throw new Error("Please add MONGODB_URI environment variable to connect to your database.");
  }

  // If the database connection is already cached, reuse it
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  // Set up connection options
  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db(dbName);

  // Cache connection in development / runtime
  cachedClient = client;
  cachedDb = db;

  return { client, db };
}
