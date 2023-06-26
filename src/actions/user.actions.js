import axios from "../helpers/axios";
import { userConstants } from "./constants";

export const searchUser = (search) => {
  return async (dispatch) => {
    dispatch({ type: userConstants.SEARCH_USER_REQUEST });
    const res = await axios.get(`/search/users?q=${search}&type=users`,
    {  headers: { 'Authorization': 'Bearer ' + process.env.REACT_APP_GITHUB_TOKEN } });
    if (res.status === 200) {
      dispatch({
        type: userConstants.SEARCH_USER_SUCCESS,
        payload: res.data,
      });
      return res.data
    } else {
      dispatch({
        type: userConstants.SEARCH_USER_FAILURE,
        payload: { error: res.data.message },
      });
    }
  };
};

export const userRepository = (user) => {
  return async (dispatch) => {
    dispatch({ type: userConstants.USER_REPOSITORY_REQUEST });
    const res = await axios.get(`/users/${user}/repos`,
    {  headers: { 'Authorization': 'Bearer ' + process.env.REACT_APP_GITHUB_TOKEN } });
    if (res.status === 200) {
      dispatch({
        type: userConstants.USER_REPOSITORY_SUCCESS,
        payload: res.data,
      });
      return res.data
    } else {
      dispatch({
        type: userConstants.USER_REPOSITORY_FAILURE,
        payload: { error: res.data.message },
      });
    }
  };
};