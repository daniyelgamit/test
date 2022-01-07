import { testType } from "../constants/test";

export const setInitial = (value) => {
  return (dispatch) => {
    dispatch({type: testType.SET_INITIALS, value})
  };
};