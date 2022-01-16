import React from "react";
import "../../assets/css/wrapper.scss";
//UI wrapper to handle app wrapper styles and subcomponents
const Wrapper = (props) => {
  const classes = "trending-wrapper " + props.className;
  return <div className={classes}>{props.children}</div>;
};

export default Wrapper;
