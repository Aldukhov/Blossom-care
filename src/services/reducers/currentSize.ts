import { setcurrentSize } from "../actions/currentSize";

type Action = ReturnType<typeof setcurrentSize>;

interface State {
  number: number;
}

const initialState: State = {
    number: 0,
};

export const activeSizeReducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case 'SET_CURRENT_SIZE':
      return {
        ...state,
        number: action.payload,
      };
    default:
      return state;
  }
};
