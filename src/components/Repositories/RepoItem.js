import { Icon } from "@iconify/react";
import FavouriteButton from "../UI/FavouriteButton";

function RepoItem({ repo }) {
  return (
    <article className="border border-gh-border border-t-0 border-l-0 border-r-0 p-4">
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
      <div className="text-gray-500  flex flex-row text-xs">
        {repo.language && <span>{repo.language}</span>}
        <a className="ml-3" href={repo.url + "/stargazers"}>
          <Icon
            className="text-gh-gray-100 align-text-bottom inline-block mr-1"
            icon="octicon:star-16"
            height={16}
            width={16}
          />
          {repo.totalStars.toLocaleString()}
        </a>
        <a
          className="ml-3"
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
          <span className="flex flex-row ml-3">
            Built by
            {repo.builtBy.map((developer, i) => (
              <a href={developer.url} key={i}>
                <img
                  className="rounded-full mx-0.5"
                  src={developer.avatar}
                  width={25}
                  height={25}
                  alt=""
                />
              </a>
            ))}
          </span>
        )}
        <span className="ml-auto">
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

export default RepoItem;
