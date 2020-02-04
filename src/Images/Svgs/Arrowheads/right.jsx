import React from 'react';

export default ({ color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="60px"
    height="80px"
    viewBox="0 0 50 80"
    className="arrow"
  >
    <polyline
      fill="none"
      stroke={color || '#222'}
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      points="
      0.375,0.375 45.63,38.087 0.375,75.8 "
    />
  </svg>
);
// xmlns:xlink="http://www.w3.org/1999/xlink"
// xml:space="preserve"
