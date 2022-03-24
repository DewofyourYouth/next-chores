import AirTable from "airtable";

const key = process.env.AIRTABLE_API_KEY;
const b = process.env.AIRTABLE_BASE;

AirTable.configure({
  endpointUrl: "https://api.airtable.com",
  apiKey: key,
});

const base = AirTable.base(b);

export default async function handler(req, res) {
  const records = await base("Chores")
    .select({
      fields: ["Name", "Description", "Points", "Type"],
    })
    .firstPage();

  res.status(200).json(records.map((x) => x.fields));
}
