import { selectLinkActions } from "./select-link-action-types";

export const setSelectedLink = (link) => {
  return {
    type: selectLinkActions.SELECT_LINK,
    payload: link,
  };
};
