import React from 'react'
import {All} from './All'
import {Adress} from './All'
const Contact = () => {
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
                        <p><i>Card</i><img src="./img/next.svg" /><i>Information</i><img src="./img/next.svg" /><i>Shipping<img src="./img/next.svg" /></i>Payment<img src="./img/next.svg" /></p>
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
                </div>
                <div className="to_ikki"></div>
            </div>
        </div>
    )
}

export default Contact