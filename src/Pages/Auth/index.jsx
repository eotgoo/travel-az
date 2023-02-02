import React, { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const AuthPage = ({ login }) => {
  const [isSignIn, setisSignIn] = useState(true);
  return (
    <>
      {isSignIn ? (
        <SignIn setisSignIn={setisSignIn} login={login} />
      ) : (
        <SignUp setisSignIn={setisSignIn} />
      )}
    </>
  );
};

export default AuthPage;
