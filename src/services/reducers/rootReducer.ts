import { combineReducers } from 'redux';
import { activeLinkReducer } from './activeLink';
import { formReducer } from './submitForm';
import { activeGrayReducer } from './activeGray';
import { activeSizeReducer } from './currentSize';

export const rootReducer = combineReducers({
    activeLink: activeLinkReducer,
    form: formReducer,
    activeGray: activeGrayReducer,
    size:activeSizeReducer
})
