import { MongoClient, ServerApiVersion } from "mongodb";
const mongoUser = process.env.MONGO_DB_USER;
const mongoPassword = process.env.MONGO_DB_PASSWORD;
const mongoCluster = process.env.MONGO_DB_CLUSTER;
const db = process.env.MONGO_DB_DB;
const uri = `mongodb+srv://${mongoUser}:${mongoPassword}@${mongoCluster}/${db}?retryWrites=true&w=majority`;
export const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
