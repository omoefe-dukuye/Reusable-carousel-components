import React from 'react';
import imagesArray from '../Images/GridImages';

const Grid = () => {
  const [pic1, pic2, pic3, pic4] = imagesArray;
  return (
    <div className="grid">
      <img className="grid-image" src={pic1} alt="" />
      <img className="grid-image" src={pic2} alt="" />
      <img className="grid-image" src={pic3} alt="" />
      <img className="grid-image" src={pic4} alt="" />
    </div>
  );
};

export default Grid;
