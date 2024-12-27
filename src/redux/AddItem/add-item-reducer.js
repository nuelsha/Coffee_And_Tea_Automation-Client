import OrderForm from "../../components/Order-Form/OrderForm";
import { addItemActionTypes } from "./add-item-action-types";

const INITIAl_STATE = {
  isOpen: false,
  displayOrderForm: false,
  item: null,
};

const addItemReducer = (state = INITIAl_STATE, action) => {
  switch (action.type) {
    case addItemActionTypes.SHOW_COMPONENT:
      return {
        ...state,
        isOpen: !state.isOpen,
        item: action.payload,
      };
    case addItemActionTypes.SHOW_ORDER_FORM:
      return {
        ...state,
        displayOrderForm: !state.displayOrderForm,
        item: action.payload,
      };
    default:
      return state;
  }
};

export default addItemReducer;
