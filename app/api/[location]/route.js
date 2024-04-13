import { getLocations } from "./location-data";

export async function GET() {
  const locationData = await getLocations();

  return Response.json(locationData);
}
