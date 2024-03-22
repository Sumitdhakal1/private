import React from 'react'
import '../styles/footer.scss'
import { FaTelegramPlane, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const Footer = () => {
  return (
    <div className='container-footer'>
        <div className="footer">
            <div className="about">
                 <span>AirdropHub</span>
                 <p>Your trusted platform for cryptocurrency airdrops.While we aim to list only legitimate projects, we do not endorse or guarantee the success of any airdrop.Please conduct your own research and exercise caution.Stay safe by following our guide to avoid scams and protect your privacy.</p>
                 <div className="icons">
                 <FaXTwitter className='icon twitter'/>
                 <FaTelegramPlane className='icon telegram'/>
                 <FaYoutube className='icon youtube'/>
                 </div>
            </div>
             <div className="contact">
                <button>Contact Us</button>
             </div>
        </div>
    </div>
  )
}

export default Footer