import React, { useState } from "react";
import { Icon } from "@iconify/react";

//Set up click toggle for favouriting items
const FavouriteButton = () => {
  const [favourite, setFavourite] = useState(false);
  return (
    <>
      <button
        onClick={() => setFavourite(!favourite)}
        className="text-gh-gray-500 text-xs font-bold py-1 px-5 flex bg-gh-gray-700 rounded border-gh-border border items-center hover:border-gh-gray-100"
      >
        <Icon
          className={`${
            !favourite ? "text-gh-gray-100" : "text-gh-highlight"
          } mr-2`}
          icon={`${!favourite ? "octicon:star-16" : "octicon:star-fill-16"}`}
          height={15}
          width={15}
        />
        {!favourite ? "Star" : "Starred"}
      </button>
    </>
  );
};

export default FavouriteButton;
