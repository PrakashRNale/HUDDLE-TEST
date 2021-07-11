import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Item from "../../../shared/components/ui-elements/item/Item";
import Loading from "../../../shared/components/ui-elements/loading/Loading";

import "./UserDetails.scss";
import { getUsers } from "../../../store/actions/UserActions";

const UserDetails = (post) => {
  const dispatch = useDispatch();
  const userId = useParams().userId;
  const users = useSelector((state) => state.users.users);

  if (!users.length) {
    // if we are in user details page and if we refresh this page , then we redux store will get cleared. So need to make a call again
    dispatch(getUsers());
    return <Loading />;
  }

  const filteredUser = users.filter((user) => user.id == userId)[0];

  return (
    <Item>
      <div className="user-details-field">
        <strong>User Name :</strong> {filteredUser.username}
      </div>
      <div className="user-details-field">
        <strong>Name : </strong>
        {filteredUser.name}
      </div>
      <div className="user-details-field">
        <strong>Name : </strong> {filteredUser.email}
      </div>
      <div className="user-details-field">
        <strong>UWeb site :</strong> {filteredUser.website}
      </div>

      <div className="company-details">
        <h3>My Company details are</h3>
        <div>
          <strong>Name : </strong> {filteredUser.company.name}
        </div>
        <div>
          <strong>Catch Phrase : </strong> {filteredUser.company.catchPhrase}
        </div>
        <div>
          <strong>BS : </strong>
          {filteredUser.company.bs}
        </div>
      </div>
    </Item>
  );
};

export default UserDetails;
