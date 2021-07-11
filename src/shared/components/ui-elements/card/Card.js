import React from "react";

import "./Card.scss";

const Card = (props) => {
  return <li className="card">{props.children}</li>;
};

export default Card;
