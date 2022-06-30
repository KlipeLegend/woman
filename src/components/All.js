<<<<<<< HEAD
import React from 'react'
=======
import React, { useState } from 'react'

>>>>>>> fd19f7d046e56ef14c24f9bd1945016e0462ce2c
export const All = () => {
  return (
    <div>
      <div className="Happy">
        <div className="">
          <img src="./img/aqua.png" alt="" />
        </div>
        <div className="">
<<<<<<< HEAD
            <div className="">
                <h1 className='happy_coral'>Happy coral reef</h1>
                <br />
                <p className='canvas'>Acrylic on canvas</p>
                <p className="cent">₹ 5,000</p>
                <p className='capta'>Abstract Painting, Watercolor Art And Mixed <br /> Media Original Fine Art On Canvas.</p>
                <p className='size'>Size:     “30 x 30"</p>
                <br />
                <div className="hert">
                <h5>Details:</h5><p className='tex'>MATERIALS (Mixed media on canvas. Ready to hang).</p>
                </div>
                <br />
                <div className="hert">
                <h5>Inspiration:</h5><p className='tex'>Healthy coral reefs found in a cave during a dive in <br /> Nilaveli, in Trinco, Srilanka, prompted me to paint this.</p>
                </div>
                <br />
                <p>Not framed</p>
                <br />
                <h4>Qty:</h4>
                <br />
                <div className="count">
                    <button className="minus">-</button>
                    <button className="zero">0</button>
                    <button className="plus">+</button>
                </div>
                <div className="trup">
                    <button className='add'>Add to cart</button>
                    <button className='hard'><img src="./img/hard.png" alt="" /></button>
                </div>
                <div className="priloj">
                    <a href=""><img src="./img/tel.png" alt="" /></a>
                    <a href=""><img src="./img/sms.png" alt="" /></a>
                    <a href=""><img src="./img/insta.png" alt="" /></a>
                    <a href=""><img src="./img/face.png" alt="" /></a>
                </div>
                <button className='but'>Buy now</button>
=======
          <div className="">
            <h1 className='happy_coral'>Happy coral reef</h1>
            <p className='canvas'>Acrylic on canvas</p>
            <p className="cent">₹ 5,000</p>
            <p className='capta'>Abstract Painting, Watercolor Art And Mixed <br /> Media Original Fine Art On Canvas.</p>
            <p className='size'>Size:     “30 x 30"</p>
            <div className="hert">
              <h5>Details:</h5><p className='tex'>MATERIALS (Mixed media on canvas. Ready to hang).</p>
>>>>>>> fd19f7d046e56ef14c24f9bd1945016e0462ce2c
            </div>
            <div className="hert">
              <h5>Inspiration:</h5><p className='tex'>Healthy coral reefs found in a cave during a dive in <br /> Nilaveli, in Trinco, Srilanka, prompted me to paint this.</p>
            </div>
            <p>Not framed</p>
            <h4>Qty:</h4>
            <div className="count">
              <button className="minus">-</button>
              <button className="zero">0</button>
              <button className="plus">+</button>
            </div>
            <div className="trup">
              <button className='add'>Add to cart</button>
              <button className='hard'><img src="./img/hard.png" alt="" /></button>
            </div>
            <div className="priloj">
              <a href=""><img src="./img/tel.png" alt="" /></a>
              <a href=""><img src="./img/sms.png" alt="" /></a>
              <a href=""><img src="./img/insta.png" alt="" /></a>
              <a href=""><img src="./img/face.png" alt="" /></a>
            </div>
            <button className='but'>Buy now</button>
          </div>
        </div>
      </div>
    </div>
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
        <br />
        <br />
        <div className="">
          <h2 className='hash2'>Contact information</h2>
          <br />
          <input type="text" className='company' placeholder='Email' />
          <div className="box">
          <input className='box2' type="checkbox" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, facilis.</p>
          </div>
        </div>
        <div className="inputs">
          <h2 className='hash2'>Shipping address</h2>
          <br />
          <div className="names">
            <input type="text" className='first' placeholder='First name' />
            <input type="text" className='last' placeholder='Last name'/>
          </div>
          <br />
          <div>
            <input type="text" className="company" placeholder='Company (optional)' />
          </div>
          <br />
          <div className="">
            <input type="text" className='company' placeholder='Address' />
          </div>
          <br />
          <div className="">
            <input type="text" className='company' placeholder='Apartmen,suite,etc,(optional)' />
          </div>
          <br />
          <div className="">
            <input type="text" className='company' placeholder='City' />
          </div>
          <br />
        <div className="names">
        <div>
          <form>
             <select className="selec" name="cars" >
               <option value="volvo">Country/Region India</option>
               <option value="saab">Saab 95</option>
               <option value="mercedes">Mercedes SLK</option>
             </select>
            </form>
          </div>
          <div>
          <form>
             <select className="selec" name="cars" >
               <option value="volvo">State</option>
               <option value="saab">State</option>
               <option value="mercedes">Mercedes SLK</option>
             </select>
            </form>
          </div>
          <div>
          <form>
             <input className='selec' type="password" placeholder='PIN kod' />
            </form>
          </div>
        </div>
        <br />
          <div>
            <input type="text" className="company" placeholder='Phone (optional)' />
          </div>
          <div className="teo">
            <button className='but1'>continue to shiping </button>
            <button className='but1'>Return to cart</button>
          </div>
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
      <div className='main-all'>
        <div className='mani-first'>
          <div className='mani-second'>
            <h1>50% of the money generated will be spent on coral rehabilitation. This is our pledge.</h1>
          </div>
          <div className='mani-first1'></div>
        </div>
      </div>
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

export const Building = () =>{
  return(
      <div className='adress'>
          <h2>Billing address</h2>
          <p>Lorem ipsum dolor sit amet consectetur ipsum dolor.</p>
      </div>
  )
}
export const Button = () =>{
  return(
    <div className='button-one'>
        <div className='button-twoo'>
            <button className='button-first'>Complete order</button>
        </div>
        <div className='button-two'>
            <button className='button-firstt'>Return to shiping</button>
        </div>
    </div>
  )
}



export const Modal22 = () =>{
  return(
    <div className='hammasi'>
                    <div className="flex22">
                        <div className="fl11">
                            <img src="./img/fish.png" alt="" />
                        </div>
                    </div>
                    <div className='qty111'>
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
                        </div>

      </div>
  )
}

export const Flex = () => {
  return (
    <>
      <div className="flexing">
        <img src="./img/plants.png" alt="" />
        <p>Height 30 Inches x Width 30 <br />
          inches / Comes without  frame / Hand Painted By Artist</p>
        <h3>$5,000</h3>
      </div>
      <div className="total">
        <div>
          <p>Subtotal</p>

          <p>Shiping Charge</p>
        </div>
        <div>
          <p>$5,000</p>
          <p>$180,54</p>
        </div>
      </div>
      <div className="amount">
        <div>
          <h1>Total Amount</h1>
        </div>
        <div>
          <h1>$5,180,54</h1 >
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

