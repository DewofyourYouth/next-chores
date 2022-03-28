import { client } from "../index";

const dbName = process.env.MONGO_DB_DB;

export const getKids = async () => {
  await client.connect();
  const collection = client.db(dbName).collection("kid");
  return collection.find({}).toArray();
};
