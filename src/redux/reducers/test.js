import { testType } from "../constants/test";

const initState = {
  test: 'test-value',
};

const test = (state = initState, action) => {
  switch (action.type) {
    case testType.SET_INITIALS:
      return {
        ...state,
        test: action.value,
      };
    default:
      return state;
  }
};

export default test;
