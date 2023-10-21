import React from 'react'
import './style.scss'
import SocialPlate from '../../SectionComman/SocialPlate/SocialPlate'
const Section2 = () => {
    return (
        <div className="section2-main-wrapper">
            <div className="section2-wrap">
                <div className="heading-wrapper">
                    <p className="subtitle"> WHO WE ARE</p>
                    <h2 className='heading'>We are a new digital product
                        development agency</h2>
                </div>
                <div className="down-arrow-wrap"></div>
                <div className="counter-wrap">
                    <div className="count-box">
                        <p className="count">95</p>
                        <span>Projects</span>
                    </div>
                    <div className="count-box">
                        <p className="count">25</p>
                        <span>Team</span>
                    </div>
                    <div className="count-box">
                        <p className="count">4+</p>
                        <span>Year’s</span>
                    </div>
                    <div className="count-box">
                        <p className="count">03</p>
                        <span>Office</span>
                    </div>
                </div>
            </div>
            <SocialPlate />
        </div>
    )
}

export default Section2
