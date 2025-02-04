import { addItemActionTypes } from "./add-item-action-types";

export const setOpen = (item, order) => {
  return {
    type:
      order === true
        ? addItemActionTypes.SHOW_ORDER_FORM
        : addItemActionTypes.SHOW_COMPONENT,
    payload: item,
  };
};
