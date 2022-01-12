function RepoItem({ repo }) {
  return (
    <article className="border-gray-500 border border-t-0 p-4">
      <h1 className="font-bold">
        <a
          className="text-blue-500 no-underline hover:underline"
          href={repo.url}
        >
          <span>{repo.username} / </span>
          {repo.repositoryName}
        </a>
      </h1>
      {repo.description && <p className="text-gray-500">{repo.description}</p>}
      <div className="text-gray-500">
        {repo.language && <span>{repo.language}</span>}
        <a href={repo.url + "/stargazers"}>{repo.totalStars}</a>
        <a href={repo.url + "/network/members." + repo.repositoryName}>
          {repo.forks}
        </a>
        {repo.builtBy && (
          <span>
            Built by
            {repo.builtBy.map((developer, i) => (
              <a href={developer.url} key={i}>
                <img
                  className="rounded"
                  src={developer.avatar}
                  width={25}
                  height={25}
                  alt=""
                />
              </a>
            ))}
          </span>
        )}
        <span>{repo.starsSince} stars today</span>
      </div>
    </article>
  );
}

export default RepoItem;
