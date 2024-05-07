import { SUBMIT_FORM } from "../actions/submitForm";
import { FormDataType } from "../types";

const initialState: FormDataType = {
  name: '',
  email: '',
  phone: '',
  message: '',
};

export const formReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SUBMIT_FORM:
      // обработка отправки данных формы
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

