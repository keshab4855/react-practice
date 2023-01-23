import React from "react";

const ImageShow = ({ item }) => {
  return (
    <div>
      <img src={item.urls.small} alt="" />
    </div>
  );
};

export default ImageShow;
