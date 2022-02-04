import React from "react";

const Card = ({ name }) => {
  return (
    <div className='slider-logo'>
        <img src={name}/>
    </div>
  );
};

export default Card;