import { Icon } from "@iconify/react";
import FavouriteButton from "../UI/FavouriteButton";

function RepoCard({ repo }) {
  return (
    <article className="border border-gh-border border-t-0 border-l-0 border-r-0 last:border-b-0 p-4">
      <div className="float-right">
        <FavouriteButton />
      </div>
      <h1 className="font-bold">
        <a
          className="text-blue-500 text-xl font-medium no-underline hover:underline"
          href={repo.url}
        >
          <Icon
            className="text-gh-gray-100 align-text-bottom inline-block mr-2"
            icon="octicon:repo-16"
            height={16}
            width={16}
          />

          <span>{repo.username} / </span>
          {repo.repositoryName}
        </a>
      </h1>
      {repo.description && (
        <p className="text-gray-500 text-sm mb-2">{repo.description}</p>
      )}
      <div className="text-gray-500 mt-2 flex flex-row text-xs flex-wrap">
        {repo.language && (
          <span className="mr-3 mb-2 lg:mb-0 md:mb-0">{repo.language}</span>
        )}
        <a className="mr-3" href={repo.url + "/stargazers"}>
          <Icon
            className="text-gh-gray-100 align-text-bottom inline-block mr-1"
            icon="octicon:star-16"
            height={16}
            width={16}
          />
          {repo.totalStars.toLocaleString()}
        </a>
        <a
          className="mr-3"
          href={repo.url + "/network/members." + repo.repositoryName}
        >
          <Icon
            className="text-gh-gray-100 align-text-bottom inline-block mr-1"
            icon="octicon:repo-forked-16"
            height={16}
            width={16}
          />
          {repo.forks}
        </a>
        {repo.builtBy && (
          <span className="flex flex-row mr-2">
            Built by
            {repo.builtBy.map((developer, i) => (
              <a href={developer.url} key={i}>
                <img
                  className="rounded-full ml-1 mr-0.5"
                  src={developer.avatar}
                  width={20}
                  height={20}
                  alt=""
                />
              </a>
            ))}
          </span>
        )}
        <span className="lg:ml-auto md:ml-auto">
          <Icon
            className="text-gh-gray-100 align-text-bottom inline-block mr-1"
            icon="octicon:star-16"
            height={16}
            width={16}
          />
          {repo.starsSince} stars today
        </span>
      </div>
    </article>
  );
}

export default RepoCard;
