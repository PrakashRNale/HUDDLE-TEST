import React from "react";
import { useHistory } from "react-router";

import Card from "../../../shared/components/ui-elements/card/Card";
import "./UserList.scss";
const UserList = (props) => {
  const history = useHistory();
  const userClickhandler = (userId) => {
    history.push(`/user/${userId}`);
  };
  return (
    <ul className="user-list">
      {props.users.map((user) => (
        <Card>
          <div
            className="user-item center"
            onClick={() => userClickhandler(user.id)}
          >
            <h2>{user.name}</h2>
            <h5>{user.username}</h5>
          </div>
        </Card>
      ))}
    </ul>
  );
};

export default UserList;
