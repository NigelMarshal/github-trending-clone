import React, { useState } from "react";

//set up follow toggle on click
const FollowButton = () => {
  const [follow, setFollow] = useState(false);
  return (
    <>
      <button
        onClick={() => setFollow(!follow)}
        className="text-white text-xs font-bold bg-gh-gray-700 rounded border-gh-border border items-center px-3 py-1"
      >
        {!follow ? "Follow" : "Unfollow"}
      </button>
    </>
  );
};

export default FollowButton;
