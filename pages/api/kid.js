import { getSession } from "next-auth/react";
import { getKids } from "../../components/mongo/collections/kids";

export default async function handler(req, res) {
  const session = await getSession({ req });
  if (session) {
    switch (req.method) {
      case "GET":
        const kids = await getKids();
        res.status(200).json(kids);
        break;
    }
  } else {
    res.status(401).json({ msg: "Not authorized" });
  }
}
