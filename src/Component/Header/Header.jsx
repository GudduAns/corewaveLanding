import React from 'react'
import './style.scss'
import Logo from '../../assets/icons/speetrance-logo.png'
import { useState } from 'react'
import { useEffect } from 'react'
const Header = () => {
    const data = ['Home', 'About Us', 'Services', 'Career', 'Contact Us']
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        const onScroll = e => {
            setScroll(e.target.documentElement.scrollTop)
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);
    return (
        <nav className={`${scroll > 120 ? 'active' : ''} header-wrapper`}>
            <div className="header-wrap">
                <div className="logo-wrap">
                    <img src={Logo} alt="" />
                </div>
                <div className="navigation">
                    {data.map((val, key) => {
                        return (
                            <p className='nav-item' key={key}>{val}</p>
                        )
                    })}
                </div>
                <div className="humberger-wrap">
                    <span className="icons search-icon"></span>
                    <span className="icons burger-icon"></span>
                </div>
            </div>
        </nav>
    )
}

export default Header
