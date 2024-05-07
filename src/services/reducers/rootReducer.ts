import { combineReducers } from 'redux';
import { activeLinkReducer } from './activeLink';
import { formReducer } from './submitForm';

export const rootReducer = combineReducers({
    activeLink: activeLinkReducer,
    form: formReducer
})
