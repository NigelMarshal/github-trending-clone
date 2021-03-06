import axios from "axios";
import { useQuery } from "react-query";
import RepoCard from "./RepoCard";
import Navbar from "../Navbar";
import RepoFilters from "../Filters/RepoFilters";

//Fetch data through CORS proxy
const fetchRepos = () => {
  return axios.get("/repositories");
};
function Repo() {
  const { isLoading, data, isError, error } = useQuery("repos", fetchRepos);
  //Render list of trending repos
  return (
    <>
      <nav className="flex flex-col md:flex-row sm:flex-row justify-between items-center p-4 mt-10 bg-gh-gray-900 rounded-t-lg border border-gh-border">
        <Navbar />
        <RepoFilters />
      </nav>
      <div className="rounded-b-lg border border-gh-border border-t-0">
        {isError && <h2>{error.message}</h2>}
        {isLoading && (
          <p className="m-2 text-white">Fetching trending items...</p>
        )}
        {data &&
          data?.data.map((repo) => <RepoCard key={repo.rank} repo={repo} />)}
      </div>
    </>
  );
}

export default Repo;
