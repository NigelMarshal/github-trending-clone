import axios from "axios";
import { useQuery } from "react-query";
import DeveloperItem from "./DeveloperItem";
import NavBar from "../NavBar";
import DeveloperFilters from "../Filters/DeveloperFilters";
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
    <>
      <nav className="flex flex-col md:flex-row sm:flex-row justify-between items-center p-5 mt-10 bg-gh-gray-900 rounded border border-gh-border">
        <NavBar />
        <DeveloperFilters />
      </nav>
      <div className="rounded border border-gh-border border-t-0">
        {isError && <h2>{error.message}</h2>}
        {isLoading && (
          <p className="m-2 text-white">Fetching trending items...</p>
        )}
        {data &&
          data?.data.map((developer) => (
            <DeveloperItem key={developer.rank} developer={developer} />
          ))}
      </div>
    </>
  );
}

export default DeveloperList;
