import React, { useEffect, useState } from "react";
import { LoginAPI, GoogleSignInAPI } from "../api/AuthAPI";
import BMPSlogo from "../assets/bmps-logo-png.png";
import GoogleButton from "react-google-button";
import { useNavigate } from "react-router-dom";
import "../Sass/LoginComponent.scss";
import { toast } from "react-toastify";
import LoginText from "./LoginText";
import EarthCanvas from "./Earth";
import { postUserData } from "../api/FirestoreAPI";
import { getUniqueID } from "../helpers/getUniqueId";
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
    toast.success("Signed In to Alumni Connect!");
    console.log('here i am');
    console.log("new user or not",response);
    if (response._tokenResponse.isNewUser) {
      postUserData({
        userID: getUniqueID(),
        name: response.user.displayName,
        email: response.user.email,
        imageLink:
        "https://cdn-icons-png.flaticon.com/512/149/149071.png?w=740&t=st=1687680076~exp=1687680676~hmac=f1119401b1c0b14a0a14b5d092ef4a0c226daf21a98e0c0fd0c38ac98cd7c839",
      })
    }
    localStorage.setItem('userEmail',response.user.email);
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
