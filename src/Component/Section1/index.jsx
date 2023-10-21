import React from 'react'
import './style.scss'
import RedElemImg from '../../assets/icons/1_3.svg'
import Donout from '../../assets/icons/donout.png'
import Pipe from '../../assets/icons/pipe.png'
import MySlider from './Slider/Slider'
import SocialPlate from '../../SectionComman/SocialPlate/SocialPlate'
const index = () => {
    return (
        <div className="section1-wrapper">
            <div className="section1-wrap">
                <div className="hero-text-wrap">
                    <h1 className="title">Mobile App Development and Software Development Company</h1>
                    <div className="description">Get access to best in class App and Software Development Services with the digital experts of Corewave.</div>
                </div>
                <div className="redElem-wrap">
                    <img src={RedElemImg} alt="" />
                </div>
                <div className="btn-wrap">
                    <button>Let’s Start</button>
                </div>
                <div className="add-slider">
                    <MySlider />
                </div>
                <div className="donut-wrap">
                    <img src={Donout} alt="" />
                </div>
                <div className="pipe-wrap">
                    <img src={Pipe} alt="" />
                </div>
            </div>
            <SocialPlate />
        </div>
    )
}

export default index
