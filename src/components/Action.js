import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Clear } from '../redux/action'
import { Flex } from './All'

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
            <p><i>Card</i><img src="./img/next.svg" /><i>Information</i><img src="./img/next.svg" /><i>Shipping<img src="./img/next.svg" /></i>Payment<img src="./img/next.svg" /></p>
          </div>
          <div className='button-one'>
            <button className='button-first' onClick={()=>path('/paint')}>Complete order</button>
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

export default Action