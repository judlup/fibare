import { SUCESSFUL_LOGIN, FAILURE_LOGIN, LOGOUT } from "./types";

export const successfulLogin = (data) => {
  return {
    type: SUCESSFUL_LOGIN,
    payload: data,
  };
};

export const failurefulLogin = () => {
  return {
    type: FAILURE_LOGIN,
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};
