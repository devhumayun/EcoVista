export const getLocationData = async (lat, lon) => {
  try {
    const res = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export const getLocationLatLonList = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/location");
    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export const getLocationLatLon = async (locationName) => {
  try {
    const res = await fetch(
      `http://localhost:3000/api/location/${locationName}`
    );
    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error.message);
  }
};
