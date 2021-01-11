import { SIGNED_IN } from "../Actions/types";

const loggedReducer = (state = false, action) => {
  switch (action.type) {
    case SIGNED_IN:
      return !state;
    default:
      return state;
  }
};

export default loggedReducer;
