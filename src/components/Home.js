import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Add, Minus, Plus, Save, Show } from '../redux/action'
import { About, Mani, Watch } from './All'
const Home = () => {
    const path = useNavigate()
    const dispatch = useDispatch()
    const data = useSelector((state) => state.todoReducers.data)
    const local = useSelector((state) => state.todoReducers.local)
    const show = useSelector((state) => state.todoReducers.show)
    const [quick, setQuick] = useState(false)
    useEffect(() => {
        if (localStorage.getItem('data')) {
            dispatch(Save())
        } else {
            localStorage.setItem('data', JSON.stringify(local))
            dispatch(Save())
        }
    }, [])
    const Quick = (data) => {
        setQuick(true)
        dispatch(Show(data))
    }
    const Close = () => {
        setQuick(false)
    }
    const view = () => {
        path('/shop')
        haridFun()
    }
    const haridFun = () => {
        dispatch(Add())
    }
    const plusFun = () => {
        dispatch(Plus())
    }
    const minusFun = () => {
        dispatch(Minus())
    }
    return (
        <>
            <About />
            <Mani />
            <Watch />
            <div className="container">
                {
                    data.map((val) => (
                        <div className="card" key={val.id}>
                            <div className="rgba">
                                <h1>{val.nomi}</h1>
                                <p>{val.narxi}</p>
                                <button onClick={() => Quick(val)}>quick review</button>
                            </div>
                            <img src={val.img} alt="" />
                        </div>
                    ))
                }
            </div>
            <div className={quick ? "modal_oynam activ" : "modal_oynam"}>
                <div className="modalim">
                    <div className='modalim2'>
                        <div className="flex1">
                            <img src="./img/fish.png" alt="" />
                        </div>
                        <div className="flex2">
                            <h1>{show.nomi}</h1>
                            <hr />
                            <h4>{show.narxi}</h4>
                            <p>Lorem ipsum dolor sit amet consectetur aing elit. Iste excepturi illum assumenda magnam provident voluptatum earum, incidunt fugit quibusdam mollitia? Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, recusandae!</p>
                            <button className='view' onClick={view}>VIEW FULL DETAILS</button>
                            <button className='close' onClick={Close}>X</button>

                        </div>
                    </div>
                    <div className="flex3">
                        <div className="fl1">
                            <img src="./img/fish.png" alt="" />
                            <img src="./img/fish.png" alt="" />
                            <img src="./img/fish.png" alt="" />
                        </div>
                    </div>
                    <div className="flex2">
                        <p className='qty'>Qty</p>
                        <div className='none'>
                            <button className='pilus' onClick={minusFun}>-</button>
                            <button className='pilus1'>{show.count}</button>
                            <button className='pilus' onClick={plusFun}>+</button>
                            <div>
                                <div className='none'>
                                    <button className='pilus'>-</button>
                                    <button className='pilus1'>1</button>
                                    <button className='pilus'>+</button>
                                </div>
                                <div className="btnsd">
                                    <button onClick={haridFun}>ADD TO CARD</button>
                                    <button>BUY NOW</button>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}

export default Home