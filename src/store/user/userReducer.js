import * as actionTypes from "./userTypes";

const initialState = {
  user: null,
  data: {},
  otp: {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SEND_OTP:
      return {
        ...state,
        data: action.payload,
      };
    case actionTypes.VERIFY_OTP:
      return {
        ...state,
        otp: action.payload,
      };

    case actionTypes.LOGIN:
      return {
        ...state,
        user: action.payload,
      };

    case actionTypes.LOGOUT:
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
