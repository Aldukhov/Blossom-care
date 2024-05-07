import { FormDataType } from "../types"; // определите тип данных формы

export const SUBMIT_FORM = 'SUBMIT_FORM';

export const submitForm = (formData: FormDataType) => ({
  type: SUBMIT_FORM,
  payload: formData,
});