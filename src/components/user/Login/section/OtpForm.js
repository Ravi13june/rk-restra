import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendOtpToUser, verifyOtp } from "../../../../store/user/userAction";
import VerificationInput from "react-verification-input";

const OtpForm = (props) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.data);
  const otp = useSelector((state) => state.user.otp);
  const [values, setValues] = useState({
    buttonDisabled: true,
  });
  const [data, setData] = useState({
    verifyId: user?.response?.id,
    phoneNumber: user?.response?.recipient,
    code: "",
  });

  useEffect(() => {
    if (otp?.success) {
      props.setCurrentForm("updateUserForm");
    }
  }, [otp]);

  const onResendOtp = () => {
    dispatch(sendOtpToUser({ phoneNumber: user.response.recipient }));
    setValues({ ...values, currentForm: "otpForm" });
    setData({ ...data, code: "" });
  };

  const onSubmitOtp = () => {
    dispatch(verifyOtp(data));
  };

  const otpForm = () => {
    return (
      <>
        <h3 className="login-heading mb-4">
          <b>Enter OTP</b>
        </h3>
        <div className="text-center py-3">
          <h5 className="">OTP sent successfully.</h5>
          <a
            href={"#"}
            className="text-danger"
            onClick={(event) => {
              event.preventDefault();
              props.setCurrentForm("loginForm");
            }}
          >
            Change Number
          </a>
        </div>
        <form className>
          <div className="form-group text-center">
            <VerificationInput
              classNames="w-100"
              validChars={"0-9"}
              value={data.code}
              style={{ width: "100%" }}
              onChange={(value) => {
                setValues({
                  ...values,
                  buttonDisabled: value.length !== 6,
                });
                setData({
                  ...data,
                  code: value,
                });
              }}
            />
          </div>

          <button
            className="btn btn-lg btn-primary btn-block btn-login text-uppercase mb-2"
            disabled={values.buttonDisabled}
            onClick={(event) => {
              event.preventDefault();
              onSubmitOtp();
            }}
          >
            Submit
          </button>
          <div className="text-center py-2">
            Didn't receive OTP?{" "}
            <a
              href={""}
              className="text-danger"
              onClick={(event) => {
                event.preventDefault();
                onResendOtp();
              }}
            >
              Resend Now
            </a>
            <br />
            <button
              onClick={(event) => {
                event.preventDefault();
                props.setCurrentForm("updateUserForm");
              }}
            >
              pass
            </button>
          </div>
        </form>
      </>
    );
  };

  return otpForm();
};

export default OtpForm;
