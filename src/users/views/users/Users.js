import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Search from "../../../shared/components/ui-elements/search/Search";
import UserList from "../../components/user-list/UserList";
import Loading from "../../../shared/components/ui-elements/loading/Loading";

import { getUsers } from "../../../store/actions/UserActions";

const Users = () => {
  const users = useSelector((state) => state.users.users);
  const isLoading = useSelector((state) => state.users.isLoading);
  const isError = useSelector((state) => state.users.error);

  const dispatch = useDispatch();
  useEffect(() => {
    if (!users.length) {
      dispatch(getUsers());
    }
  }, [users]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <React.Fragment>
      <Search users={users} />
      <UserList users={users} />
    </React.Fragment>
  );
};

export default Users;
