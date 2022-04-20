const user = JSON.parse(localStorage.getItem("user"));

const defaultState = {
  login: null,
  password: null,
  isAuthorized: false,
  isAdmin: false,
};

export const SIGN_IN = "SIGN_IN";
export const SIGN_OUT = "SIGN_OUT";

export default function userReducer(
  state = { ...defaultState, ...user },
  action
) {
  switch (action.type) {
    case SIGN_IN:
      localStorage.setItem("user", JSON.stringify(action.payload));
      return { ...state, ...action.payload };
    case SIGN_OUT:
      localStorage.clear();
      return defaultState;
    default:
      return state;
  }
}

export const signIn = (payload) => ({ type: SIGN_IN, payload });
export const signOut = () => ({ type: SIGN_OUT });
