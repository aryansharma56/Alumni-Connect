import React, { useEffect, useState } from "react";
import { LoginAPI, GoogleSignInAPI } from "../api/AuthAPI";
import BMPSlogo from "../assets/bmpsLogo.jpg";
import GoogleButton from "react-google-button";
import { useNavigate } from "react-router-dom";
import "../Sass/LoginComponent.scss";
import { toast } from "react-toastify";
import ReactTextTransition from "react-text-transition";
export default function LoginComponent() {
  let navigate = useNavigate();
  const [credentails, setCredentials] = useState({});
  const [index, setIndex] = useState(0);
  const texts = [
    "Share your achievements",
    "Get a referal",
    "Connect with your seniors",
  ];
  useEffect(() => {
    let interval = setInterval(() => {
      setIndex((index + 1) % 3);
    }, [1000]);
  });
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
        <div className="transition">
          <h2>Join to</h2>

          <ReactTextTransition springConfig={{ tension: 300, friction: 10 }}>
            {texts[index]}
          </ReactTextTransition>
        </div>
      </div>
    </div>
  );
}
