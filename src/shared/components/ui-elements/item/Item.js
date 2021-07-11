import React from "react";

import "./Item.scss";
const Item = (props) => {
  return (
    <div className="item-container">
      <div className="item">{props.children}</div>
    </div>
  );
};

export default Item;
