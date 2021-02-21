import React, {useState} from 'react'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";



// Функция отрисовка для работ со слайдером
function Work(props) {

    const [current, setCurrent] = useState(0); 
    const length = props.arr.length; 

    const nextSlide = () => 
    {
        setCurrent(current === length - 1 ? 0 : current + 1); 
    }

    const prevSlide = () =>
    {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }
    console.log(current);

    if (!Array.isArray(props.arr) ||  props.arr.length <= 0)
    {
        return null; 
    }
    return (
        <div className="work">
                <h2>{props.name}</h2>
                <div className="slider">
                    <div className="img-slider">
                        <FaArrowAltCircleLeft className="arrow-left" onClick={prevSlide}/>
                        <FaArrowAltCircleRight className="arrow-right" onClick={nextSlide}/>
                       {props.arr.map((item, index) => {
                           return (
                           <div className={index === current ? 'slide active' : 'slide'} key={index}>
                            {
                                index === current && (<img src={item.image} className="image"></img>)
                            }
                           </div>
                           )
                       })}
                    </div>
                    <div className="description">
                        {
                            props.description
                        }
                    </div>
                </div>
            </div>
    )
}




// Функция для отрисовки всех работ
function Works(props) {

    const w = [{ id: 1, 
    name: "Bizon", 
    images: [
         {
             image: "../img/b1.png"
         }, 
        {
            image: "../img/бизон1.png"
        }, 
        {
            image: "../img/бизон2.png"
        }, 
        {
            image: "./img/бизон3.png"
        }, 
        {
            image: "./img/бизон4.png"
        }, 
        {
            image: "./img/бизон5.png"
        }, 
        {
         image: "./img/бизон6.png"
         }
    ], 
    description: "Оружейный интернет магазин, реализованы слайдеры, фильтрация товаров по различным параметрам, таким как: цена, производитель, тип оружия. Так же можно открыть страницу любого товара (данная функция реализована через params). Использованные библиотеки: React, Redux, Redux-thunk, React-redux, React-router-dom"
},
{ id:2, 
    name: "Cybernet", 
    images: [
         {
             image: "./img/cb0.png"
         }, 
        {
            image: "./img/cb1.png"
        }, 
        {
            image: "./img/cb2.png"
        }, 
        {
            image: "./img/cb4.png"
        },
        {
         image: "./img/cb5.png"
        }, 
        {
             image: "./img/cb6.png"
        }
    ],
    description: "Социальная сеть в сеттинге киберпанка. Реализована отправка сообщений, постов через flux-круговорот. Сделана пагинация пользователей, можно зайти на любую страницу пользователя. Использованные библиотеки: React, Redux, Redux-thunk, React-redux, React-router-dom"
}]; 



    return (
        <section className="works">
            {
            w.map((item) => <Work arr={item.images} key={item.id} description={item.description} name={item.name}/>)
            }
        </section>
    )
}

export default Works
