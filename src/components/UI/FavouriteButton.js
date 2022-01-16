import React, { useState } from "react";
import { Icon } from "@iconify/react";

const FavouriteButton = () => {
  const [favourite, setFavourite] = useState(false);
  return (
    <>
      <button
        onClick={() => setFavourite(!favourite)}
        className="text-white text-xs font-bold py-1 px-5 flex bg-gh-gray-900 rounded border-gh-border border items-center"
      >
        <Icon
          className={`${
            !favourite ? "text-gh-gray-100" : "text-gh-highlight"
          } mr-2`}
          icon={`${!favourite ? "octicon:star-16" : "ant-design:star-filled"}`}
          height={15}
          width={15}
        />
        {!favourite ? "Star" : "Starred"}
      </button>
    </>
  );
};

export default FavouriteButton;
