import React from 'react'
import './style.scss'
const SocialPlate = () => {

    return (
        <div className="social-plate-wrap">
            <div className="social-wrap">
                <div className="item">
                    <span className="icon"></span>
                    <p className='social-name'>Instagram</p>
                </div>
                <div className="item">
                    <span className="icon fb"></span>
                    <p className='social-name'>Facebook</p>
                </div>
                <div className="item">
                    <span className="icon twitter"></span>
                    <p className='social-name'>Twitter</p>
                </div>
                <div className="item">
                    <span className="icon dribble"></span>
                    <p className='social-name'>Dribble</p>
                </div>
            </div>
        </div>
    )
}

export default SocialPlate
