import React, { useState } from "react";
import "./AnimalShow.css";
import bird from "./svg/bird.svg";
import cat from "./svg/cat.svg";
import cow from "./svg/cow.svg";
import dog from "./svg/dog.svg";
import gator from "./svg/gator.svg";
import heart from "./svg/heart.svg";
import horse from "./svg/horse.svg";

console.log(bird);
const svgMap = { bird, cat, cow, dog, gator, heart, horse };

const AnimalShow = ({ type }) => {
  const [clicks, setClicks] = useState(0);

  const handleOnClick = () => {
    setClicks(clicks + 1);
  };
  return (
    <div onClick={handleOnClick}>
      {<img src={svgMap[type]} alt="" />}
      <img src={heart} style={{ width: 10 + 10 * clicks }} alt="" />
    </div>
  );
};

export default AnimalShow;
