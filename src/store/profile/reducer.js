import * as actionTypes from "./actionTypes";
const defaultState = {
  isLoading: false,
  profile: {},
};
const profileReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.SAVING_MY_PROFILE:
      return { ...state, profie: action.payload };

    case actionTypes.GET_MY_PROFILE:
      return { ...state, isLoading: true };

    case actionTypes.GET_MY_PROFILE_SUCCESS:
      
      return { ...state, profile: action.payload, isLoading: false };

    case actionTypes.GET_MY_PROFILE_FAILED:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};
export default profileReducer;
