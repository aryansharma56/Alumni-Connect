import React, { useEffect, useState } from "react";
import { LoginAPI, GoogleSignInAPI } from "../api/AuthAPI";
import BMPSlogo from "../assets/bmps-logo-png.png";
import GoogleButton from "react-google-button";
import { useNavigate } from "react-router-dom";
import "../Sass/LoginComponent.scss";
import { toast } from "react-toastify";
import LoginText from "./LoginText";
import EarthCanvas from "./Earth";
export default function LoginComponent() {
  let navigate = useNavigate();
  const [credentails, setCredentials] = useState({});

  const login = async () => {
    try {
      let res = await LoginAPI(credentails.email, credentails.password);
      toast.success("Signed In to Linkedin!");
      localStorage.setItem("userEmail", res.user.email);
      navigate("/home");
    } catch (err) {
      console.log(err);
      toast.error("Please Check your Credentials");
    }
  };
  const googleSignIn = async () => {
    let response = await GoogleSignInAPI();
    toast.success("Signed In to Linkedin!");

    await navigate("/home");
  };

  return (
    <div className="login-wrapper">
      <img src={BMPSlogo} className="bmpsLogo" />
      <div className="google-btn-container">
        <GoogleButton className="google-btn" onClick={googleSignIn} />
      </div>
      <div className="info">
        <div style={{height:"50vh"}}>
        <EarthCanvas />
        </div>
        <div className="transition">
          <h2 class>Join to</h2>
          <LoginText />
        </div>
      </div>
    </div>
  );
}
