import { getLocationByName } from "../location-data";

export async function GET(request, { params }) {
  const locationData = getLocationByName(params?.name);

  return Response.json(locationData);
}
