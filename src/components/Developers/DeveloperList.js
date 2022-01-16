import axios from "axios";
import { useQuery } from "react-query";
import DeveloperCard from "./DeveloperCard";
import Navbar from "../Navbar";
import DeveloperFilters from "../Filters/DeveloperFilters";
//Fetch data through locally set up proxy
const fetchDevelopers = () => {
  return axios.get("/developers");
};
function DeveloperList() {
  const { isLoading, data, isError, error } = useQuery(
    "developers",
    fetchDevelopers
  );

  //Render list of trending developers
  return (
    <>
      <nav className="flex flex-col md:flex-row sm:flex-row justify-between items-center p-4 mt-10 bg-gh-gray-900 rounded-t-lg border border-gh-border">
        <Navbar />
        <DeveloperFilters />
      </nav>
      <div className="rounded-b-lg border border-gh-border border-t-0">
        {/* Loading message and error handling through react query */}
        {isError && <h2>{error.message}</h2>}
        {isLoading && (
          <p className="m-2 text-white">Fetching trending items...</p>
        )}
        {data &&
          data?.data.map((developer) => (
            <DeveloperCard key={developer.rank} developer={developer} />
          ))}
      </div>
    </>
  );
}

export default DeveloperList;
