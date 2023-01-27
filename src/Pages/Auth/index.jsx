import React, { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const AuthPage = () => {
  const [isSignIn, setisSignIn] = useState(true);
  return (
    <>
      {isSignIn ? (
        <SignIn setisSignIn={setisSignIn} />
      ) : (
        <SignUp setisSignIn={setisSignIn} />
      )}
    </>
  );
};

export default AuthPage;
