import React, { useState } from 'react'
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
  return (
    <div>
    <div className="to_katta">
        <div className="to_bir">
            <div className="im">
                <img src="./img/logotip.svg" alt="" />
                <h1>and T&M Production</h1>
            </div>
            <div className="strel">
            <i>Card</i><img src="./img/next.svg" /><i>Information</i><img src="./img/next.svg" /><i>Shipping </i><img src="./img/next.svg" /><i>Payment</i><img src="./img/next.svg" />
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
           
         
          
            <Button />
        </div>
        <div className="to_ikki">
            <Flex />
        </div>
    </div>
</div>
  )
}

export default Paint