import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './reducers/rootReducer';
import submitFormMiddleware from './middlewares/middlewares';
import thunk from 'redux-thunk';

//const middleware = [thunk, submitFormMiddleware]; // Создайте массив middleware

const store = createStore(rootReducer);

export default store;
