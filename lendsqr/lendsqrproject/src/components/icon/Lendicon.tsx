import React from 'react';
import './Lendicon.scss';  //Import the SCSS file
import union from './Union-icon.png';
import lendtext from './lendtext-icon.png'

const Lendicon: React.FC = () => {
  return (
    <div className="image-container">
        <img src={union} alt="icon" className="left-image" />
        <img src={lendtext} alt="lendtext" className="right-image" />
    </div>
  )
}

export default Lendicon;