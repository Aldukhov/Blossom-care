import { setActiveGray } from "../actions/activeGray";

type Action = ReturnType<typeof setActiveGray>;

interface State {
  active: boolean;
}

const initialState: State = {
    active: false,
};

export const activeGrayReducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case 'SET_ACTIVE_GRAY':
      return {
        ...state,
        active: action.payload,
      };
    default:
      return state;
  }
};
