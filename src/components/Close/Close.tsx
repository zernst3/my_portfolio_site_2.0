import React from "react";
import "./Close.css";
import { useNavigate } from 'react-router-dom';
import woosh from "../../sounds/woosh2.mp3"

export const Close: React.FC<any> = ({ link = "/" }) => {
  const navigate = useNavigate();
  const wooshAudio = new Audio(
    woosh
  );

  wooshAudio.volume = 0.15;

  const onClick = () => {
    wooshAudio.play();
    navigate(link)
  }
  return (
    <div id="Close">
      <button className="close" onClick={onClick}>
        <p>Back</p>
      </button>
    </div>
  );
};
