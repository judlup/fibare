import { INCREMENT, DECREMENT, SIGNED_IN } from "./types";

export const increment = (number) => {
  return {
    type: INCREMENT,
    payload: number,
  };
};

export const decrement = () => {
  return {
    type: DECREMENT,
  };
};

export const signedIn = () => {
  return {
    type: SIGNED_IN,
  };
};
