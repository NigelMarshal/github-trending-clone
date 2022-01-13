import React from "react";
import "../../assets/css/wrapper.css";

const Wrapper = (props) => {
  const classes = "trending-wrapper " + props.className;
  return <div className={classes}>{props.children}</div>;
};

export default Wrapper;
