import React from 'react'
import '../styles/newAirdrop.scss'
import zksyncimg from '/assets/a.png'
const NewAirdrop = () => {
  return (
    <div className='container-new-airdrop'>
      <div className="info">
        <h1>Newest Airdrop</h1>
      </div>
      <div className="new-airdrop">
        <div className="card">
          <img src={zksyncimg} alt="" />
          <span>zksynx</span>
        </div>
        <div className="card">
          <img src={zksyncimg} alt="" />
          <span>zksynx</span>
        </div>
        <div className="card">
          <img src={zksyncimg} alt="" />
          <span>zksynx</span>
        </div>
        <div className="card">
          <img src={zksyncimg} alt="" />
          <span>zksynx</span>
        </div>
        <div className="card">
          <img src={zksyncimg} alt="" />
          <span>zksynx</span>
        </div>
      </div>
        <div className="second-container">
      <div className="info">
        <h1>Hottest Airdrop</h1>
      </div>
      <div className="new-airdrop hottest">
        <div className="card">
          <img src={zksyncimg} alt="" />
          <span>zksynx</span>
        </div>
        <div className="card">
          <img src={zksyncimg} alt="" />
          <span>zksynx</span>
        </div>
        <div className="card">
          <img src={zksyncimg} alt="" />
          <span>zksynx</span>
        </div>
        <div className="card">
          <img src={zksyncimg} alt="" />
          <span>zksynx</span>
        </div>
        <div className="card">
          <img src={zksyncimg} alt="" />
          <span>zksynx</span>
        </div>

      </div>
      </div>
    </div>
  )
}

export default NewAirdrop