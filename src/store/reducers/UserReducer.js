import { actionTypes } from "../actions/UserActions";

// const initialState = {
//   users: [
//     {
//       id: "1",
//       userName: "First User",
//       fullName: "First User",
//       email: "user@gmail.com",
//       website: "http://userwebsite.com",
//       companyDetails: {
//         companyName: "Private Company",
//         founded: "2020",
//       },
//     },
//     {
//       id: "2",
//       userName: "Second User",
//       fullName: "Second User",
//       email: "user@gmail.com",
//       website: "http://userwebsite.com",
//       companyDetails: {
//         companyName: "Private Company",
//         founded: "2019",
//       },
//     },
//     {
//       id: "3",
//       userName: "Third User",
//       fullName: "Third User",
//       email: "user@gmail.com",
//       website: "http://userwebsite.com",
//       companyDetails: {
//         companyName: "Private Company",
//         founded: "2019",
//       },
//     },
//     {
//       id: "4",
//       userName: "Fourth User",
//       fullName: "Fourth User",
//       email: "user@gmail.com",
//       website: "http://userwebsite.com",
//       companyDetails: {
//         companyName: "Private Company",
//         founded: "2021",
//       },
//     },
//   ],
// };

const initialState = {
  isLoading: false,
  users: [],
  error: false,
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.REQUEST_SENT:
      return {
        ...state,
        isLoading: true,
      };

    case actionTypes.USERS_RECEIVED:
      return {
        ...state,
        isLoading: false,
        users: action.payload,
      };

    case actionTypes.ERROR:
      return {
        ...state,
        isLoading: false,
        error: true,
      };

    default:
      return state;
  }
};

export default UserReducer;
