import React, { useState } from 'react';
import zksyncAirdropImage from '/assets/zksync-airdrop.png';
import img from '/assets/2.png'
import { FaAngleLeft,FaAngleRight } from "react-icons/fa6";

const images = [zksyncAirdropImage]

import '../styles/sliderHome.scss'
const SliderHome = () => {

   
  return (
    <div>
      <div className='container-airdrop-slider'>
        <div className="airdrop-slider">
        <div className="slider-icon">
        <div className="icon">
        <FaAngleLeft />
        <FaAngleRight />
        </div>
        </div>
          <div className="first">
            <img src={images} alt="zksync airdrop" className='slide'/>
            <div className="info">
              <h2>Zksync</h2>
            </div>
          </div>
          <div className="second">
          <img src={images} alt="zksync" className='slide' />
          </div>
          <div className="third">
          <img src={images} alt="zksync airdrop" className='slide'/>
          </div>

        </div>
      </div>
    </div>

  );
};

export default SliderHome;