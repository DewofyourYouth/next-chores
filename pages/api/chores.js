import { base } from "../../components/base";

export default async function handler(req, res) {
  console.log(req.method);
  switch (req.method) {
    case "GET":
      const records = await base("Chores")
        .select({
          fields: ["Name", "Description", "Points", "Type"],
        })
        .firstPage();

      res.status(200).json(records.map((x) => x.fields));
      break;
  }
}
