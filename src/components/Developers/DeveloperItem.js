import { Icon } from "@iconify/react";
function DeveloperItem({ developer }) {
  return (
    <article className="border border-gh-border border-t-0 border-l-0 border-r-0 p-4 flex">
      <a className="text-gray-500" href={"#pa-" + developer.username}>
        {developer.rank}
      </a>
      <div className="mx-3">
        <a href={developer.url}>
          <img
            className="rounded-full mx-5"
            width={48}
            src={developer.avatar}
            alt={"@" + developer.username}
          />
        </a>
      </div>
      <div className="sm:flex flex-auto">
        <div className="w-10/12 md:flex">
          <div className="w-1/2">
            <h1 className="font-semibold text-gh-light-blue">
              <a href={developer.url}>{developer.name}</a>
            </h1>
            <p className="text-gh-gray-100 hover:underline hover:text-gh-light-blue">
              <a href={developer.url}>{developer.username}</a>
            </p>
          </div>
          <div className="w-1/2">
            <div className="lg:m-0 md:m-0 m-3">
              {developer.popularRepository.repositoryName && (
                <div>
                  <div className="uppercase text-xs text-gh-gray-100 ">
                    <Icon
                      className="text-gh-orange align-text-bottom inline-block mr-2"
                      icon="octicon:flame-16"
                      width="16"
                      height="16"
                    />
                    Popular repo
                  </div>
                  <h1 className="font-semibold">
                    <a
                      href={developer.popularRepository.url}
                      className="text-gh-light-blue hover:underline"
                    >
                      <Icon
                        className="text-gh-gray-100 inline-block mr-2"
                        icon="octicon:repo-16"
                        width="16"
                        height="16"
                      />
                      &nbsp;{developer.popularRepository.repositoryName}
                    </a>
                  </h1>
                  <div className="text-xs">
                    {developer.popularRepository.description}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="w-5/12 flex sm:justify-end items-start">
          <button className="text-white text-xs font-bold bg-gh-gray-700 rounded border-gh-border border items-center px-3 py-1">
            Follow
          </button>
        </div>
      </div>
    </article>
  );
}

export default DeveloperItem;
