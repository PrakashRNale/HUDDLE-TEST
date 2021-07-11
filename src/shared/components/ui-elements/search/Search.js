import React, { useState } from "react";
import { useHistory } from "react-router";
import Input from "../../form-elements/input/Input";

import "./Search.scss";

const Search = (props) => {
  const [searchText, setSearchText] = useState("");
  const [userList, setUserList] = useState([]);
  const history = useHistory();
  const changeHandler = (event) => {
    const currSearchText = event.target.value;
    setSearchText(currSearchText);
    const filteredUsers = props.users.filter((user) => {
      return user.name.toLowerCase().indexOf(currSearchText.toLowerCase()) > -1;
    });
    setUserList(filteredUsers);
  };

  const userSelectHandler = (user) => {
    history.push(`/user/${user.id}`);
  };

  return (
    <div className="auto-complete-search">
      <Input placeHolder="Search Users" changeHandler={changeHandler} />
      {searchText.length !== 0 && (
        <ul className="filtered-users">
          {userList.map((user) => {
            return <li onClick={() => userSelectHandler(user)}>{user.name}</li>;
          })}
        </ul>
      )}
    </div>
  );
};

export default Search;
