import React from "react";
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
  return <div>{<img src={svgMap[type]} alt="" />}</div>;
};

export default AnimalShow;