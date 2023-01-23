import React from "react";
import ImageShow from "./ImageShow";
import "./ImageList.css";
const ImageList = ({ images }) => {
  const renderedImages = images.map((item) => {
    return <ImageShow item={item} key={item.id}></ImageShow>;
  });
  return <div className="image-list">{renderedImages}</div>;
};

export default ImageList;
