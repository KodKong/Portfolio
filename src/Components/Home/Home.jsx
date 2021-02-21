import React from 'react'
import "../../css/home.css";
import Links from "../Common/Links";
import Nav from "../Common/Nav";
import { NavLink } from 'react-router-dom';

function Home(props) {

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
        <section class="banner" id="sec" ref={bannerRef}>
        <header>
            <a href="#" class="logo">MRD</a>
            <div id="toggle" onClick={click}></div>
        </header>
        <div class="content">
            <h2>Приветствую,<br/> Меня зовут <span>Роман</span></h2>
            <p> 
            Я Front-end разработчик. Это сайт-портфолио, куда будут выкладываться мои работы. Слева сверху вы можете открыть меню и ознакомиться с моими личными проектами. Данный сайт-портофолио полностью адаптивный
           <div>Мой стек технологий:</div>
            <ul>
                 <li>React</li>
                 <li>Js</li>
                 <li>HTML</li>
                 <li>CSS</li>
                 <li>SASS</li>
            </ul>
            </p>
            <NavLink to="/About">Обо мне</NavLink>
        </div>
        <Links/>
    </section>
    <div id="navigation" ref={navRef}>
        <Nav/>
    </div>
        </>
    )
}


export default Home