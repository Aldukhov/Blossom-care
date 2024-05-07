import { setActiveLink } from "../actions/activeLink";

type Action = ReturnType<typeof setActiveLink>;

interface State {
  activeLink: string;
}

const initialState: State = {
  activeLink: '/',
};

export const activeLinkReducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case 'SET_ACTIVE_LINK':
      return {
        ...state,
        activeLink: action.payload,
      };
    default:
      return state;
  }
};
