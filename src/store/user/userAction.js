import axios from "axios";
import * as actionTypes from "./userTypes";
import { API } from "../../config/index";

export function sendOtpToUser(phoneNumber) {
  return function (dispatch) {
    axios.post(`${API}otp`, phoneNumber).then(
      (response) => {
        const resData = response.data;
        dispatch({
          type: actionTypes.SEND_OTP,
          payload: resData,
        });
      },
      (error) => {
        console.log(error);
      }
    );
  };
}

export function verifyOtp(data) {
  return function (dispatch) {
    axios
      .post(
        `${API}opt-login`,
        {
          code: data.code,
        },
        {
          headers: {
            verifyid: data.verifyId,
            phonenumber: data.phoneNumber,
          },
        }
      )
      .then(
        (response) => {
          const resData = response.data;
          dispatch({
            type: actionTypes.VERIFY_OTP,
            payload: resData,
          });
        },
        (error) => {
          console.log(error);
        }
      );
  };
}

export function updateUserDetails(data) {
  return function (dispatch) {
    axios
      .post(
        `${API}user-details`,
        { data },
        {
          headers: {
            userid: data.userid,
          },
        }
      )
      .then(
        (response) => {
          const resData = response.data.data;
          dispatch({
            type: actionTypes.SEND_OTP,
            payload: resData,
          });
        },
        (error) => {
          console.log(error);
        }
      );
  };
}

export function login(data) {
  return function (dispatch) {
    /*axios.post(`${API}`, data).then(
        (response) => {
          // const resData = response.data;
          const resData = {
            success: true,
          };
          dispatch({
            type: actionTypes.SEND_OTP,
            payload: resData,
          });
        },
        (error) => {
          console.log(error);
        }
      );*/

    localStorage.setItem("userToken", JSON.stringify({ success: true }));
    //let token = localStorage.getItem("userToken");
    const resData = { success: true };
    dispatch({
      type: actionTypes.LOGOUT,
      payload: resData,
    });
  };
}

export function logout() {
  return function (dispatch) {
    /*axios.get(`${API}`).then(
      (response) => {
        // const resData = response.data;
        const resData = null;
        dispatch({
          type: actionTypes.LOGOUT,
          payload: resData,
        });
      },
      (error) => {
        console.log(error);
      }
    );*/
    window.location.href = "/";
    localStorage.removeItem("userToken");
    const resData = null;
    dispatch({
      type: actionTypes.LOGOUT,
      payload: resData,
    });
  };
}
