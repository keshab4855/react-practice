import React from "react";

const ProfileCard = (props) => {
  return (
    <div>
      <div>Title is {props.title}</div>
      <div>Handle is {props.handle}</div>
    </div>
  );
};

export default ProfileCard;
