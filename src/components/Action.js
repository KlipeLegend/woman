import React from 'react'
import { Button, Flex, Inputs } from './All'

const Action = () => {
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
          <Inputs/>
          <Button />
        </div>
        <div className="to_ikki">
          <Flex />
        </div>
      </div>
    </div>
  )
}

export default Action