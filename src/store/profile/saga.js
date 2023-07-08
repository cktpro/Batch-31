import profile from 'api/profileApi';
import { put, takeLeading } from "redux-saga/effects";

import * as actionTypes from "./actionTypes";
import { actionGetProfileSuccess, actionGetProfileFail } from "./action";

function* getMyProfile() {
  try {
    console.log("xxxccccc")
    const response = yield profile.getMyProfile();
    yield put(actionGetProfileSuccess(response));
  } catch (error) {
    yield put(actionGetProfileFail());
  }
}
export default function* ProfileSaga() {
  yield takeLeading(actionTypes.GET_MY_PROFILE, getMyProfile);
}
