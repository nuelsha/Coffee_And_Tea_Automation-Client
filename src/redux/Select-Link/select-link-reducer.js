import { selectLinkActions } from "./select-link-action-types";

const INITIAL_STATE = {
  selectedLink: "Purchase",
};

const selectLinkReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case selectLinkActions.SELECT_LINK:
      return {
        ...state,
        selectedLink: action.payload,
      };
    default:
      return state;
  }
};

export default selectLinkReducer;
