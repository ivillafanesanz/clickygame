import React from "react";
import "./Header.css";

const Header = props => (
  <div className="header">
    <div className="title">Click and play!</div>
    <div className="score">
      Score: {props.score} Upscore: {props.upscore}
    </div>
  </div>
);

export default Header;
