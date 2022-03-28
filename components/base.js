import AirTable from "airtable";

const key = process.env.AIRTABLE_API_KEY;
const b = process.env.AIRTABLE_BASE;

AirTable.configure({
  endpointUrl: "https://api.airtable.com",
  apiKey: key,
});

export const base = AirTable.base(b);
