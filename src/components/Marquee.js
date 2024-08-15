import React from 'react';
const Marquee = ({ text }) => {
  return (
    <div className="marquee">
      <div className="marquee-text">{text}</div>
    </div>
  );
};

export default Marquee;
