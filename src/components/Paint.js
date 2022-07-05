import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Building, Button, Flex, Payme } from './All'
const Paint = () => {
    const [box1, setBox1] = useState(false)
    const [box, setBox] = useState(false)
    const Box1 = () => {
        setBox1(!box1)
    }
    const Box = () => {
        setBox(!box)
    }
    const path = useNavigate()
    return (
        <div>
            <div className="to_katta">
                <div className="to_bir">
                    <div className="im">
                        <img src="./img/logotip.svg" alt="" />
                        <h1>and T&M Production</h1>
                    </div>
                    <div className="strel">
                        <p><i>Card</i><img src="./img/next.svg" /><i>Information</i><img src="./img/next.svg" /><i>Shipping<img src="./img/next.svg" /></i>Payment<img src="./img/next.svg" /></p>
                    </div>
                    <div className="tabl">
                        <div>
                            <p>Contact</p>

                            <p>Ship To</p>
                        </div>
                        <div>
                            <p>Pshah@1gen.io</p>
                            <p>D-000 Hari Nagar</p>
                        </div>
                    </div>
                    <div className="tabl">
                        <div>

                            <p>Shiping Method</p>
                        </div>
                        <div>
                            <p>Free/Paid</p>
                        </div>
                    </div>




                    <div className='button-one'>
                        <button className='button-first' onClick={() => path('/contact')}>Complete order</button>
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

export default Paint