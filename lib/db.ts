import { MongoClient, Db } from "mongodb";

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB || "dent_db";

if (!uri) {
  throw new Error("Please add your MONGODB_URI to .env.local");
}

let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

export async function connectToDatabase(): Promise<{ client: MongoClient; db: Db }> {
  // If the database connection is already cached, reuse it
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  // Set up connection options
  const client = new MongoClient(uri!);
  await client.connect();
  const db = client.db(dbName);

  // Cache connection in development / runtime
  cachedClient = client;
  cachedDb = db;

  return { client, db };
}
