import { base } from "../../components/base";

export default async function handler(req, res) {
  const records = await base("Kids")
    .select({ fields: ["Name", "Birthday"] })
    .firstPage();

  res.status(200).json(records.map((x) => x.fields));
}
