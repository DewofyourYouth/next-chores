import {
  getFamilies,
  insertFamily,
} from "../../components/mongo/collections/family";
import { getSession } from "next-auth/react";

export default async function handler(req, res) {
  const session = await getSession({ req });

  if (session) {
    switch (req.method) {
      case "GET":
        const families = await getFamilies();
        res.status(200).json(families);
        break;
      case "POST":
        const { familyName } = req.body;
        console.log(familyName);
        const insert = await insertFamily(familyName);
        res.status(201).json(insert);
    }
  } else {
    res.status(401).json({ msg: "Not authorized" });
  }
}
