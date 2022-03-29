import { MongoClient, ServerApiVersion } from "mongodb";

const mongoUser = process.env.MONGO_DB_USER;
const mongoPassword = process.env.MONGO_DB_PASSWORD;
const db = process.env.MONGO_DB_DB;
export const mongoURI = `mongodb+srv://${mongoUser}:${mongoPassword}@cluster0.iep8o.azure.mongodb.net/${db}?retryWrites=true&w=majority`;
export const client = new MongoClient(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
