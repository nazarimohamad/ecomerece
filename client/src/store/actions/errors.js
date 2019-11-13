import { ADD_ERROR, REMOVE_ERROR } from '../actionTypes';


export const addError = (message) => ({
  type: ADD_ERROR,
  message
});

export const removeError = () => ({
  type: REMOVE_ERROR
})