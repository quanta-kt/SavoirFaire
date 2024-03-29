import React, { useEffect, useRef, useState } from "react";
import { FaUserAstronaut } from "react-icons/fa";
import {
  signInWithPhoneNumber,
  getAuth,
  RecaptchaVerifier,
} from "firebase/auth";
import { useCurrentUser, useFirebase } from "../service/firebase";
import Button from "../components/Button";
import { useNavigate } from "react-router";

const Login = () => {
  const app = useFirebase();
  const auth = getAuth(app);

  const [isLoading, setIsLoading] = useState(false);

  const [confirmationResult, setConfirmationResult] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigate("/app/listing");
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  function requestOtp(phone) {
    setIsLoading(true);

    const recaptchaVerifier = new RecaptchaVerifier(auth, "login-button", {
      size: "invisible",
    });

    signInWithPhoneNumber(auth, "+91" + phone, recaptchaVerifier)
      .then((confirmationResult) => {
        setConfirmationResult(confirmationResult);
      })
      .catch((error) => {})
      .finally(() => {
        setIsLoading(false);
      });
  }

  function confirmOtp(otp) {
    if (!confirmationResult) return;

    setIsLoading(true);

    confirmationResult
      .confirm(otp)
      .then((result) => {})
      .catch((err) => {})
      .finally(() => setIsLoading(false));
  }

  return (
    <div className="w-full">
      <div
        className="my-[10%] mx-auto max-w[30%] md:min-w-[30%] w-fit flex flex-col justify-center item-center items-center
        h-fit md:px-5 md:py-5 px-1 py-2 gap-5 rounded-xl border-2 z-30"
      >
        <label className="flex justify-center text-center w-full font-semibold text-[2rem] gap-2 ">
          <FaUserAstronaut className="self-center " />
          Login
        </label>

        {isLoading && (
          <span className="loading loading-spinner loading-lg"></span>
        )}

        {!confirmationResult && <PhoneInputFragment onSubmit={requestOtp} />}
        {confirmationResult && <OtpFragment onSubmit={confirmOtp} />}
      </div>
    </div>
  );
};

function PhoneInputFragment({ onSubmit }) {
  const [phone, setPhone] = useState("");

  return (
    <>
      <div className="w-full px-2 self-center">
        <div className="label">
          <span className="label-text font-semibold">Phone number</span>
        </div>

        <input
          type="tel"
          value={phone}
          placeholder="Phone number"
          className="input input-bordered w-full md:input-md sm:input-sm"
          onChange={(e) => {
            const input = e.target.value;
            if (input.match(/^\d*$/)) {
              setPhone(e.target.value);
            }
          }}
        />
      </div>

      <div className="self-center flex-col items-center w-full px-2">
        <Button id="login-button" onClick={() => onSubmit(phone)}>
          Send OTP
        </Button>
      </div>
    </>
  );
}

function OtpFragment({ onSubmit }) {
  const [otp, setOtp] = useState("");

  return (
    <>
      <div className="w-full px-2 self-center">
        <input
          value={otp}
          placeholder="Enter OTP"
          className="input input-bordered w-full md:input-md sm:input-sm"
          onChange={(e) => {
            const input = e.target.value;
            if (input.match(/^\d*$/)) {
              setOtp(e.target.value);
            }
          }}
        />
      </div>

      <div className="self-center flex-col items-center w-full px-2">
        <Button id="login-button" onClick={() => onSubmit(otp)}>
          Login
        </Button>
      </div>
    </>
  );
}

export default Login;
