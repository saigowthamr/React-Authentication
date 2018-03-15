import { AUTH_SIGN, AUTH_SIGNOUT, GET_DATA, Auth_ERR } from "../actions/types";

const intialState = {
  auth: false,
  content: "",
  err: ""
};

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case AUTH_SIGN:
      return {
        ...state,
        auth: true // once users signs in we change auth to true
      };
    case AUTH_SIGNOUT:
      return {
        ...state,
        auth: false // once users signsout we change auth to false
      };
    case GET_DATA:
      return {
        ...state,
        content: action.content
      };
    case Auth_ERR:
      return {
        ...state,
        err: action.err  // if error occured we pass error to our react component
      };

    default:
      return state;
  }
};

export default reducer;
