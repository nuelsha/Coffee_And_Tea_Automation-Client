import { addItemActionTypes } from "./add-item-action-types";

export const setOpen = (item) => {
  return {
    type: addItemActionTypes.SHOW_COMPONENT,
    payload: item,
  };
};
