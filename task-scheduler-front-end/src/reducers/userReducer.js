const SET_USER = "SET_USER";
const LOGOUT = "LOGOUT";
const SET_ERROR = "SET_ERROR";

const defaultState = {
  currentUser: {},
  isAuth: false,
  error: null,
};

export default function userReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        currentUser: action.payload,
        isAuth: true,
      };
    case LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        currentUser: {},
        isAuth: false,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
}

export const setUser = (user) => ({ type: SET_USER, payload: user });
export const logout = () => ({ type: LOGOUT });
export const setError = (error) => ({ type: SET_ERROR, payload: error });
