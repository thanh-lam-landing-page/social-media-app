// @ts-nocheck
import React from "react";
import GoogleLogin from "react-google-login";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import shareVideo from "../assets/share.mp4";
import logo from "../assets/logowhite.png";
import { client } from "../client";

const Login = () => {
  const navigate = useNavigate();
  const responseGoogle = (response) => {
    if (response.profileObj) {
      localStorage.setItem("user", JSON.stringify(response.profileObj));
      const { name, googleId, imageUrl } = response.profileObj;

      const doc = {
        _id: googleId,
        _type: "user",
        userName: name,
        image: imageUrl,
      };

      client.createIfNotExists(doc).then(() => navigate("/", { replace: true }));
    }
  };

  return (
    <div className="flex justify-start items-center flex-col h-screen">
      <div className="relative w-full h-full">
        <video src={shareVideo} className="w-full h-full object-cover" loop controls={false} muted autoPlay />

        <div className="absolute flex flex-col justify-center items-center inset-0 bg-blackOverlay">
          <div className="p-5">
            <img src={logo} width="130px" alt="logo" />
          </div>

          <div className="shadow-2xl">
            <GoogleLogin
              clientId={import.meta.env.VITE_GOOGLE_API_TOKEN}
              render={(renderProps) => (
                <button
                  type="button"
                  className="bg-mainColor flex justify-center items-center px-5 py-3 rounded-lg cursor-pointer outline-none hover:bg-gray-300 transition duration-150 ease-in-out"
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}>
                  <FcGoogle className="mr-4" />
                  Sign in with Google
                </button>
              )}
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy="single_host_origin"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
