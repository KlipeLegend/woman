import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { useNavigate } from 'react-router-dom'
import { Add, Clear, Del, Minus, Mminus, Mplus, Open, Plus } from '../redux/action'

export const All = () => {
  const [like, setLike] = useState(false)
  const Like = () => {
    setLike(!like)
  }
  const dispatch = useDispatch()
  const path = useNavigate()
  const sendFun = () => {
    path('/action')
  }
  const plusFun = () => {
    dispatch(Plus())
  }
  const minusFun = () => {
    dispatch(Minus())
  }
  const show = useSelector((state) => state.todoReducers.show) || {}
  let a = JSON.parse(localStorage.getItem('harid')) || {}
  return (
    <>
      {show.hasOwnProperty('count') ? <div className="Happy">
        <div className="">
          <img src={show.img} />
        </div>
        <div className="">

          <div className={like ? "likes activ" : "likes"}>
            <h3>
              Your favourite think <br /> was liked
            </h3>
          </div>


          <div className="">
            <h1 className='happy_coral'>Happy coral reef</h1>
            <p className='happy_coral'>{show.nomi}</p>
            <p className="cent">₹ {show.narxi}</p>
            <br />
            <p className='capta'>Abstract Painting, Watercolor Art And Mixed <br /> Media Original Fine Art On Canvas.</p>
            <br />
            <p className='size'>Size: “30 x 30"</p>
            <br />
            <div className="hert">
              <h5>Details:</h5><p className='tex'>MATERIALS (Mixed media on canvas. Ready to hang).</p>
            </div>
            <br />
            <div className="hert">
              <h5>Inspiration:</h5><p className='tex'>Healthy coral reefs found in a cave during a dive in <br /> Nilaveli, in Trinco, Srilanka, prompted me to paint this.</p>
            </div>
            <p>Not framed</p>
            <br />
            <h4>Qty:</h4>
            <br />
            <div className="count">
              <button className="minus" onClick={minusFun}>-</button>
              <button className="zero">{show.count}</button>
              <button className="plus" onClick={plusFun}>+</button>
            </div>
            <div className="trup">
              <button className='add' onClick={() => dispatch(Add(show))}>Add to cart</button>
              <button className='hard' onClick={Like}><img src="./img/hard.png" alt="" /></button>
            </div>

            <div className="priloj">
              <a href=""><img src="./img/tel.png" alt="" /></a>
              <a href=""><img src="./img/sms.png" alt="" /></a>
              <a href=""><img src="./img/insta.png" alt="" /></a>
              <a href=""><img src="./img/face.png" alt="" /></a>
            </div>
            <button className='but' onClick={sendFun}>Buy now</button>
          </div>
        </div>
      </div> : <h1>Toplimadi</h1>
      }
    </>
  )
}
export const Adress = () => {
  return (
    <>
      <div className="">
        <div className="lop">
          < div><img src="./img/coral.png" alt="" /></div>
          <h2 className='and'>and T&M Production</h2>
        </div>
        <div className="debyut">
          <a className='next' href=""><p>Card  <img src="./img/next.png" alt="" /></p></a>
          <a className='next' href=""><p>Information <img src="./img/next.png" alt="" /></p></a>
          <a className='next' href=""><p>Shiping  <img src="./img/next.png" alt="" /></p></a>
          <a className='next' href=""><p>Payment <img src="./img/next.png" alt="" /></p></a>
        </div>
      </div>
    </>
  )
}


export const About = () => {
  return (
    <>
      <div className='about-first'>
        <div className='about-second'>
          <h1>Uma's Paintings</h1>
          <p>Check out our lead protagonist Umas paintings here. <br />
            If you love them, get a hand painted one from her</p>
        </div>
      </div>
    </>
  )
}
export const Mani = () => {
  return (
    <>

      <div className='mani-second'> <hr />
        <h1>50% of the money generated will rehabilitation. This is our pledge.</h1>
      </div>
      <hr />
    </>
  )
}
export const Watch = () => {
  return (
    <>
      <div className='watch-first'>
        <div className='watch-second'>
          <h1>ABOUT UMA MANI</h1>
          <p>A filmmaker's journey with Uma, a certified scuba diver, <br /> exploring the underwater world and the threat to coral.
            <br />
            A homemaker from Tamil Nadu, who, through her paint, <br /> has been trying to draw public attention to the devastat <br /> effects of climate change on marine life and the coasta <br /> communities.
            It is, in fact, her love for corals that inspire <br /> Uma to learn how to swim, dive and paint in her 50s</p>
          <div className='btn'>
            <button>Watch Video</button>
          </div>
        </div>
        <div className='watch-img'>
          <img src="./img/watch.png" alt="" />
        </div>
      </div>
    </>
  )
}
export const Building = () => {
  return (
    <div className='adress'>
      <h2>Billing address</h2>
      <p>Lorem ipsum dolor sit amet consectetur ipsum dolor.</p>
    </div>
  )
}
export const Button = () => {
  const dispatch = useDispatch()
  return (
    <div className='button-one'>
      <button className='button-first'>Complete order</button>
      <button className='button-first' onClick={() => dispatch(Clear())}>Complete order</button>
      <button className='button-firstt'>Return to shiping</button>
    </div>
  )
}



export const Modal22 = () => {
  const dispatch = useDispatch()
  const add = useSelector((state) => state.todoReducers.add)
  return (
    <>
      <div className="plusCards">
        {
          add.map((val) => (
            <div className='hammasi' key={val.id} onClick={() => dispatch(Open(val))}>
              <div className="flex22">
                <div className="fl11">
                  <img src={val.img} alt="" />
                </div>
              </div>
              <div className='qty111'>
                <h1>{val.nomi}</h1>
                <h2>Narxi : {val.narxi * val.count}</h2>
                <p className='qty'>Qty</p>
                <div className='none'>
                  <button className='pilus' onClick={() => dispatch(Mminus(val))}>-</button>
                  <button className='pilus1'>{val.count}</button>
                  <button className='pilus' onClick={() => dispatch(Mplus(val))}>+</button>
                </div>
                <div className="btnsd">
                  <button onClick={() => dispatch(Del(val))}>Delete</button>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </>
  )
}
export const Flex = () => {
  const add = useSelector((state) => state.todoReducers.add)
  const [umumiy, setUmumiy] = useState(null)
  let a = add.reduce((a, b) => a + b.count * b.narxi, 0)

  return (
    <>
      <div className="flexing" style={{ position: 'relative' }}>
        <img src="./img/plants.png" alt="" />
        <button className='absol'>{add.length}</button>
        <p>Height 30 Inches x Width 30 <br />
          inches / Comes without  frame / Hand Painted By Artist</p>
      </div>
      <div className="amount">
        <div>
          <h1>Total Amount: {a}</h1>
        </div>
        <div>
        </div>
      </div>
    </>
  )
}
export const Payme = () => {
  const [box, setBox] = useState(false)
  const [box1, setBox1] = useState(false)
  const Box = () => {
    setBox(!box)
  }
  const Box1 = () => {
    setBox1(!box1)
  }
  return (
    <>
      <div className="paaaay">
        <div className="pay">
          <div className="pay_logo">
            <img src="./img/pay.png" alt="" />
          </div>
          <div className="pay_item">
            <img src="./img/visa.png" alt="" />
            <img src="./img/red.jpg" alt="" />
            <img src="./img/blue.png" alt="" />
            <img src="./img/amex.png" alt="" />
            <p>and more...</p>
          </div>
        </div>
        <div className="credit">
          <img src="./img/credit.png" alt="" />

          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores dolores aspernatur dolorem qui harum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, nesciunt.</p>
        </div>
        <div className="pay1">
          <div className="pay_logo">
            <button onClick={Box} className={box ? "box_button activ" : "box_button"}></button>
            <h5>Razorpy ( Cards, UPI, NetBanking)</h5>
          </div>
          <div className="pay_item">
            <img src="./img/visa.png" alt="" />
            <img src="./img/red.jpg" alt="" />
            <img src="./img/blue.png" alt="" />
            <img src="./img/amex.png" alt="" />
          </div>
        </div>
        <div className="pay1">
          <div className="pay_logo">
            <button onClick={Box1} className={box1 ? "box_button activ" : "box_button"}></button>
            <h5>Cash on delivery ( COD )</h5>
          </div>

        </div>
      </div>


    </>
  )
}

export const Inputs = () => {
  return (
    <>
      <div className="int_div">
        <div className='int1'>
          <h1>Contact information</h1>
          <input type="Email" placeholder='Email' />
          <p>Keep me up to date on news and exlusive offers</p>
        </div>
        <div>
          <h1>Shipping address</h1>
        </div>
        <form className='int2'>
          <input type="text" placeholder='First Name' />
          <input type="text" placeholder='Last Name' />
        </form>
        <input type="text" placeholder='Company(optional)' />
        <input type="text" placeholder='Address' />
        <input type="text" placeholder='Appartment, suite, etc, (optional)' />
        <input type="text" placeholder='City' />
        <form >
          <input type="text" placeholder='Country/Region' />
          <input type="text" placeholder='State' />
          <input type="password" placeholder='PIN code' />
        </form>

        <input type="number" placeholder='Phone' />

      </div>

    </>
  )
}
