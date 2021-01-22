import React from "react";
import { SocialIcon } from "react-social-icons";

import Logo from "./Logo_white.png";

import "./ComingSoon.css";

const ComingSoon = () => {
  return (
    <div>
      <TopBar />
      <div className="App-content">
        <h1 style={{ fontSize: 112, fontFamily: "Georgia", color: "white" }}>
          Coming Soon
        </h1>
      </div>
      <IconBar />
    </div>
  );
};

//https://jaketrent.github.io/react-social-icons/

const IconBar = () => {
  return (
    <div className="Bottom-part">
      <p style={{ color: "white", padding: "40px" }}>
        Follow for more content:
      </p>
      <div className="Icon-bar">
        <a
          href="https://www.instagram.com/shannonbell.art/"
          style={{ padding: 10 }}
        >
          <SocialIcon network="instagram" bgColor="white" />
        </a>
        <a
          href="https://www.pinterest.com/shannonbellart/"
          style={{ padding: 10 }}
        >
          <SocialIcon network="pinterest" bgColor="white" />
        </a>
      </div>
    </div>
  );
};

const TopBar = () => {
  return (
    <div className="Top-bar">
      <img
        src={Logo}
        alt=""
        style={{
          width: "30%",
          height: "30%",
          padding: "20px"
        }}
      />
    </div>
  );
};

export default ComingSoon;
