function DeveloperItem({ developer }) {
  return (
    <article className="border-gray-500">
      <a className="text-gray-500" href={"#pa-" + developer.username}>
        {developer.rank}
      </a>
      <div>
        <a href={developer.url}>
          <img
            className="rounded"
            src={developer.avatar}
            alt={"@" + developer.username}
          />
        </a>
      </div>
      <div>
        <h1 className="text-blue-500">
          <a href={developer.url}>{developer.name}</a>
        </h1>
        <p className="text-gray-500 hover:underline hover:text-blue-500">
          <a href={developer.url}>{developer.username}</a>
        </p>
      </div>

      <div>
        {developer.popularRepository.repositoryName && (
          <>
            <div className="text-gray-500">Popular repo</div>
            <h1>
              <a
                href={developer.popularRepository.url}
                className=" text-blue-500 hover:underline"
              >
                {developer.popularRepository.repositoryName}
              </a>
            </h1>
            <div className="text-gray-500">
              {developer.popularRepository.description}
            </div>
          </>
        )}
      </div>
    </article>
  );
}

export default DeveloperItem;
