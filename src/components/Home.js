import React from 'react'
import { useState } from 'react'

const Home = () => {
    const [quick, setQuick] = useState(false)
    const Quick = () => {
        setQuick(!quick)
    }
    const [data, setData] = useState([
        {
            id: 0,
            img: "./img/fish.png"
        },
        {
            id: 1,
            img: "./img/fish.png"
        },
        {
            id: 2,
            img: "./img/fish.png"
        },
        {
            id: 3,
            img: "./img/fish.png"
        },
        {
            id: 4,
            img: "./img/fish.png"
        },
        {
            id: 5,
            img: "./img/fish.png"
        },
        {
            id: 6,
            img: "./img/fish.png"
        },
        {
            id: 7,
            img: "./img/fish.png"
        }


    ])
    return (
        <div>
            <div className="container">

                {
                    data.map((val) => (

                        <div className="card" key={val.id}>
                            <div className="rgba">
                                <h1>Happy coral reef <br />/Acrylic no canvas/ <br /> </h1>
                                <p>₹ 5,000</p>
                                <button onClick={Quick}>quick review</button>
                            </div>
                            <img src={val.img} alt="" />
                        </div>
                    ))
                }
            </div>
            <div className={quick ? "modal_oynam activ" : "modal_oynam"}>
                <div className="modalim">
                    <div className="flex1">
                        <img src="./img/fish.png" alt="" />
                        <div className="fl1">
                            <img src="./img/fish.png" alt="" />
                            <img src="./img/fish.png" alt="" />
                            <img src="./img/fish.png" alt="" />
                        </div>
                    </div>
                    <div className="flex2">
                        <h1>Purple plate corals</h1>
                        <hr />
                        <p>Lorem ipsum dolor sit amet consectetur aing elit. Iste excepturi illum assumenda magnam provident voluptatum earum, incidunt fugit quibusdam mollitia? Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, recusandae!</p>
                        <button className='view'>VIEW FULL DETAILS</button>
                        <p className='qty'>Qty</p>
                        <div className='none'>
                            <button className='pilus'>-</button>
                            <button className='pilus1'>1</button>
                            <button className='pilus'>+</button>
                        </div>
                        <div className="btnsd">
                            <button>ADD TO CARD</button>
                            <button>BUY NOW</button>
                        </div>

                        <button className='close' onClick={Quick}>X</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home