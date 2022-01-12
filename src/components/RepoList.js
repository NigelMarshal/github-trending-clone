import axios from "axios";
import { useQuery } from "react-query";
import RepoItem from "./RepoItem";

//Fetch data through CORS proxy
const fetchRepos = () => {
  return axios.get(
    "https://cors-anywhere.herokuapp.com/https://gh-trending-api.herokuapp.com/repositories"
  );
};
function Repo() {
  const { isLoading, data } = useQuery("repos", fetchRepos);
  //Render list of trending repos
  return (
    <div className="rounded border-gray-500">
      {isLoading && <p>Fetching trending items...</p>}
      {data &&
        data?.data.map((repo) => <RepoItem key={repo.rank} repo={repo} />)}
    </div>
  );
}

export default Repo;
