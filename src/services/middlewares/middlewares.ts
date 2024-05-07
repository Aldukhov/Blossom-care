import { Middleware } from 'redux';
import { SUBMIT_FORM } from '../actions/submitForm';
import { FormDataType } from '../types';

const submitFormMiddleware: Middleware = (store) => (next) => (action) => {
  if (action.type === SUBMIT_FORM) {
    const formData: FormDataType = action.payload;
    fetch('/api/submitForm', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Form data submitted successfully:', data);
      })
      .catch((error) => {
        console.error('Error submitting form data:', error);
      });
  }
  return next(action);
};

export default submitFormMiddleware;
