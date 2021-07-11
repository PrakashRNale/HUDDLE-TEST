export const actionTypes = {
  REQUEST_SENT: "REQUEST_SENT",
  USERS_RECEIVED: "USERS_RECEIVED",
  ERROR: "ERROR",
};

export const getUsersPromise = () => {
  return new Promise((resolve, reject) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((result) => {
        return result.json();
      })
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const getUsers = () => {
  return (dispatch) => {
    dispatch({ type: actionTypes.REQUEST_SENT });

    getUsersPromise()
      .then((result) => {
        dispatch({
          type: actionTypes.USERS_RECEIVED,
          payload: result,
        });
      })
      .catch((error) => {
        dispatch({ type: actionTypes.ERROR });
      });
  };
};
