import React from "react";

import "./Input.scss";
const Input = (props) => {
  return (
    <div>
      <input type="text" {...props} onChange={props.changeHandler} />
    </div>
  );
};

export default Input;
