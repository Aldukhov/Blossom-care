import { RootStateOrAny } from 'react-redux';
import store from './store';

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export interface FormDataType {
    name: string;
    email: string;
    phone: string;
    message: string;
  }