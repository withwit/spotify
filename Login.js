import React from "react";
import "./Login.css";
import { loginUrl } from "./spotify";

function Login(props) {
  return (
    <div className="login">
      <div className="top_margin">{""}</div>
      <img
        className="login__logo"
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
        alt="logo"
      />
      <div className="bott_margin">{""}</div>
      <div className="bott_margin">{""}</div>
      <div className="bott_margin">{""}</div>
      <p>
        The Spotify Service and the Content are the property of Spotify or
        Spotify's licensors. We grant you limited, non-exclusive, revocable
        permission to make use of the Spotify Service, and limited,
        non-exclusive, revocable permission to make personal, non-commercial use
        of the Content (collectively, "Access").
      </p>
      <div className="bott_margin">{""}</div>
      <a href={loginUrl}>LOGIN TO SPOTIFY</a>
    </div>
  );
}

export default Login;
