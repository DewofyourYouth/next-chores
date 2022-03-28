import { client } from "../index";

const dbName = process.env.MONGO_DB_DB;

export const getFamilies = async () => {
  await client.connect();
  console.log("Connected to server");
  const collection = client.db(dbName).collection("family");
  return collection.find({}).toArray();
};

export const insertFamily = async (familyName) => {
  await client.connect();
  const collection = client.db(dbName).collection("family");
  try {
    const insertResult = await collection.insertOne({ _id: familyName });
    console.log(insertResult);
  } catch (error) {
    console.log(error); // special case for some reason
  }
};
