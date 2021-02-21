import React from 'react'
import "../../css/portfolio.css";
import Nav from "../Common/Nav";
import Works from "./Works";

function Portfolio(props) {


    const bannerRef = React.createRef(); 
    const navRef = React.createRef(); 
    
    let click = () => 
    {
        const banner = bannerRef.current; 
        const nav = navRef.current; 
        banner.classList.toggle('active'); 
        nav.classList.toggle('active');
    }
    return (
        <>
        <section className="banner_portfolio" id="sec" ref={bannerRef}>
        <header>
            <a href="#" className="logo">Portfolio</a>
            <div id="toggle" onClick={click}></div>
        </header>
        <Works />
        </section>
        <div id="navigation" ref={navRef}>
            <Nav />
        </div>
        </>
    )
}

export default Portfolio; 