import * as actionTypes from './actionTypes';

export const actionSavingProfile = (payload) => ({
  type: actionTypes.SAVING_MY_PROFILE,
  payload,
});
export const actionGetMyProfile = () => ({
  type: actionTypes.GET_MY_PROFILE,
});

export const  actionGetProfileSuccess = (payload) => ({
  type: actionTypes.GET_MY_PROFILE_SUCCESS,
  payload,
});

export const actionGetProfileFail = (payload) => ({
  type: actionTypes.GET_MY_PROFILE_FAILED,
  payload,
});
