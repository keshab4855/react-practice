import React from "react";

const ProfileCard = ({ title, handle, image }) => {
  return (
    <div className="card ">
      <div className="card-image">
        <figure class="image is-4by3">
          <img className="card-image" src={image} alt="" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media-content">
          <p className="title is-4">{title}</p>
          <p className="subtitle is-6">{handle}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
