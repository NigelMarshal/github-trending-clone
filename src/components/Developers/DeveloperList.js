import axios from "axios";
import { useQuery } from "react-query";
import DeveloperItem from "./DeveloperItem";

//Fetch data through CORS proxy
const fetchDevelopers = () => {
  return axios.get("https://gh-trending-api.herokuapp.com/developers");
};
function DeveloperList() {
  const { isLoading, data, isError, error } = useQuery(
    "developers",
    fetchDevelopers
  );

  //Render list of trending developers
  return (
    <div className="rounded border-gray-500">
      {isError && <h2>{error.message}</h2>}
      {isLoading && (
        <p className="m-2 text-white">Fetching trending items...</p>
      )}
      {data &&
        data?.data.map((developer) => (
          <DeveloperItem key={developer.rank} developer={developer} />
        ))}
    </div>
  );
}

export default DeveloperList;