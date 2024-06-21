import React from 'react';
import '../../components/card/card.css';
import {arrow} from '../../images';
const Card = ({ title, description, imgSrc, arrowSrc }) => {
  return (
    <>
      <div className='ap-card card p-0 md:w-3/12 w-full z-10 relative'>
        <div className='ap-card-wrp card-inner'>
          <div className='box'>
            <div className='imgBox'>
              <img src={imgSrc} alt={title} />
            </div>
            <div className='icon'>
              <a href="#" className='iconBox'>
                <img src={arrow} alt="arrow" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
