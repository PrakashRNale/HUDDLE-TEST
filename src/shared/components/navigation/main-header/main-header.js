import React from "react";

import "./main-header.scss";

const MainHeader = (props) => {
  return <div className="main-header">{props.children}</div>;
};

export default MainHeader;
