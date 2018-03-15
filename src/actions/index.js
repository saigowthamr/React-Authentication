import { AUTH_SIGN, AUTH_SIGNOUT, GET_DATA, Auth_ERR } from "./types";
import axios from "axios";

const HOST_URL = "http://localhost:3010";

//Signup action creator
export function signUp(pay) {
  return dispatch => {
    axios
      .post(`${HOST_URL}/signup`, pay)
      .then(res => {
        localStorage.setItem("token", res.data);
        return dispatch({ type: AUTH_SIGN });
      })
      .catch(err => {
        dispatch({
          type: Auth_ERR,
          err: "Email already Exists"
        });
        console.log(err);
      });
  };
}

//Signin action creator

export function signIn(pay) {
  return dispatch => {
    axios
      .post(`${HOST_URL}/signin`, pay)
      .then(res => {
        localStorage.setItem("token", res.data);
        dispatch({
          type: Auth_ERR,
          err: ""
        });
        return dispatch({ type: AUTH_SIGN });
      })
      .catch(err => {
        dispatch({
          type: Auth_ERR,
          err: "Please check Your email or Password"
        });
      });
  };
}

//get content by passing token in header

export function getContent() {
  return dispatch => {
    axios
      .get(HOST_URL, {
        headers: {
          authorization: localStorage.getItem("token")
        }
      })
      .then(res => {
        dispatch({ type: GET_DATA, content: res.data.Person });
      })
      .catch(err => console.log(err));
  };
}


//signout action creator
export function signOut(pay) {
  localStorage.clear();
  return {
    type: AUTH_SIGNOUT
  };
}
