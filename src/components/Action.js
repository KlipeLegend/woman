import React from 'react'
<<<<<<< HEAD
import { Button, Flex, Inputs } from './All'
=======
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Clear } from '../redux/action'
import { Flex } from './All'
>>>>>>> ac7563d7a92925c441ef2b4b5261d906dd767f0b

const Action = () => {
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
            <i>Card</i><img src="./img/next.svg" /><i>Information</i><img src="./img/next.svg" /><i>Shipping </i><img src="./img/next.svg" /><i>Payment</i><img src="./img/next.svg" />
          </div>
<<<<<<< HEAD
          <Inputs/>
          <Button />
=======
          <div className='button-one'>
            <button className='button-first' onClick={()=>path('/paint')}>Complete order</button>
            <button className='button-firstt'>Return to shiping</button>
          </div>
>>>>>>> ac7563d7a92925c441ef2b4b5261d906dd767f0b
        </div>
        <div className="to_ikki">
          <Flex />
        </div>
      </div>
    </div>
  )
}

export default Action