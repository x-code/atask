import { userConstants } from "../actions/constants";

const initState = {
  loading: false,
  error: null,
  users: [],
  repositories: [],
};

export default (state = initState, action) => {
  switch (action.type) {
    case userConstants.SEARCH_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case userConstants.SEARCH_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload.users,
      };
    case userConstants.SEARCH_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case userConstants.USER_REPOSITORY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case userConstants.USER_REPOSITORY_SUCCESS:
      return {
        ...state,
        repositories: action.payload.repositories,
        loading: false,
      }
    case userConstants.USER_REPOSITORY_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      }
    default: 
      return state;
  }
};
