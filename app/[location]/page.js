import LocationComponent from "@/components/LocationComponent";

const page = ({
  params: { location },
  searchParams: { latitude, longitude },
}) => {
  return <LocationComponent lat={latitude} lon={longitude} />;
};

export default page;
