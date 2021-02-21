import React, { useEffect } from 'react'
import "../../css/about.css";
import Links from "../Common/Links";
import Nav from "../Common/Nav";


function AboutMe(props) {

    const bannerRef = React.createRef(); 
    const navRef = React.createRef(); 
    let Click = () => {
      const banner = bannerRef.current;
      const nav = navRef.current; 
      banner.classList.toggle('active'); 
      nav.classList.toggle('active'); 
    }

    return (     
      <>
       <section className={`banner_about_me`} id="sec" ref={bannerRef}>
          <header>
            <a href="#" className="logo">MRD</a>
            <div id="toggle" onClick={Click}></div>
          </header>
          <div className="content_descr">
              <h2>Немного обо мне, зовут меня <span>Музафаров Роман</span></h2>
              <p>На данный момент прохожу обучение на 3 курсе в УрФу на специальности 'Бизнес-информатика'. На первом курсе всерьез заинтересовался программированием. Писал учебные проекты на C#: калькулятор для интегралов, телефонная книга, приложение для построение графиков и множество других. Некоторые из этих программ залиты на GitHub. В итоге я решил попробовать написать Back-end часть на ASP.net, получился интернет-магазин для покупки машин, но мне сильно не понравилась работа со средой ASP. На 2 курсе нас познакомили с JS. Мне настолько понравилась работа с анимациями на странице в браузере, что решил сам начать изучать React библиотеку. Я даже не представлял, что Front-end разработка связана не только с версткой, анимированием страницы, но и с отправкой запросов к API, правильным построением приложения (Flux-круговорот, принцип single responsibility и тд). Все это привело меня к изучению библиотеки Redux. Так же я использую такие библиотеки, как: 'redux-thunk', 'react-redux', 'axios', 'react-router-dom' и другие. На данный момент поставил цель трудоустроится React Front-end разработчиком, чтоб еще больше прокачиваться в данной сфере.</p>
          </div>
          <Links />
        </section>
        <div id="navigation" ref={navRef} className={``}>
          <Nav/>
        </div>
      </>
    )
}

export default AboutMe
