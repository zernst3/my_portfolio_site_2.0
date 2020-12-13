import React from "react";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { Link } from "react-router-dom";
import "./Close.css";

export const Close: React.FC<any> = ({ link = "/" }) => {
  return (
    <div id="Close">
      <Link className="close" to={link}>
        <p>Back</p>
        {/* <HighlightOffIcon
          style={{ fontSize: "3rem", color: "rgb(240, 240, 240)" }}
        /> */}
      </Link>
    </div>
  );
};
