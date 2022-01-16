import React, { useState } from "react";
import { Icon } from "@iconify/react";

const SponsorButton = () => {
  return (
    <>
      <a
        href="https://github.com/sponsors/community"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="text-xs font-bold py-1 px-4 mx-2 flex bg-gh-gray-700 rounded border-gh-border border items-center text-gh-gray-500 hover:border-gh-gray-100">
          <Icon
            className="text-gh-pink mr-2"
            icon="octicon:heart-16"
            height={15}
            width={15}
          />
          Sponsor
        </button>
      </a>
    </>
  );
};

export default SponsorButton;
