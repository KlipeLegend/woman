import React, { useState } from 'react'
import {All} from './All'
import {Adress} from './All'
import { useDispatch } from 'react-redux'
import { Clear } from '../redux/action'
import { Building, Button, Flex, Payme } from './All'

const Contact = () => {
    const [box1, setBox1] = useState(false)
    const [box, setBox] = useState(false)
    const Box1 = () => {
        setBox1(!box1)
    }
    const Box = () => {
        setBox(!box)
    }
    const dispatch = useDispatch()
    return (
        <div>
            <All/>
            <Adress/>
            <div className="to_katta">
                <div className="to_bir">
                    <div className="im">
                        <img src="./img/logotip.svg" alt="" />
                        <h2 className='and'>and T&M Production</h2>
                    </div>
                    <div className="strel">
                    <i>Card</i><img src="./img/next.svg" /><i>Information</i><img src="./img/next.svg" /><i>Shipping </i><img src="./img/next.svg" /><i>Payment</i><img src="./img/next.svg" />
                    </div>
                    <div className="tabl">
                        <div>
                            <p>Contact</p>

                            <p>Ship To</p>
                            <p>Shiping Method</p>
                        </div>
                        <div>
                            <p>Pshah@1gen.io</p>
                            <p>D-000 Hari Nagar</p>
                            <p>Free/Paid</p>
                        </div>
                    </div>
                    <h1 className='paymet'>Payment</h1>
                    <p className='paymet1'>All transactions are secure and encrypted</p>
                    <div className="qr">
                        <img src="./img/qr.png" alt="" />
                        <h1>SCAN & PAY</h1>
                        <h2>₹ 5,180.54</h2>

                    </div>
                    <Payme />
                    <Building />
                    <div className="pay11">
                        <div className="pay_logo1">
                            <button onClick={Box1} className={box1 ? "box_button activ" : "box_button"}></button>
                            <h5>Same as shipping address</h5>
                        </div>
                        <div className="pay_logo1">
                            <button onClick={Box} className={box ? "box_button activ" : "box_button"}></button>
                            <h5>Use a different building address</h5>
                        </div>
                    </div>
                    <div className='button-one'>
                        <button className='button-first' onClick={() => dispatch(Clear())}>Complete order</button>
                        <button className='button-firstt'>Return to shiping</button>
                    </div>
                </div>
                <div className="to_ikki">
                    <Flex />
                </div>
            </div>
        </div>
    )
}

export default Contact