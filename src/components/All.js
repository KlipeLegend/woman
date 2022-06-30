import React from 'react'
export const All = () => {
  return (
    <div>
        <div className="Happy">
        <div className="">
            <img src="./img/aqua.png" alt="" />
        </div>
        <div className="">
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



