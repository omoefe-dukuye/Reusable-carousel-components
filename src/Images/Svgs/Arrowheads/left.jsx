import React from 'react';

export default ({ color }) => (
  <svg width="60px" height="80px" viewBox="0 0 50 80" className="arrow">
    <polyline
      fill="none"
      stroke={color || '#222'}
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      points="
	45.63,75.8 0.375,38.087 45.63,0.375 "
    />
  </svg>
);
// xml:space="preserve"
